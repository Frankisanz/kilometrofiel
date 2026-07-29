"use client";

import { useId, useState, type FormEvent } from "react";

type StartBehaviour =
  | ""
  | "no-crank"
  | "slow-crank"
  | "normal-crank"
  | "starts-and-stalls"
  | "unsure";

type LightBehaviour = "" | "normal" | "dim" | "off" | "flicker" | "unsure";
type SoundBehaviour =
  | ""
  | "repeated-clicks"
  | "single-click"
  | "cranking"
  | "silent"
  | "unsure";
type DangerState = "" | "yes" | "no" | "unsure";

type DiagnosisResult = {
  tone: "danger" | "warning" | "neutral";
  title: string;
  explanation: string;
  actions: string[];
};

const commonStopSignals = [
  "Humo, chispas, olor intenso a quemado o a combustible.",
  "Batería hinchada, con fuga, muy caliente o cables que se calientan.",
  "El motor gira de forma brusca, se bloquea o aparece un ruido metálico fuerte.",
];

function diagnoseStart(
  behaviour: StartBehaviour,
  lights: LightBehaviour,
  sound: SoundBehaviour,
  danger: DangerState,
): DiagnosisResult {
  if (danger === "yes") {
    return {
      tone: "danger",
      title: "No sigas intentando arrancar",
      explanation:
        "Una señal de humo, fuga, olor anormal, calor o daño visible puede indicar un riesgo eléctrico, de combustible o mecánico. No es seguro continuar con pruebas a distancia.",
      actions: [
        "Quita el contacto si puedes hacerlo sin exponerte y aléjate del vehículo.",
        "No toques la batería, los cables ni una posible fuga.",
        "Solicita asistencia profesional; si hay fuego o peligro inmediato, contacta con emergencias.",
      ],
    };
  }

  if (
    (behaviour === "no-crank" || behaviour === "slow-crank") &&
    (lights === "dim" ||
      lights === "off" ||
      sound === "repeated-clicks")
  ) {
    return {
      tone: "warning",
      title: "La alimentación de 12 V merece la primera comprobación",
      explanation:
        "Luces débiles o varios clics junto a un giro lento o inexistente son compatibles con una batería descargada, bornes con mal contacto o una caída de tensión. No confirman por sí solos que la batería esté averiada.",
      actions: [
        "Evita encadenar intentos: pueden descargar más la batería y calentar el motor de arranque.",
        "Con el contacto quitado, realiza solo una inspección visual de batería y conexiones si son accesibles y no presentan daños.",
        "Consulta el procedimiento exacto del manual antes de usar pinzas o un arrancador, o pide asistencia si no tienes el equipo o la experiencia adecuados.",
      ],
    };
  }

  if (
    behaviour === "no-crank" &&
    lights === "normal" &&
    (sound === "single-click" || sound === "silent")
  ) {
    return {
      tone: "warning",
      title: "No parece un caso concluyente de batería descargada",
      explanation:
        "Con luces normales y un único clic —o silencio— también pueden intervenir el circuito de arranque, el selector de cambio, el pedal de embrague, la llave o el inmovilizador. La batería sigue siendo posible, pero no debe darse por diagnosticada.",
      actions: [
        "Comprueba que el cambio esté en P o N, o que el embrague esté pisado, según indique el manual.",
        "Prueba la segunda llave solo si la tienes disponible y el cuadro muestra un aviso de inmovilizador.",
        "No puentes conexiones ni golpees el motor de arranque; solicita una comprobación profesional si persiste.",
      ],
    };
  }

  if (behaviour === "slow-crank") {
    return {
      tone: "warning",
      title: "El motor de arranque está girando con dificultad",
      explanation:
        "Puede deberse a poca carga, conexiones deficientes, temperatura baja, aceite muy viscoso o desgaste del sistema de arranque. La observación no permite separar estas causas con seguridad.",
      actions: [
        "Detén los intentos repetidos y apaga luces, climatización y accesorios.",
        "Comprueba el historial y la tensión de la batería con equipo adecuado, sin asumir que debe sustituirse.",
        "Pide asistencia si el giro empeora, aparece olor a quemado o el vehículo no arranca tras un intento breve.",
      ],
    };
  }

  if (behaviour === "normal-crank") {
    return {
      tone: "warning",
      title: "El motor gira, pero la causa puede estar en otro sistema",
      explanation:
        "Si gira con velocidad normal y no arranca, una batería descargada es menos característica. Pueden intervenir combustible, encendido, inmovilizador, sensores o gestión del motor.",
      actions: [
        "Observa los testigos y mensajes del cuadro y anótalos sin borrar averías.",
        "No mantengas el arranque accionado durante periodos largos ni repitas intentos de forma continua.",
        "Solicita diagnóstico si no arranca; no manipules combustible ni encendido al borde de la carretera.",
      ],
    };
  }

  if (behaviour === "starts-and-stalls") {
    return {
      tone: "warning",
      title: "Arranca, pero no mantiene el funcionamiento",
      explanation:
        "Un calado inmediato puede relacionarse con alimentación, inmovilizador, carga, admisión o gestión electrónica. No es prudente circular hasta saber si el motor puede volver a detenerse.",
      actions: [
        "Revisa los mensajes del cuadro y evita salir a la vía si vuelve a calarse.",
        "No aceleres repetidamente para ocultar el síntoma.",
        "Solicita asistencia si se enciende un aviso rojo, falla la dirección o el freno se endurece.",
      ],
    };
  }

  return {
    tone: "neutral",
    title: "Faltan señales para orientar la primera comprobación",
    explanation:
      "Cuando los sonidos o las luces no están claros, es mejor registrar lo que ocurre que atribuirlo directamente a la batería.",
    actions: [
      "Graba unos segundos del cuadro y del sonido desde una posición segura.",
      "Anota si ocurre en frío, después de varios días parado o tras un trayecto corto.",
      "Consulta el manual y pide una medición de batería y sistema de carga si el problema se repite.",
    ],
  };
}

export function StartDiagnosis() {
  const formId = useId();
  const [behaviour, setBehaviour] = useState<StartBehaviour>("");
  const [lights, setLights] = useState<LightBehaviour>("");
  const [sound, setSound] = useState<SoundBehaviour>("");
  const [danger, setDanger] = useState<DangerState>("");
  const [result, setResult] = useState<DiagnosisResult | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(diagnoseStart(behaviour, lights, sound, danger));
  }

  function reset() {
    setBehaviour("");
    setLights("");
    setSound("");
    setDanger("");
    setResult(null);
  }

  return (
    <section
      aria-labelledby={`${formId}-title`}
      className="interactive-tool start-diagnosis"
    >
      <header className="interactive-tool__header">
        <p className="interactive-tool__eyebrow">Orientación inicial</p>
        <h2 id={`${formId}-title`}>¿Qué ocurre cuando intentas arrancar?</h2>
        <p>
          Describe únicamente lo que ves y oyes. El resultado ayuda a decidir el
          siguiente paso, pero no sustituye una medición ni un diagnóstico
          profesional.
        </p>
      </header>

      <form className="tool-form" onSubmit={handleSubmit}>
        <div className="tool-form__grid">
          <label className="tool-field" htmlFor={`${formId}-behaviour`}>
            <span>Comportamiento del motor</span>
            <select
              id={`${formId}-behaviour`}
              onChange={(event) =>
                setBehaviour(event.target.value as StartBehaviour)
              }
              required
              value={behaviour}
            >
              <option value="">Selecciona una opción</option>
              <option value="no-crank">No gira</option>
              <option value="slow-crank">Gira más lento de lo habitual</option>
              <option value="normal-crank">Gira con normalidad, pero no arranca</option>
              <option value="starts-and-stalls">Arranca y se cala enseguida</option>
              <option value="unsure">No estoy seguro</option>
            </select>
          </label>

          <label className="tool-field" htmlFor={`${formId}-lights`}>
            <span>Luces del cuadro al intentarlo</span>
            <select
              id={`${formId}-lights`}
              onChange={(event) =>
                setLights(event.target.value as LightBehaviour)
              }
              required
              value={lights}
            >
              <option value="">Selecciona una opción</option>
              <option value="normal">Mantienen un brillo normal</option>
              <option value="dim">Se atenúan mucho</option>
              <option value="off">Se apagan</option>
              <option value="flicker">Parpadean</option>
              <option value="unsure">No estoy seguro</option>
            </select>
          </label>

          <label className="tool-field" htmlFor={`${formId}-sound`}>
            <span>Sonido predominante</span>
            <select
              id={`${formId}-sound`}
              onChange={(event) =>
                setSound(event.target.value as SoundBehaviour)
              }
              required
              value={sound}
            >
              <option value="">Selecciona una opción</option>
              <option value="repeated-clicks">Varios clics rápidos</option>
              <option value="single-click">Un solo clic</option>
              <option value="cranking">Se oye girar el motor</option>
              <option value="silent">No se oye nada</option>
              <option value="unsure">No estoy seguro</option>
            </select>
          </label>

          <label className="tool-field" htmlFor={`${formId}-danger`}>
            <span>¿Hay humo, fuga, olor anormal, chispas o calor intenso?</span>
            <select
              id={`${formId}-danger`}
              onChange={(event) =>
                setDanger(event.target.value as DangerState)
              }
              required
              value={danger}
            >
              <option value="">Selecciona una opción</option>
              <option value="no">No</option>
              <option value="yes">Sí</option>
              <option value="unsure">No puedo comprobarlo con seguridad</option>
            </select>
          </label>
        </div>

        <div className="tool-form__actions">
          <button className="tool-button tool-button--primary" type="submit">
            Ver orientación
          </button>
          <button
            className="tool-button tool-button--secondary"
            onClick={reset}
            type="button"
          >
            Empezar de nuevo
          </button>
        </div>
      </form>

      {result ? (
        <section
          aria-live={result.tone === "danger" ? "assertive" : "polite"}
          className={`tool-result tool-result--${result.tone}`}
        >
          <p className="tool-result__label">Resultado orientativo</p>
          <h3>{result.title}</h3>
          <p>{result.explanation}</p>
          <ol className="tool-result__steps">
            {result.actions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ol>
          <div className="tool-safety-note">
            <h4>Detente y solicita asistencia si observas:</h4>
            <ul>
              {commonStopSignals.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </section>
  );
}
