"use client";

import { useId, useState, type FormEvent } from "react";

type LabelState = "" | "readable" | "partial" | "missing";
type BatteryTechnology = "" | "flooded" | "efb" | "agm" | "gel" | "lithium" | "unknown";
type Polarity = "" | "positive-left" | "positive-right" | "diagram-only" | "unknown";
type StartStopState = "" | "yes" | "no" | "unknown";
type PhysicalState = "" | "normal" | "corrosion" | "damaged" | "unknown";

type CheckResult = {
  tone: "danger" | "warning" | "neutral";
  title: string;
  missing: string[];
  cautions: string[];
};

function evaluateBattery({
  label,
  voltage,
  technology,
  length,
  width,
  height,
  polarity,
  ampHours,
  cca,
  ccaStandard,
  startStop,
  physicalState,
}: {
  label: LabelState;
  voltage: string;
  technology: BatteryTechnology;
  length: string;
  width: string;
  height: string;
  polarity: Polarity;
  ampHours: string;
  cca: string;
  ccaStandard: string;
  startStop: StartStopState;
  physicalState: PhysicalState;
}): CheckResult {
  const missing: string[] = [];
  const cautions: string[] = [];

  if (label === "missing" || label === "partial") {
    missing.push(
      "Confirma la referencia original mediante el manual, el VIN o un catálogo profesional; no reconstruyas toda la especificación por aspecto.",
    );
  }
  if (!voltage || voltage === "unknown") {
    missing.push("Tensión nominal de la batería.");
  }
  if (!technology || technology === "unknown") {
    missing.push("Tecnología indicada en la etiqueta: convencional, EFB, AGM u otra.");
  }
  if (!length || !width || !height) {
    missing.push("Las tres dimensiones y la forma de fijación en la bandeja.");
  }
  if (!polarity || polarity === "unknown") {
    missing.push("Posición de los bornes comparada con el dibujo del catálogo.");
  }
  if (!ampHours) {
    missing.push("Capacidad nominal en Ah.");
  }
  if (!cca) {
    missing.push("Corriente de arranque en frío, CCA.");
  }
  if (!ccaStandard || ccaStandard === "unknown") {
    missing.push("Norma usada para el CCA, por ejemplo EN o SAE.");
  }
  if (!startStop || startStop === "unknown") {
    missing.push("Presencia y especificación del sistema Start-Stop.");
  }

  if (
    startStop === "yes" &&
    (technology === "flooded" || technology === "unknown" || !technology)
  ) {
    cautions.push(
      "Un vehículo Start-Stop puede exigir EFB o AGM. No sustituyas esa tecnología por una batería convencional basándote solo en tamaño y Ah.",
    );
  }

  if (technology === "agm" || technology === "efb") {
    cautions.push(
      `La etiqueta indica ${technology.toUpperCase()}. No rebajes la tecnología sin una confirmación específica del fabricante.`,
    );
  }

  if (cca && (!ccaStandard || ccaStandard === "unknown")) {
    cautions.push(
      "Dos cifras de CCA no son comparables si se han medido con normas distintas.",
    );
  }

  if (polarity === "diagram-only") {
    cautions.push(
      "Usa el dibujo de bornes como referencia. Las expresiones «positivo a la derecha» o «a la izquierda» cambian según desde dónde se mire.",
    );
  }

  if (physicalState === "corrosion") {
    cautions.push(
      "La corrosión visible requiere valorar conexiones y posibles fugas; no la atribuyas automáticamente a la edad de la batería.",
    );
  }

  if (physicalState === "damaged") {
    return {
      tone: "danger",
      title: "No manipules ni cargues esta batería",
      missing,
      cautions: [
        "Una carcasa hinchada, rota, con fuga, calor u olor anormal necesita aislamiento y asistencia profesional.",
        ...cautions,
      ],
    };
  }

  if (missing.length || cautions.length) {
    return {
      tone: "warning",
      title: "La ficha todavía necesita comprobaciones",
      missing,
      cautions,
    };
  }

  return {
    tone: "neutral",
    title: "Tienes una ficha útil para empezar a comparar",
    missing: [],
    cautions: [
      "Coincidir en estos datos no demuestra compatibilidad. Faltan la fijación, el tipo de borne, el espacio para cables y las exigencias electrónicas de la versión.",
      "Algunos vehículos requieren registro, codificación o adaptación tras sustituir la batería.",
    ],
  };
}

export function BatteryAssistant() {
  const formId = useId();
  const [label, setLabel] = useState<LabelState>("");
  const [voltage, setVoltage] = useState("");
  const [technology, setTechnology] = useState<BatteryTechnology>("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [polarity, setPolarity] = useState<Polarity>("");
  const [ampHours, setAmpHours] = useState("");
  const [cca, setCca] = useState("");
  const [ccaStandard, setCcaStandard] = useState("");
  const [startStop, setStartStop] = useState<StartStopState>("");
  const [physicalState, setPhysicalState] = useState<PhysicalState>("");
  const [result, setResult] = useState<CheckResult | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(
      evaluateBattery({
        label,
        voltage,
        technology,
        length,
        width,
        height,
        polarity,
        ampHours,
        cca,
        ccaStandard,
        startStop,
        physicalState,
      }),
    );
  }

  function reset() {
    setLabel("");
    setVoltage("");
    setTechnology("");
    setLength("");
    setWidth("");
    setHeight("");
    setPolarity("");
    setAmpHours("");
    setCca("");
    setCcaStandard("");
    setStartStop("");
    setPhysicalState("");
    setResult(null);
  }

  const dimensions =
    length && width && height ? `${length} × ${width} × ${height} mm` : "Incompletas";

  return (
    <section
      aria-labelledby={`${formId}-title`}
      className="interactive-tool battery-assistant"
    >
      <header className="interactive-tool__header">
        <p className="interactive-tool__eyebrow">Ficha de compatibilidad</p>
        <h2 id={`${formId}-title`}>Lee la batería antes de buscar otra</h2>
        <p>
          Copia la etiqueta y mide el espacio. La herramienta organiza los datos;
          no recomienda un modelo concreto ni garantiza que una batería sea
          compatible.
        </p>
      </header>

      <aside className="tool-instructions" aria-labelledby={`${formId}-read-label`}>
        <h3 id={`${formId}-read-label`}>Antes de rellenar la ficha</h3>
        <ol>
          <li>Apaga el vehículo, guarda la llave y consulta el manual.</li>
          <li>
            Haz una fotografía legible sin tocar bornes y copia tensión,
            tecnología, Ah, CCA y la norma del CCA.
          </li>
          <li>
            Mide largo, ancho y alto, y fotografía la fijación, los bornes y la
            salida de los cables.
          </li>
        </ol>
      </aside>

      <form className="tool-form" onSubmit={handleSubmit}>
        <fieldset className="tool-fieldset">
          <legend>Datos de la etiqueta</legend>
          <div className="tool-form__grid">
            <label className="tool-field" htmlFor={`${formId}-label`}>
              <span>Estado de la etiqueta</span>
              <select
                id={`${formId}-label`}
                onChange={(event) => setLabel(event.target.value as LabelState)}
                required
                value={label}
              >
                <option value="">Selecciona una opción</option>
                <option value="readable">Se lee completa</option>
                <option value="partial">Solo se lee una parte</option>
                <option value="missing">No existe o no se puede leer</option>
              </select>
            </label>

            <label className="tool-field" htmlFor={`${formId}-voltage`}>
              <span>Tensión nominal</span>
              <select
                id={`${formId}-voltage`}
                onChange={(event) => setVoltage(event.target.value)}
                required
                value={voltage}
              >
                <option value="">Selecciona una opción</option>
                <option value="12 V">12 V</option>
                <option value="24 V">24 V</option>
                <option value="other">Otra</option>
                <option value="unknown">No se distingue</option>
              </select>
            </label>

            <label className="tool-field" htmlFor={`${formId}-technology`}>
              <span>Tecnología escrita en la batería</span>
              <select
                id={`${formId}-technology`}
                onChange={(event) =>
                  setTechnology(event.target.value as BatteryTechnology)
                }
                required
                value={technology}
              >
                <option value="">Selecciona una opción</option>
                <option value="flooded">Convencional / plomo-ácido inundada</option>
                <option value="efb">EFB</option>
                <option value="agm">AGM</option>
                <option value="gel">Gel</option>
                <option value="lithium">Litio</option>
                <option value="unknown">No se distingue</option>
              </select>
            </label>

            <label className="tool-field" htmlFor={`${formId}-ah`}>
              <span>Capacidad</span>
              <span className="tool-field__input-with-unit">
                <input
                  id={`${formId}-ah`}
                  inputMode="decimal"
                  max="1000"
                  min="1"
                  onChange={(event) => setAmpHours(event.target.value)}
                  placeholder="Ej.: 70"
                  type="number"
                  value={ampHours}
                />
                <span>Ah</span>
              </span>
            </label>

            <label className="tool-field" htmlFor={`${formId}-cca`}>
              <span>Corriente de arranque en frío</span>
              <span className="tool-field__input-with-unit">
                <input
                  id={`${formId}-cca`}
                  inputMode="numeric"
                  max="5000"
                  min="1"
                  onChange={(event) => setCca(event.target.value)}
                  placeholder="Ej.: 760"
                  type="number"
                  value={cca}
                />
                <span>A</span>
              </span>
            </label>

            <label className="tool-field" htmlFor={`${formId}-cca-standard`}>
              <span>Norma que acompaña al CCA</span>
              <select
                id={`${formId}-cca-standard`}
                onChange={(event) => setCcaStandard(event.target.value)}
                value={ccaStandard}
              >
                <option value="">Selecciona una opción</option>
                <option value="EN">EN</option>
                <option value="SAE">SAE</option>
                <option value="DIN">DIN</option>
                <option value="IEC">IEC</option>
                <option value="JIS">JIS</option>
                <option value="unknown">No se indica o no se distingue</option>
              </select>
            </label>
          </div>
        </fieldset>

        <fieldset className="tool-fieldset">
          <legend>Medidas, bornes y vehículo</legend>
          <div className="tool-form__grid">
            <label className="tool-field" htmlFor={`${formId}-length`}>
              <span>Largo</span>
              <span className="tool-field__input-with-unit">
                <input
                  id={`${formId}-length`}
                  inputMode="numeric"
                  max="1000"
                  min="1"
                  onChange={(event) => setLength(event.target.value)}
                  type="number"
                  value={length}
                />
                <span>mm</span>
              </span>
            </label>

            <label className="tool-field" htmlFor={`${formId}-width`}>
              <span>Ancho</span>
              <span className="tool-field__input-with-unit">
                <input
                  id={`${formId}-width`}
                  inputMode="numeric"
                  max="1000"
                  min="1"
                  onChange={(event) => setWidth(event.target.value)}
                  type="number"
                  value={width}
                />
                <span>mm</span>
              </span>
            </label>

            <label className="tool-field" htmlFor={`${formId}-height`}>
              <span>Alto total</span>
              <span className="tool-field__input-with-unit">
                <input
                  id={`${formId}-height`}
                  inputMode="numeric"
                  max="1000"
                  min="1"
                  onChange={(event) => setHeight(event.target.value)}
                  type="number"
                  value={height}
                />
                <span>mm</span>
              </span>
            </label>

            <label className="tool-field" htmlFor={`${formId}-polarity`}>
              <span>Posición del borne positivo</span>
              <select
                id={`${formId}-polarity`}
                onChange={(event) =>
                  setPolarity(event.target.value as Polarity)
                }
                value={polarity}
              >
                <option value="">Selecciona una opción</option>
                <option value="positive-right">Positivo a la derecha según el dibujo</option>
                <option value="positive-left">Positivo a la izquierda según el dibujo</option>
                <option value="diagram-only">Tengo una foto o dibujo, no una orientación fiable</option>
                <option value="unknown">No lo sé</option>
              </select>
            </label>

            <label className="tool-field" htmlFor={`${formId}-start-stop`}>
              <span>Sistema Start-Stop</span>
              <select
                id={`${formId}-start-stop`}
                onChange={(event) =>
                  setStartStop(event.target.value as StartStopState)
                }
                required
                value={startStop}
              >
                <option value="">Selecciona una opción</option>
                <option value="yes">Sí</option>
                <option value="no">No</option>
                <option value="unknown">No estoy seguro</option>
              </select>
            </label>

            <label className="tool-field" htmlFor={`${formId}-physical-state`}>
              <span>Estado físico observado</span>
              <select
                id={`${formId}-physical-state`}
                onChange={(event) =>
                  setPhysicalState(event.target.value as PhysicalState)
                }
                required
                value={physicalState}
              >
                <option value="">Selecciona una opción</option>
                <option value="normal">Sin daños visibles</option>
                <option value="corrosion">Hay corrosión en la zona de bornes</option>
                <option value="damaged">Está hinchada, rota, caliente, con fuga u olor</option>
                <option value="unknown">No puedo comprobarlo con seguridad</option>
              </select>
            </label>
          </div>
        </fieldset>

        <div className="tool-form__actions">
          <button className="tool-button tool-button--primary" type="submit">
            Revisar mi ficha
          </button>
          <button
            className="tool-button tool-button--secondary"
            onClick={reset}
            type="button"
          >
            Borrar ficha
          </button>
        </div>
      </form>

      {result ? (
        <section
          aria-live={result.tone === "danger" ? "assertive" : "polite"}
          className={`tool-result tool-result--${result.tone}`}
        >
          <p className="tool-result__label">Comprobación de datos</p>
          <h3>{result.title}</h3>

          <dl className="battery-specification">
            <div>
              <dt>Tensión</dt>
              <dd>{voltage || "Sin confirmar"}</dd>
            </div>
            <div>
              <dt>Tecnología</dt>
              <dd>{technology ? technology.toUpperCase() : "Sin confirmar"}</dd>
            </div>
            <div>
              <dt>Dimensiones</dt>
              <dd>{dimensions}</dd>
            </div>
            <div>
              <dt>Capacidad</dt>
              <dd>{ampHours ? `${ampHours} Ah` : "Sin confirmar"}</dd>
            </div>
            <div>
              <dt>Arranque en frío</dt>
              <dd>
                {cca
                  ? `${cca} A${ccaStandard ? ` (${ccaStandard})` : ""}`
                  : "Sin confirmar"}
              </dd>
            </div>
            <div>
              <dt>Start-Stop</dt>
              <dd>
                {startStop === "yes"
                  ? "Sí"
                  : startStop === "no"
                    ? "No"
                    : "Sin confirmar"}
              </dd>
            </div>
          </dl>

          {result.missing.length ? (
            <div className="tool-result__section">
              <h4>Datos que faltan</h4>
              <ul>
                {result.missing.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {result.cautions.length ? (
            <div className="tool-result__section">
              <h4>Precauciones antes de comparar</h4>
              <ul>
                {result.cautions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <p className="tool-disclaimer">
            No compres usando solo Ah y CCA. Deben coincidir tensión, tecnología,
            medidas, fijación, bornes, polaridad y requisitos electrónicos. En
            híbridos y eléctricos, esta ficha se refiere únicamente a la batería
            auxiliar de baja tensión, nunca a la batería de tracción.
          </p>
        </section>
      ) : null}
    </section>
  );
}
