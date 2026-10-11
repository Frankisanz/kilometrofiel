"use client";

import { useId, useState, type FormEvent } from "react";
import {
  calculateItvSchedule,
  ITV_FREQUENCY_SUMMARY,
  ITV_VEHICLE_LABELS,
  parseIsoDate,
  type ItvSchedule,
  type ItvVehicleType,
} from "@/lib/itv-schedule";

const dateFormatter = new Intl.DateTimeFormat("es-ES", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function formatInterval(months: number | null) {
  if (months === null) return "Exento de ITV periódica por antigüedad";
  if (months === 6) return "Cada 6 meses";
  if (months === 12) return "Cada año";
  return "Cada 2 años";
}

function todayUtc() {
  const now = new Date();
  return new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
}

export function ItvCalculator() {
  const formId = useId();
  const [type, setType] = useState<ItvVehicleType | "">("");
  const [registration, setRegistration] = useState("");
  const [lastInspection, setLastInspection] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ItvSchedule | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const today = todayUtc();
    const registrationDate = parseIsoDate(registration);
    const lastDate = lastInspection ? parseIsoDate(lastInspection) : null;

    if (!type || !registrationDate) {
      setError("Indica el tipo de vehículo y una fecha de matriculación válida.");
      setResult(null);
      return;
    }
    if (registrationDate > today) {
      setError("La fecha de matriculación no puede ser posterior a hoy.");
      setResult(null);
      return;
    }
    if (lastInspection && (!lastDate || lastDate < registrationDate || lastDate > today)) {
      setError(
        "La fecha de la última ITV debe ser posterior a la matriculación y no futura.",
      );
      setResult(null);
      return;
    }

    setError("");
    setResult(
      calculateItvSchedule({
        type,
        registration: registrationDate,
        lastInspection: lastDate,
        today,
      }),
    );
  }

  function reset() {
    setType("");
    setRegistration("");
    setLastInspection("");
    setError("");
    setResult(null);
  }

  const overdue = result ? result.daysUntilDue < 0 : false;
  const soon = result ? !overdue && result.daysUntilDue <= 30 : false;

  return (
    <section
      aria-labelledby={`${formId}-title`}
      className="interactive-tool itv-calculator"
    >
      <header className="interactive-tool__header">
        <p className="interactive-tool__eyebrow">Fecha orientativa</p>
        <h2 id={`${formId}-title`}>¿Cuándo me toca pasar la ITV?</h2>
        <p>
          Calcula la próxima inspección según la periodicidad del Real Decreto
          920/2017. La fecha oficial es la que figura en tu tarjeta ITV y en la
          pegatina del parabrisas.
        </p>
      </header>

      <form className="tool-form" onSubmit={handleSubmit} noValidate>
        <div className="tool-form__grid">
          <label className="tool-field" htmlFor={`${formId}-type`}>
            <span>Tipo de vehículo</span>
            <select
              id={`${formId}-type`}
              onChange={(event) => setType(event.target.value as ItvVehicleType)}
              required
              value={type}
            >
              <option value="">Selecciona una opción</option>
              {(Object.keys(ITV_VEHICLE_LABELS) as ItvVehicleType[]).map((key) => (
                <option key={key} value={key}>
                  {ITV_VEHICLE_LABELS[key]}
                </option>
              ))}
            </select>
          </label>

          <label className="tool-field" htmlFor={`${formId}-registration`}>
            <span>Fecha de primera matriculación</span>
            <input
              id={`${formId}-registration`}
              onChange={(event) => setRegistration(event.target.value)}
              required
              type="date"
              value={registration}
            />
          </label>

          <label className="tool-field" htmlFor={`${formId}-last`}>
            <span>Fecha de la última ITV favorable (opcional)</span>
            <input
              id={`${formId}-last`}
              onChange={(event) => setLastInspection(event.target.value)}
              type="date"
              value={lastInspection}
            />
          </label>
        </div>

        <div className="tool-form__actions">
          <button className="tool-button tool-button--primary" type="submit">
            Calcular fecha
          </button>
          <button
            className="tool-button tool-button--secondary"
            onClick={reset}
            type="button"
          >
            Borrar datos
          </button>
        </div>
        {error ? (
          <p className="tool-disclaimer" role="alert">
            {error}
          </p>
        ) : null}
      </form>

      {result && type ? (
        <section
          aria-live="polite"
          className={`tool-result ${
            overdue ? "tool-result--danger" : soon ? "tool-result--warning" : "tool-result--neutral"
          }`}
        >
          <p className="tool-result__label">
            {overdue ? "Posiblemente caducada" : soon ? "Te toca pronto" : "Próxima ITV estimada"}
          </p>
          <h3>{dateFormatter.format(result.nextDue)}</h3>
          <ul style={{ marginTop: "0.75rem" }}>
            <li>
              <strong>Antigüedad:</strong> {result.ageYears}{" "}
              {result.ageYears === 1 ? "año" : "años"}.
            </li>
            <li>
              <strong>Periodicidad actual:</strong>{" "}
              {formatInterval(result.currentIntervalMonths)}.
            </li>
            {overdue ? null : (
              <li>
                <strong>Puedes adelantarla sin perder la fecha desde:</strong>{" "}
                {dateFormatter.format(result.earliestWithoutLosingDate)}.
              </li>
            )}
            <li>
              {overdue
                ? `Han pasado ${Math.abs(result.daysUntilDue)} días desde el vencimiento estimado. Pide cita cuanto antes y circula solo lo imprescindible.`
                : `Faltan ${result.daysUntilDue} días.`}
            </li>
          </ul>
          <p className="tool-disclaimer">
            {result.basis === "registration"
              ? "Cálculo teórico desde la matriculación, suponiendo que cada inspección se pasó en su fecha. Si alguna se pasó con retraso, añade la fecha de la última ITV para afinar."
              : "Si pasaste la última ITV en los 30 días previos a su vencimiento, la fecha se cuenta desde ese vencimiento y no desde el día de la inspección."}{" "}
            Regla aplicada: {ITV_FREQUENCY_SUMMARY[type]}. Los vehículos
            históricos, de alquiler, taxis, autoescuelas y otros usos especiales
            tienen periodicidades distintas.
          </p>
        </section>
      ) : null}
    </section>
  );
}
