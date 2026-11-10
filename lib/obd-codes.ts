// Códigos de avería OBD2/EOBD genéricos más consultados por propietarios de
// coches veteranos. Las definiciones siguen la nomenclatura genérica (códigos
// P0xxx y P2xxx comunes a todos los fabricantes); cada fabricante puede añadir
// matices, así que las páginas insisten en confirmar con datos y pruebas
// antes de cambiar piezas. Añadidos el 10 de noviembre de 2026.

export type ObdSystem =
  | "encendido"
  | "mezcla"
  | "sensores"
  | "refrigeracion"
  | "turbo"
  | "emisiones"
  | "electricidad"
  | "transmision"
  | "combustible";

export type ObdSeverity = "alta" | "media" | "baja";

export type ObdSource = {
  title: string;
  publisher: string;
  url: `https://${string}`;
};

export type ObdCode = {
  code: string;
  slug: string;
  name: string;
  shortName: string;
  system: ObdSystem;
  severity: ObdSeverity;
  directAnswer: string;
  meaning: readonly string[];
  causes: readonly { cause: string; clue: string }[];
  checks: readonly string[];
  canDrive: string;
  workshop: readonly string[];
  itv: string;
  faqs: readonly { question: string; answer: string }[];
  relatedArticleSlugs: readonly string[];
  relatedAnswerSlugs?: readonly string[];
  relatedCodes: readonly string[];
  sources: readonly ObdSource[];
  updatedAt: string;
};

export const OBD_CONTENT_DATE = "2026-11-10";

export const OBD_SYSTEM_LABELS: Record<ObdSystem, string> = {
  encendido: "Encendido y fallos de combustión",
  mezcla: "Mezcla aire-combustible",
  sensores: "Sensores del motor",
  refrigeracion: "Temperatura y refrigeración",
  turbo: "Turbo y sobrealimentación",
  emisiones: "Emisiones: catalizador, EGR y filtro de partículas",
  electricidad: "Tensión y comunicación",
  transmision: "Cambio y velocidad",
  combustible: "Alimentación de combustible",
};

export const OBD_SEVERITY_LABELS: Record<ObdSeverity, string> = {
  alta: "Urgencia alta: limita el uso y revisa cuanto antes",
  media: "Urgencia media: revisa en los próximos días",
  baja: "Urgencia baja: programa la revisión",
};

const S = {
  dgtMechanics: {
    title: "Manual VIII de mecánica para formación vial, edición 2026",
    publisher: "Dirección General de Tráfico",
    url: "https://sede.dgt.gob.es/export/sites/dgt/.galleries/permisos-de-conducir/certificacion-aptitud-profesores-formacion-vial/2026/MANUAL-VIII-Mecanica.pdf",
  },
  dgtWarningLights: {
    title: "Para que los testigos del coche no te suenen a chino",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/reportajes/2019/0926-Los-testigos-del-coche.shtml",
  },
  dgtEmergencyMode: {
    title: "El vehículo, en modo emergencia",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/tecnologia-seguridad/2023/1221-N268-vehiculo-dia-emergencia.shtml",
  },
  dgtCommonFailures: {
    title: "Las cinco averías más frecuentes",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/noticias/2022/04ABRIL/0428-Averias-mas-frecuentes.shtml",
  },
  dgtBattery: {
    title: "La «chispa» del coche: baterías",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/tecnologia-seguridad/2019/0606-Baterias-al-dia.shtml",
  },
  itvLaw: {
    title: "Real Decreto 920/2017, por el que se regula la ITV",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2017-12841",
  },
  itvManual: {
    title: "Manual de procedimiento de inspección de las estaciones ITV, versión 7.9",
    publisher: "Ministerio de Industria y Turismo",
    url: "https://industria.gob.es/Calidad-Industrial/vehiculos/itv1/Manual%20de%20procedimiento%20de%20inspecci%C3%B3n/Manual%20de%20procedimiento%20de%20inspeccion%20de%20estaciones%20ITV-V%207.9_final2.pdf",
  },
  obdRegulation: {
    title: "Reglamento (CE) n.º 715/2007 sobre emisiones y acceso a la información de reparación",
    publisher: "EUR-Lex, Unión Europea",
    url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32007R0715",
  },
  hellaDpf: {
    title: "El sistema DPF: filtro de partículas diésel",
    publisher: "HELLA TechWorld",
    url: "https://www.hella.com/techworld/es/ti/pdf/El-sistema-DPF-Filtro-de-Particulas-Diesel/El-sistema-DPF-Filtro-de-Particulas-Diesel.pdf",
  },
} as const satisfies Record<string, ObdSource>;

const D = OBD_CONTENT_DATE;

export const OBD_CODES: readonly ObdCode[] = [
  {
    code: "P0300",
    slug: "p0300",
    name: "Fallo de encendido aleatorio o en varios cilindros detectado",
    shortName: "Fallo de encendido en varios cilindros",
    system: "encendido",
    severity: "alta",
    directAnswer:
      "P0300 significa que la centralita ha detectado combustiones fallidas en más de un cilindro o sin un patrón fijo. Lo notarás como tirones, temblor al ralentí o pérdida de fuerza. Las causas más habituales en un coche con años son bujías gastadas, una bobina o cable que deriva, una entrada de aire o un problema de presión de combustible. Si el testigo de motor parpadea, reduce la carga y no sigas circulando: el combustible sin quemar puede dañar el catalizador.",
    meaning: [
      "El sistema detecta los fallos de encendido midiendo pequeñas variaciones en la velocidad del cigüeñal: cuando un cilindro no empuja, el giro se frena un instante. Si los fallos aparecen repartidos entre varios cilindros, o la centralita no puede atribuirlos a uno concreto, registra P0300 en lugar de P0301 a P0304.",
      "Que el fallo afecte a varios cilindros a la vez suele apuntar a algo común a todos: la mezcla (aire o combustible), el encendido compartido o un problema mecánico general. Un fallo de una sola bobina suele dar un código de cilindro concreto, aunque a veces aparecen ambos.",
    ],
    causes: [
      { cause: "Bujías gastadas o de tipo incorrecto", clue: "Fallos más marcados al acelerar fuerte o en cuesta, y sin registro reciente de cambio de bujías." },
      { cause: "Bobinas, cables o capuchones con fugas de corriente", clue: "Empeora en mañanas húmedas o tras lavar el motor." },
      { cause: "Entrada de aire en la admisión", clue: "Ralentí inestable, silbido y, a menudo, también P0171." },
      { cause: "Presión o caudal de combustible insuficiente", clue: "Tirones al pedir potencia, filtro de combustible sin cambiar o bomba ruidosa." },
      { cause: "Problema mecánico (compresión, distribución)", clue: "Fallos persistentes con encendido en buen estado, ruido de distribución o consumo de refrigerante." },
    ],
    checks: [
      "Lee también los datos congelados: revoluciones, carga y temperatura en el momento del fallo indican si ocurre en frío, al ralentí o con carga.",
      "Comprueba si hay otros códigos asociados (P0171, P0172, P0301-P0304, P0335) y anótalos antes de borrar nada.",
      "Revisa en el historial cuándo se cambiaron bujías y filtro de combustible.",
      "Con el motor parado y frío, inspecciona visualmente cables, capuchones y conectores de bobina buscando grietas o marcas de chispa.",
    ],
    canDrive:
      "Con tirones leves y testigo fijo, solo trayectos cortos y suaves hasta el taller. Con el testigo parpadeando, sacudidas fuertes o olor a combustible, detente en un lugar seguro y pide asistencia.",
    workshop: [
      "El testigo de motor parpadea.",
      "El coche pierde fuerza de forma notable o se cala.",
      "Olor intenso a gasolina o escape caliente fuera de lo normal.",
    ],
    itv:
      "En turismos Euro 5 y posteriores la ITV lee el sistema OBD y comprueba el testigo de avería. Además, los fallos de encendido elevan los hidrocarburos en la prueba de gases de los motores de gasolina.",
    faqs: [
      { question: "¿Cambiar las bujías quita el P0300?", answer: "Si las bujías estaban gastadas, a menudo sí. Si el código vuelve con bujías nuevas, hay que revisar bobinas, entrada de aire, presión de combustible y compresión." },
      { question: "¿Qué diferencia hay entre P0300 y P0301?", answer: "P0300 es un fallo repartido o sin cilindro identificado; P0301 indica que el fallo está localizado en el cilindro 1. Un fallo localizado suele ser más fácil de aislar." },
    ],
    relatedArticleSlugs: ["tirones-al-acelerar-fallo-encendido", "coche-tiembla-ralenti", "testigos-coche-significado"],
    relatedAnswerSlugs: ["testigo-motor-parpadea-coche-tiembla", "tirones-en-frio-desaparecen-en-caliente"],
    relatedCodes: ["p0301-p0304", "p0171", "p0420"],
    sources: [S.dgtMechanics, S.dgtWarningLights, S.itvManual],
    updatedAt: D,
  },
  {
    code: "P0301-P0304",
    slug: "p0301-p0304",
    name: "Fallo de encendido detectado en el cilindro 1, 2, 3 o 4",
    shortName: "Fallo de encendido en un cilindro concreto",
    system: "encendido",
    severity: "alta",
    directAnswer:
      "Los códigos P0301, P0302, P0303 y P0304 indican fallo de encendido en el cilindro 1, 2, 3 o 4 respectivamente. Como el fallo está localizado, la causa suele estar en una pieza de ese cilindro: bujía, bobina, inyector o, con menos frecuencia, compresión. La prueba más útil es intercambiar la bobina con la de otro cilindro y ver si el código se mueve. Con testigo parpadeante, no sigas circulando.",
    meaning: [
      "El último dígito señala el cilindro afectado según el orden de numeración del fabricante, no el orden de encendido. El cilindro 1 suele estar en el lado de la distribución, pero conviene comprobarlo en la documentación del motor antes de tocar nada.",
      "Si aparece un código de cilindro concreto junto a P0300, la centralita está viendo un fallo dominante en ese cilindro y otros más dispersos.",
    ],
    causes: [
      { cause: "Bobina individual averiada", clue: "Si intercambias la bobina con otro cilindro, el código cambia de número (por ejemplo, de P0302 a P0303)." },
      { cause: "Bujía gastada, rota o con el electrodo dañado", clue: "El código sigue en el mismo cilindro tras mover la bobina." },
      { cause: "Inyector de ese cilindro obstruido o que gotea", clue: "Fallo constante incluso con bujía y bobina nuevas; en diésel, ralentí irregular y humo." },
      { cause: "Baja compresión en el cilindro", clue: "Medida de compresión inferior a la de los demás; puede deberse a válvula o segmentos." },
    ],
    checks: [
      "Anota el número exacto de cilindro y los datos congelados antes de borrar.",
      "Con el motor frío y apagado, intercambia la bobina del cilindro afectado con la de un cilindro vecino, borra y prueba: si el fallo sigue a la bobina, ya sabes la causa.",
      "Revisa el estado de la bujía de ese cilindro: color, separación y posibles grietas en la porcelana.",
      "Si el fallo no se mueve con la bobina ni con la bujía, deja el siguiente paso (inyector, compresión) al taller.",
    ],
    canDrive:
      "Como en P0300: trayectos cortos y suaves si el testigo está fijo; si parpadea o el motor da sacudidas, detente y pide asistencia.",
    workshop: [
      "El código no se mueve al intercambiar bobina y bujía.",
      "Hay olor a combustible o humo abundante.",
      "El motor pierde aceite o refrigerante sin explicación.",
    ],
    itv:
      "El testigo de avería encendido y un registro de fallos de encendido pueden detectarse en la lectura OBD de la ITV en los turismos Euro 5 y posteriores.",
    faqs: [
      { question: "¿Puedo cambiar solo la bobina averiada?", answer: "Sí, en motores con una bobina por cilindro basta con sustituir la afectada si la prueba de intercambio lo confirma. Las bujías sí conviene cambiarlas en juego." },
      { question: "¿Por qué el código aparece solo en frío?", answer: "La humedad y el frío revelan fisuras en bobinas y capuchones y exigen más a las bujías. Si desaparece en caliente, empieza por el encendido." },
    ],
    relatedArticleSlugs: ["tirones-al-acelerar-fallo-encendido", "coche-tiembla-ralenti"],
    relatedAnswerSlugs: ["tirones-en-frio-desaparecen-en-caliente", "testigo-motor-parpadea-coche-tiembla"],
    relatedCodes: ["p0300", "p0420"],
    sources: [S.dgtMechanics, S.dgtWarningLights],
    updatedAt: D,
  },
  {
    code: "P0171",
    slug: "p0171",
    name: "Sistema demasiado pobre (banco 1)",
    shortName: "Mezcla pobre",
    system: "mezcla",
    severity: "media",
    directAnswer:
      "P0171 indica que la centralita ha tenido que añadir más combustible del previsto y aun así la mezcla sigue con exceso de aire en el banco 1. En un motor de cuatro cilindros en línea solo hay banco 1, así que afecta a todo el motor. La causa más frecuente en coches con años es una entrada de aire (manguito agrietado, junta de admisión, tubo de vacío); después, un caudalímetro sucio o una presión de combustible baja.",
    meaning: [
      "La sonda lambda informa de cuánto oxígeno queda en el escape. Si detecta demasiado, la centralita aumenta la inyección mediante las correcciones de combustible (fuel trims). Cuando la corrección supera el límite previsto, registra P0171.",
      "Banco 1 es el lado del motor donde está el cilindro 1. En motores en V (seis u ocho cilindros) existe banco 2 y su equivalente es P0174; si aparecen los dos a la vez, la causa es común a todo el motor.",
    ],
    causes: [
      { cause: "Entrada de aire no medida", clue: "Silbido al ralentí, correcciones de combustible muy altas al ralentí que mejoran al subir de vueltas." },
      { cause: "Caudalímetro (MAF) sucio o defectuoso", clue: "Corrección alta en todo el rango de revoluciones y respuesta perezosa al acelerar; a veces P0101." },
      { cause: "Presión de combustible baja", clue: "Empeora con carga y en cuesta; filtro de combustible antiguo o bomba débil." },
      { cause: "Inyectores parcialmente obstruidos", clue: "Mezcla pobre con tirones y, a veces, fallos de encendido." },
      { cause: "Fuga en el escape antes de la sonda", clue: "Ruido de escape y entrada de aire exterior que engaña a la sonda." },
    ],
    checks: [
      "Con un lector que muestre datos en vivo, mira las correcciones de combustible a corto y largo plazo al ralentí y a unas 2.500 rpm.",
      "Con el motor en marcha, escucha la zona de admisión buscando silbidos y revisa manguitos de goma agrietados.",
      "Comprueba que el filtro de aire está bien asentado y que el tubo entre caudalímetro y mariposa no tiene cortes.",
      "Anota si aparecen además P0101, P0300 o códigos de sonda lambda.",
    ],
    canDrive:
      "Normalmente sí, con normalidad y por poco tiempo. Una mezcla pobre mantenida puede provocar tirones y calentar más el motor, así que no lo dejes meses.",
    workshop: [
      "Aparecen también fallos de encendido o el motor da tirones.",
      "No encuentras la entrada de aire y el código vuelve tras borrarlo.",
      "Sospechas de presión de combustible: se mide con manómetro.",
    ],
    itv:
      "En gasolina, una mezcla descontrolada puede alterar los valores de CO y lambda en la prueba de gases, y el testigo encendido aparece en la lectura OBD de los vehículos Euro 5 y posteriores.",
    faqs: [
      { question: "¿Hay que cambiar la sonda lambda por un P0171?", answer: "Casi nunca es lo primero. La sonda está avisando de un exceso de aire real; cambiarla sin encontrar la entrada de aire no suele resolver nada." },
      { question: "¿Limpiar el caudalímetro sirve?", answer: "Si está sucio, sí puede mejorar la lectura. Usa limpiador específico para sensores y no toques el elemento caliente." },
    ],
    relatedArticleSlugs: ["coche-gasta-mas-combustible", "tirones-al-acelerar-fallo-encendido", "como-elegir-lector-obd2"],
    relatedCodes: ["p0172", "p0101", "p0300"],
    sources: [S.dgtMechanics, S.obdRegulation],
    updatedAt: D,
  },
  {
    code: "P0172",
    slug: "p0172",
    name: "Sistema demasiado rico (banco 1)",
    shortName: "Mezcla rica",
    system: "mezcla",
    severity: "media",
    directAnswer:
      "P0172 significa que la centralita ha reducido la inyección al máximo permitido y la mezcla sigue con exceso de combustible en el banco 1. Suele acompañarse de más consumo, olor a gasolina y, a veces, humo negro. Causas típicas: inyector que gotea, presión de combustible excesiva, caudalímetro que lee de más, filtro de aire muy obstruido o sensor de temperatura que indica motor frío cuando no lo está.",
    meaning: [
      "Es el caso contrario a P0171: la sonda lambda detecta poco oxígeno en el escape y la corrección de combustible negativa llega a su límite. Un exceso de combustible mantenido ensucia bujías, diluye el aceite y castiga el catalizador.",
    ],
    causes: [
      { cause: "Inyector que gotea o pulveriza mal", clue: "Arranque en caliente difícil, olor a gasolina y bujía de un cilindro negra." },
      { cause: "Sensor de temperatura del refrigerante con lectura falsa", clue: "La centralita ve motor frío con el motor caliente; ventilador o indicador incoherentes." },
      { cause: "Caudalímetro que mide más aire del real", clue: "Corrección negativa en todo el rango." },
      { cause: "Regulador de presión de combustible defectuoso", clue: "Presión por encima de la especificada o combustible en el tubo de vacío del regulador." },
      { cause: "Filtro de aire muy obstruido", clue: "Pérdida de fuerza en alta y filtro visiblemente sucio." },
    ],
    checks: [
      "Revisa el filtro de aire: es lo más barato y rápido.",
      "Con datos en vivo, compara la temperatura del refrigerante que ve la centralita con la real del motor caliente.",
      "Mira las correcciones de combustible y si el código aparece en frío, en caliente o siempre.",
      "Saca una bujía si sabes hacerlo: hollín negro y seco confirma mezcla rica.",
    ],
    canDrive:
      "Durante unos días, sí, pero no lo prolongues: el exceso de combustible puede dañar el catalizador y diluir el aceite. Si huele mucho a gasolina, no circules y revisa fugas.",
    workshop: [
      "Olor fuerte a combustible en el vano motor o en el habitáculo.",
      "Humo negro abundante.",
      "Fallos de encendido asociados.",
    ],
    itv:
      "Una mezcla rica dispara el CO en la prueba de gases de un motor de gasolina y es una causa frecuente de rechazo en coches con años.",
    faqs: [
      { question: "¿Gasta más un coche con P0172?", answer: "Sí. La mezcla rica implica inyectar más combustible del necesario, y el consumo suele subir de forma apreciable." },
      { question: "¿Puede ser el termostato?", answer: "Un termostato abierto mantiene el motor frío y la centralita enriquece, aunque eso suele dar P0128. Si aparecen los dos, empieza por el termostato." },
    ],
    relatedArticleSlugs: ["coche-gasta-mas-combustible", "humo-blanco-azul-negro-escape"],
    relatedAnswerSlugs: ["itv-gases-altos-gasolina-antiguo"],
    relatedCodes: ["p0171", "p0128", "p0420"],
    sources: [S.dgtMechanics, S.itvManual],
    updatedAt: D,
  },
  {
    code: "P0101",
    slug: "p0101",
    name: "Circuito del caudalímetro de aire (MAF) A: rango o funcionamiento",
    shortName: "Caudalímetro fuera de rango",
    system: "sensores",
    severity: "media",
    directAnswer:
      "P0101 indica que la lectura del caudalímetro no cuadra con lo que la centralita espera según revoluciones, mariposa y presión. No significa necesariamente que el caudalímetro esté roto: un filtro de aire mal colocado, una entrada de aire después del sensor o, en diésel, una válvula EGR que no cierra producen el mismo código. Empieza por revisar el circuito de admisión antes de comprar un caudalímetro.",
    meaning: [
      "El caudalímetro mide la masa de aire que entra al motor y la centralita calcula con ese dato la inyección. Para validar la lectura la compara con un modelo calculado; cuando la diferencia se mantiene, registra P0101. Los códigos P0102 y P0103 son distintos: señalan una señal eléctrica demasiado baja o alta, más típica de cableado o conector.",
    ],
    causes: [
      { cause: "Fuga o manguito suelto entre caudalímetro y motor", clue: "Silbido, correcciones de combustible altas y, a menudo, P0171." },
      { cause: "Elemento sensor sucio de aceite o polvo", clue: "Filtro de aire de algodón aceitado o filtro mal asentado." },
      { cause: "Válvula EGR que no cierra (diésel)", clue: "Humo negro, falta de fuerza y, a veces, P0401 o códigos de EGR." },
      { cause: "Caudalímetro degradado", clue: "El código persiste con admisión estanca y EGR correcta." },
    ],
    checks: [
      "Comprueba el filtro de aire y que la tapa de la caja cierra sin holguras.",
      "Revisa abrazaderas y el manguito hasta la mariposa o el turbo.",
      "Con datos en vivo, mira el caudal al ralentí con el motor caliente y compáralo con la especificación del fabricante.",
      "Desconecta la batería solo si sabes que tu coche no pierde configuraciones importantes al hacerlo.",
    ],
    canDrive:
      "Por lo general sí, aunque el coche puede entrar en modo emergencia con menos potencia. Conduce con suavidad hasta resolverlo.",
    workshop: [
      "El coche entra en modo emergencia de forma repetida.",
      "Humo negro abundante en un diésel.",
      "El código vuelve tras revisar admisión y filtro.",
    ],
    itv:
      "En diésel puede elevar la opacidad de humos; en cualquier coche Euro 5 o posterior, el testigo encendido aparece en la lectura OBD.",
    faqs: [
      { question: "¿Se puede circular con el caudalímetro desconectado?", answer: "El motor suele funcionar en un modo de emergencia con valores estimados, pero no es una solución: pierde potencia, puede consumir más y deja el testigo encendido." },
      { question: "¿Merece la pena un caudalímetro barato?", answer: "Los de calidad dudosa son una causa conocida de que el código vuelva. Si lo cambias, elige una referencia de calidad equivalente a la original." },
    ],
    relatedArticleSlugs: ["coche-pierde-potencia-modo-emergencia", "filtro-particulas-dpf-egr-diesel", "filtros-coche-aire-habitaculo-combustible"],
    relatedCodes: ["p0171", "p0401", "p0299"],
    sources: [S.dgtMechanics, S.dgtEmergencyMode],
    updatedAt: D,
  },
  {
    code: "P0128",
    slug: "p0128",
    name: "Temperatura del refrigerante por debajo de la temperatura de regulación del termostato",
    shortName: "Termostato abierto o motor que no calienta",
    system: "refrigeracion",
    severity: "baja",
    directAnswer:
      "P0128 significa que el motor tarda demasiado en llegar a su temperatura de trabajo. Casi siempre es un termostato que se queda abierto: el refrigerante pasa al radiador desde el principio y el motor no calienta. Lo notarás porque la aguja de temperatura sube poco, la calefacción tarda en dar calor y el consumo aumenta, sobre todo en invierno. No es urgente, pero conviene arreglarlo.",
    meaning: [
      "La centralita calcula cuánto debería tardar el motor en calentarse según la temperatura ambiente y el uso. Si la temperatura del refrigerante no alcanza el umbral en ese tiempo, registra P0128. Un motor que trabaja frío consume más, contamina más y se desgasta antes.",
    ],
    causes: [
      { cause: "Termostato abierto o que no cierra del todo", clue: "Aguja de temperatura baja en carretera y calefacción tibia." },
      { cause: "Sensor de temperatura con lectura baja", clue: "La aguja del cuadro marca normal pero la centralita ve el motor frío." },
      { cause: "Ventilador del radiador funcionando siempre", clue: "El ventilador se oye nada más arrancar en frío." },
      { cause: "Nivel de refrigerante bajo", clue: "Depósito por debajo del mínimo y lectura errática." },
    ],
    checks: [
      "Con el motor frío, revisa el nivel del depósito de expansión. Nunca lo abras con el motor caliente.",
      "Observa si la aguja de temperatura llega a la posición habitual tras 15 o 20 minutos de conducción.",
      "Comprueba si el ventilador del radiador funciona con el motor frío, cuando no debería.",
      "Con un lector, compara la temperatura del refrigerante que informa la centralita con la del cuadro.",
    ],
    canDrive:
      "Sí, con normalidad. El riesgo es económico (más consumo y desgaste), no de seguridad, siempre que no haya pérdida de refrigerante.",
    workshop: [
      "La temperatura sube por encima de lo normal en otros momentos: puede ser un termostato que falla en ambos sentidos.",
      "Hay pérdida de refrigerante.",
      "Quieres aprovechar el cambio de termostato para renovar el refrigerante.",
    ],
    itv:
      "No suele ser motivo de rechazo por sí mismo, aunque un motor frío puede dar peores valores en la prueba de gases y el testigo encendido figura en la lectura OBD.",
    faqs: [
      { question: "¿Es caro cambiar el termostato?", answer: "En muchos motores es una reparación sencilla, aunque en otros está integrado en una carcasa o en la bomba de agua y la mano de obra sube. Pide presupuesto con la referencia exacta." },
      { question: "¿Por qué aparece más en invierno?", answer: "Con frío ambiente, un termostato abierto impide aún más que el motor se caliente, y la centralita detecta el retraso." },
    ],
    relatedArticleSlugs: ["liquido-refrigerante-anticongelante", "coche-gasta-mas-combustible", "motor-sobrecalentado-que-hacer"],
    relatedCodes: ["p0118", "p0172"],
    sources: [S.dgtMechanics, S.dgtCommonFailures],
    updatedAt: D,
  },
  {
    code: "P0118",
    slug: "p0118",
    name: "Circuito del sensor de temperatura del refrigerante: señal alta",
    shortName: "Sensor de temperatura con señal alta",
    system: "refrigeracion",
    severity: "media",
    directAnswer:
      "P0118 indica que la señal eléctrica del sensor de temperatura del refrigerante es demasiado alta, lo que en la mayoría de motores equivale a circuito abierto: la centralita interpreta un motor muy frío. Lo habitual es un conector oxidado o suelto, un cable roto o el propio sensor. Como la centralita deja de conocer la temperatura real, suele activar el ventilador de forma permanente, enriquecer la mezcla y dificultar el arranque en caliente.",
    meaning: [
      "El sensor es una resistencia que cambia con la temperatura. Con el circuito abierto, la tensión de la señal sube a su valor máximo y la centralita lo detecta como avería eléctrica. Es distinto de P0128, que indica un motor que de verdad no calienta.",
    ],
    causes: [
      { cause: "Conector desenchufado, oxidado o con pines abiertos", clue: "El código aparece o desaparece al mover el conector o con baches." },
      { cause: "Cable roto o mordido", clue: "Cables junto al colector o rozando con piezas móviles." },
      { cause: "Sensor averiado", clue: "Resistencia del sensor fuera de la tabla del fabricante." },
    ],
    checks: [
      "Con el motor frío y apagado, localiza el sensor y comprueba que el conector está firme y limpio.",
      "Con datos en vivo, mira la temperatura del refrigerante: un valor fijo muy bajo (por ejemplo, -40 °C) confirma circuito abierto.",
      "Vigila la aguja de temperatura del cuadro y el nivel de refrigerante mientras lo resuelves.",
    ],
    canDrive:
      "Con precaución y por poco tiempo. Si el ventilador funciona siempre el motor no debería sobrecalentarse, pero si la aguja sube, detente: la centralita no está viendo la temperatura real.",
    workshop: [
      "La aguja de temperatura sube o se comporta de forma errática.",
      "El ventilador no funciona y el motor se calienta.",
      "No encuentras el defecto en el conector.",
    ],
    itv:
      "La mezcla enriquecida puede empeorar la prueba de gases y el testigo de avería encendido aparece en la lectura OBD.",
    faqs: [
      { question: "¿Es lo mismo que el termostato?", answer: "No. P0118 es un fallo eléctrico del sensor o su cableado; P0128 indica que el motor no calienta lo suficiente, normalmente por el termostato." },
      { question: "¿Por qué se pone el ventilador siempre?", answer: "Es una protección: sin un dato fiable de temperatura, la centralita refrigera al máximo para evitar un sobrecalentamiento." },
    ],
    relatedArticleSlugs: ["motor-sobrecalentado-que-hacer", "liquido-refrigerante-anticongelante"],
    relatedAnswerSlugs: ["temperatura-sube-atasco-baja-carretera"],
    relatedCodes: ["p0128", "p0172"],
    sources: [S.dgtMechanics, S.dgtWarningLights],
    updatedAt: D,
  },
  {
    code: "P0335",
    slug: "p0335",
    name: "Circuito del sensor de posición del cigüeñal A",
    shortName: "Sensor de cigüeñal",
    system: "sensores",
    severity: "alta",
    directAnswer:
      "P0335 indica que la centralita no recibe una señal válida del sensor de posición del cigüeñal. Sin esa señal el motor no sabe cuándo inyectar ni cuándo dar chispa, así que el síntoma típico es que el coche se apaga en marcha o no arranca, a menudo cuando está caliente. Las causas habituales son el propio sensor, su conector o cableado y, con menos frecuencia, la corona dentada que lee.",
    meaning: [
      "El sensor lee los dientes de una rueda fónica unida al cigüeñal y entrega a la centralita la velocidad y la posición del motor. Es una de las señales imprescindibles: si falla de forma intermitente, el motor se para sin aviso y puede volver a arrancar al enfriarse.",
    ],
    causes: [
      { cause: "Sensor deteriorado por calor", clue: "El motor se para en caliente y vuelve a arrancar tras enfriarse un rato." },
      { cause: "Conector o cableado dañado", clue: "Fallos con baches o al mover el mazo de cables." },
      { cause: "Suciedad metálica en la punta del sensor o separación incorrecta", clue: "Tras una reparación del embrague o del motor." },
      { cause: "Rueda fónica dañada", clue: "Código persistente con sensor nuevo y cableado correcto." },
    ],
    checks: [
      "Comprueba si el cuentarrevoluciones se mueve al arrancar: si se queda a cero, la centralita no ve el giro.",
      "Anota si el fallo ocurre en caliente, con lluvia o tras baches.",
      "Revisa que el conector del sensor está firme, si es accesible sin desmontar piezas.",
    ],
    canDrive:
      "No lo recomendamos más allá de lo imprescindible: un fallo intermitente puede apagar el motor en plena circulación, con pérdida de asistencia de dirección y freno.",
    workshop: [
      "El motor se ha parado en marcha alguna vez.",
      "El coche no arranca y el cuentarrevoluciones no se mueve.",
      "El código vuelve tras cambiar el sensor.",
    ],
    itv:
      "El testigo encendido figura en la lectura OBD, pero el riesgo principal es quedarse tirado o que el motor se pare en un lugar peligroso.",
    faqs: [
      { question: "¿Por qué arranca cuando se enfría?", answer: "Muchos sensores fallan por una fisura interna que se abre con el calor; al enfriarse, la conexión se recupera temporalmente." },
      { question: "¿Es caro el sensor de cigüeñal?", answer: "La pieza no suele ser cara; el coste depende de lo accesible que esté. En algunos motores se cambia en minutos y en otros hay que desmontar protecciones." },
    ],
    relatedArticleSlugs: ["coche-no-arranca", "coche-pierde-potencia-modo-emergencia"],
    relatedCodes: ["p0340", "p0016", "p0300"],
    sources: [S.dgtMechanics, S.dgtCommonFailures],
    updatedAt: D,
  },
  {
    code: "P0340",
    slug: "p0340",
    name: "Circuito del sensor de posición del árbol de levas A (banco 1 o sensor único)",
    shortName: "Sensor de árbol de levas",
    system: "sensores",
    severity: "media",
    directAnswer:
      "P0340 indica un problema en la señal del sensor del árbol de levas, que permite a la centralita saber en qué fase está cada cilindro. Lo más habitual es que el coche tarde más en arrancar porque la centralita tiene que deducir la fase. Las causas son el sensor, su conector o cableado y, a veces, un problema de distribución. Si aparece junto a P0016 o tras cambiar la correa, revisa el calado.",
    meaning: [
      "Con la señal del cigüeñal la centralita sabe la posición del pistón; con la del árbol de levas, si ese cilindro está en compresión o en escape. Muchos motores pueden funcionar sin ella en un modo de emergencia, pero arrancan peor y pueden perder potencia.",
      "En motores con distribución variable, la misma señal sirve para comprobar que el árbol de levas está en la posición ordenada. Por eso un fallo del sensor puede venir acompañado de códigos de distribución variable, y un problema mecánico de distribución puede presentarse como un aparente fallo del sensor.",
    ],
    causes: [
      { cause: "Sensor averiado", clue: "Arranque largo, sobre todo en caliente." },
      { cause: "Conector o cableado", clue: "Pines oxidados, cableado junto al colector o fallo intermitente." },
      { cause: "Distribución desplazada", clue: "Aparece tras cambiar la correa o junto a P0016; ruido de cadena al arrancar." },
      { cause: "Batería baja durante el arranque", clue: "Código que aparece solo tras arranques con la batería débil." },
    ],
    checks: [
      "Anota si el código apareció después de un cambio de correa de distribución o de una reparación.",
      "Comprueba la batería: una tensión muy baja al arrancar puede generar códigos de sensores.",
      "Revisa visualmente el conector del sensor si es accesible.",
    ],
    canDrive:
      "Si el coche arranca y funciona con normalidad, puedes circular con precaución hasta el taller. Si además hay ruido de distribución o P0016, limita el uso.",
    workshop: [
      "El código apareció tras cambiar la distribución.",
      "Hay ruido metálico al arrancar.",
      "El coche se para o no arranca.",
    ],
    itv:
      "El testigo de avería encendido se detecta en la lectura OBD en los turismos Euro 5 y posteriores.",
    faqs: [
      { question: "¿Puede ser la correa de distribución?", answer: "Sí, si se ha saltado algún diente o se montó desplazada, la señal del árbol de levas llega fuera de lugar. Suele acompañarse de P0016." },
      { question: "¿Qué es el banco 1?", answer: "El lado del motor donde está el cilindro 1. En un cuatro cilindros en línea solo hay banco 1." },
    ],
    relatedArticleSlugs: ["correa-distribucion-cuando-cambiar", "coche-no-arranca"],
    relatedCodes: ["p0335", "p0016"],
    sources: [S.dgtMechanics],
    updatedAt: D,
  },
  {
    code: "P0016",
    slug: "p0016",
    name: "Correlación entre posición del cigüeñal y del árbol de levas (banco 1, sensor A)",
    shortName: "Desfase cigüeñal-árbol de levas",
    system: "sensores",
    severity: "alta",
    directAnswer:
      "P0016 significa que las señales del cigüeñal y del árbol de levas no están sincronizadas como deberían. En un coche con años, la causa que más preocupa es una cadena de distribución estirada o una correa que ha saltado un diente; también puede ser el variador de fase o su electroválvula, o aceite inadecuado o escaso. Revísalo pronto: un desfase importante puede acabar en contacto entre válvulas y pistones.",
    meaning: [
      "La centralita compara el momento en que llega la señal del árbol de levas respecto a la del cigüeñal. Si la diferencia supera lo previsto, registra P0016. En motores con distribución variable, la posición se ajusta con aceite a presión, por eso el nivel y la viscosidad del aceite influyen.",
    ],
    causes: [
      { cause: "Cadena de distribución estirada o tensor débil", clue: "Traqueteo metálico durante los primeros segundos tras arrancar." },
      { cause: "Correa de distribución desplazada", clue: "Código tras un cambio de correa o con correa muy antigua." },
      { cause: "Variador de fase o electroválvula de distribución variable", clue: "Ralentí irregular y códigos de distribución variable asociados." },
      { cause: "Aceite bajo, sucio o de viscosidad incorrecta", clue: "Cambios de aceite espaciados o nivel por debajo del mínimo." },
    ],
    checks: [
      "Comprueba el nivel de aceite con el coche en llano y el motor frío.",
      "Escucha el arranque en frío: un traqueteo de cadena de unos segundos es una señal clara.",
      "Revisa en el historial cuándo se cambió la correa o si la cadena tiene antecedentes.",
    ],
    canDrive:
      "Limítalo al mínimo. Con ruido de distribución, conduce solo hasta el taller o pide grúa: una rotura o salto de la distribución puede destruir el motor.",
    workshop: [
      "Hay ruido de cadena o el código apareció tras un cambio de correa.",
      "El motor pierde potencia o va a tirones.",
      "Cualquier P0016 persistente: requiere comprobar el calado.",
    ],
    itv:
      "Más allá de la lectura OBD, el riesgo real es mecánico: conviene resolverlo antes de cualquier trayecto largo, incluido el viaje a la ITV.",
    faqs: [
      { question: "¿Puede ser solo el aceite?", answer: "En motores con distribución variable, sí: aceite bajo o muy degradado puede generar el código. Si tras un cambio de aceite correcto persiste, revisa la distribución." },
      { question: "¿Es lo mismo que P0340?", answer: "No. P0340 indica que falta o falla la señal del sensor; P0016 indica que la señal llega, pero desfasada respecto al cigüeñal." },
    ],
    relatedArticleSlugs: ["correa-distribucion-cuando-cambiar", "aceite-motor-nivel-consumo-cambio"],
    relatedCodes: ["p0340", "p0335"],
    sources: [S.dgtMechanics],
    updatedAt: D,
  },
  {
    code: "P0420",
    slug: "p0420",
    name: "Eficiencia del sistema catalizador por debajo del umbral (banco 1)",
    shortName: "Catalizador poco eficiente",
    system: "emisiones",
    severity: "baja",
    directAnswer:
      "P0420 significa que la centralita, comparando la sonda lambda anterior y la posterior al catalizador, considera que este ya no limpia los gases lo suficiente. Es muy común en gasolina de más de 150.000 km. Antes de cambiar el catalizador, que es caro, descarta una fuga en el escape, una sonda posterior defectuosa y, sobre todo, fallos de encendido o mezcla rica que lo hayan dañado: si no los corriges, el catalizador nuevo también acabará fallando.",
    meaning: [
      "Un catalizador sano almacena oxígeno, de modo que la sonda posterior muestra una señal estable mientras la anterior oscila. Cuando el catalizador pierde capacidad, la señal posterior empieza a copiar a la anterior y la centralita registra P0420. En motores en V, el equivalente del banco 2 es P0430.",
    ],
    causes: [
      { cause: "Catalizador envejecido o contaminado", clue: "Coche de muchos kilómetros, consumo de aceite o fallos de encendido en el pasado." },
      { cause: "Sonda lambda posterior defectuosa", clue: "Señal plana o lenta en datos en vivo." },
      { cause: "Fuga en el escape cerca de las sondas", clue: "Ruido de escape, hollín en una junta o en una soldadura." },
      { cause: "Mezcla rica o fallos de encendido", clue: "Otros códigos presentes (P0172, P0300) o consumo elevado." },
    ],
    checks: [
      "Revisa si hay otros códigos: los fallos de encendido y la mezcla rica deben arreglarse antes.",
      "Escucha el escape en frío buscando fugas.",
      "Con datos en vivo, compara las dos sondas: la posterior debe ser bastante más estable que la anterior.",
      "Evita aditivos «milagro»: como mucho, mejoran puntualmente la lectura.",
    ],
    canDrive:
      "Sí, el coche suele funcionar con normalidad. Si notas olor a azufre fuerte, pérdida de potencia o el escape muy caliente, el catalizador podría estar obstruido: revísalo pronto.",
    workshop: [
      "Pérdida de potencia o sensación de escape obstruido.",
      "Olor intenso a huevos podridos.",
      "Quieres saber si es el catalizador o la sonda antes de gastar dinero.",
    ],
    itv:
      "Es uno de los códigos que más preocupa antes de la ITV: un catalizador ineficiente puede hacer que fallen los gases en un motor de gasolina, y el testigo encendido aparece en la lectura OBD de los vehículos Euro 5 y posteriores.",
    faqs: [
      { question: "¿Se puede quitar el catalizador?", answer: "No legalmente. Retirar o vaciar el catalizador altera el sistema de emisiones homologado y es motivo de rechazo en la ITV, además de una infracción." },
      { question: "¿Un catalizador de recambio barato sirve?", answer: "Debe estar homologado para tu vehículo. Los de baja carga de metales preciosos pueden reactivar el código en pocos meses." },
    ],
    relatedArticleSlugs: ["checklist-itv-coche-antiguo", "humo-blanco-azul-negro-escape", "itv-frecuencia-desfavorable-negativa"],
    relatedAnswerSlugs: ["itv-gases-altos-gasolina-antiguo"],
    relatedCodes: ["p0133", "p0300", "p0172"],
    sources: [S.itvManual, S.itvLaw, S.obdRegulation],
    updatedAt: D,
  },
  {
    code: "P0133",
    slug: "p0133",
    name: "Circuito de la sonda lambda: respuesta lenta (banco 1, sensor 1)",
    shortName: "Sonda lambda lenta",
    system: "emisiones",
    severity: "baja",
    directAnswer:
      "P0133 indica que la sonda lambda anterior al catalizador (banco 1, sensor 1) tarda demasiado en reaccionar a los cambios de mezcla. Es típico de sondas con muchos kilómetros o contaminadas por aceite o refrigerante. El coche suele funcionar bien, pero puede consumir algo más y, a la larga, perjudicar al catalizador. Antes de cambiarla, descarta fugas de escape y la causa de la contaminación.",
    meaning: [
      "La sonda anterior oscila continuamente entre mezcla rica y pobre mientras la centralita ajusta la inyección. Si esas oscilaciones se vuelven lentas, la regulación pierde precisión. «Sensor 1» es la sonda antes del catalizador y «sensor 2», la posterior.",
      "Con el motor caliente, una sonda sana cambia de rica a pobre varias veces por segundo. Una sonda envejecida sigue funcionando, pero tarda más en cada transición, la mezcla oscila con más amplitud y el catalizador recibe picos de combustible u oxígeno que acortan su vida. Por eso P0133 suele preceder, meses después, a un P0420.",
    ],
    causes: [
      { cause: "Sonda envejecida", clue: "Más de 150.000 km con la sonda original." },
      { cause: "Contaminación por aceite o refrigerante", clue: "Consumo de aceite o de refrigerante, humo azul o blanco." },
      { cause: "Fuga de escape antes de la sonda", clue: "Ruido en frío en la zona del colector." },
      { cause: "Calefactor de la sonda o su cableado", clue: "Códigos de calefactor asociados (P0030 a P0032)." },
    ],
    checks: [
      "Comprueba si el motor consume aceite o refrigerante.",
      "Revisa fugas de escape cerca del colector.",
      "Con datos en vivo, observa la oscilación de la sonda anterior con el motor caliente a unas 2.000 rpm.",
    ],
    canDrive:
      "Sí. No es urgente, pero conviene revisarlo antes de la ITV y para no dañar el catalizador.",
    workshop: [
      "Aparece junto a P0420 o a fallos de encendido.",
      "El consumo ha subido de forma notable.",
      "Sospechas de consumo de aceite o refrigerante.",
    ],
    itv:
      "El testigo encendido se detecta en la lectura OBD y una regulación imprecisa puede empeorar los gases de un motor de gasolina.",
    faqs: [
      { question: "¿Cuál es el sensor 1?", answer: "La sonda situada antes del catalizador, que regula la mezcla. La posterior (sensor 2) vigila el catalizador." },
      { question: "¿Vale cualquier sonda universal?", answer: "Las específicas para el modelo ahorran problemas de conectores y tiempos de respuesta. Comprueba la referencia." },
    ],
    relatedArticleSlugs: ["coche-gasta-mas-combustible", "humo-blanco-azul-negro-escape"],
    relatedCodes: ["p0420", "p0171"],
    sources: [S.dgtMechanics, S.obdRegulation],
    updatedAt: D,
  },
  {
    code: "P0401",
    slug: "p0401",
    name: "Recirculación de gases de escape (EGR): flujo insuficiente",
    shortName: "EGR con flujo insuficiente",
    system: "emisiones",
    severity: "media",
    directAnswer:
      "P0401 significa que la centralita ordena abrir la válvula EGR pero no detecta el efecto esperado: pasa menos gas de escape del previsto. En diésel con años, la causa casi siempre es carbonilla en la válvula o los conductos, sobre todo en coches que hacen trayectos cortos. También puede fallar el actuador, el sensor de posición o la electroválvula de mando. Anular la EGR no es legal ni pasa la ITV.",
    meaning: [
      "La EGR devuelve parte de los gases de escape a la admisión para bajar la temperatura de combustión y reducir los óxidos de nitrógeno. La centralita verifica que funciona observando la presión de admisión, el caudal de aire o la temperatura. Si no ve el cambio, registra P0401.",
    ],
    causes: [
      { cause: "Válvula o conductos obstruidos por carbonilla", clue: "Uso urbano, trayectos cortos y muchos kilómetros." },
      { cause: "Actuador eléctrico o neumático averiado", clue: "La válvula no se mueve al probarla con el equipo de diagnóstico." },
      { cause: "Electroválvula o tubo de vacío (EGR neumática)", clue: "Tubo de vacío agrietado o suelto." },
      { cause: "Enfriador de EGR obstruido", clue: "Código persistente con válvula limpia." },
    ],
    checks: [
      "Recuerda el tipo de uso: si casi todo son trayectos cortos, la carbonilla es la sospecha principal.",
      "Revisa tubos de vacío y conectores visibles de la EGR.",
      "Haz un trayecto por carretera a ritmo constante: no limpia una válvula obstruida, pero ayuda a prevenir.",
    ],
    canDrive:
      "En general sí, aunque puede aparecer pérdida de potencia o modo emergencia. Si va acompañado de humo negro intenso o del testigo de filtro de partículas, revísalo pronto.",
    workshop: [
      "El coche entra en modo emergencia.",
      "Aparece también el testigo del filtro de partículas.",
      "Quieres una limpieza o sustitución de la EGR.",
    ],
    itv:
      "La ITV comprueba que los sistemas antipolución no están anulados ni manipulados; una EGR anulada es un defecto grave. Además, el testigo encendido aparece en la lectura OBD de los vehículos Euro 5 y posteriores.",
    faqs: [
      { question: "¿Es legal anular la EGR?", answer: "No. Es una manipulación del sistema de emisiones homologado, supone rechazo en la ITV y puede conllevar sanción." },
      { question: "¿Sirven los aditivos para la EGR?", answer: "Pueden ayudar algo en la prevención, pero una válvula con costras de carbonilla necesita limpieza mecánica o sustitución." },
    ],
    relatedArticleSlugs: ["filtro-particulas-dpf-egr-diesel", "coche-pierde-potencia-modo-emergencia"],
    relatedCodes: ["p2002", "p2463", "p0101"],
    sources: [S.hellaDpf, S.itvManual, S.itvLaw],
    updatedAt: D,
  },
  {
    code: "P2002",
    slug: "p2002",
    name: "Eficiencia del filtro de partículas diésel por debajo del umbral (banco 1)",
    shortName: "Filtro de partículas poco eficiente",
    system: "emisiones",
    severity: "media",
    directAnswer:
      "P2002 indica que el filtro de partículas no está reteniendo el hollín como debería, según la presión diferencial que mide la centralita. Puede deberse a un filtro agrietado o vaciado, a un sensor de presión diferencial averiado o a sus tubos sueltos o perforados. Si ves humo negro por el escape de un diésel con filtro, sospecha del filtro; si no, empieza por el sensor y sus tubos.",
    meaning: [
      "El filtro de partículas se vigila midiendo la diferencia de presión entre su entrada y su salida. Un filtro sano y limpio genera una pequeña diferencia que crece con el hollín. Si la diferencia es demasiado baja, la centralita deduce que los gases pasan sin filtrar y registra P2002.",
    ],
    causes: [
      { cause: "Tubo del sensor de presión diferencial suelto, roto o invertido", clue: "Tubos de goma agrietados o desconectados junto al filtro." },
      { cause: "Sensor de presión diferencial averiado", clue: "Lectura incoherente en datos en vivo con el motor parado (debería ser cero)." },
      { cause: "Filtro agrietado o dañado", clue: "Humo negro visible y hollín en la salida del escape." },
      { cause: "Filtro vaciado o manipulado", clue: "Coche comprado de segunda mano con historial dudoso." },
    ],
    checks: [
      "Mira la salida del escape: en un diésel con filtro sano debería estar casi limpia.",
      "Revisa los dos tubos que van del filtro al sensor de presión diferencial.",
      "Con datos en vivo, comprueba que la presión diferencial marca cerca de cero con el motor parado.",
    ],
    canDrive:
      "Normalmente sí, sin riesgo inmediato para el motor. El problema es de emisiones e ITV.",
    workshop: [
      "Humo negro visible.",
      "El sensor y sus tubos están bien y el código persiste.",
      "Sospechas que el filtro fue manipulado antes de comprar el coche.",
    ],
    itv:
      "Un filtro de partículas retirado, vaciado o ineficaz supone rechazo: la ITV comprueba la presencia y el estado de los sistemas antipolución y la opacidad de humos en diésel.",
    faqs: [
      { question: "¿Qué diferencia hay con P2463?", answer: "P2002 dice que el filtro retiene poco (diferencia de presión baja). P2463 dice que ha acumulado demasiado hollín (diferencia alta)." },
      { question: "¿Se puede limpiar un filtro agrietado?", answer: "No. La limpieza sirve para filtros obstruidos. Uno agrietado debe sustituirse por otro homologado." },
    ],
    relatedArticleSlugs: ["filtro-particulas-dpf-egr-diesel", "humo-blanco-azul-negro-escape"],
    relatedCodes: ["p2463", "p0401"],
    sources: [S.hellaDpf, S.itvManual, S.itvLaw],
    updatedAt: D,
  },
  {
    code: "P2463",
    slug: "p2463",
    name: "Filtro de partículas diésel: acumulación de hollín",
    shortName: "Filtro de partículas saturado",
    system: "emisiones",
    severity: "media",
    directAnswer:
      "P2463 significa que el filtro de partículas tiene más hollín del que puede gestionar y las regeneraciones no lo están quemando. Suele ocurrir en diésel usados casi solo en ciudad, cuyas regeneraciones se interrumpen. Si el testigo acaba de encenderse, un trayecto por autovía a ritmo constante puede bastar; si el coche ya está en modo emergencia, hace falta una regeneración forzada en taller y averiguar por qué no regeneraba.",
    meaning: [
      "La centralita estima la carga de hollín con la presión diferencial y un modelo de uso. Cuando la carga supera el límite, registra P2463 y suele limitar la potencia para proteger el filtro. Un filtro muy saturado puede llegar a necesitar limpieza fuera del coche o sustitución.",
    ],
    causes: [
      { cause: "Trayectos cortos que interrumpen las regeneraciones", clue: "Uso urbano casi exclusivo y ventilador funcionando tras apagar el motor." },
      { cause: "Sensor de presión diferencial o sus tubos", clue: "Lectura incoherente; el código vuelve justo después de regenerar." },
      { cause: "Exceso de hollín por otra avería", clue: "Inyectores en mal estado, EGR o turbo con fallos (P0401, P0299)." },
      { cause: "Aceite inadecuado o nivel alto", clue: "Aceite no apto para filtro de partículas o nivel que sube por dilución con gasóleo." },
    ],
    checks: [
      "Si el coche aún no está en modo emergencia, haz 20 o 30 minutos por autovía a ritmo constante y sin parar el motor.",
      "Comprueba el nivel de aceite: si sube por encima del máximo, puede haber gasóleo diluido por regeneraciones fallidas.",
      "Revisa que el aceite cumple la especificación del fabricante para filtro de partículas.",
    ],
    canDrive:
      "Con el testigo recién encendido, sí, y conviene hacer un trayecto de carretera. En modo emergencia o con el testigo de motor también encendido, conduce lo justo y acude al taller.",
    workshop: [
      "El coche está en modo emergencia.",
      "El nivel de aceite ha subido.",
      "El testigo vuelve a encenderse pocos días después de regenerar.",
    ],
    itv:
      "Un filtro obstruido no es en sí motivo de rechazo, pero el testigo encendido aparece en la lectura OBD y un diésel en mal estado puede no superar la opacidad.",
    faqs: [
      { question: "¿Cuánto hay que circular para regenerar?", answer: "Depende del modelo; como orientación, 20 o 30 minutos por encima de unas 2.000 rpm de forma continua. Consulta el manual: algunos coches indican el procedimiento exacto." },
      { question: "¿Se arregla con aditivos?", answer: "Los aditivos pueden ayudar a la combustión del hollín, pero no sustituyen a una regeneración completa ni resuelven la causa." },
    ],
    relatedArticleSlugs: ["filtro-particulas-dpf-egr-diesel", "coche-pierde-potencia-modo-emergencia", "aceite-motor-nivel-consumo-cambio"],
    relatedCodes: ["p2002", "p0401", "p0299"],
    sources: [S.hellaDpf, S.dgtEmergencyMode],
    updatedAt: D,
  },
  {
    code: "P0299",
    slug: "p0299",
    name: "Turbocompresor o compresor A: presión insuficiente",
    shortName: "Falta de presión del turbo",
    system: "turbo",
    severity: "media",
    directAnswer:
      "P0299 indica que la presión de sobrealimentación queda por debajo de la que pide la centralita. El coche pierde fuerza, a veces de golpe, y puede entrar en modo emergencia. Antes de pensar en el turbo, revisa lo más frecuente: un manguito del intercooler roto o suelto, una abrazadera floja o un tubo de vacío del actuador. Si además hay humo azul o consumo de aceite, el turbo puede estar desgastado.",
    meaning: [
      "La centralita compara la presión de admisión medida con la presión objetivo según la carga. Si durante un tiempo la presión real es claramente menor, registra P0299 y limita el par para proteger el motor.",
    ],
    causes: [
      { cause: "Fuga en manguitos o intercooler", clue: "Silbido o soplido al acelerar y aceite en los manguitos." },
      { cause: "Actuador o geometría variable agarrotada", clue: "Falta de fuerza en bajas vueltas en diésel con uso urbano." },
      { cause: "Electroválvula o tubos de vacío del turbo", clue: "Tubos agrietados o sueltos." },
      { cause: "Turbo desgastado", clue: "Humo azul, consumo de aceite y holgura en el eje." },
      { cause: "Filtro de partículas o escape obstruido", clue: "Aparece con P2463 o en coches muy urbanos." },
    ],
    checks: [
      "Con el motor frío, revisa manguitos y abrazaderas del circuito de admisión e intercooler.",
      "Busca restos de aceite en las uniones: una pequeña película es normal, un goteo no.",
      "Escucha al acelerar si hay soplidos o silbidos nuevos.",
      "Comprueba el nivel de aceite y si el consumo ha aumentado.",
    ],
    canDrive:
      "Sí, con suavidad. Si hay humo azul abundante, ruido de sirena o el nivel de aceite baja rápido, detente: un turbo que pierde aceite puede dañar el motor.",
    workshop: [
      "Humo azul o consumo de aceite.",
      "Ruido metálico o de sirena del turbo.",
      "No encuentras fugas y el código persiste.",
    ],
    itv:
      "En diésel, la falta de presión suele empeorar la opacidad de humos; el testigo encendido aparece en la lectura OBD.",
    faqs: [
      { question: "¿Significa que el turbo está roto?", answer: "No necesariamente. La mayoría de las veces el turbo funciona y el problema está en una fuga, el actuador o el control." },
      { question: "¿Qué diferencia hay con P0234?", answer: "P0299 es presión insuficiente; P0234 es presión excesiva, normalmente por geometría o actuador bloqueados en carga." },
    ],
    relatedArticleSlugs: ["coche-pierde-potencia-modo-emergencia", "humo-blanco-azul-negro-escape"],
    relatedCodes: ["p0234", "p0101", "p2463"],
    sources: [S.dgtEmergencyMode, S.dgtMechanics],
    updatedAt: D,
  },
  {
    code: "P0234",
    slug: "p0234",
    name: "Turbocompresor o compresor A: condición de sobrepresión",
    shortName: "Sobrepresión del turbo",
    system: "turbo",
    severity: "alta",
    directAnswer:
      "P0234 significa que la presión del turbo ha superado el límite permitido. Para proteger el motor, la centralita entra en modo emergencia y corta potencia, a menudo al acelerar fuerte o en una cuesta. La causa habitual es una geometría variable agarrotada en posición de carga o un actuador que no regula; también un sensor de presión defectuoso. No fuerces el coche hasta revisarlo.",
    meaning: [
      "La sobrepresión somete al motor a esfuerzos para los que no está diseñado. Por eso la respuesta de la centralita es inmediata: limita el par hasta que se apaga el motor. Si la sobrepresión real se repite, puede dañar juntas, pistones o el propio turbo.",
      "Es habitual en diésel con turbo de geometría variable que circulan casi siempre en ciudad: los álabes se cubren de carbonilla y dejan de abrir cuando la presión sube. El fallo aparece justo cuando más se exige al motor, por ejemplo al incorporarse a una autovía o adelantar.",
    ],
    causes: [
      { cause: "Geometría variable agarrotada por carbonilla", clue: "Diésel con uso urbano; corte de potencia al acelerar fuerte." },
      { cause: "Actuador o electroválvula de control", clue: "Tubo de vacío suelto o actuador que no se mueve." },
      { cause: "Sensor de presión de admisión defectuoso", clue: "Lectura alta incluso al ralentí en datos en vivo." },
    ],
    checks: [
      "Anota en qué situación se produce: aceleración fuerte, cuesta, adelantamiento.",
      "Revisa tubos de vacío y conectores del actuador si son accesibles.",
      "Con datos en vivo, compara presión objetivo y real al ralentí: deben ser parecidas a la presión atmosférica.",
    ],
    canDrive:
      "Conduce con suavidad, sin aceleraciones fuertes, solo hasta el taller. No adelantes confiando en una potencia que puede cortarse.",
    workshop: [
      "El corte de potencia se repite.",
      "Hay ruido anómalo del turbo.",
      "Necesitas comprobar la geometría o el actuador.",
    ],
    itv:
      "El testigo encendido aparece en la lectura OBD; además, un turbo mal regulado puede afectar a la opacidad de un diésel.",
    faqs: [
      { question: "¿Por qué se recupera al apagar y encender?", answer: "El modo emergencia se mantiene hasta el siguiente arranque. Si la causa sigue, volverá a activarse en cuanto la presión se dispare de nuevo." },
      { question: "¿Se puede limpiar la geometría variable?", answer: "En muchos casos sí, desmontando el turbo o con procedimientos de taller. Los productos por admisión rara vez resuelven un agarrotamiento serio." },
    ],
    relatedArticleSlugs: ["coche-pierde-potencia-modo-emergencia"],
    relatedCodes: ["p0299"],
    sources: [S.dgtEmergencyMode, S.dgtMechanics],
    updatedAt: D,
  },
  {
    code: "P0087",
    slug: "p0087",
    name: "Presión del rail o del sistema de combustible demasiado baja",
    shortName: "Presión de combustible baja",
    system: "combustible",
    severity: "alta",
    directAnswer:
      "P0087 indica que la presión de combustible en el rail está por debajo de la que pide la centralita. En diésel common rail y gasolina de inyección directa provoca tirones, pérdida de potencia, modo emergencia y, a veces, que el motor se pare. Lo primero que hay que revisar es el filtro de combustible; después, la bomba de baja presión del depósito, entradas de aire en los tubos, el regulador o el sensor de presión y, por último, la bomba de alta.",
    meaning: [
      "La bomba de alta presión alimenta el rail común y la centralita regula la presión con una válvula y un sensor. Si la presión real queda por debajo de la objetivo, registra P0087. Un caso típico en diésel es un filtro obstruido o con agua tras años sin cambiarlo.",
    ],
    causes: [
      { cause: "Filtro de combustible obstruido o con agua", clue: "Filtro sin cambiar en mucho tiempo; fallos al acelerar en cuesta." },
      { cause: "Bomba de baja presión débil (en el depósito)", clue: "Arranque largo y ruido de bomba distinto al dar el contacto." },
      { cause: "Entrada de aire en los tubos de alimentación (diésel)", clue: "Burbujas en tubos transparentes o arranque difícil tras estar parado." },
      { cause: "Regulador o sensor de presión", clue: "Presión incoherente con el motor funcionando correctamente." },
      { cause: "Bomba de alta presión desgastada", clue: "Código persistente con alimentación correcta; requiere diagnóstico de taller." },
    ],
    checks: [
      "Revisa cuándo se cambió el filtro de combustible: si no lo sabes, es lo primero.",
      "Descarta haber repostado poco o en reserva prolongada: el depósito casi vacío favorece aspirar aire.",
      "No desmontes tubos de alta presión: la presión en un common rail es peligrosa.",
    ],
    canDrive:
      "Limítalo al mínimo. El motor puede pararse en marcha, y una bomba de alta que trabaja sin lubricación suficiente puede dañarse y contaminar todo el sistema con virutas.",
    workshop: [
      "El motor se para o no arranca.",
      "El código persiste tras cambiar el filtro.",
      "Ruidos de la bomba de alta presión.",
    ],
    itv:
      "El testigo encendido aparece en la lectura OBD; además, un motor que no rinde puede dar peores valores en la prueba de emisiones.",
    faqs: [
      { question: "¿Puede ser un mal repostaje?", answer: "Sí. Combustible con agua o contaminado, o un error de combustible, pueden causar presión baja. Si sospechas de un error de combustible, no arranques el motor." },
      { question: "¿Es caro arreglarlo?", answer: "Depende de la causa: un filtro es barato; una bomba de alta presión, no. Por eso hay que revisar en orden, de lo sencillo a lo complejo." },
    ],
    relatedArticleSlugs: ["filtros-coche-aire-habitaculo-combustible", "tirones-al-acelerar-fallo-encendido", "coche-pierde-potencia-modo-emergencia"],
    relatedCodes: ["p0300", "p0299"],
    sources: [S.dgtMechanics, S.dgtEmergencyMode],
    updatedAt: D,
  },
  {
    code: "P0380",
    slug: "p0380",
    name: "Circuito A de bujías de precalentamiento (calentadores)",
    shortName: "Calentadores del diésel",
    system: "encendido",
    severity: "baja",
    directAnswer:
      "P0380 indica un fallo eléctrico en el circuito de los calentadores de un motor diésel: un calentador fundido, el relé o la unidad de control de precalentamiento, o el cableado. El síntoma típico es que el coche arranca peor en frío, tarda en estabilizarse y echa humo blanco los primeros segundos. Con buen tiempo puede pasar desapercibido, pero en invierno puede dejarte sin arrancar.",
    meaning: [
      "Los calentadores elevan la temperatura de la cámara para que el gasóleo se inflame en frío, y en muchos motores siguen funcionando tras arrancar para reducir humo y ruido. La centralita vigila el consumo eléctrico del circuito y registra P0380 si detecta un valor anómalo.",
      "Un calentador sano tiene una resistencia muy baja y consume una corriente alta durante unos segundos. Si uno se funde, el circuito consume menos de lo esperado; si hay un cortocircuito, más. En muchos coches la unidad de precalentamiento identifica cuál de los calentadores falla, información que un lector genérico no siempre muestra.",
    ],
    causes: [
      { cause: "Uno o más calentadores fundidos", clue: "Arranque en frío con un cilindro que tarda en entrar y humo blanco." },
      { cause: "Relé o unidad de precalentamiento", clue: "El testigo de precalentamiento se comporta de forma rara o todos los calentadores fallan a la vez." },
      { cause: "Conector o cable de alimentación", clue: "Conectores sulfatados en la tapa de culata." },
    ],
    checks: [
      "Observa si el testigo de precalentamiento (espiral) se enciende y apaga al dar el contacto en frío.",
      "Espera a que se apague antes de arrancar en mañanas frías.",
      "Comprueba la batería: con calentadores averiados se fuerza más el arranque.",
    ],
    canDrive:
      "Sí, el motor funciona con normalidad una vez arrancado. Arréglalo antes del invierno para no quedarte tirado.",
    workshop: [
      "El coche no arranca en frío.",
      "Varios calentadores fallan a la vez.",
      "Un calentador se rompe al desmontarlo: requiere herramientas específicas.",
    ],
    itv:
      "No suele ser causa directa de rechazo, aunque el testigo encendido aparece en la lectura OBD y el humo en frío puede afectar a la opacidad.",
    faqs: [
      { question: "¿Hay que cambiar todos los calentadores?", answer: "Muchos talleres recomiendan cambiarlos en juego si tienen muchos kilómetros, porque desmontar uno ya obliga a acceder a todos." },
      { question: "¿Por qué hay que tener cuidado al desmontarlos?", answer: "Con los años se agarrotan en la culata y pueden partirse; extraer un calentador roto es un trabajo delicado de taller." },
    ],
    relatedArticleSlugs: ["coche-no-arranca", "humo-blanco-azul-negro-escape", "bateria-alternador-motor-arranque"],
    relatedCodes: ["p0562", "p0087"],
    sources: [S.dgtMechanics, S.dgtBattery],
    updatedAt: D,
  },
  {
    code: "P0505",
    slug: "p0505",
    name: "Sistema de control del ralentí",
    shortName: "Control del ralentí",
    system: "sensores",
    severity: "media",
    directAnswer:
      "P0505 indica que la centralita no consigue mantener el régimen de ralentí que pide. Lo notarás como ralentí que sube y baja, que se queda alto o que el motor se cala al parar. En coches de gasolina con años suele ser una mariposa o una válvula de ralentí sucia; también una entrada de aire o un fallo eléctrico de la válvula.",
    meaning: [
      "Al ralentí, el motor regula la entrada de aire con una válvula específica o con la mariposa motorizada. Si la centralita ordena una corrección y las revoluciones no responden como espera, registra P0505.",
      "En los motores con mariposa motorizada no hay válvula de ralentí independiente: la propia mariposa se entreabre para dejar pasar el aire necesario. La carbonilla que se acumula en su borde reduce ese paso, y la centralita llega al límite de su corrección. Es uno de los defectos más habituales en gasolina con muchos kilómetros y uso urbano.",
    ],
    causes: [
      { cause: "Mariposa o válvula de ralentí sucia", clue: "Ralentí inestable que mejora tras acelerar; carbonilla visible en la mariposa." },
      { cause: "Entrada de aire", clue: "Ralentí alto y, a menudo, P0171." },
      { cause: "Válvula de ralentí averiada o conector", clue: "No responde al probarla con el equipo de diagnóstico." },
      { cause: "Aprendizaje perdido tras desconectar la batería", clue: "El ralentí se volvió irregular justo después de cambiar la batería." },
    ],
    checks: [
      "Recuerda si el problema empezó al cambiar o desconectar la batería: algunos coches necesitan un procedimiento de aprendizaje.",
      "Observa el ralentí con aire acondicionado, luces y ventilador encendidos.",
      "Inspecciona la mariposa con el motor apagado y frío si es accesible.",
    ],
    canDrive:
      "Sí, con precaución. Si el motor se cala al detenerte, ten en cuenta que puedes perder asistencia de dirección y freno: revísalo pronto.",
    workshop: [
      "El motor se cala con frecuencia.",
      "La limpieza no resuelve el problema.",
      "Necesitas un aprendizaje de mariposa con equipo de diagnóstico.",
    ],
    itv:
      "Un ralentí irregular puede dificultar la prueba de gases y el testigo encendido aparece en la lectura OBD.",
    faqs: [
      { question: "¿Se puede limpiar la mariposa en casa?", answer: "En muchos coches sí, con limpiador específico y el motor apagado. En mariposas motorizadas no fuerces la placa con la mano y puede hacer falta un aprendizaje después." },
      { question: "¿Por qué tras cambiar la batería?", answer: "Algunas centralitas pierden los valores aprendidos del ralentí al quedarse sin corriente y necesitan un procedimiento para volver a aprenderlos." },
    ],
    relatedArticleSlugs: ["coche-tiembla-ralenti", "bateria-alternador-motor-arranque"],
    relatedAnswerSlugs: ["coche-vibra-aire-acondicionado-parado"],
    relatedCodes: ["p0171", "p0300"],
    sources: [S.dgtMechanics],
    updatedAt: D,
  },
  {
    code: "P0500",
    slug: "p0500",
    name: "Sensor de velocidad del vehículo A",
    shortName: "Sensor de velocidad",
    system: "transmision",
    severity: "media",
    directAnswer:
      "P0500 indica que la centralita no recibe una señal de velocidad fiable. Los síntomas típicos son un velocímetro que no marca o marca a saltos, un cuentakilómetros parado, cambios automáticos bruscos o un control de crucero que no funciona. Según el coche, la señal procede de un sensor en la caja de cambios o de los sensores de rueda del ABS, así que también puede ir acompañado del testigo del ABS.",
    meaning: [
      "La velocidad la usan la centralita del motor, el cuadro, la dirección asistida eléctrica en algunos coches y el cambio automático. Si la señal desaparece o es incoherente con las revoluciones y la marcha, se registra P0500.",
      "En coches de los años noventa y primeros dos mil la señal solía salir de un sensor en la caja de cambios o incluso de un cable mecánico; en los más modernos, la velocidad se calcula a partir de los sensores de rueda del ABS y viaja por la red de comunicación. Saber cuál es el caso de tu coche cambia por completo dónde buscar la avería.",
    ],
    causes: [
      { cause: "Sensor de velocidad en la caja de cambios", clue: "Coches sin ABS o de tecnología más antigua; velocímetro a cero." },
      { cause: "Sensor de rueda del ABS o su cableado", clue: "Testigo del ABS encendido a la vez." },
      { cause: "Conector o cableado", clue: "Fallo intermitente con baches o lluvia." },
    ],
    checks: [
      "Comprueba si el velocímetro funciona y si el testigo del ABS está encendido.",
      "Anota si el fallo es intermitente y en qué circunstancias aparece.",
      "Si el coche tiene ABS, un lector que acceda a ese módulo ayuda a localizar la rueda.",
    ],
    canDrive:
      "Con precaución: sin velocímetro no controlas bien la velocidad, y si el ABS está desactivado, la frenada de emergencia puede bloquear ruedas.",
    workshop: [
      "Testigo del ABS encendido.",
      "Cambio automático que da tirones o no cambia.",
      "Dirección asistida que se endurece o cambia de comportamiento.",
    ],
    itv:
      "Un velocímetro que no funciona y un testigo del ABS encendido son defectos que la ITV revisa.",
    faqs: [
      { question: "¿Es peligroso?", answer: "No suele afectar al motor, pero sí a la información de velocidad y, en coches que usan los sensores del ABS, a la seguridad en frenada." },
      { question: "¿Por qué afecta al cuentakilómetros?", answer: "El cuentakilómetros cuenta con la misma señal de velocidad; si falla, deja de sumar." },
    ],
    relatedArticleSlugs: ["testigos-coche-significado", "revisar-frenos-liquido-pastillas-discos"],
    relatedCodes: ["p0700"],
    sources: [S.dgtWarningLights, S.itvManual],
    updatedAt: D,
  },
  {
    code: "P0700",
    slug: "p0700",
    name: "Sistema de control de la transmisión (solicitud de testigo)",
    shortName: "Avería del cambio automático",
    system: "transmision",
    severity: "media",
    directAnswer:
      "P0700 no describe una avería concreta: indica que la centralita del cambio automático ha guardado su propio código y pide encender el testigo de motor. Para saber qué ocurre hay que leer el módulo del cambio con un equipo compatible. Si el coche no cambia de marcha, se queda en una marcha fija o da golpes, está en modo de emergencia del cambio: conduce con suavidad y revísalo pronto.",
    meaning: [
      "En coches con cambio automático, la gestión del cambio suele estar en un módulo propio. Cuando detecta un problema, avisa a la centralita del motor, que registra P0700 como señal. Los lectores genéricos básicos solo ven ese aviso, no el código del cambio.",
      "Por eso P0700 nunca debe tratarse como diagnóstico en sí: es la puerta para leer el módulo del cambio, donde estará el código concreto (sensor, electroválvula, presión o temperatura del aceite). Los cambios automáticos convencionales y los de doble embrague tienen problemas típicos muy distintos, y la reparación depende de ese segundo código.",
    ],
    causes: [
      { cause: "Nivel o estado del aceite del cambio", clue: "Golpes al cambiar, deslizamiento o aceite oscuro con olor a quemado." },
      { cause: "Electroválvulas internas", clue: "Fallos en marchas concretas." },
      { cause: "Sensores de velocidad del cambio", clue: "Aparece con P0500 o con velocímetro errático." },
      { cause: "Tensión de batería baja", clue: "Aparece tras arranques con la batería débil." },
    ],
    checks: [
      "Lee el módulo del cambio con un equipo que lo cubra: sin ese código, cualquier reparación es una apuesta.",
      "Revisa en el manual si el nivel del aceite del cambio se puede comprobar y cómo.",
      "Comprueba la batería si el código apareció tras un arranque difícil.",
    ],
    canDrive:
      "Si el cambio funciona con normalidad, con precaución. En modo de emergencia (marcha fija), conduce lo imprescindible y sin cargas fuertes.",
    workshop: [
      "El cambio se queda en una marcha.",
      "Golpes fuertes o deslizamientos.",
      "Olor a quemado o fugas de aceite del cambio.",
    ],
    itv:
      "El testigo encendido aparece en la lectura OBD en los vehículos Euro 5 y posteriores.",
    faqs: [
      { question: "¿Por qué mi lector solo ve P0700?", answer: "Porque los lectores genéricos leen la centralita del motor. El detalle está en el módulo del cambio, que exige compatibilidad específica." },
      { question: "¿Ayuda cambiar el aceite del cambio?", answer: "Si el aceite está degradado o bajo, puede mejorar el funcionamiento, pero hazlo con el aceite especificado y el procedimiento correcto." },
    ],
    relatedArticleSlugs: ["como-elegir-lector-obd2", "coche-pierde-potencia-modo-emergencia"],
    relatedAnswerSlugs: ["obd2-conecta-pero-no-lee-codigos"],
    relatedCodes: ["p0500", "p0562"],
    sources: [S.dgtEmergencyMode, S.obdRegulation],
    updatedAt: D,
  },
  {
    code: "P0562",
    slug: "p0562",
    name: "Tensión del sistema baja",
    shortName: "Tensión baja de la batería o el alternador",
    system: "electricidad",
    severity: "media",
    directAnswer:
      "P0562 indica que la centralita ha medido una tensión de alimentación por debajo de lo normal. Las causas más frecuentes son una batería agotada o al final de su vida, un alternador que no carga bien, una correa auxiliar que patina o malas conexiones en bornes y masas. Mide la tensión con el motor en marcha: entre 13,5 y 14,8 V aproximadamente indica que el alternador carga.",
    meaning: [
      "Las centralitas necesitan una tensión estable para funcionar. Si cae por debajo del umbral durante un tiempo, se registra P0562, y a menudo aparecen a la vez códigos de otros módulos por falta de alimentación. Por eso, ante muchos códigos simultáneos, lo primero es revisar la batería.",
    ],
    causes: [
      { cause: "Batería agotada o envejecida", clue: "Arranque lento, más de cuatro o cinco años de uso." },
      { cause: "Alternador que no carga", clue: "Testigo de batería encendido en marcha y tensión con motor por debajo de 13 V." },
      { cause: "Correa auxiliar floja o patinando", clue: "Chirrido al arrancar o al encender consumos." },
      { cause: "Bornes sulfatados o masa defectuosa", clue: "Polvo blanco o verdoso en los bornes; fallos intermitentes." },
    ],
    checks: [
      "Mide la batería en reposo (unos 12,6 V cargada) y con el motor en marcha.",
      "Limpia y aprieta los bornes con el motor apagado.",
      "Escucha la correa auxiliar al arrancar en frío.",
    ],
    canDrive:
      "Si el alternador no carga, el coche funcionará solo mientras dure la batería: apaga consumos y ve directamente al taller. Si el problema era la batería, sustitúyela antes de que te deje tirado.",
    workshop: [
      "Testigo de batería encendido con el motor en marcha.",
      "Tensión con motor en marcha por debajo de 13 V o por encima de 15 V.",
      "Olor a batería o batería hinchada.",
    ],
    itv:
      "No es un defecto en sí, pero una tensión baja puede generar muchos códigos y testigos encendidos que sí aparecen en la inspección.",
    faqs: [
      { question: "¿Por qué tengo muchos códigos a la vez?", answer: "Con tensión baja, varias centralitas registran fallos de comunicación o de sensores. Resuelve la alimentación y luego borra y vuelve a leer." },
      { question: "¿Basta con cargar la batería?", answer: "Si la batería está sana y se descargó por un olvido, sí. Si se descarga de nuevo, revisa el alternador y los consumos en reposo." },
    ],
    relatedArticleSlugs: ["bateria-alternador-motor-arranque", "comprobar-bateria-alternador-multimetro", "bateria-se-descarga-coche-parado"],
    relatedAnswerSlugs: ["coche-arranca-con-pinzas-vuelve-a-fallar"],
    relatedCodes: ["u0100", "p0700"],
    sources: [S.dgtBattery, S.dgtMechanics],
    updatedAt: D,
  },
  {
    code: "U0100",
    slug: "u0100",
    name: "Pérdida de comunicación con el módulo de control del motor (ECM/PCM) A",
    shortName: "Sin comunicación con la centralita del motor",
    system: "electricidad",
    severity: "alta",
    directAnswer:
      "U0100 indica que otro módulo del coche (cuadro, cambio, ABS) ha dejado de recibir mensajes de la centralita del motor por la red de comunicación. Puede acompañarse de varios testigos a la vez, el motor que se para o no arranca. Lo primero es revisar la batería, los fusibles y las masas; después, conectores y cableado de la red CAN y, en último lugar, la propia centralita.",
    meaning: [
      "Los códigos que empiezan por U pertenecen a la red de comunicación entre módulos. U0100 lo guarda el módulo que echa en falta los mensajes, no la centralita del motor. Por eso los lectores genéricos a veces no lo ven: hace falta leer otros módulos.",
      "La red CAN une las centralitas con dos cables trenzados. Un conector con humedad, un cable mordido por roedores o una batería que cae de tensión durante el arranque bastan para interrumpir los mensajes. Cuando la comunicación vuelve, el código queda guardado como histórico, así que conviene distinguir si está activo o es un recuerdo de un episodio pasado.",
    ],
    causes: [
      { cause: "Tensión baja o batería defectuosa", clue: "Aparece tras arranques difíciles o junto a P0562." },
      { cause: "Fusible o relé de alimentación de la centralita", clue: "El motor no arranca y la centralita no responde al lector." },
      { cause: "Masa o conector de la centralita", clue: "Fallos intermitentes, humedad o corrosión en conectores." },
      { cause: "Cableado de la red CAN dañado", clue: "Varios módulos con códigos U a la vez." },
    ],
    checks: [
      "Revisa la batería y la tensión en el arranque.",
      "Comprueba los fusibles relacionados con la centralita del motor según el manual.",
      "Busca humedad o roedores en el vano motor si el coche ha estado parado.",
    ],
    canDrive:
      "Si el motor funciona con normalidad y el código es antiguo, con precaución. Si se para, no arranca o aparecen muchos testigos a la vez, no circules.",
    workshop: [
      "El motor se para o no arranca.",
      "Varios testigos encendidos a la vez.",
      "El lector no consigue comunicar con la centralita del motor.",
    ],
    itv:
      "Los testigos encendidos de seguridad (ABS, airbag) y del motor se revisan en la ITV; resuelve antes la comunicación.",
    faqs: [
      { question: "¿Significa que la centralita está rota?", answer: "Rara vez es lo primero. La mayoría de los casos son alimentación, masas o conectores." },
      { question: "¿Lo leo con un OBD2 barato?", answer: "Puede que no: los lectores genéricos se centran en el motor. Hace falta un equipo que lea otros módulos." },
    ],
    relatedArticleSlugs: ["bateria-alternador-motor-arranque", "coche-no-arranca", "como-elegir-lector-obd2"],
    relatedAnswerSlugs: ["obd2-conecta-pero-no-lee-codigos"],
    relatedCodes: ["p0562", "p0700"],
    sources: [S.dgtBattery, S.dgtMechanics],
    updatedAt: D,
  },
];

export function obdCodePath(code: Pick<ObdCode, "slug">): `/${string}` {
  return `/codigos-averia/${code.slug}`;
}

export function getObdCode(slug: string) {
  return OBD_CODES.find((code) => code.slug === slug);
}

export function getObdCodesForArticle(articleSlug: string) {
  return OBD_CODES.filter((code) => code.relatedArticleSlugs.includes(articleSlug));
}

export const OBD_SYSTEM_ORDER: readonly ObdSystem[] = [
  "encendido",
  "mezcla",
  "combustible",
  "sensores",
  "refrigeracion",
  "turbo",
  "emisiones",
  "electricidad",
  "transmision",
];

export const OBD_HUB = {
  path: "/codigos-averia",
  title: "Códigos de avería OBD2: qué significan y qué revisar",
  description:
    "Significado de los códigos de avería OBD2 más frecuentes (P0300, P0420, P0171, P0299, P2463...), causas habituales en coches con años, si se puede circular y cómo afectan a la ITV.",
} as const;
