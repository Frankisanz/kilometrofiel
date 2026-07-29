"use client";

import { useId, useState, type FormEvent } from "react";

type FuelType =
  | ""
  | "petrol"
  | "diesel"
  | "hybrid"
  | "plug-in-hybrid"
  | "electric"
  | "lpg";

type UseType =
  | ""
  | "urban"
  | "mixed"
  | "road"
  | "occasional"
  | "demanding";

type LastService = "" | "under-6" | "6-12" | "12-24" | "over-24" | "unknown";
type PriorityLevel = "high" | "next" | "watch";

type MaintenanceItem = {
  level: PriorityLevel;
  title: string;
  reason: string;
};

const priorityLabels: Record<PriorityLevel, string> = {
  high: "Confirmar ahora",
  next: "Próxima revisión",
  watch: "Vigilar y registrar",
};

function createPlan({
  age,
  mileage,
  annualMileage,
  fuel,
  use,
  lastService,
}: {
  age: number;
  mileage: number;
  annualMileage: number;
  fuel: FuelType;
  use: UseType;
  lastService: LastService;
}) {
  const items: MaintenanceItem[] = [];

  function add(item: MaintenanceItem) {
    if (!items.some((candidate) => candidate.title === item.title)) {
      items.push(item);
    }
  }

  if (lastService === "over-24" || lastService === "unknown") {
    add({
      level: "high",
      title: "Reconstruir el historial de mantenimiento",
      reason:
        "Han pasado más de dos años o no se conoce la última revisión. Comprueba facturas, libro y plan del fabricante antes de asumir que una operación está al día.",
    });
  } else if (lastService === "12-24") {
    add({
      level: "high",
      title: "Contrastar ya los límites de tiempo y kilometraje",
      reason:
        "Muchas operaciones tienen un límite temporal además del kilometraje. Consulta el intervalo específico de esta versión y motor.",
    });
  } else {
    add({
      level: "next",
      title: "Anotar la próxima revisión por fecha y kilómetros",
      reason:
        "Conserva ambos límites y aplica el que se cumpla primero según el manual y el plan de mantenimiento.",
    });
  }

  if (fuel === "petrol" || fuel === "diesel" || fuel === "lpg") {
    add({
      level: lastService === "under-6" ? "watch" : "next",
      title: "Aceite y filtros según la especificación exacta",
      reason:
        "Viscosidad, homologación e intervalo dependen del motor y de su uso. No basta con elegir por combustible o antigüedad.",
    });
  }

  if (fuel === "hybrid" || fuel === "plug-in-hybrid") {
    add({
      level: "next",
      title: "Revisión del motor térmico y del sistema híbrido",
      reason:
        "El motor conserva sus operaciones de aceite, filtros y refrigeración. El sistema de alta tensión debe revisarlo personal cualificado.",
    });
  }

  if (fuel === "electric") {
    add({
      level: "next",
      title: "Refrigeración, frenos y sistema de alta tensión",
      reason:
        "Un eléctrico no usa aceite de motor, pero mantiene operaciones propias. Comprueba el programa exacto y no intervengas en componentes de alta tensión.",
    });
  }

  if (age >= 4) {
    add({
      level: "next",
      title: "Neumáticos, frenos, fluidos y batería de 12 V",
      reason:
        "La edad afecta al caucho, los fluidos y la batería aunque el coche recorra pocos kilómetros. Revisa estado y fecha, no solo dibujo o tensión puntual.",
    });
  }

  if (age >= 8 || mileage >= 120_000) {
    add({
      level: "high",
      title: "Distribución y elementos dependientes de versión",
      reason:
        "Confirma si el motor lleva correa, cadena u otro sistema y cuál es su intervalo real. No programes una sustitución usando una cifra genérica de internet.",
    });
    add({
      level: "next",
      title: "Suspensión, soportes, manguitos y posibles fugas",
      reason:
        "Kilómetros y envejecimiento pueden deteriorar goma, uniones y amortiguación. Conviene inspeccionar antes de sustituir piezas por rutina.",
    });
  }

  if (mileage >= 100_000) {
    add({
      level: "next",
      title: "Transmisión y líquidos con procedimiento específico",
      reason:
        "Tipo de caja, fluido, nivel y método de servicio cambian entre versiones. Consulta la documentación y el historial antes de intervenir.",
    });
  }

  if (use === "urban") {
    add({
      level: "next",
      title: "Frenos, batería y mantenimiento de uso severo",
      reason:
        "Los trayectos cortos y las paradas frecuentes aumentan ciclos de arranque, frenadas y tiempo con el motor frío. Comprueba si el fabricante define un plan severo.",
    });

    if (fuel === "diesel") {
      add({
        level: "watch",
        title: "Registrar avisos y comportamiento del filtro de partículas",
        reason:
          "El uso urbano puede dificultar regeneraciones. No fuerces una regeneración ni circules de una forma concreta sin seguir el manual o un diagnóstico.",
      });
    }
  }

  if (use === "demanding") {
    add({
      level: "high",
      title: "Aplicar el programa para uso exigente",
      reason:
        "Remolque, carga, polvo o montaña pueden acortar intervalos y elevar el esfuerzo de frenos, refrigeración y transmisión.",
    });
  }

  if (use === "occasional") {
    add({
      level: "watch",
      title: "Controlar deterioro por tiempo e inactividad",
      reason:
        "Pocos kilómetros no detienen el envejecimiento de batería, neumáticos, líquidos, juntas y frenos. Registra fechas aunque el odómetro avance poco.",
    });
  }

  if (annualMileage >= 25_000) {
    add({
      level: "high",
      title: "Planificar por kilómetros, no solo por calendario",
      reason:
        "Con este ritmo puedes alcanzar antes el límite kilométrico. Anota el kilometraje objetivo y revísalo cada mes.",
    });
  } else if (annualMileage <= 5_000) {
    add({
      level: "watch",
      title: "Planificar también por tiempo",
      reason:
        "Con poco kilometraje, algunos límites temporales llegan antes. El kilometraje bajo no permite aplazar automáticamente todas las operaciones.",
    });
  }

  add({
    level: "watch",
    title: "Crear un registro verificable",
    reason:
      "Guarda fecha, kilómetros, especificaciones, facturas y observaciones. Un historial claro evita repetir trabajos y ayuda a detectar cambios.",
  });

  const order: Record<PriorityLevel, number> = { high: 0, next: 1, watch: 2 };
  return items.sort((a, b) => order[a.level] - order[b.level]);
}

export function MaintenancePlanner() {
  const formId = useId();
  const [age, setAge] = useState("");
  const [mileage, setMileage] = useState("");
  const [annualMileage, setAnnualMileage] = useState("");
  const [fuel, setFuel] = useState<FuelType>("");
  const [use, setUse] = useState<UseType>("");
  const [lastService, setLastService] = useState<LastService>("");
  const [plan, setPlan] = useState<MaintenanceItem[] | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPlan(
      createPlan({
        age: Number(age),
        mileage: Number(mileage),
        annualMileage: Number(annualMileage),
        fuel,
        use,
        lastService,
      }),
    );
  }

  function reset() {
    setAge("");
    setMileage("");
    setAnnualMileage("");
    setFuel("");
    setUse("");
    setLastService("");
    setPlan(null);
  }

  return (
    <section
      aria-labelledby={`${formId}-title`}
      className="interactive-tool maintenance-planner"
    >
      <header className="interactive-tool__header">
        <p className="interactive-tool__eyebrow">Plan orientativo</p>
        <h2 id={`${formId}-title`}>Ordena el mantenimiento pendiente</h2>
        <p>
          Obtén una lista de comprobaciones por prioridad. No genera intervalos
          universales: el manual, el plan del fabricante y el historial real
          mandan.
        </p>
      </header>

      <form className="tool-form" onSubmit={handleSubmit}>
        <div className="tool-form__grid">
          <label className="tool-field" htmlFor={`${formId}-age`}>
            <span>Edad del vehículo</span>
            <span className="tool-field__input-with-unit">
              <input
                id={`${formId}-age`}
                inputMode="numeric"
                max="80"
                min="0"
                onChange={(event) => setAge(event.target.value)}
                required
                type="number"
                value={age}
              />
              <span>años</span>
            </span>
          </label>

          <label className="tool-field" htmlFor={`${formId}-mileage`}>
            <span>Kilometraje actual</span>
            <span className="tool-field__input-with-unit">
              <input
                id={`${formId}-mileage`}
                inputMode="numeric"
                max="2000000"
                min="0"
                onChange={(event) => setMileage(event.target.value)}
                required
                step="100"
                type="number"
                value={mileage}
              />
              <span>km</span>
            </span>
          </label>

          <label className="tool-field" htmlFor={`${formId}-fuel`}>
            <span>Combustible o propulsión</span>
            <select
              id={`${formId}-fuel`}
              onChange={(event) => setFuel(event.target.value as FuelType)}
              required
              value={fuel}
            >
              <option value="">Selecciona una opción</option>
              <option value="petrol">Gasolina</option>
              <option value="diesel">Diésel</option>
              <option value="lpg">GLP / bifuel</option>
              <option value="hybrid">Híbrido no enchufable</option>
              <option value="plug-in-hybrid">Híbrido enchufable</option>
              <option value="electric">Eléctrico</option>
            </select>
          </label>

          <label className="tool-field" htmlFor={`${formId}-use`}>
            <span>Uso principal</span>
            <select
              id={`${formId}-use`}
              onChange={(event) => setUse(event.target.value as UseType)}
              required
              value={use}
            >
              <option value="">Selecciona una opción</option>
              <option value="urban">Ciudad y trayectos cortos</option>
              <option value="mixed">Uso mixto</option>
              <option value="road">Carretera y autopista</option>
              <option value="occasional">Uso ocasional o largos periodos parado</option>
              <option value="demanding">Remolque, carga, polvo o montaña</option>
            </select>
          </label>

          <label className="tool-field" htmlFor={`${formId}-annual-mileage`}>
            <span>Kilómetros aproximados al año</span>
            <span className="tool-field__input-with-unit">
              <input
                id={`${formId}-annual-mileage`}
                inputMode="numeric"
                max="200000"
                min="0"
                onChange={(event) => setAnnualMileage(event.target.value)}
                required
                step="500"
                type="number"
                value={annualMileage}
              />
              <span>km/año</span>
            </span>
          </label>

          <label className="tool-field" htmlFor={`${formId}-service`}>
            <span>Tiempo desde la última revisión documentada</span>
            <select
              id={`${formId}-service`}
              onChange={(event) =>
                setLastService(event.target.value as LastService)
              }
              required
              value={lastService}
            >
              <option value="">Selecciona una opción</option>
              <option value="under-6">Menos de 6 meses</option>
              <option value="6-12">Entre 6 y 12 meses</option>
              <option value="12-24">Entre 12 y 24 meses</option>
              <option value="over-24">Más de 24 meses</option>
              <option value="unknown">No lo sé o no hay historial</option>
            </select>
          </label>
        </div>

        <div className="tool-form__actions">
          <button className="tool-button tool-button--primary" type="submit">
            Crear mi plan
          </button>
          <button
            className="tool-button tool-button--secondary"
            onClick={reset}
            type="button"
          >
            Borrar datos
          </button>
        </div>
      </form>

      {plan ? (
        <section aria-live="polite" className="tool-result tool-result--plan">
          <p className="tool-result__label">Prioridades orientativas</p>
          <h3>
            {Number(age).toLocaleString("es-ES")} años ·{" "}
            {Number(mileage).toLocaleString("es-ES")} km
          </h3>
          <div className="maintenance-priorities">
            {(["high", "next", "watch"] as const).map((level) => {
              const group = plan.filter((item) => item.level === level);

              if (!group.length) {
                return null;
              }

              return (
                <section
                  className={`maintenance-priority maintenance-priority--${level}`}
                  key={level}
                >
                  <h4>{priorityLabels[level]}</h4>
                  <ul>
                    {group.map((item) => (
                      <li key={item.title}>
                        <strong>{item.title}</strong>
                        <p>{item.reason}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
          <p className="tool-disclaimer">
            Esta lista no establece vencimientos ni ordena sustituir piezas.
            Comprueba siempre el manual de tu versión, los límites por tiempo y
            kilómetros, las campañas pendientes y el historial de trabajos.
          </p>
        </section>
      ) : null}
    </section>
  );
}
