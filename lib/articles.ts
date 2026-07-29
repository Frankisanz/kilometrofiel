export type ArticleCategory =
  | "problemas"
  | "mantenimiento"
  | "itv-normativa"
  | "herramientas";

export type CalloutTone = "info" | "caution" | "important";

export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  callout?: {
    tone: CalloutTone;
    title: string;
    text: string;
  };
}

export interface DangerSignal {
  signal: string;
  action: string;
}

export interface SafeStep {
  title: string;
  detail: string;
}

export interface WorkshopGuidance {
  introduction: string;
  urgent: readonly string[];
  appointment: readonly string[];
  usefulInformation: readonly string[];
}

export interface ArticleFaq {
  question: string;
  answer: string;
}

export interface PrimarySource {
  name: string;
  publisher: string;
  url: string;
  accessedAt: string;
}

export interface Article {
  slug: string;
  category: ArticleCategory;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  summary: string;
  directAnswer: string;
  readingMinutes: number;
  sections: readonly ArticleSection[];
  dangerSignals: readonly DangerSignal[];
  safeSteps: readonly SafeStep[];
  workshop: WorkshopGuidance;
  faqs: readonly ArticleFaq[];
  relatedSlugs: readonly string[];
  sources: readonly PrimarySource[];
  publishedAt: string;
  updatedAt: string;
}

const SOURCE_ACCESSED_AT = "2026-07-29";

const sources = {
  ageingFleet: {
    name: "Usados importados: ¿compramos lo viejo?",
    publisher: "Dirección General de Tráfico",
    url: "https://www.dgt.es/comunicacion/noticias/20260727-usados-importados-compramos-lo-viejo/",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  roadsideReview: {
    name: "Revisiones contra «sustos»",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/reportajes/2018/03MARZO/0320-Revisar-el-coche.shtml",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  battery: {
    name: "La «chispa» del coche: baterías",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/tecnologia-seguridad/2019/0606-Baterias-al-dia.shtml",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  commonFailures: {
    name: "Las cinco averías más frecuentes",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/noticias/2022/04ABRIL/0428-Averias-mas-frecuentes.shtml",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  startInWinter: {
    name: "Así se debe arrancar el coche en invierno",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/reportajes/2023/12DICIEMBRE/SUP_INVIERNO/1219-N268-INVIERNO-como-arrancar-coche-invierno.shtml",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  mechanicsManual: {
    name: "Manual VIII de mecánica para formación vial, edición 2026",
    publisher: "Dirección General de Tráfico",
    url: "https://sede.dgt.gob.es/export/sites/dgt/.galleries/permisos-de-conducir/certificacion-aptitud-profesores-formacion-vial/2026/MANUAL-VIII-Mecanica.pdf",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  warningLights: {
    name: "Para que los testigos del coche no te suenen a chino",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/reportajes/2019/0926-Los-testigos-del-coche.shtml",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  emergencyMode: {
    name: "El vehículo, en modo emergencia",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/tecnologia-seguridad/2023/1221-N268-vehiculo-dia-emergencia.shtml",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  itvPortal: {
    name: "Inspección Técnica de Vehículos: normativa, manual y estadísticas",
    publisher: "Ministerio de Industria y Turismo",
    url: "https://industria.gob.es/Calidad-Industrial/vehiculos/Paginas/inspeccion-tecnica-vehiculos.aspx",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  itvManual: {
    name: "Manual de procedimiento de inspección de las estaciones ITV, versión 7.9",
    publisher: "Ministerio de Industria y Turismo",
    url: "https://industria.gob.es/Calidad-Industrial/vehiculos/itv1/Manual%20de%20procedimiento%20de%20inspecci%C3%B3n/Manual%20de%20procedimiento%20de%20inspeccion%20de%20estaciones%20ITV-V%207.9_final2.pdf",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  itvLaw: {
    name: "Real Decreto 920/2017, por el que se regula la ITV",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2017-12841",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  obdRegulation: {
    name: "Reglamento (CE) n.º 715/2007 sobre emisiones y acceso a la información de reparación",
    publisher: "Diario Oficial de la Unión Europea",
    url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32007R0715",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  hellaStarter: {
    name: "Revisión del motor de arranque",
    publisher: "HELLA Tech World",
    url: "https://www.hella.com/techworld/es/informacion-tecnica/electricidad-y-electronica-del-automovil/sistema-de-arranque-y-carga/revision-del-motor-de-arranque/",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  hellaCharging: {
    name: "Trabajos de mantenimiento en el sistema de carga",
    publisher: "HELLA Tech World",
    url: "https://www.hella.com/techworld/es/informacion-tecnica/electricidad-y-electronica-del-automovil/sistema-de-arranque-y-carga/trabajos-de-mantenimiento-en-el-sistema-de-carga/",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  vartaReplacement: {
    name: "Sustitución de la batería en vehículos Start-Stop",
    publisher: "VARTA Automotive",
    url: "https://www.varta-automotive.com/es-es/knowledge/articles/article-details/sustitucion-de-la-bateria-de-arranque-parada",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  vartaBem: {
    name: "Código BEM para la sustitución de la batería",
    publisher: "VARTA Automotive",
    url: "https://www.varta-automotive.com/es-es/knowledge/articles/article-details/el-codigo-correcto-del-bem-para-la-sustitucion-de-la-bateria",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  boschEsitronic: {
    name: "ESI[tronic]: solución de diagnóstico",
    publisher: "Bosch Mobility Aftermarket",
    url: "https://www.boschaftermarket.com/es/es/esitronic-solucion-diagnostico.html",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  boschKts: {
    name: "KTS 560: cobertura y funciones de diagnosis",
    publisher: "Bosch Mobility Aftermarket",
    url: "https://www.boschaftermarket.com/es/es/equipos-y-diagnosis/diagnosis/equipos-de-diagnosis/kts-560",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  nocoGb40: {
    name: "GB40: límites de motor, protecciones y uso",
    publisher: "NOCO",
    url: "https://no.co/gb40",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  vartaCharging: {
    name: "Cómo cargar una batería de coche",
    publisher: "VARTA Automotive",
    url: "https://www.varta-automotive.com/es-es/knowledge/articles/article-details/cargar-baterias-de-coche",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  subaruParasiticDraw: {
    name: "Procedimiento técnico de diagnóstico de consumo en reposo",
    publisher: "Subaru of America, alojado por NHTSA",
    url: "https://static.nhtsa.gov/odi/tsbs/2025/MC-11024869-0001.pdf",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  fordOwnerManual: {
    name: "Manual del propietario: batería y sistemas eléctricos",
    publisher: "Ford España",
    url: "https://www.fordservicecontent.com/Ford_Content/Catalog/owner_information/CG3929esESP-202309-20231024115320.pdf",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  tyres: {
    name: "Todo lo que tiene que saber de neumáticos",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/tecnologia-seguridad/2019/0910-Neumaticos.shtml",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  tyreCondition: {
    name: "Millón y medio de vehículos con los neumáticos mal",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/noticias/2021/02FEBRERO/0209-Estado-Neumaticos.shtml",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  usedCarInspection: {
    name: "¡Ojo si compra un coche de ocasión!",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/reportajes/2017/0424coches-de-segunda-mano.shtml",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  v16: {
    name: "Dispositivos de preseñalización V16 y listado de modelos certificados",
    publisher: "Dirección General de Tráfico",
    url: "https://www.dgt.es/muevete-con-seguridad/tecnologia-e-innovacion-en-carretera/Dispositivos-de-presenalizacion-V16/",
    accessedAt: SOURCE_ACCESSED_AT,
  },
  v16Reminder: {
    name: "DGT recuerda la obligación de disponer de la baliza V16",
    publisher: "Dirección General de Tráfico",
    url: "https://www.dgt.es/comunicacion/notas-de-prensa/20251125-dgt-recuerda-la-obligacion-de-disponer-de-la-baliza-v-16-para-senalizar-averias-y-accidentes-en-carretera",
    accessedAt: SOURCE_ACCESSED_AT,
  },
} satisfies Record<string, PrimarySource>;

export const articles: readonly Article[] = [
  {
    slug: "coche-no-arranca",
    category: "problemas",
    title: "El coche no arranca: cómo observar el fallo sin empeorarlo",
    seoTitle: "El coche no arranca: causas y comprobaciones seguras",
    description:
      "Distingue una batería descargada de otros fallos de arranque por lo que oyes y ves. Pasos seguros, señales de peligro y cuándo pedir asistencia.",
    eyebrow: "Problemas · Arranque",
    summary:
      "Un coche que no arranca no apunta automáticamente a la batería. La primera separación útil es saber si el motor de arranque no gira, gira con poca fuerza o gira con normalidad pero el motor no llega a ponerse en marcha.",
    directAnswer:
      "Haz un único intento breve con luces y climatización apagadas y observa qué ocurre. Sin luces ni respuesta suele haber un problema de alimentación; varios clics y luces que caen apuntan a poca tensión o mala conexión; un clic fuerte puede involucrar al circuito de arranque; si el motor gira a velocidad normal pero no enciende, la causa puede estar en combustible, encendido, inmovilizador o gestión electrónica. Son pistas, no un diagnóstico.",
    readingMinutes: 9,
    sections: [
      {
        id: "escuchar-antes-de-tocar",
        heading: "Escucha antes de tocar nada",
        paragraphs: [
          "El sonido del intento de arranque aporta más información que repetirlo muchas veces. Anota si no pasa absolutamente nada, si aparecen clics rápidos, si hay un solo golpe seco, si el motor gira despacio o si gira con ritmo normal. Observa también si el cuadro se apaga, si las luces pierden mucha intensidad o si aparece un mensaje de llave no reconocida.",
          "Una batería débil es frecuente, especialmente con frío, trayectos cortos o largos periodos sin uso, pero no es la única posibilidad. Un borne flojo, una masa deficiente, el motor de arranque, el alternador, el inmovilizador o un fallo de alimentación del motor pueden producir síntomas parecidos.",
        ],
        bullets: [
          "Sin cuadro ni luces: comprueba primero alimentación y conexiones visibles.",
          "Clics rápidos y luces muy débiles: puede faltar tensión suficiente.",
          "Un clic y el motor no gira: el circuito o el propio motor de arranque necesitan revisión.",
          "El motor gira normal pero no enciende: no sigas castigando la batería; la causa puede ser otra.",
        ],
      },
      {
        id: "comprobaciones-iniciales",
        heading: "Comprobaciones iniciales que no requieren desmontar",
        paragraphs: [
          "Pon el selector automático en P y después prueba N solo si el manual lo contempla; en un cambio manual, pisa completamente el embrague. Verifica que la llave o mando sea reconocido y, si el fabricante lo indica, prueba la llave de reserva. Apaga luces, luneta térmica, climatización, cargadores y cualquier accesorio conectado.",
          "Con el vehículo apagado y sin manipular cables, mira si los bornes están evidentemente sueltos, si hay corrosión abundante, si la batería está hinchada o si existe líquido alrededor. No introduzcas herramientas metálicas y no fuerces una conexión que no sabes aislar.",
        ],
        callout: {
          tone: "caution",
          title: "No insistas",
          text: "Encadenar intentos largos puede descargar por completo la batería, recalentar el motor de arranque y borrar una pista útil. Si dos intentos breves no cambian nada, detente.",
        },
      },
      {
        id: "lo-que-no-conviene-hacer",
        heading: "Atajos que pueden crear otra avería",
        paragraphs: [
          "Arrancar empujando no es una solución universal: no sirve para vehículos automáticos y puede ser inadecuado en modelos con determinados sistemas de emisiones, distribución o electrificación. Tampoco conviene conectar pinzas o un arrancador sin confirmar tensión, orden de conexión y puntos autorizados por el fabricante.",
          "No golpees el motor de arranque, no puentes relés y no rocíes productos inflamables en la admisión. Son prácticas que eliminan protecciones y pueden provocar incendio, daños electrónicos o movimiento inesperado del vehículo.",
        ],
      },
      {
        id: "datos-para-diagnosticar",
        heading: "Guarda las pistas para resolverlo antes",
        paragraphs: [
          "Apunta la temperatura exterior, cuánto tiempo llevaba parado el coche, si había arrancado con dificultad los días anteriores y si quedó encendido algún consumidor. Un vídeo corto del cuadro y del sonido, grabado desde una posición segura, puede ayudar al profesional.",
          "Si un apoyo externo consigue arrancarlo, eso demuestra que faltaba energía en ese momento, pero no demuestra por sí solo que la batería sea la única culpable. Hay que comprobar su estado, el sistema de carga y, si vuelve a descargarse, posibles consumos en reposo.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Olor a plástico quemado, humo, chispas o cables que se calientan",
        action:
          "Interrumpe cualquier intento, aléjate si es necesario y solicita asistencia. No desconectes componentes calientes.",
      },
      {
        signal: "Batería hinchada, rota, congelada o con fuga",
        action:
          "No conectes pinzas, cargador ni arrancador. Ventila la zona sin acercar llamas y llama a un profesional.",
      },
      {
        signal: "Combustible visible u olor intenso a combustible",
        action:
          "No accione el contacto y no uses aparatos eléctricos cerca del vehículo. Pide asistencia.",
      },
      {
        signal: "Vehículo inmovilizado en un lugar expuesto al tráfico",
        action:
          "Prioriza la seguridad de las personas y la señalización reglamentaria frente al diagnóstico.",
      },
    ],
    safeSteps: [
      {
        title: "Asegura el vehículo",
        detail:
          "Freno de estacionamiento, cambio en P o punto muerto y entorno ventilado. Si estás en la vía, aplica primero el protocolo de emergencia.",
      },
      {
        title: "Apaga consumidores",
        detail:
          "Desconecta climatización, luces no necesarias, luneta térmica y accesorios antes de un intento breve.",
      },
      {
        title: "Haz un intento breve y observa",
        detail:
          "No mantengas el arranque accionado más tiempo del indicado por el fabricante. Registra sonido, luces y mensajes.",
      },
      {
        title: "Inspecciona solo a la vista",
        detail:
          "Con todo apagado, busca bornes claramente sueltos, corrosión, fugas o deformación sin tocar ni desmontar.",
      },
      {
        title: "Pide ayuda si no cambia",
        detail:
          "Una asistencia puede medir batería y carga sin convertir una avería pequeña en otra mayor.",
      },
    ],
    workshop: {
      introduction:
        "Un diagnóstico correcto separa batería, conexiones, carga, arranque y gestión del motor mediante mediciones. No autorices un cambio de batería solo por la frase «no arrancó».",
      urgent: [
        "Hay humo, olor a quemado, una fuga o calentamiento de cables.",
        "El motor gira con un sonido metálico anormal o se detiene bruscamente.",
        "El vehículo vuelve a pararse después de recibir ayuda de arranque.",
      ],
      appointment: [
        "Cada mañana gira más lento aunque finalmente arranque.",
        "Necesita apoyo externo por segunda vez en pocos días.",
        "Aparecen fallos eléctricos intermitentes o mensajes de sistema de carga.",
      ],
      usefulInformation: [
        "Sonido exacto y comportamiento de las luces.",
        "Edad conocida de la batería y fecha de la última carga o sustitución.",
        "Tiempo que llevaba parado y trayectos habituales.",
      ],
    },
    faqs: [
      {
        question: "¿Si las luces funcionan, la batería está bien?",
        answer:
          "No necesariamente. Las luces requieren mucha menos corriente que el motor de arranque. Una batería puede encenderlas y no entregar la intensidad necesaria para girar el motor.",
      },
      {
        question: "¿Un arrancador confirma que la batería está averiada?",
        answer:
          "No. Confirma que aportar energía externa ayudó. La batería puede estar descargada por uso, envejecida, mal conectada o no estar recibiendo carga del alternador.",
      },
      {
        question: "¿Puedo seguir probando hasta que arranque?",
        answer:
          "No conviene. Respeta el tiempo y las pausas del manual. Repetir intentos agota la batería y puede recalentar el sistema de arranque.",
      },
      {
        question: "¿Por qué gira el motor pero no enciende?",
        answer:
          "Puede faltar combustible, chispa, sincronización, autorización del inmovilizador o una señal de sensor, entre otras causas. Leer averías y medir es más fiable que sustituir piezas por intuición.",
      },
    ],
    relatedSlugs: [
      "bateria-alternador-motor-arranque",
      "comprobar-bateria-alternador-multimetro",
      "como-elegir-arrancador-bateria",
      "bateria-se-descarga-coche-parado",
    ],
    sources: [
      sources.battery,
      sources.commonFailures,
      sources.startInWinter,
      sources.mechanicsManual,
    ],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
  },
  {
    slug: "bateria-alternador-motor-arranque",
    category: "problemas",
    title: "Batería, alternador o motor de arranque: cómo distinguir las pistas",
    seoTitle: "Batería, alternador o motor de arranque: diferencias",
    description:
      "Qué síntomas orientan hacia batería, alternador, conexiones o motor de arranque, qué no demuestran y qué mediciones debe hacer un profesional.",
    eyebrow: "Problemas · Sistema de arranque",
    summary:
      "Los tres elementos participan en momentos distintos: la batería aporta energía, el motor de arranque hace girar el motor térmico y el alternador alimenta el vehículo y repone carga cuando funciona.",
    directAnswer:
      "Giro lento y caída intensa de luces orientan a batería o conexiones; un golpe seco con luces estables puede orientar al circuito de arranque; un testigo de carga, fallos eléctricos en marcha o una batería que vuelve a vaciarse pueden apuntar al sistema de carga. Ningún síntoma aislado identifica la pieza: hay que medir tensión, caída de voltaje, capacidad de arranque y carga bajo las condiciones previstas por el fabricante.",
    readingMinutes: 10,
    sections: [
      {
        id: "funcion-de-cada-elemento",
        heading: "Qué hace cada elemento",
        paragraphs: [
          "La batería de 12 voltios suministra la elevada corriente inicial y estabiliza la red eléctrica. El motor de arranque convierte esa electricidad en giro mecánico durante unos segundos. Una vez en marcha, el alternador genera electricidad y el regulador adapta la carga a las necesidades del vehículo.",
          "En coches recientes la gestión de carga puede variar deliberadamente la tensión según temperatura, estado de la batería, deceleración y demanda. Por eso una cifra aislada tomada sin conocer el sistema no basta para declarar que el alternador está mal.",
        ],
      },
      {
        id: "mapa-de-sintomas",
        heading: "Un mapa de síntomas, no un veredicto",
        paragraphs: [
          "Una batería descargada puede hacer que el cuadro parpadee, que se oigan clics rápidos o que el motor gire despacio. Bornes, masas y cables con resistencia producen un efecto casi idéntico. Si las luces mantienen intensidad y se oye un único clic, el circuito de mando o el motor de arranque merecen atención, aunque también puede existir un problema mecánico.",
          "Si el coche arranca con apoyo pero el testigo de carga permanece encendido, la dirección se endurece, sube la temperatura o los sistemas eléctricos empiezan a apagarse, detente: una correa auxiliar o el sistema de carga pueden estar implicados. Seguir hasta agotar la batería puede dejar el vehículo inmovilizado en marcha.",
        ],
        bullets: [
          "Batería: almacena energía; su capacidad real importa más que una tensión superficial.",
          "Conexiones: una resistencia pequeña puede provocar una gran caída al arrancar.",
          "Motor de arranque: trabaja solo durante el arranque y sufre con intentos prolongados.",
          "Alternador: debe comprobarse junto con regulador, correa, cableado y estrategia de carga.",
        ],
      },
      {
        id: "pruebas-que-si-aclaran",
        heading: "Qué pruebas separan las causas",
        paragraphs: [
          "Una revisión completa puede incluir inspección y apriete correcto, tensión en reposo tras estabilización, prueba de conductancia o carga de batería, caída de tensión en positivo y masa durante el arranque, consumo del motor de arranque y comportamiento del sistema de carga.",
          "Los resultados se comparan con la especificación del vehículo y con la temperatura. Cambiar una pieza antes de comprobar el conjunto puede ocultar un cable defectuoso o provocar que la batería nueva vuelva a descargarse.",
        ],
      },
      {
        id: "practicas-a-evitar",
        heading: "La prueba que nunca debes hacer",
        paragraphs: [
          "No desconectes un borne con el motor en marcha para «probar el alternador». La batería amortigua variaciones de la red; retirarla puede generar picos, apagar el motor y dañar unidades electrónicas.",
          "Tampoco puentes terminales del motor de arranque ni midas intensidad con un multímetro doméstico conectado como si midieras tensión. La corriente de arranque supera ampliamente la capacidad de esas entradas.",
        ],
        callout: {
          tone: "important",
          title: "Una batería nueva también puede descargarse",
          text: "Si la causa era una carga insuficiente, una conexión deficiente o un consumo en reposo, sustituir solo la batería pospone el mismo fallo.",
        },
      },
    ],
    dangerSignals: [
      {
        signal: "Testigo de batería encendido durante la marcha",
        action:
          "Reduce consumos, busca un lugar seguro y detente siguiendo el manual. Puede perderse alimentación y, según el vehículo, asistencia o refrigeración.",
      },
      {
        signal: "Chirrido de correa, olor a goma o aumento de temperatura",
        action:
          "Detén el motor cuanto antes en un lugar seguro. Una correa auxiliar puede accionar más sistemas que el alternador.",
      },
      {
        signal: "Terminal, cable o motor de arranque muy caliente",
        action:
          "No vuelvas a accionar el arranque y pide asistencia.",
      },
    ],
    safeSteps: [
      {
        title: "Describe el momento del fallo",
        detail:
          "Diferencia entre fallo al arrancar, testigo durante la marcha y descarga después de aparcar.",
      },
      {
        title: "Comprueba el manual",
        detail:
          "Localiza los puntos de apoyo de arranque, especificación de batería y significado exacto del testigo.",
      },
      {
        title: "Haz una inspección visual",
        detail:
          "Con el vehículo apagado, busca holgura evidente, corrosión, correa dañada o batería deformada sin tocar partes móviles.",
      },
      {
        title: "Mide solo si sabes configurar el instrumento",
        detail:
          "Limítate a tensión continua en el sistema de 12 V; nunca accedas al sistema de alta tensión de un híbrido o eléctrico.",
      },
    ],
    workshop: {
      introduction:
        "Pide resultados de las mediciones, no solo el nombre de una pieza. Una factura clara debería indicar el estado de batería y la comprobación del circuito de carga y arranque.",
      urgent: [
        "El testigo de carga se enciende en marcha o el vehículo empieza a perder funciones.",
        "Hay olor, humo, cableado caliente o ruido de correa.",
        "El motor no gira y se oye un golpe mecánico anormal.",
      ],
      appointment: [
        "El arranque se vuelve progresivamente más lento.",
        "La batería se ha descargado más de una vez.",
        "Las luces cambian de intensidad o aparecen fallos eléctricos intermitentes.",
      ],
      usefulInformation: [
        "Mediciones realizadas y condiciones de temperatura/reposo.",
        "Edad, tecnología y especificación de la batería instalada.",
        "Si el fallo aparece en frío, en caliente o después de estar aparcado.",
      ],
    },
    faqs: [
      {
        question: "¿Qué tensión debe tener una batería de 12 V?",
        answer:
          "Una batería de plomo cargada y estabilizada suele situarse alrededor de 12,6 V, pero temperatura, química y carga superficial cambian la lectura. La capacidad bajo carga es más reveladora que una cifra aislada.",
      },
      {
        question: "¿Si el coche arranca con pinzas el alternador está bien?",
        answer:
          "No. Solo demuestra que el apoyo permitió el arranque. Hay que verificar después cómo carga el sistema y por qué faltaba energía.",
      },
      {
        question: "¿Un alternador siempre carga a 14 V?",
        answer:
          "No. Los sistemas gestionados pueden variar bastante. La medición debe interpretarse con el procedimiento y los límites del fabricante.",
      },
      {
        question: "¿Se puede reparar un motor de arranque?",
        answer:
          "Algunos admiten reparación y otros se sustituyen por una unidad reconstruida o nueva. Antes debe confirmarse que el fallo no está en batería, cables, mando o bloqueo mecánico.",
      },
    ],
    relatedSlugs: [
      "coche-no-arranca",
      "comprobar-bateria-alternador-multimetro",
      "bateria-se-descarga-coche-parado",
      "como-elegir-bateria-coche",
    ],
    sources: [
      sources.battery,
      sources.commonFailures,
      sources.mechanicsManual,
      sources.hellaStarter,
      sources.hellaCharging,
    ],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
  },
  {
    slug: "mantenimiento-coche-10-15-20-anos",
    category: "mantenimiento",
    title: "Mantenimiento de un coche de 10, 15 o 20 años: plan con prioridades",
    seoTitle: "Mantenimiento de coches de 10, 15 y 20 años",
    description:
      "Planifica el mantenimiento de un coche veterano según historial, kilómetros y estado. Qué revisar primero y por qué el manual siempre prevalece.",
    eyebrow: "Mantenimiento · Plan general",
    summary:
      "La edad no crea un calendario universal. En un coche con años importan el plan del fabricante, los kilómetros, el uso, el historial demostrado y el deterioro por tiempo de gomas, fluidos, conexiones y corrosión.",
    directAnswer:
      "Empieza reconstruyendo el historial y resolviendo seguridad, fugas y avisos antes de mejorar confort o estética. A los 10 años conviene auditar elementos dependientes del tiempo; a los 15 gana peso el desgaste acumulado de suspensión, refrigeración, carga y sellos; a los 20 hay que vigilar además corrosión estructural, disponibilidad de piezas y reparaciones anteriores. No sustituyas por edad lo que el fabricante manda medir ni alargues por apariencia lo que tiene intervalo establecido.",
    readingMinutes: 12,
    sections: [
      {
        id: "linea-base",
        heading: "Primero crea una línea base fiable",
        paragraphs: [
          "Reúne facturas, libro de mantenimiento, informes de ITV y etiquetas de operaciones. Una marca escrita a mano no demuestra qué referencia se montó ni si se completó el trabajo. Si falta el historial de una operación con consecuencia grave —por ejemplo, una distribución con intervalo— trátala como pendiente de confirmar.",
          "Anota kilometraje actual, kilómetros al año, trayectos cortos o largos, estacionamiento exterior, carga habitual y síntomas. El mismo coche envejece de forma distinta si duerme en garaje y recorre carretera que si pasa semanas parado y hace recorridos urbanos breves.",
        ],
        bullets: [
          "Seguridad: neumáticos, frenos, dirección, suspensión, luces, limpiaparabrisas y cinturones.",
          "Fiabilidad: lubricación, refrigeración, batería, carga, correas, manguitos y fugas.",
          "Legalidad: ITV, reformas anotadas, emisiones y equipamiento obligatorio.",
          "Confort: climatización, elevalunas, tapicería y acabados, después de lo anterior.",
        ],
      },
      {
        id: "diez-anos",
        heading: "Alrededor de 10 años: revisar lo que también envejece parado",
        paragraphs: [
          "El kilometraje no refleja por sí solo el estado de neumáticos, manguitos, guardapolvos, escobillas, silentblocks, batería o juntas. Comprueba fechas, grietas, endurecimiento, fugas y holguras con el procedimiento correspondiente.",
          "Revisa si los fluidos se han renovado conforme al tiempo además de los kilómetros. Aceite de motor, refrigerante, líquido de frenos y fluidos de transmisión no son intercambiables ni comparten un intervalo universal; usa la especificación y el plan exactos.",
        ],
      },
      {
        id: "quince-anos",
        heading: "Alrededor de 15 años: buscar desgaste acumulado y reparaciones parciales",
        paragraphs: [
          "A esta edad pueden coincidir amortiguadores fatigados, rodamientos, soportes, rótulas, fugas pequeñas, radiadores parcialmente obstruidos o conectores castigados. No significa que todos deban cambiarse: significa que una inspección completa aporta más que una sucesión de reparaciones aisladas.",
          "Comprueba si se han mezclado referencias de neumáticos, refrigerantes o piezas por reparaciones anteriores. Una ITV favorable confirma unos mínimos en ese momento, no sustituye la evaluación preventiva ni garantiza la vida restante de cada componente.",
        ],
      },
      {
        id: "veinte-anos",
        heading: "Alrededor de 20 años: estructura, compatibilidad y sentido económico",
        paragraphs: [
          "La corrosión en puntos estructurales, anclajes, tuberías y bajos requiere elevador y experiencia. También conviene comprobar reparaciones de accidente, estado del cableado, disponibilidad de recambios y si las sucesivas modificaciones conservan homologación.",
          "Decidir conservar el coche no depende solo de comparar una reparación con su valor de venta. Incluye seguridad, previsibilidad de gastos, necesidad diaria del vehículo y alternativas reales. Una reparación grande puede tener sentido en un ejemplar conocido; varias averías críticas simultáneas pueden cambiar la decisión.",
        ],
        callout: {
          tone: "info",
          title: "Edad no equivale a sentencia",
          text: "Un coche bien conservado puede estar mejor que otro más nuevo con mantenimiento deficiente. La inspección y el historial mandan sobre el prejuicio.",
        },
      },
      {
        id: "calendario-vivo",
        heading: "Convierte el mantenimiento en un registro vivo",
        paragraphs: [
          "Registra fecha, kilometraje, especificación, marca de la pieza o fluido, taller y próxima referencia temporal o kilométrica. Conserva fotografías de etiquetas y facturas. Así se evitan operaciones duplicadas y se detectan consumos o averías repetitivas.",
          "Revisa el plan al menos una vez al año y antes de un viaje largo. Las campañas del fabricante y cambios normativos también pueden introducir actuaciones que no estaban en el libro original.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Holgura en dirección, frenada desviada o pedal anormal",
        action:
          "No esperes a la próxima revisión ordinaria. Evita circular y solicita evaluación profesional.",
      },
      {
        signal: "Pérdida de refrigerante, aceite, combustible o líquido de frenos",
        action:
          "Identifica el fluido sin tocarlo y lleva el vehículo al taller; combustible o frenos requieren inmovilización.",
      },
      {
        signal: "Corrosión perforante cerca de anclajes o estructura",
        action:
          "No intentes ocultarla con recubrimiento. Necesita valoración estructural.",
      },
      {
        signal: "Neumático con bulto, lona visible, grieta profunda o deformación",
        action:
          "No continúes conduciendo. Monta una solución autorizada o solicita asistencia.",
      },
    ],
    safeSteps: [
      {
        title: "Reúne documentación",
        detail:
          "Libro, facturas, ITV y campañas pendientes forman la base del plan.",
      },
      {
        title: "Haz una inspección visual mensual",
        detail:
          "Presiones en frío, luces, niveles según manual, fugas bajo el coche y estado visible de gomas.",
      },
      {
        title: "Prioriza por consecuencia",
        detail:
          "Seguridad y daños graves potenciales antes que ruidos de acabado o estética.",
      },
      {
        title: "Registra cada intervención",
        detail:
          "Fecha, kilómetros, especificación y justificante; no solo «revisión hecha».",
      },
      {
        title: "Solicita una inspección de conjunto",
        detail:
          "Cuando el historial sea incompleto, una evaluación inicial evita cambiar piezas al azar.",
      },
    ],
    workshop: {
      introduction:
        "Pide una lista separada en tres niveles: defectos que impiden circular con seguridad, actuaciones próximas y observaciones que solo requieren seguimiento.",
      urgent: [
        "Cualquier anomalía de frenos, dirección, neumáticos o estructura.",
        "Fuga de combustible, líquido de frenos o refrigerante con temperatura alta.",
        "Testigo rojo persistente o ruido mecánico repentino.",
      ],
      appointment: [
        "No existe historial fiable de distribución o fluidos con intervalo.",
        "Hay desgaste irregular de neumáticos, vibración o ruidos de suspensión.",
        "El coche consume aceite o refrigerante, aunque todavía funcione con normalidad.",
      ],
      usefulInformation: [
        "Facturas ordenadas por fecha y kilometraje.",
        "Lista de síntomas y frecuencia, sin interpretar la causa.",
        "Uso anual, tipo de trayecto y planes de conservar el vehículo.",
      ],
    },
    faqs: [
      {
        question: "¿Hay que cambiar todo al cumplir 10 años?",
        answer:
          "No. Hay operaciones con intervalo, elementos que se miden y piezas que se sustituyen por condición. El plan del fabricante y la inspección determinan cada caso.",
      },
      {
        question: "¿Una ITV favorable demuestra que el coche está perfectamente mantenido?",
        answer:
          "No. La ITV verifica requisitos concretos en una fecha; no es una auditoría completa de mantenimiento ni predice cuánto durará una pieza.",
      },
      {
        question: "¿Pocos kilómetros significan poco desgaste?",
        answer:
          "No siempre. Tiempo, humedad, temperatura, trayectos cortos y periodos parado deterioran baterías, gomas, fluidos y superficies.",
      },
      {
        question: "¿Cómo priorizo si el presupuesto es limitado?",
        answer:
          "Primero seguridad y averías que puedan causar daños mayores; después fiabilidad necesaria para tu uso y, por último, confort y estética. Pide presupuesto por niveles.",
      },
    ],
    relatedSlugs: [
      "checklist-itv-coche-antiguo",
      "neumaticos-dot-desgaste-presion",
      "testigos-coche-significado",
      "bateria-se-descarga-coche-parado",
    ],
    sources: [
      sources.ageingFleet,
      sources.roadsideReview,
      sources.itvPortal,
      sources.mechanicsManual,
    ],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
  },
  {
    slug: "checklist-itv-coche-antiguo",
    category: "itv-normativa",
    title: "Checklist de ITV para un coche con años: qué revisar de verdad",
    seoTitle: "Checklist ITV para coches de más de 10 años",
    description:
      "Lista práctica para preparar la ITV sin trucos: documentación, luces, neumáticos, visibilidad, emisiones y defectos que requieren taller.",
    eyebrow: "ITV y normativa · Preparación",
    summary:
      "Preparar la ITV consiste en comprobar mantenimiento y requisitos visibles, no en ocultar averías. El Manual de Procedimiento 7.9, aplicable desde 2026, define métodos y defectos; una estación no decide según una lista de internet.",
    directAnswer:
      "Comprueba documentación, identificación, alumbrado, señalización, cristales, limpiaparabrisas, cinturones, neumáticos, carrocería, matrícula, testigos y ausencia de fugas. Prueba claxon y apertura de puertas en un lugar seguro. Frenos, dirección, suspensión, bajos y emisiones deben revisarse en taller si hay síntomas. No borres fallos ni uses aditivos para enmascarar un problema.",
    readingMinutes: 11,
    sections: [
      {
        id: "antes-de-empezar",
        heading: "Documentación e identidad del vehículo",
        paragraphs: [
          "Confirma la fecha límite, la documentación exigida por tu estación y que matrícula y número de bastidor sean legibles sin manipulación. Las reformas deben estar legalizadas y anotadas cuando corresponda; disponer de una factura de una pieza no sustituye su tramitación.",
          "Consulta si existen defectos pendientes de una inspección anterior. Si la ITV fue desfavorable o negativa, respeta las condiciones de circulación y el plazo aplicable, en lugar de tratar la segunda visita como una inspección nueva.",
        ],
      },
      {
        id: "revision-exterior",
        heading: "La vuelta exterior que puedes hacer en casa",
        paragraphs: [
          "Con ayuda de otra persona, comprueba posición, cruce, carretera, intermitentes, emergencia, freno, marcha atrás y antiniebla cuando corresponda. Revisa tulipas, fijación, color y funcionamiento, no solo que «alguna luz» se encienda.",
          "Mira matrícula, retrovisores, parabrisas en la zona de visión, escobillas, lavaparabrisas, puertas, capós y elementos salientes. No pegues piezas estructurales ni tapes corrosión para superar la inspección.",
        ],
        bullets: [
          "Neumáticos de medida y características admitidas, sin daños y con dibujo legal.",
          "Presión indicada por el fabricante, medida en frío.",
          "Cinturones que abrochan, recogen y no presentan cortes.",
          "Testigos que completan su comprobación al dar contacto y se comportan según el manual.",
          "Placas firmes, legibles y sin adornos que dificulten su lectura.",
        ],
      },
      {
        id: "interior-y-mandos",
        heading: "Habitáculo, mandos y visibilidad",
        paragraphs: [
          "Retira objetos que bloqueen pedales o visión. Comprueba que asientos y respaldos queden fijados, que puertas y cierres funcionen y que el claxon suene. Una funda no debe impedir el funcionamiento de cinturones o airbags.",
          "Si hay un testigo de airbag, ABS, estabilidad, frenos o motor, no lo borres antes de acudir. Además de poder afectar al resultado, perderías códigos y datos congelados que ayudan a diagnosticar.",
        ],
      },
      {
        id: "lo-que-requiere-taller",
        heading: "Lo que una revisión visual no puede garantizar",
        paragraphs: [
          "Fuerza y equilibrio de frenado, holguras, amortiguación, corrosión de bajos, emisiones y ciertos sistemas electrónicos requieren equipos o acceso bajo el vehículo. Si notas vibración, desviación, ruido, pedal extraño, humo o pérdida de potencia, resuélvelo antes de reservar la inspección.",
          "Llegar con el motor a su temperatura normal de servicio puede ser necesario para determinadas pruebas, pero nunca compensa una avería ni justifica conducir un vehículo sobrecalentado. Sigue las indicaciones de la estación y del fabricante.",
        ],
        callout: {
          tone: "important",
          title: "La ITV no es un diagnóstico completo",
          text: "Superarla confirma que no se detectaron defectos incompatibles con el resultado favorable en ese momento. No sustituye el mantenimiento preventivo.",
        },
      },
    ],
    dangerSignals: [
      {
        signal: "Pedal de freno esponjoso, recorrido anormal o coche que se desvía",
        action:
          "No conduzcas hasta la ITV. Solicita taller o traslado seguro.",
      },
      {
        signal: "Neumático deformado, con lona visible o pérdida rápida de presión",
        action:
          "Inmoviliza el vehículo; no basta con inflarlo para la inspección.",
      },
      {
        signal: "Fuga de combustible o líquido de frenos",
        action:
          "No arranques ni circules. Requiere reparación profesional.",
      },
      {
        signal: "Testigo rojo, temperatura alta o presión de aceite",
        action:
          "Detén el motor conforme al manual. La cita de ITV deja de ser la prioridad.",
      },
    ],
    safeSteps: [
      {
        title: "Consulta la ficha y el manual vigentes",
        detail:
          "Comprueba reformas, medidas autorizadas y el procedimiento oficial; no uses listas antiguas como norma.",
      },
      {
        title: "Haz una vuelta exterior con ayuda",
        detail:
          "Revisa todas las luces y elementos visibles con el coche estacionado.",
      },
      {
        title: "Mide presión y dibujo",
        detail:
          "En frío y conforme a la placa del vehículo; inspecciona también flancos y desgaste irregular.",
      },
      {
        title: "Prueba mandos sin circular",
        detail:
          "Lavaparabrisas, limpiaparabrisas, claxon, cierres, cinturones y fijación de asientos.",
      },
      {
        title: "Lleva los síntomas al taller",
        detail:
          "No intentes corregir frenos, emisiones o testigos sustituyendo piezas por intuición.",
      },
    ],
    workshop: {
      introduction:
        "Una pre-ITV útil debe localizar el motivo y diferenciar mantenimiento, reparación y legalización. Desconfía de propuestas para ocultar testigos o manipular emisiones.",
      urgent: [
        "Cualquier síntoma de frenos, dirección, neumáticos o fuga peligrosa.",
        "Testigos rojos, humo intenso o sobrecalentamiento.",
        "Corrosión o daño en zonas estructurales y anclajes.",
      ],
      appointment: [
        "Testigo amarillo persistente o códigos almacenados.",
        "Desgaste irregular, vibración, ruidos de suspensión o dirección.",
        "Resultado anterior desfavorable por emisiones, frenos u holguras.",
      ],
      usefulInformation: [
        "Informe completo de la inspección anterior.",
        "Ficha técnica y documentación de reformas.",
        "Síntomas, condiciones en las que aparecen y reparaciones recientes.",
      ],
    },
    faqs: [
      {
        question: "¿Puedo borrar el testigo de motor antes de la ITV?",
        answer:
          "Borrar el código no repara la causa y puede reiniciar monitores o eliminar datos útiles. Diagnostica y repara el origen.",
      },
      {
        question: "¿Es suficiente comprobar que todas las bombillas encienden?",
        answer:
          "No. También importan fijación, color, intensidad, estado de tulipas, orientación y funcionamiento del conjunto conforme al vehículo.",
      },
      {
        question: "¿Una ITV desfavorable permite circular normalmente?",
        answer:
          "No. Las condiciones dependen del resultado y la normativa. Consulta el informe y las instrucciones oficiales; una inspección negativa es aún más restrictiva.",
      },
      {
        question: "¿Un aditivo garantiza superar emisiones?",
        answer:
          "No. Las emisiones pueden depender de temperatura, mantenimiento, sensores, combustión, catalizador o filtro, entre otros. Un producto no sustituye el diagnóstico.",
      },
    ],
    relatedSlugs: [
      "mantenimiento-coche-10-15-20-anos",
      "testigos-coche-significado",
      "neumaticos-dot-desgaste-presion",
      "humo-blanco-azul-negro-escape",
    ],
    sources: [sources.itvPortal, sources.itvManual, sources.itvLaw],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
  },
  {
    slug: "testigos-coche-significado",
    category: "problemas",
    title: "Testigos del coche: cómo reaccionar sin confundir color con diagnóstico",
    seoTitle: "Testigos del coche: significado y cuándo parar",
    description:
      "Qué suelen indicar los testigos rojos, amarillos y verdes, cuáles exigen detenerse y por qué el manual del vehículo es la referencia.",
    eyebrow: "Problemas · Cuadro de instrumentos",
    summary:
      "El color ayuda a ordenar la urgencia, pero el símbolo, el mensaje, si parpadea y el comportamiento del coche son los que determinan la respuesta. El manual de ese modelo siempre prevalece.",
    directAnswer:
      "Un testigo rojo suele exigir una reacción inmediata y a menudo detenerse con seguridad; uno amarillo avisa de fallo o función limitada y requiere consulta o diagnóstico; verde, azul o blanco suele informar de una función. Hay excepciones. Presión de aceite, temperatura, frenos o carga no deben interpretarse con una tabla genérica: detente según el manual y no sigas para «ver si se apaga».",
    readingMinutes: 9,
    sections: [
      {
        id: "color-no-basta",
        heading: "El color orienta, el símbolo decide",
        paragraphs: [
          "Al dar contacto es normal que varios testigos se enciendan durante una autocomprobación y se apaguen al arrancar. Lo relevante es que uno no aparezca cuando debería, permanezca encendido, se encienda durante la marcha o parpadee.",
          "Dos coches pueden utilizar símbolos parecidos con instrucciones distintas. Consulta el manual físico o la documentación oficial del fabricante; una imagen encontrada en redes no contempla equipamiento, mercado ni versión.",
        ],
      },
      {
        id: "rojos-principales",
        heading: "Avisos rojos que no admiten improvisación",
        paragraphs: [
          "Presión de aceite baja puede implicar falta de lubricación; temperatura alta, pérdida de refrigeración; el aviso de frenos puede responder al estacionamiento accionado, nivel, circuito o sistema; el de carga señala que la red no recibe lo esperado. En todos los casos, comprueba la instrucción del manual y busca un lugar seguro sin prolongar la marcha.",
          "Apagar y volver a arrancar puede borrar temporalmente el síntoma del cuadro, pero no repara su causa. Si el testigo vuelve o el coche cambia de comportamiento, solicita asistencia.",
        ],
      },
      {
        id: "amarillos",
        heading: "Amarillo: puede permitir margen, no indiferencia",
        paragraphs: [
          "Un motor amarillo fijo puede admitir una conducción muy limitada hasta diagnóstico si el coche funciona normal y el manual lo permite; si parpadea, pierde potencia, vibra o huele a combustible, la urgencia aumenta. ABS o estabilidad encendidos pueden significar que la frenada básica permanece pero una ayuda está desactivada: adapta la conducción y repara.",
          "El TPMS puede indicar presión baja o fallo del sistema. Detente en un lugar seguro para inspeccionar; no reinicies el aviso sin medir las cuatro ruedas en frío y consultar la presión prescrita.",
        ],
      },
      {
        id: "registrar-el-contexto",
        heading: "El contexto evita diagnósticos a ciegas",
        paragraphs: [
          "Fotografía el cuadro sin manipular el teléfono mientras conduces, anota si ocurrió en frío, al acelerar, después de repostar o con lluvia, y registra cualquier ruido, olor o pérdida de potencia. Esa secuencia orienta más que el color aislado.",
          "No tapes el testigo, retires la bombilla ni borres códigos para vender el coche o pasar una inspección. Además del riesgo, se pierde información de avería y estado de los monitores.",
        ],
        callout: {
          tone: "caution",
          title: "Parpadear suele importar",
          text: "Un aviso intermitente puede señalar una condición activa o más grave. Reduce el riesgo, consulta el manual y no asumas que significa lo mismo que el testigo fijo.",
        },
      },
    ],
    dangerSignals: [
      {
        signal: "Presión de aceite roja con el motor en marcha",
        action:
          "Detén el motor tan pronto como sea seguro y no lo vuelvas a arrancar hasta comprobar la causa.",
      },
      {
        signal: "Temperatura roja, aguja en zona crítica o vapor",
        action:
          "Detente, apaga el motor y no abras el circuito caliente.",
      },
      {
        signal: "Aviso de frenos con pedal o frenada anormales",
        action:
          "No continúes conduciendo. Solicita asistencia.",
      },
      {
        signal: "Testigo de motor parpadeando con vibración u olor a combustible",
        action:
          "Reduce la carga y detente conforme al manual para evitar daños o incendio.",
      },
    ],
    safeSteps: [
      {
        title: "Mira símbolo, color y comportamiento",
        detail:
          "No memorices solo el color; anota si es fijo, parpadea y qué hace el vehículo.",
      },
      {
        title: "Busca un lugar seguro",
        detail:
          "Si el aviso puede ser crítico, prioriza detenerte sin una maniobra brusca.",
      },
      {
        title: "Consulta el manual exacto",
        detail:
          "Sigue la instrucción asociada a ese símbolo y variante.",
      },
      {
        title: "Registra sin borrar",
        detail:
          "Conserva fotografía, mensajes y condiciones para el diagnóstico.",
      },
    ],
    workshop: {
      introduction:
        "El taller debe leer códigos y datos, pero también verificar la causa física. Un código identifica un circuito o condición; rara vez ordena por sí solo cambiar una pieza.",
      urgent: [
        "Cualquier aviso rojo persistente relacionado con aceite, temperatura o frenos.",
        "Motor parpadeando, vibración intensa, humo u olor a combustible.",
        "Varios sistemas fallan a la vez y el coche pierde asistencia o potencia.",
      ],
      appointment: [
        "Aviso amarillo que reaparece después de un ciclo de conducción.",
        "ABS, estabilidad, airbag o TPMS permanecen encendidos.",
        "El cuadro se reinicia o aparecen mensajes eléctricos intermitentes.",
      ],
      usefulInformation: [
        "Foto del símbolo y texto completo.",
        "Velocidad, temperatura y maniobra en el momento de aparición.",
        "Cambios recientes de batería, reparación o repostaje.",
      ],
    },
    faqs: [
      {
        question: "¿Todos los testigos rojos obligan a parar?",
        answer:
          "No todos significan exactamente lo mismo —por ejemplo, cinturón o puerta abierta—, pero requieren atención inmediata. El símbolo y el manual determinan la acción.",
      },
      {
        question: "¿Puedo conducir con el testigo de motor amarillo?",
        answer:
          "Depende de si es fijo o parpadea, del comportamiento y del manual. Si hay vibración, olor, humo, temperatura o pérdida fuerte de potencia, detente y pide ayuda.",
      },
      {
        question: "¿Desconectar la batería borra el problema?",
        answer:
          "No. Puede apagar avisos temporalmente, borrar datos útiles y desconfigurar sistemas. La causa seguirá presente.",
      },
      {
        question: "¿Por qué se encienden todos al dar contacto?",
        answer:
          "Muchos realizan una autocomprobación. Deben seguir la secuencia descrita por el fabricante; un testigo que nunca enciende también puede ser relevante.",
      },
    ],
    relatedSlugs: [
      "motor-sobrecalentado-que-hacer",
      "como-elegir-lector-obd2",
      "bateria-alternador-motor-arranque",
      "checklist-itv-coche-antiguo",
    ],
    sources: [
      sources.warningLights,
      sources.emergencyMode,
      sources.mechanicsManual,
    ],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
  },
  {
    slug: "comprobar-bateria-alternador-multimetro",
    category: "herramientas",
    title: "Cómo comprobar batería y alternador con multímetro sin asumir el diagnóstico",
    seoTitle: "Comprobar batería y alternador con multímetro",
    description:
      "Guía segura para medir tensión en un sistema de 12 V, interpretar límites orientativos y evitar errores que dañan el multímetro o el coche.",
    eyebrow: "Herramientas · Multímetro",
    summary:
      "Un multímetro permite observar tensión, pero no mide por sí solo la capacidad real de una batería ni certifica todo el sistema de carga. La configuración y los puntos de prueba son parte de la seguridad.",
    directAnswer:
      "Selecciona tensión continua, conecta el cable negro a COM y el rojo a la entrada de voltios, y mide solo en los puntos de 12 V autorizados. Una batería de plomo cargada y reposada suele aproximarse a 12,6 V y el sistema en marcha suele superar la tensión de reposo, pero temperatura, carga superficial y alternadores inteligentes cambian los valores. Compara siempre con el manual y complementa con una prueba de batería y caída de tensión.",
    readingMinutes: 12,
    sections: [
      {
        id: "antes-de-medir",
        heading: "Antes de medir: confirma sistema y entradas",
        paragraphs: [
          "Esta guía se limita a la red convencional de 12 V. No abras, midas ni manipules componentes naranjas o marcados como alta tensión de híbridos y eléctricos. Incluso estos vehículos tienen una batería auxiliar de 12 V, pero sus procedimientos de activación y carga pueden ser específicos.",
          "Comprueba que el instrumento, puntas y fusibles estén intactos. El cable negro va a COM y el rojo a V/Ω para tensión. Si el rojo queda en la entrada de amperios y se conecta entre los bornes, se produce un cortocircuito a través del medidor.",
        ],
        callout: {
          tone: "important",
          title: "Nunca midas corriente entre los bornes",
          text: "La entrada de amperios no se usa como la de voltios. Conectarla en paralelo puede fundir el instrumento, generar arco o provocar lesiones.",
        },
      },
      {
        id: "reposo",
        heading: "Medición en reposo: una fotografía parcial",
        paragraphs: [
          "Con el coche apagado y tras el tiempo de reposo indicado, mide directamente en los puntos autorizados. La polaridad invertida suele mostrar un signo negativo, pero conviene identificar positivo y masa antes de acercar las puntas.",
          "Alrededor de 12,6 V puede ser compatible con una batería de plomo bien cargada; aproximadamente 12,2 V indica una carga notablemente menor. Son referencias generales, no límites de sustitución. Una carga reciente eleva temporalmente la lectura y una batería degradada puede mostrar buena tensión sin entregar corriente.",
        ],
      },
      {
        id: "durante-arranque",
        heading: "Durante el arranque: la caída aporta contexto",
        paragraphs: [
          "Observar la tensión mínima mientras otra persona acciona el arranque puede revelar una caída grande, pero intervienen temperatura, motor, aceite, batería y conexiones. Usa pinzas seguras o función mínimo/máximo para no sostener puntas cerca de partes móviles.",
          "Una caída excesiva puede corresponder a batería débil, cableado resistivo o demanda anormal del motor de arranque. El siguiente paso no es comprar una pieza, sino probar capacidad y caídas a ambos lados del circuito.",
        ],
      },
      {
        id: "motor-en-marcha",
        heading: "Motor en marcha: los 14 V no son una ley universal",
        paragraphs: [
          "En sistemas tradicionales es habitual encontrar aproximadamente entre 13,5 y 14,8 V, según temperatura y carga. Sistemas inteligentes pueden bajar o elevar la tensión en distintas fases. Activa consumidores solo según un procedimiento seguro y observa estabilidad, no una cifra descontextualizada.",
          "Una lectura baja puede deberse a régimen, estrategia, correa, alternador, regulador, cable o masa. Una lectura demasiado alta también requiere atención porque puede dañar batería y electrónica.",
        ],
      },
      {
        id: "medicion-util",
        heading: "Cómo convertir la lectura en información útil",
        paragraphs: [
          "Anota tensión tras reposo, durante arranque y con el motor en marcha, junto con temperatura, consumidores y tiempo desde la última carga. Repite en condiciones comparables si buscas una tendencia.",
          "Si el resultado no coincide con la especificación o hay síntomas, un taller puede aplicar carga controlada, pinza amperimétrica y prueba de caída de tensión. Esas pruebas separan energía almacenada, resistencia de conexiones y generación.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Batería hinchada, agrietada, con fuga o congelada",
        action:
          "No midas ni cargues. Evita chispas y solicita manipulación profesional.",
      },
      {
        signal: "Puntas o cables dañados, metal expuesto o entrada incorrecta",
        action:
          "No utilices el instrumento hasta repararlo o sustituirlo.",
      },
      {
        signal: "Componentes naranjas o etiquetas de alta tensión",
        action:
          "No accedas ni midas. Solo personal cualificado debe intervenir.",
      },
      {
        signal: "Tensión inestable acompañada de olor, humo o cable caliente",
        action:
          "Apaga el vehículo si es seguro y pide asistencia.",
      },
    ],
    safeSteps: [
      {
        title: "Lee ambos manuales",
        detail:
          "Consulta el del coche y el del multímetro antes de seleccionar rango o puntos.",
      },
      {
        title: "Configura tensión continua",
        detail:
          "Negro en COM, rojo en V/Ω y rango capaz de medir 12–15 V.",
      },
      {
        title: "Asegura puntas y ropa",
        detail:
          "Nada suelto cerca de correas, ventiladores o poleas; el ventilador puede arrancar sin aviso.",
      },
      {
        title: "Registra condiciones",
        detail:
          "Reposo, temperatura, consumidores y fase de medición hacen interpretable el número.",
      },
      {
        title: "Detente ante una discrepancia",
        detail:
          "No uses el multímetro para puentear, activar o alimentar circuitos.",
      },
    ],
    workshop: {
      introduction:
        "Lleva tus lecturas como contexto, no como orden de sustitución. El profesional debe contrastarlas con especificaciones y pruebas bajo carga.",
      urgent: [
        "Sobrecarga aparente, olor, batería caliente o fuga.",
        "Testigo de carga y pérdida de funciones durante la marcha.",
        "Cableado que se calienta o caída de tensión extrema al arrancar.",
      ],
      appointment: [
        "La tensión de reposo cae repetidamente después de cargar.",
        "Las lecturas varían de manera anormal con consumidores.",
        "El arranque es lento pese a una tensión de reposo aparentemente correcta.",
      ],
      usefulInformation: [
        "Marca/modelo del instrumento y rango usado.",
        "Valores con hora, temperatura y estado del vehículo.",
        "Edad y tecnología de la batería.",
      ],
    },
    faqs: [
      {
        question: "¿12,6 V significa que la batería está perfecta?",
        answer:
          "No. Indica un estado de carga compatible en ciertas condiciones, pero no prueba capacidad, resistencia interna ni comportamiento bajo demanda.",
      },
      {
        question: "¿Puedo medir amperios de arranque con el multímetro?",
        answer:
          "No con un multímetro corriente conectado en serie. La intensidad es muy alta y requiere equipos y procedimientos específicos, como una pinza adecuada.",
      },
      {
        question: "¿Por qué la tensión cambia en un coche moderno?",
        answer:
          "La gestión inteligente ajusta la carga por temperatura, demanda, estado de batería y estrategia energética. Consulta los valores del fabricante.",
      },
      {
        question: "¿Dónde conecto la punta negra?",
        answer:
          "En el punto de masa indicado o en el negativo cuando el procedimiento lo permita. Algunos coches tienen puntos remotos específicos; usa el manual.",
      },
    ],
    relatedSlugs: [
      "bateria-alternador-motor-arranque",
      "como-elegir-bateria-coche",
      "bateria-se-descarga-coche-parado",
      "coche-no-arranca",
    ],
    sources: [
      sources.battery,
      sources.mechanicsManual,
      sources.hellaCharging,
      sources.hellaStarter,
    ],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
  },
  {
    slug: "como-elegir-bateria-coche",
    category: "mantenimiento",
    title: "Cómo elegir la batería del coche sin equivocarte en compatibilidad",
    seoTitle: "Cómo elegir batería de coche: Ah, CCA, AGM y EFB",
    description:
      "Aprende a comprobar voltaje, Ah, CCA, medidas, polaridad y tecnología. Cuándo una batería necesita registro y por qué no debes bajar especificación.",
    eyebrow: "Mantenimiento · Batería",
    summary:
      "Que una batería quepa en la bandeja no significa que sea compatible. Debe coincidir la tensión y respetarse tecnología, capacidad, arranque, dimensiones, fijación, polaridad, ventilación y requisitos electrónicos.",
    directAnswer:
      "Busca primero la especificación del manual, catálogo oficial del fabricante o batería instalada correctamente documentada. Confirma 12 V, Ah, CCA según la norma indicada, tamaño, altura, base de fijación, posición del positivo y tipo de terminal. Si el vehículo equipa Start-Stop o gestión de batería, conserva AGM/EFB según lo prescrito y averigua si necesita registro o codificación.",
    readingMinutes: 11,
    sections: [
      {
        id: "datos-que-deben-coincidir",
        heading: "Los datos que deben coincidir antes de comprar",
        paragraphs: [
          "Voltaje, dimensiones y polaridad son incompatibilidades inmediatas. Los amperios-hora describen capacidad nominal bajo condiciones normalizadas y el CCA refleja capacidad de arranque en frío según una norma; no compares cifras de normas distintas como si fueran equivalentes.",
          "La base y el sistema de sujeción impiden que la batería se mueva. La altura importa porque un borne demasiado próximo al capó puede crear un cortocircuito. Algunos montajes interiores requieren conducto de ventilación.",
        ],
        bullets: [
          "Tensión nominal.",
          "Tecnología: convencional, EFB o AGM según especificación.",
          "Capacidad en Ah y corriente de arranque con su norma.",
          "Longitud, anchura, altura y tipo de base.",
          "Polaridad, terminales y posición de la salida de gases.",
        ],
      },
      {
        id: "start-stop",
        heading: "Start-Stop y gestión inteligente: no bajes tecnología",
        paragraphs: [
          "Los ciclos repetidos y la recuperación de energía exigen baterías diseñadas para ello. Sustituir una AGM o EFB por una convencional puede reducir vida útil y alterar el funcionamiento, aunque el coche arranque el primer día.",
          "Algunos vehículos necesitan registrar la sustitución para que la unidad de gestión adapte la carga a una batería nueva. Otros requieren codificar capacidad o tecnología. Consulta documentación técnica fiable antes de desconectar.",
        ],
      },
      {
        id: "mas-no-siempre-mejor",
        heading: "Más Ah o más CCA no siempre significa mejor compra",
        paragraphs: [
          "Una cifra algo superior puede ser admisible si dimensiones, tecnología y estrategia lo permiten, pero no debe decidirse sin catálogo. Una batería incorrecta puede cargarse mal, no caber, quedar suelta o interferir con otros componentes.",
          "Una cifra inferior a la prescrita reduce margen de arranque y servicio eléctrico. En lugar de compensar una avería con «la más grande posible», diagnostica consumos, carga o dificultades mecánicas.",
        ],
      },
      {
        id: "sustitucion-y-residuo",
        heading: "La sustitución forma parte de la elección",
        paragraphs: [
          "Antes de comprar, decide quién conservará alimentación auxiliar si es necesaria, realizará el registro y comprobará carga y fugas de corriente. Al retirar bornes existe riesgo de corto, chispas y pérdida de configuraciones.",
          "La batería usada es un residuo regulado y debe entregarse al distribuidor o gestor autorizado. No la almacenes inclinada, al alcance de niños ni junto a fuentes de calor.",
        ],
        callout: {
          tone: "caution",
          title: "No copies solo la etiqueta antigua",
          text: "La batería instalada puede ser ya una sustitución incorrecta. Contrasta sus datos con el manual o un catálogo oficial por versión exacta.",
        },
      },
    ],
    dangerSignals: [
      {
        signal: "Batería deformada, caliente, con fuga o fuerte olor",
        action:
          "No la manipules ni cargues. Ventila sin generar chispas y solicita retirada profesional.",
      },
      {
        signal: "No puedes identificar polaridad o puntos de desconexión",
        action:
          "No improvises. Una inversión puede causar daños importantes.",
      },
      {
        signal: "Vehículo híbrido, eléctrico o batería en zona de difícil acceso",
        action:
          "Sigue el procedimiento específico o encarga la operación a personal cualificado.",
      },
    ],
    safeSteps: [
      {
        title: "Identifica la versión exacta",
        detail:
          "Motor, año, equipamiento Start-Stop y mercado pueden cambiar la batería.",
      },
      {
        title: "Consulta una fuente oficial",
        detail:
          "Manual o catálogo técnico actualizado antes de usar un buscador comercial.",
      },
      {
        title: "Verifica físicamente",
        detail:
          "Mide bandeja, altura, fijación, bornes, polaridad y ventilación.",
      },
      {
        title: "Planifica registro y reciclaje",
        detail:
          "Confirma codificación y entrega de la batería retirada antes de comprar.",
      },
      {
        title: "Comprueba el sistema",
        detail:
          "Tras instalar, verifica sujeción, arranque y carga según el procedimiento.",
      },
    ],
    workshop: {
      introduction:
        "Un taller debe poder justificar la referencia por especificación y confirmar si el vehículo requiere respaldo eléctrico, registro o adaptación.",
      urgent: [
        "La batería presenta daño, fuga o calentamiento.",
        "Hay corrosión severa, cableado reparado o terminales deteriorados.",
        "La batería nueva se descarga o aparece un aviso de carga.",
      ],
      appointment: [
        "No existe certeza sobre AGM/EFB o codificación.",
        "La ubicación exige desmontajes o afecta sistemas de seguridad.",
        "El coche tuvo varias descargas y aún no se comprobó la causa.",
      ],
      usefulInformation: [
        "VIN o versión exacta y equipamiento.",
        "Etiqueta completa de la batería actual, con norma del CCA.",
        "Historial de descargas y reparaciones del sistema eléctrico.",
      ],
    },
    faqs: [
      {
        question: "¿Puedo poner más amperios-hora?",
        answer:
          "Solo si la documentación o catálogo lo admite y se conservan tecnología, dimensiones y estrategia de carga. No es una mejora automática.",
      },
      {
        question: "¿AGM y EFB son intercambiables?",
        answer:
          "No libremente. Son tecnologías distintas. Mantén la especificada y consulta si el fabricante autoriza una mejora concreta.",
      },
      {
        question: "¿Qué es registrar la batería?",
        answer:
          "Es informar al sistema de gestión de que se instaló una batería nueva y, según el modelo, de su capacidad o tecnología para adaptar la carga.",
      },
      {
        question: "¿La matrícula basta para encontrar una batería?",
        answer:
          "Es un buen filtro, pero verifica siempre versión, medidas, polaridad y especificación. Las bases de datos pueden contener variantes.",
      },
    ],
    relatedSlugs: [
      "comprobar-bateria-alternador-multimetro",
      "cargador-mantenedor-bateria",
      "bateria-se-descarga-coche-parado",
      "bateria-alternador-motor-arranque",
    ],
    sources: [
      sources.battery,
      sources.mechanicsManual,
      sources.vartaReplacement,
      sources.vartaBem,
    ],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
  },
  {
    slug: "como-elegir-lector-obd2",
    category: "herramientas",
    title: "Cómo elegir un lector OBD2 y entender lo que no puede diagnosticar",
    seoTitle: "Cómo elegir lector OBD2: compatibilidad y funciones",
    description:
      "Compara lectores OBD2 por cobertura, aplicación, datos en vivo y privacidad. Por qué un código no identifica automáticamente una pieza averiada.",
    eyebrow: "Herramientas · Diagnóstico OBD",
    summary:
      "OBD permite consultar información de diagnóstico, especialmente relacionada con emisiones, pero la cobertura genérica no equivale a acceder a todos los módulos ni a realizar un diagnóstico completo.",
    directAnswer:
      "Elige por compatibilidad comprobada con vehículo y dispositivo móvil, protocolos soportados, módulos accesibles, datos en vivo, actualizaciones, exportación y privacidad. Un lector básico puede leer códigos genéricos de motor; ABS, airbag, servicio, codificación o pruebas activas suelen exigir cobertura específica. Nunca compres por la promesa «borra todos los fallos».",
    readingMinutes: 12,
    sections: [
      {
        id: "que-es-obd",
        heading: "OBD2, EOBD y el alcance real",
        paragraphs: [
          "La toma normalizada facilita el acceso a información de diagnóstico y emisiones, pero el vehículo contiene múltiples redes y unidades. Un lector genérico puede mostrar códigos P0xxx y parámetros comunes mientras ignora códigos del fabricante o módulos de carrocería, frenos y seguridad.",
          "La presencia física del conector no garantiza que una aplicación cubra cada función. Comprueba año, combustible, mercado, protocolo y lista de vehículos del fabricante del lector.",
        ],
      },
      {
        id: "niveles-de-herramienta",
        heading: "Elige el nivel por la pregunta que quieres responder",
        paragraphs: [
          "Para conocer por qué se enciende el testigo de motor, un lector básico con códigos, descripción, datos congelados y datos en vivo puede bastar como punto de partida. Para ABS, airbag, regeneración, mantenimiento o actuadores se necesita cobertura declarada y procedimientos seguros.",
          "Codificar, adaptar o activar componentes aumenta el riesgo. Una función disponible en el menú no significa que sea adecuada para tu versión ni que pueda ejecutarse sin alimentación estabilizada y documentación técnica.",
        ],
        bullets: [
          "Lectura de códigos presentes, pendientes y permanentes.",
          "Datos congelados antes de borrar.",
          "Datos en vivo con unidades y frecuencia suficientes.",
          "Cobertura por módulo y vehículo, no solo «todos los coches».",
          "Actualizaciones, soporte, exportación y política de datos.",
        ],
      },
      {
        id: "codigo-no-es-pieza",
        heading: "Un código describe una condición, no una orden de compra",
        paragraphs: [
          "Un código de mezcla pobre, por ejemplo, puede relacionarse con entrada de aire, presión de combustible, sensor, escape o cableado. Sustituir la pieza mencionada en una descripción automática puede gastar dinero sin resolver la causa.",
          "Lee datos congelados, busca boletines y aplica pruebas eléctricas o mecánicas. Si no puedes validar una hipótesis, conserva la información y acude al taller.",
        ],
      },
      {
        id: "borrar-y-readiness",
        heading: "Borrar códigos también borra contexto",
        paragraphs: [
          "Al borrar, se eliminan códigos y datos congelados y se reinician monitores de preparación. El testigo puede apagarse hasta que el sistema detecte de nuevo el fallo. Esto no constituye una reparación y puede complicar diagnóstico e ITV.",
          "Los códigos permanentes no siempre se eliminan por orden del usuario; el sistema necesita confirmar que la condición se resolvió. No fuerces ciclos ni conduzcas de forma insegura para completar monitores.",
        ],
        callout: {
          tone: "important",
          title: "Úsalo con el coche detenido",
          text: "Configura, conecta y consulta en un lugar seguro. No mires el teléfono ni el escáner mientras conduces.",
        },
      },
      {
        id: "privacidad-y-calidad",
        heading: "La aplicación también forma parte del producto",
        paragraphs: [
          "Revisa permisos, cuenta obligatoria, almacenamiento en nube, exportación y frecuencia de actualización. Un adaptador inalámbrico abandonado puede mantener una conexión, consumir energía o exponer acceso no deseado.",
          "Valora aislamiento, construcción del conector, modo de reposo y soporte. Retíralo tras usarlo salvo que fabricante del coche y dispositivo documenten un uso permanente seguro.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Aviso de airbag, frenos, temperatura, aceite o fallo motor parpadeando",
        action:
          "No uses el lector para decidir que es seguro circular. Sigue el manual y pide asistencia cuando corresponda.",
      },
      {
        signal: "Conector dañado, olor, calor o pérdida de comunicación general",
        action:
          "Desconecta con el contacto apagado y solicita revisión; no fuerces pines.",
      },
      {
        signal: "La herramienta propone codificación o prueba activa no comprendida",
        action:
          "Cancela. Una orden inadecuada puede mover actuadores o desconfigurar sistemas.",
      },
    ],
    safeSteps: [
      {
        title: "Define la función necesaria",
        detail:
          "Motor genérico, módulos específicos, datos o servicio exigen niveles distintos.",
      },
      {
        title: "Confirma compatibilidad por versión",
        detail:
          "No te conformes con año y marca; revisa motor, mercado y módulo.",
      },
      {
        title: "Conecta con el vehículo detenido",
        detail:
          "Sigue el orden de contacto descrito por ambas instrucciones.",
      },
      {
        title: "Lee antes de borrar",
        detail:
          "Guarda código, estado, datos congelados y condiciones.",
      },
      {
        title: "Valida con pruebas",
        detail:
          "Usa el código para construir hipótesis, no para elegir recambio.",
      },
    ],
    workshop: {
      introduction:
        "Comparte el informe original sin borrar. El taller puede correlacionar códigos, datos, esquema eléctrico y pruebas físicas.",
      urgent: [
        "El aviso afecta frenos, airbag, aceite, temperatura o el motor funciona mal.",
        "Hay humo, olor a combustible, vibración o pérdida intensa de potencia.",
        "Se interrumpió una codificación o el vehículo ya no arranca después de usar la herramienta.",
      ],
      appointment: [
        "El mismo código vuelve después de borrar.",
        "Los datos en vivo son incoherentes y no tienes valores de referencia.",
        "Necesitas acceder a módulos o funciones de seguridad.",
      ],
      usefulInformation: [
        "Informe completo con estado de cada código.",
        "Datos congelados, kilometraje y momento del fallo.",
        "Nombre y versión del lector y de la aplicación.",
      ],
    },
    faqs: [
      {
        question: "¿Todos los coches tienen OBD2?",
        answer:
          "La obligación y cobertura dependen de mercado, combustible y fecha. En Europa se implantó progresivamente como EOBD; confirma tu vehículo concreto.",
      },
      {
        question: "¿Un lector barato puede dañar el coche?",
        answer:
          "Un diseño defectuoso, pines dañados o funciones mal usadas pueden causar problemas. Elige soporte y compatibilidad, conecta correctamente y evita codificaciones no entendidas.",
      },
      {
        question: "¿Borrar un código repara la avería?",
        answer:
          "No. Solo elimina información y apaga temporalmente algunos avisos. El sistema volverá a detectarla si la causa permanece.",
      },
      {
        question: "¿Puedo dejar el adaptador siempre conectado?",
        answer:
          "Solo si ambos fabricantes lo contemplan. Algunos consumen batería o mantienen una interfaz inalámbrica activa.",
      },
    ],
    relatedSlugs: [
      "testigos-coche-significado",
      "checklist-itv-coche-antiguo",
      "coche-no-arranca",
      "humo-blanco-azul-negro-escape",
    ],
    sources: [
      sources.obdRegulation,
      sources.itvManual,
      sources.emergencyMode,
      sources.boschEsitronic,
      sources.boschKts,
    ],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
  },
  {
    slug: "como-elegir-arrancador-bateria",
    category: "herramientas",
    title: "Cómo elegir un arrancador de batería sin confiar solo en los amperios anunciados",
    seoTitle: "Cómo elegir arrancador de batería para coche",
    description:
      "Qué comprobar en un arrancador portátil: voltaje, motor admitido, pinzas, protecciones, temperatura y por qué no sustituye una reparación.",
    eyebrow: "Herramientas · Arranque de emergencia",
    summary:
      "Un arrancador es una ayuda de emergencia para aportar energía durante el arranque. No recarga por completo la batería ni demuestra por qué se descargó.",
    directAnswer:
      "Elige un equipo de la tensión exacta del vehículo, con rango de cilindrada y combustible declarado por el fabricante, pinzas robustas, protección de polaridad y temperatura, instrucciones claras y capacidad de conservar carga. Da más valor a ensayos, garantía y límites de uso que a una cifra pico sin condiciones.",
    readingMinutes: 10,
    sections: [
      {
        id: "compatibilidad-real",
        heading: "Voltaje y motor: la primera compatibilidad",
        paragraphs: [
          "La mayoría de turismos usa una red de 12 V, pero no lo des por hecho ni conectes un equipo de 24 V. Consulta puntos de apoyo y procedimiento: en algunos coches la batería no está bajo el capó y existen terminales remotos.",
          "Los fabricantes suelen declarar cilindrada máxima diferente para gasolina y diésel. Temperatura, viscosidad, compresión y estado de la batería cambian el esfuerzo, por lo que ese límite debe tener margen y condiciones claras.",
        ],
      },
      {
        id: "cifras-y-construccion",
        heading: "Corriente pico no resume la calidad",
        paragraphs: [
          "La cifra máxima puede medirse durante un instante y con condiciones favorables. Busca corriente de arranque útil, energía expresada de forma coherente, tiempo entre intentos, funcionamiento en frío y número de arranques bajo un método declarado.",
          "Examina longitud y sección de cables, superficie de las pinzas, aislamiento, protección frente a inversión, cortocircuito, sobretemperatura y baja tensión. Una caja resistente y un indicador fiable importan cuando el equipo pasa meses en el coche.",
        ],
      },
      {
        id: "uso-seguro",
        heading: "El manual del coche decide dónde y cómo conectar",
        paragraphs: [
          "Estaciona, apaga consumidores y confirma polaridad. Conecta positivo al punto positivo autorizado y negativo al punto de masa indicado, no necesariamente al borne negativo. Sigue el orden de encendido y retirada del equipo, y respeta la duración máxima.",
          "Si el arrancador activa un modo de anulación de protecciones para baterías extremadamente descargadas, no lo uses sin entenderlo. Ese modo puede eliminar la detección de polaridad y aumentar el riesgo.",
        ],
      },
      {
        id: "despues-de-arrancar",
        heading: "Después de arrancar todavía falta el diagnóstico",
        paragraphs: [
          "Retira el equipo según instrucciones y comprueba que no haya testigo de carga, temperatura o ruidos. No des por hecho que unos minutos al ralentí reponen la energía: el estado de batería y estrategia de carga determinan la recuperación.",
          "Haz comprobar batería y sistema de carga. Si el coche llevaba mucho parado, un cargador compatible puede ser más adecuado que confiar en el alternador para recuperar una descarga profunda.",
        ],
        callout: {
          tone: "info",
          title: "Mantenimiento del propio arrancador",
          text: "Revisa su nivel con la frecuencia indicada, evita temperaturas extremas y no lo almacenes dañado o hinchado. Un arrancador vacío no es equipamiento de emergencia.",
        },
      },
    ],
    dangerSignals: [
      {
        signal: "Batería del coche hinchada, con fuga, congelada o muy caliente",
        action:
          "No conectes el arrancador. Solicita asistencia profesional.",
      },
      {
        signal: "Polaridad o tensión desconocidas",
        action:
          "No pruebes. Confirma con el manual o asistencia.",
      },
      {
        signal: "Arrancador deformado, golpeado, mojado o caliente",
        action:
          "No lo cargues ni uses; aísla según las instrucciones del fabricante.",
      },
      {
        signal: "Chispa intensa, olor o cable que se recalienta",
        action:
          "Interrumpe si puede hacerse con seguridad y aléjate.",
      },
    ],
    safeSteps: [
      {
        title: "Confirma 12 V y puntos autorizados",
        detail:
          "Usa el manual del coche, no la posición aparente de la batería.",
      },
      {
        title: "Inspecciona ambos equipos",
        detail:
          "Sin fugas, deformación, aislamiento roto ni pinzas flojas.",
      },
      {
        title: "Apaga todos los consumidores",
        detail:
          "Contacto, luces y accesorios según el procedimiento.",
      },
      {
        title: "Conecta y espera lo indicado",
        detail:
          "Respeta polaridad, masa, orden y pausas del fabricante.",
      },
      {
        title: "Revisa el sistema después",
        detail:
          "Un arranque exitoso no cierra el problema que causó la descarga.",
      },
    ],
    workshop: {
      introduction:
        "Si necesitas un arrancador más de una vez, deja de tratarlo como solución. Batería, carga y consumos deben probarse.",
      urgent: [
        "Batería dañada, fuga, olor, calor o humo.",
        "El motor no gira pese al apoyo o emite ruido mecánico.",
        "El testigo de carga permanece encendido después de arrancar.",
      ],
      appointment: [
        "Segundo arranque asistido en pocos días.",
        "Batería que pasó una descarga profunda.",
        "Vehículo que permanece parado y descarga aunque la batería es reciente.",
      ],
      usefulInformation: [
        "Tiempo parado y causa aparente de descarga.",
        "Especificación de batería y edad.",
        "Modelo del arrancador y mensajes mostrados.",
      ],
    },
    faqs: [
      {
        question: "¿Cuántos amperios necesito?",
        answer:
          "No hay una cifra universal. Usa el rango declarado para combustible, cilindrada y temperatura, y valora cómo se ha medido la corriente.",
      },
      {
        question: "¿Un arrancador carga la batería?",
        answer:
          "Su función principal es aportar corriente durante segundos. No sustituye una carga controlada ni una prueba de capacidad.",
      },
      {
        question: "¿Puedo conectar negativo al borne negativo?",
        answer:
          "Sigue el manual. Muchos vehículos indican un punto de masa alejado de la batería para reducir riesgos y respetar sensores.",
      },
      {
        question: "¿Puedo guardarlo siempre en el maletero?",
        answer:
          "Solo dentro del rango de temperatura y almacenamiento del fabricante. El calor y el frío extremos reducen rendimiento y vida.",
      },
    ],
    relatedSlugs: [
      "coche-no-arranca",
      "cargador-mantenedor-bateria",
      "bateria-alternador-motor-arranque",
      "como-elegir-bateria-coche",
    ],
    sources: [
      sources.battery,
      sources.startInWinter,
      sources.mechanicsManual,
      sources.nocoGb40,
    ],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
  },
  {
    slug: "cargador-mantenedor-bateria",
    category: "herramientas",
    title: "Cargador o mantenedor de batería: cuál necesitas y cómo usarlo",
    seoTitle: "Cargador y mantenedor de batería de coche",
    description:
      "Diferencias entre cargar y mantener, compatibilidad con AGM/EFB, intensidad, seguridad y cuándo una batería descargada debe revisarse.",
    eyebrow: "Herramientas · Cuidado de batería",
    summary:
      "Un cargador recupera energía a una velocidad controlada; un mantenedor compensa autodescarga y pequeños consumos durante periodos largos. Algunos equipos hacen ambas tareas, pero deben coincidir tensión y química.",
    directAnswer:
      "Para un turismo de 12 V elige un equipo expresamente compatible con la tecnología de la batería, con corriente adecuada a su capacidad, control automático y protecciones. Si el coche pasa semanas parado, el modo mantenimiento puede evitar descargas; si la batería ya está muy baja, primero confirma que no esté dañada o congelada. Los modos de reparación no revierten desgaste físico.",
    readingMinutes: 11,
    sections: [
      {
        id: "cargar-o-mantener",
        heading: "Cargar y mantener resuelven situaciones distintas",
        paragraphs: [
          "Una carga completa puede durar horas y sigue fases definidas por el equipo. El mantenimiento supervisa la tensión y aporta energía cuando corresponde, por lo que es útil en vehículos de uso estacional. Un alimentador estabilizado para diagnosis o programación es otra categoría y no debe sustituirse por cualquier cargador.",
          "La corriente máxima influye en el tiempo, pero más no siempre es mejor. Respeta la capacidad y el límite de la batería y del vehículo; una carga lenta suele generar menos calor.",
        ],
      },
      {
        id: "tecnologia",
        heading: "Selecciona la tecnología correcta",
        paragraphs: [
          "Convencional, EFB, AGM y litio usan perfiles diferentes. No actives un modo de litio en plomo ni una desulfatación de alta tensión con la batería conectada al coche si el fabricante no lo autoriza.",
          "La compensación de temperatura es valiosa porque la tensión de carga apropiada varía. Confirma también si el equipo detecta baterías muy descargadas o exige un procedimiento manual que desactive protecciones.",
        ],
      },
      {
        id: "conectado-al-coche",
        heading: "Cargar montada o desmontada depende del vehículo",
        paragraphs: [
          "Muchos coches admiten carga mediante puntos remotos para que el sensor de batería registre la energía. Otros requieren desconexión o precauciones específicas. Sigue ambos manuales y mantén ventilación.",
          "Con el cargador desenchufado de la red, conecta positivo y el punto negativo o masa indicado. Después energiza el cargador. Para retirarlo, finaliza el ciclo, desenchufa y sigue el orden descrito.",
        ],
      },
      {
        id: "cuando-no-recupera",
        heading: "Una carga aceptada no devuelve capacidad perdida",
        paragraphs: [
          "Una batería envejecida puede alcanzar tensión y caer al primer arranque. Otra puede no aceptar carga por sulfatación, cortocircuito interno o temperatura. Haz una prueba de capacidad antes de confiar en ella para un viaje.",
          "Si vuelve a descargarse, investiga trayectos cortos, carga insuficiente, accesorios o consumo en reposo. Mantener indefinidamente una batería con una avería no resuelve el origen.",
        ],
        callout: {
          tone: "caution",
          title: "«Reparar» no significa rejuvenecer",
          text: "Los modos de reacondicionamiento tienen usos limitados y pueden elevar la tensión. Úsalos solo cuando batería, cargador y vehículo lo permitan.",
        },
      },
    ],
    dangerSignals: [
      {
        signal: "Batería congelada, hinchada, rota, con fuga o demasiado caliente",
        action:
          "No la cargues. Aísla fuentes de ignición y solicita gestión profesional.",
      },
      {
        signal: "Ventilación insuficiente o presencia de llama/chispa",
        action:
          "No inicies la carga. Las baterías pueden liberar gases inflamables.",
      },
      {
        signal: "Cargador o cables dañados, mojados o sobrecalentados",
        action:
          "Desconecta la red si puede hacerse con seguridad y no reutilices el equipo.",
      },
    ],
    safeSteps: [
      {
        title: "Identifica batería y tensión",
        detail:
          "Lee etiqueta y manual; no deduzcas la química solo por el aspecto.",
      },
      {
        title: "Elige el perfil exacto",
        detail:
          "Confirma AGM, EFB, convencional o litio y capacidad admitida.",
      },
      {
        title: "Ventila e inspecciona",
        detail:
          "Sin daño, congelación, calor, fugas ni fuentes de ignición.",
      },
      {
        title: "Conecta sin red",
        detail:
          "Usa los puntos y orden del fabricante antes de enchufar.",
      },
      {
        title: "Comprueba el resultado",
        detail:
          "Después del reposo, verifica carga y capacidad; investiga una descarga repetida.",
      },
    ],
    workshop: {
      introduction:
        "Una batería que no completa el ciclo, se calienta o vuelve a caer debe probarse fuera de la intuición del cargador.",
      urgent: [
        "Daño físico, fuga, olor o temperatura anormal.",
        "El cargador informa de polaridad o batería defectuosa repetidamente.",
        "Aparecen avisos eléctricos después de la carga.",
      ],
      appointment: [
        "La batería se descarga pese al mantenimiento.",
        "No conoces el procedimiento de conexión o registro del vehículo.",
        "El coche necesita alimentación estabilizada para una intervención electrónica.",
      ],
      usefulInformation: [
        "Tecnología y capacidad de batería.",
        "Modo, corriente, duración y resultado del cargador.",
        "Tiempo de reposo hasta la siguiente descarga.",
      ],
    },
    faqs: [
      {
        question: "¿Puedo dejar un mantenedor conectado meses?",
        answer:
          "Solo si está diseñado para ello, la instalación es segura y ambos fabricantes lo permiten. Revisa periódicamente batería, cables y entorno.",
      },
      {
        question: "¿Cuántos amperios debe tener el cargador?",
        answer:
          "Depende de capacidad, química y tiempo disponible. La documentación suele indicar un rango; evita asumir que la mayor corriente es mejor.",
      },
      {
        question: "¿Hay que desconectar la batería del coche?",
        answer:
          "Depende del modelo y del cargador. Algunos exigen usar puntos remotos con la batería conectada; otros establecen desconexión. Consulta ambos manuales.",
      },
      {
        question: "¿Un cargador arregla una batería sulfatada?",
        answer:
          "Puede recuperar parcialmente algunos casos, pero no revierte placas dañadas, pérdida de material ni un cortocircuito. Comprueba capacidad.",
      },
    ],
    relatedSlugs: [
      "como-elegir-bateria-coche",
      "bateria-se-descarga-coche-parado",
      "como-elegir-arrancador-bateria",
      "comprobar-bateria-alternador-multimetro",
    ],
    sources: [
      sources.battery,
      sources.mechanicsManual,
      sources.vartaCharging,
      sources.vartaReplacement,
    ],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
  },
  {
    slug: "bateria-se-descarga-coche-parado",
    category: "problemas",
    title: "La batería se descarga con el coche parado: cómo acotar la causa",
    seoTitle: "Batería se descarga con el coche parado: causas",
    description:
      "Diferencia batería degradada, falta de carga y consumo en reposo. Comprobaciones seguras antes de medir amperios o sacar fusibles.",
    eyebrow: "Problemas · Consumo en reposo",
    summary:
      "Una descarga durante el estacionamiento puede proceder de una batería envejecida, una carga incompleta, un consumidor que no duerme, un accesorio o un problema de cableado. El tiempo hasta fallar es una pista.",
    directAnswer:
      "Carga la batería con un equipo compatible, verifica su capacidad y el sistema de carga, y registra cuánto tarda en volver a caer. Revisa luces, tomas, puertas, llave próxima y accesorios añadidos. Medir consumo exige esperar a que todas las unidades entren en reposo y mantener la alimentación de forma controlada; sacar fusibles o usar el multímetro en amperios sin procedimiento puede causar daños.",
    readingMinutes: 12,
    sections: [
      {
        id: "tres-causas",
        heading: "Separa almacenamiento, reposición y consumo",
        paragraphs: [
          "Una batería degradada almacena poca energía aunque se cargue. Un alternador o patrón de trayectos puede no reponer lo gastado. Un consumo en reposo agota incluso una batería sana. Las tres causas pueden coexistir.",
          "Comienza por estado de batería y carga, porque medir consumo con una batería defectuosa produce conclusiones engañosas. Registra tensión solo como tendencia; una prueba de capacidad aporta más.",
        ],
      },
      {
        id: "pistas-sin-desmontar",
        heading: "Pistas que puedes comprobar sin abrir circuitos",
        paragraphs: [
          "Comprueba luz de maletero o guantera, puertas que no reconocen cierre, cargadores en tomas, cámara, alarma, radio o localizador instalados después. Una llave inteligente guardada muy cerca puede mantener comunicaciones en determinados modelos.",
          "Observa si el fallo tarda una noche, varios días o semanas y si aparece después de lluvia, reparación o actualización. No desconectes sistemas uno a uno sin saber qué protegen.",
        ],
        bullets: [
          "Fallo tras una sola noche: consumo importante, batería muy degradada o carga insuficiente.",
          "Fallo tras semanas: puede superar el tiempo de estacionamiento previsto, pero debe compararse con el manual.",
          "Solo después de trayectos cortos: balance de carga insuficiente.",
          "Desde instalar un accesorio: revisar instalación, modo reposo y conexión.",
        ],
      },
      {
        id: "medir-consumo",
        heading: "Por qué medir consumo en reposo es delicado",
        paragraphs: [
          "Las unidades pueden tardar minutos o mucho más en dormir. Abrir una puerta, acercar la llave o interrumpir alimentación reinicia el proceso. No existe un único límite de miliamperios válido para todos los coches.",
          "El amperímetro se conecta en serie y tiene un fusible limitado. Un consumidor que se active durante la prueba puede superar su capacidad. Los profesionales emplean pinzas de baja corriente, puentes protegidos, caída en fusibles y documentación de tiempos de reposo.",
        ],
        callout: {
          tone: "important",
          title: "No pongas el multímetro en amperios entre positivo y negativo",
          text: "Eso crea un cortocircuito a través del instrumento. La medición de corriente requiere abrir el circuito y un procedimiento específico.",
        },
      },
      {
        id: "soluciones-adecuadas",
        heading: "La solución depende de cómo usas el coche",
        paragraphs: [
          "Un mantenedor puede ser apropiado para un coche estacional si no existe avería y hay una instalación segura. Desconectar la batería puede desconfigurar sistemas y no es una rutina universal.",
          "Si un módulo, alarma o accesorio no entra en reposo, debe repararse o reconfigurarse. Una batería de mayor capacidad no convierte un consumo anormal en aceptable.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Cable, fusible o módulo caliente con el coche apagado",
        action:
          "No sigas probando. Puede existir sobrecorriente o corto; solicita asistencia.",
      },
      {
        signal: "Olor a quemado, humo o batería caliente",
        action:
          "Aléjate y desconecta solo si el procedimiento es seguro; llama a emergencias si hay fuego.",
      },
      {
        signal: "Accesorio añadido con empalmes, fusible puenteado o cable suelto",
        action:
          "No lo manipules energizado. Requiere revisar la instalación.",
      },
    ],
    safeSteps: [
      {
        title: "Carga de forma controlada",
        detail:
          "Usa el perfil correcto y deja estabilizar antes de tomar una referencia.",
      },
      {
        title: "Prueba batería y carga",
        detail:
          "Descarta primero poca capacidad o alternador antes de buscar un consumo.",
      },
      {
        title: "Elimina causas visibles",
        detail:
          "Luces, tomas y accesorios, sin extraer fusibles al azar.",
      },
      {
        title: "Registra el tiempo",
        detail:
          "Fecha, tensión orientativa, kilómetros y días hasta el siguiente fallo.",
      },
      {
        title: "Reserva la medida de corriente",
        detail:
          "Si no conoces reposo, fusibles y límites del instrumento, encárgala.",
      },
    ],
    workshop: {
      introduction:
        "Solicita una prueba completa: capacidad de batería, sistema de carga y consumo después del tiempo de reposo especificado.",
      urgent: [
        "Calor, olor, humo o cableado modificado sin protección.",
        "La batería se descarga mientras el vehículo está en uso.",
        "Hay reinicios, bloqueo o pérdida de funciones de seguridad.",
      ],
      appointment: [
        "Se descarga en menos tiempo del previsto tras una carga completa.",
        "El problema comenzó después de instalar un accesorio.",
        "Una batería nueva repite exactamente el mismo fallo.",
      ],
      usefulInformation: [
        "Días y condiciones hasta cada descarga.",
        "Accesorios añadidos y fecha de instalación.",
        "Edad, pruebas y cargas realizadas a la batería.",
      ],
    },
    faqs: [
      {
        question: "¿Cuánto consumo en reposo es normal?",
        answer:
          "No hay una cifra universal. Depende de módulos, equipamiento y tiempo de sueño. Debe compararse con la información técnica del modelo.",
      },
      {
        question: "¿Desconectar el borne evita que se descargue?",
        answer:
          "Puede evitar consumo del coche, pero también borrar adaptaciones, desactivar alarmas o crear problemas. No soluciona la causa y no es apropiado para todos.",
      },
      {
        question: "¿Una batería más grande durará más aparcada?",
        answer:
          "Podría tardar más en vaciarse si es compatible, pero un consumo anormal seguirá existiendo. Además, tamaño y estrategia de carga limitan la elección.",
      },
      {
        question: "¿Puedo sacar fusibles hasta que baje el consumo?",
        answer:
          "Sin esquema y procedimiento puedes despertar módulos, borrar datos o afectar seguridad. Hay métodos de diagnóstico menos disruptivos.",
      },
    ],
    relatedSlugs: [
      "comprobar-bateria-alternador-multimetro",
      "cargador-mantenedor-bateria",
      "como-elegir-bateria-coche",
      "bateria-alternador-motor-arranque",
    ],
    sources: [
      sources.battery,
      sources.mechanicsManual,
      sources.subaruParasiticDraw,
      sources.fordOwnerManual,
    ],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
  },
  {
    slug: "motor-sobrecalentado-que-hacer",
    category: "problemas",
    title: "Motor sobrecalentado: qué hacer para no convertirlo en una avería mayor",
    seoTitle: "Motor sobrecalentado: qué hacer y qué evitar",
    description:
      "Pasos seguros ante temperatura alta o vapor: detenerse, enfriar sin abrir el circuito y reconocer cuándo el coche necesita grúa.",
    eyebrow: "Problemas · Refrigeración",
    summary:
      "La temperatura alta puede dañar culata, juntas, lubricación y motor en pocos minutos. La prioridad es reducir riesgo y detenerse, no alcanzar el destino.",
    directAnswer:
      "Apaga el aire acondicionado, reduce carga y busca inmediatamente un lugar seguro sin prolongar la marcha. Si el indicador sigue alto, aparece aviso rojo, vapor o pérdida de potencia, detén y apaga el motor. No abras el tapón del refrigerante en caliente ni viertas agua fría. Tras enfriar por completo, una inspección visual puede mostrar falta de nivel o fuga, pero el vehículo debe diagnosticarse antes de volver a usarlo.",
    readingMinutes: 10,
    sections: [
      {
        id: "reaccion-inmediata",
        heading: "La reacción durante los primeros minutos",
        paragraphs: [
          "Una aguja por encima de su zona habitual o un mensaje de temperatura exige atención inmediata. Apaga climatización, evita aceleraciones y busca un punto seguro. Encender la calefacción máxima puede extraer algo de calor en algunos coches, pero no debe usarse para seguir circulando ni si compromete al conductor.",
          "Si hay vapor, ruido, pérdida de potencia o aviso rojo, detente. Activa el protocolo de emergencia y apaga el motor. Mantén a las personas lejos del tráfico y del vano caliente.",
        ],
      },
      {
        id: "enfriamiento",
        heading: "Enfriar significa esperar, no abrir",
        paragraphs: [
          "El circuito trabaja presurizado y el refrigerante puede superar el punto de ebullición atmosférico. Abrir el tapón libera presión y puede expulsar líquido y vapor capaces de causar quemaduras graves.",
          "No eches agua fría sobre el motor o radiador. El cambio térmico puede deformar o agrietar componentes. Espera el tiempo indicado por el fabricante y no pongas manos cerca del ventilador eléctrico, que puede arrancar con el motor parado.",
        ],
        callout: {
          tone: "important",
          title: "Nunca abras en caliente",
          text: "Que el vaso parezca vacío no elimina la presión. Espera a que el conjunto esté completamente frío y sigue el manual.",
        },
      },
      {
        id: "causas-posibles",
        heading: "Qué puede causar el sobrecalentamiento",
        paragraphs: [
          "Nivel bajo por fuga, ventilador que no funciona, termostato, bomba, radiador obstruido, correa, tapón, aire en el circuito o problemas internos pueden producir síntomas similares. Reponer líquido sin encontrar por dónde se perdió solo aplaza el episodio.",
          "El refrigerante correcto depende de especificación, no de color. Mezclar productos incompatibles puede reducir protección o formar depósitos. Si necesitas una actuación de emergencia, sigue expresamente el manual y repara cuanto antes.",
        ],
      },
      {
        id: "despues-del-episodio",
        heading: "Después de enfriar no asumas que ya está resuelto",
        paragraphs: [
          "Con el motor completamente frío puedes observar nivel, manchas, manguitos colapsados o restos secos, sin retirar protecciones ni entrar bajo el coche. Si faltaba líquido, hay una causa que debe localizarse.",
          "No conduzcas si hubo vapor, pérdida importante, mezcla con aceite, humo persistente o temperatura que vuelve a subir. Una grúa suele costar menos que un daño de motor.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Vapor, refrigerante expulsado o aviso rojo",
        action:
          "Detén y apaga el motor. No abras el circuito y solicita asistencia.",
      },
      {
        signal: "Pérdida de potencia, golpeteo o motor que se para",
        action:
          "No intentes volver a arrancar. Requiere traslado.",
      },
      {
        signal: "Aceite con aspecto lechoso o refrigerante contaminado",
        action:
          "No circules. Puede existir comunicación interna entre circuitos.",
      },
      {
        signal: "Temperatura sube de nuevo tras enfriar",
        action:
          "Apaga inmediatamente y usa grúa; el fallo sigue activo.",
      },
    ],
    safeSteps: [
      {
        title: "Reduce carga y localiza salida",
        detail:
          "Sin maniobras bruscas, busca un lugar seguro y no intentes llegar «solo unos kilómetros más».",
      },
      {
        title: "Detén y apaga",
        detail:
          "Ante vapor, aviso rojo o temperatura persistente, activa emergencia y para el motor.",
      },
      {
        title: "Espera lejos del vano",
        detail:
          "No abras tapones ni acerques manos al ventilador.",
      },
      {
        title: "Inspecciona solo en frío",
        detail:
          "Nivel, manchas y daños visibles, conforme al manual.",
      },
      {
        title: "Decide por riesgo",
        detail:
          "Si hubo pérdida o vuelve a subir, traslado en grúa.",
      },
    ],
    workshop: {
      introduction:
        "Pide prueba de presión, verificación de ventilador, termostato, circulación, tapón y posibles gases según los síntomas; no solo rellenar.",
      urgent: [
        "Vapor, gran pérdida o temperatura que reaparece.",
        "Ruidos, pérdida de potencia, mezcla de fluidos o humo persistente.",
        "Correa ausente o dañada.",
      ],
      appointment: [
        "El nivel baja lentamente sin mancha visible.",
        "La temperatura fluctúa o la calefacción cambia de caliente a fría.",
        "El ventilador funciona de forma anormal o nunca se activa.",
      ],
      usefulInformation: [
        "Temperatura exterior, velocidad y carga cuando ocurrió.",
        "Tiempo desde el último mantenimiento del refrigerante.",
        "Cantidad y tipo exacto de cualquier líquido añadido.",
      ],
    },
    faqs: [
      {
        question: "¿Puedo abrir el tapón con un trapo?",
        answer:
          "No mientras esté caliente. Un trapo no protege de refrigerante a presión ni vapor. Espera el enfriamiento completo.",
      },
      {
        question: "¿Puedo añadir agua?",
        answer:
          "Solo como medida excepcional si el manual lo contempla y con el motor frío. Después hay que reparar y restablecer la mezcla correcta.",
      },
      {
        question: "¿Encender la calefacción enfría el motor?",
        answer:
          "Puede extraer algo de calor en ciertos sistemas mientras encuentras dónde parar, pero no soluciona el fallo ni autoriza a continuar.",
      },
      {
        question: "¿Si la temperatura baja puedo seguir?",
        answer:
          "No necesariamente. Si hubo aviso, vapor o pérdida, la causa puede reaparecer. La opción segura suele ser diagnosticar antes de circular.",
      },
    ],
    relatedSlugs: [
      "testigos-coche-significado",
      "humo-blanco-azul-negro-escape",
      "mantenimiento-coche-10-15-20-anos",
      "checklist-itv-coche-antiguo",
    ],
    sources: [
      sources.emergencyMode,
      sources.roadsideReview,
      sources.mechanicsManual,
    ],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
  },
  {
    slug: "humo-blanco-azul-negro-escape",
    category: "problemas",
    title: "Humo blanco, azul o negro por el escape: qué indica y cuándo parar",
    seoTitle: "Humo blanco, azul o negro del escape: causas",
    description:
      "Diferencia condensación de humo persistente, relaciona color y síntomas y descubre cuándo debes apagar el motor y pedir asistencia.",
    eyebrow: "Problemas · Escape y combustión",
    summary:
      "El color orienta, pero temperatura, duración, olor, cantidad y consumo de fluidos son esenciales. Una nube breve de vapor en frío no equivale a humo blanco denso con el motor caliente.",
    directAnswer:
      "Blanco fino al arrancar en frío suele ser condensación si desaparece; blanco denso y persistente puede relacionarse con refrigerante o combustión incompleta; azul sugiere aceite quemado; negro indica exceso de combustible o falta de aire en determinadas condiciones. Si el humo es abundante, aparece con testigos, pérdida de potencia, nivel bajo o olor intenso, detén el vehículo y diagnostica.",
    readingMinutes: 10,
    sections: [
      {
        id: "antes-del-color",
        heading: "Antes del color: origen, duración y olor",
        paragraphs: [
          "Confirma que sale del tubo de escape y no del vano motor, rueda o bajo del coche. El humo bajo el capó puede proceder de fluido sobre una superficie caliente y requiere detenerse.",
          "Anota si ocurre solo al arrancar, al acelerar, al retener o continuamente; si el motor está frío; y si hay consumo de aceite o refrigerante. Graba desde una posición segura sin permanecer detrás en un espacio cerrado.",
        ],
      },
      {
        id: "blanco",
        heading: "Blanco: de vapor normal a refrigerante",
        paragraphs: [
          "En tiempo frío es normal ver vapor fino que se dispersa y deja agua. Si continúa con el motor caliente, es denso, huele dulce, baja el refrigerante o sube la temperatura, puede existir entrada de refrigerante o una combustión anormal.",
          "En diésel, combustible sin quemar y problemas de calentamiento también pueden generar humo claro. El color por sí solo no identifica junta, inyector ni otra pieza.",
        ],
      },
      {
        id: "azul",
        heading: "Azul o gris azulado: vigila el aceite",
        paragraphs: [
          "Suele asociarse a aceite en la combustión por desgaste, ventilación del cárter, turbo, retenes u otras vías. El momento en que aparece ayuda a acotar, pero requiere medición.",
          "Comprueba el nivel solo en plano, con el tiempo de reposo y método del manual. No sobrellenes para compensar: el exceso también puede causar daños y humo.",
        ],
      },
      {
        id: "negro",
        heading: "Negro: mezcla rica o aire insuficiente",
        paragraphs: [
          "Una nube negra indica partículas por combustión con exceso de combustible o falta de aire. Admisión, inyección, sensores, turbo o filtro pueden intervenir. En un diésel con filtro de partículas, el comportamiento normal depende de su sistema y estado.",
          "No fuerces el motor en carretera para «limpiarlo» si hay testigo, humo intenso o pérdida de potencia. Una regeneración solo debe realizarse en las condiciones descritas por el fabricante o con equipo profesional.",
        ],
      },
      {
        id: "sin-productos-milagro",
        heading: "No ocultes el síntoma con un aditivo",
        paragraphs: [
          "Un aditivo no repara un sello, turbo, inyector, sensor ni comunicación entre fluidos. Puede cambiar temporalmente el humo y retrasar un diagnóstico, además de ser incompatible con determinados sistemas.",
          "Registra niveles y evolución, conserva códigos y solicita pruebas. La causa se confirma con datos de motor, compresión, fugas, presión, inyección u otras mediciones según el caso.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Humo bajo el capó o cerca de una rueda",
        action:
          "Detén, apaga y aléjate si aumenta. No abras el capó si hay fuego evidente.",
      },
      {
        signal: "Humo blanco con temperatura alta o pérdida de refrigerante",
        action:
          "No continúes ni abras el circuito caliente. Solicita grúa.",
      },
      {
        signal: "Humo azul intenso con presión de aceite o nivel bajo",
        action:
          "Apaga el motor y no lo arranques hasta revisar.",
      },
      {
        signal: "Humo negro, pérdida brusca de potencia o motor acelerado sin control",
        action:
          "Detente siguiendo el manual y pide asistencia; no intentes «quemarlo» acelerando.",
      },
    ],
    safeSteps: [
      {
        title: "Confirma el origen",
        detail:
          "Escape, vano, rueda o parte baja implican riesgos distintos.",
      },
      {
        title: "Observa sin exponerte",
        detail:
          "Duración, color, olor y momento, siempre al aire libre.",
      },
      {
        title: "Revisa testigos y temperatura",
        detail:
          "Cualquier aviso crítico eleva la urgencia.",
      },
      {
        title: "Comprueba niveles en frío",
        detail:
          "Solo con el método del fabricante y sin sobrellenar.",
      },
      {
        title: "Conserva datos",
        detail:
          "Vídeo, códigos sin borrar y consumo aproximado de fluidos.",
      },
    ],
    workshop: {
      introduction:
        "La descripción debe guiar pruebas, no una sustitución automática. Solicita que se documente la causa del consumo o combustión.",
      urgent: [
        "Humo abundante con temperatura, aceite, fuego o pérdida de control del motor.",
        "Descenso rápido de aceite o refrigerante.",
        "Pérdida de potencia, ruido o vibración intensa.",
      ],
      appointment: [
        "Humo que reaparece en condiciones concretas.",
        "Consumo de aceite o refrigerante sin fuga visible.",
        "Olor y emisiones anormales aunque no haya testigo.",
      ],
      usefulInformation: [
        "Vídeo con motor frío/caliente y condición de aparición.",
        "Kilómetros y cantidad añadida de cada fluido.",
        "Códigos y reparaciones recientes.",
      ],
    },
    faqs: [
      {
        question: "¿El humo blanco al arrancar siempre es avería?",
        answer:
          "No. El vapor por condensación es habitual si es fino y desaparece al calentarse. Persistencia, densidad, olor, temperatura y nivel cambian la valoración.",
      },
      {
        question: "¿El humo azul significa motor roto?",
        answer:
          "Indica aceite quemado, pero existen varias vías y grados de gravedad. Mide consumo y diagnostica antes de concluir.",
      },
      {
        question: "¿Acelerar fuerte limpia el humo negro?",
        answer:
          "No es una respuesta segura ante una avería. Puede elevar temperatura y daños. Sigue el procedimiento específico del vehículo.",
      },
      {
        question: "¿Un aditivo para humos ayuda a pasar ITV?",
        answer:
          "No garantiza nada y puede ocultar temporalmente un problema. Mantenimiento y diagnóstico de la causa son la vía correcta.",
      },
    ],
    relatedSlugs: [
      "motor-sobrecalentado-que-hacer",
      "testigos-coche-significado",
      "como-elegir-lector-obd2",
      "checklist-itv-coche-antiguo",
    ],
    sources: [
      sources.usedCarInspection,
      sources.emergencyMode,
      sources.itvManual,
    ],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
  },
  {
    slug: "neumaticos-dot-desgaste-presion",
    category: "mantenimiento",
    title: "Neumáticos: cómo leer el DOT, medir desgaste y ajustar la presión",
    seoTitle: "Neumáticos: DOT, desgaste, presión y cuándo cambiar",
    description:
      "Comprueba fecha DOT, 1,6 mm de dibujo, presión en frío, daños y compatibilidad. La edad orienta, pero no sustituye una inspección.",
    eyebrow: "Mantenimiento · Neumáticos",
    summary:
      "El neumático conecta el coche con la carretera. La legalidad mínima del dibujo no garantiza buen agarre, y una fecha antigua no decide por sí sola la sustitución: importan estado, uso y recomendación del fabricante.",
    directAnswer:
      "Mide la presión en frío con el valor de la placa del coche para carga normal o completa; revisa dibujo en varios puntos, flancos, bultos, grietas y desgaste irregular. En España el mínimo legal general es 1,6 mm. El DOT termina en cuatro cifras de semana y año de fabricación, pero la decisión por edad debe seguir inspección y criterios del fabricante.",
    readingMinutes: 11,
    sections: [
      {
        id: "presion",
        heading: "La presión correcta pertenece al coche, no al neumático",
        paragraphs: [
          "Usa la etiqueta del marco de puerta, tapa de combustible o manual. El flanco muestra una presión máxima o datos del neumático, no necesariamente la presión de uso del vehículo.",
          "Mide en frío, antes de circular o tras el límite indicado. Ajusta al nivel correspondiente a carga y velocidad previstas. Revisa la rueda de repuesto o el kit según su procedimiento.",
        ],
      },
      {
        id: "dibujo-y-desgaste",
        heading: "Mide dibujo y lee su patrón",
        paragraphs: [
          "El mínimo legal general es 1,6 mm en las ranuras principales, pero esperar al límite reduce margen especialmente en mojado. Mide en varios puntos y observa los testigos de desgaste.",
          "Centro gastado, ambos hombros, un solo lado o dientes de sierra pueden relacionarse con presión, alineación, suspensión o uso. Corregir presión no devuelve goma ya perdida; investiga el patrón.",
        ],
      },
      {
        id: "dot-y-edad",
        heading: "Qué dice —y qué no dice— el código DOT",
        paragraphs: [
          "Las últimas cuatro cifras indican semana y año: 2322 corresponde a la semana 23 de 2022. En algunos neumáticos el código completo solo aparece en un lado.",
          "La goma envejece por oxígeno, calor, radiación, carga y periodos parada. No existe una fecha única en esta guía que sustituya las instrucciones del fabricante; inspecciones periódicas son esenciales a medida que envejece.",
        ],
      },
      {
        id: "compatibilidad",
        heading: "Medida, carga, velocidad y eje",
        paragraphs: [
          "La medida debe estar autorizada o ser equivalente conforme a la normativa aplicable, y los índices deben cumplir los mínimos. En el mismo eje, características incompatibles pueden alterar comportamiento.",
          "Si solo sustituyes dos, consulta la recomendación del fabricante y del profesional sobre su posición. Sistemas de tracción total pueden imponer límites de diferencia de circunferencia.",
        ],
      },
      {
        id: "danos",
        heading: "Daños que no se reparan con aire",
        paragraphs: [
          "Bultos, cortes profundos, lona, deformación, pérdida recurrente o daño en flanco requieren retirada. Un sellante de emergencia tiene límites de velocidad y distancia y no convierte el neumático en reparado.",
          "Después de un golpe fuerte contra bordillo o bache, revisa neumático y llanta por dentro y fuera. Una vibración nueva necesita inspección.",
        ],
        callout: {
          tone: "caution",
          title: "1,6 mm es un mínimo legal, no un objetivo",
          text: "Agarre en agua empeora antes de alcanzar el límite. Adapta sustitución a estado, clima y uso.",
        },
      },
    ],
    dangerSignals: [
      {
        signal: "Bulto, lona visible, corte profundo o flanco deformado",
        action:
          "No circules. Sustituye por una solución autorizada o pide asistencia.",
      },
      {
        signal: "Pérdida rápida de presión",
        action:
          "Detén el vehículo sin maniobra brusca y no sigas inflando para continuar.",
      },
      {
        signal: "Vibración fuerte, tirón o ruido después de un impacto",
        action:
          "Reduce con suavidad, detente y revisa neumático, llanta y suspensión.",
      },
      {
        signal: "Desgaste con cordones o estructura visible",
        action:
          "Inmoviliza el vehículo; no es apto para circular.",
      },
    ],
    safeSteps: [
      {
        title: "Consulta la placa",
        detail:
          "Elige presión para medida y carga del vehículo.",
      },
      {
        title: "Mide en frío",
        detail:
          "Usa un manómetro fiable y coloca de nuevo los tapones.",
      },
      {
        title: "Recorre toda la banda",
        detail:
          "Dibujo en varios puntos, desgaste irregular y objetos incrustados.",
      },
      {
        title: "Inspecciona ambos flancos",
        detail:
          "Busca cortes, grietas, rozaduras, bultos y fecha DOT.",
      },
      {
        title: "Repite cada mes y antes de viajar",
        detail:
          "También después de golpes o cambios de temperatura importantes.",
      },
    ],
    workshop: {
      introduction:
        "Pide que la recomendación incluya medición de dibujo, daño, edad y causa del desgaste; cambiar neumáticos sin corregir alineación o suspensión repite el problema.",
      urgent: [
        "Daño de flanco, bulto, lona, pérdida rápida o vibración fuerte.",
        "Desgaste por debajo del límite o muy desigual.",
        "Llanta deformada o fuga que no se localiza.",
      ],
      appointment: [
        "El coche se desvía, el volante queda torcido o hay dientes de sierra.",
        "El neumático envejece y presenta pequeñas grietas o endurecimiento.",
        "Necesitas confirmar equivalencia o requisitos de tracción total.",
      ],
      usefulInformation: [
        "Presiones medidas en frío y frecuencia de pérdida.",
        "Kilómetros, DOT y posición de cada neumático.",
        "Golpes, alineaciones y trabajos de suspensión recientes.",
      ],
    },
    faqs: [
      {
        question: "¿Dónde está la fecha del neumático?",
        answer:
          "Al final del código DOT: cuatro cifras de semana y año. Puede aparecer solo en la cara interior.",
      },
      {
        question: "¿Hay que cambiar un neumático solo por cumplir cierta edad?",
        answer:
          "Sigue la recomendación de sus fabricantes y una inspección profesional. Edad, condición y uso se valoran juntos.",
      },
      {
        question: "¿La presión del flanco es la que debo poner?",
        answer:
          "No. Usa la presión indicada por el fabricante del vehículo para medida y carga.",
      },
      {
        question: "¿Con 1,6 mm el neumático está seguro?",
        answer:
          "Es el mínimo legal general, no una garantía de rendimiento en agua ni de ausencia de otros daños.",
      },
    ],
    relatedSlugs: [
      "checklist-itv-coche-antiguo",
      "mantenimiento-coche-10-15-20-anos",
      "testigos-coche-significado",
      "baliza-v16-conectada-certificada",
    ],
    sources: [sources.tyres, sources.tyreCondition, sources.itvManual],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
  },
  {
    slug: "baliza-v16-conectada-certificada",
    category: "itv-normativa",
    title: "Baliza V16 conectada: cómo comprobar que está certificada y vigente",
    seoTitle: "Baliza V16 conectada: modelos certificados DGT",
    description:
      "Desde 2026 la V16 conectada es el dispositivo legal en España. Aprende a verificar modelo, certificado, conectividad y fecha de caducidad.",
    eyebrow: "ITV y normativa · Emergencias",
    summary:
      "Desde el 1 de enero de 2026, la V16 conectada es el único dispositivo legal de preseñalización de vehículos inmovilizados en España para los vehículos obligados. Que una caja diga «homologada» no basta.",
    directAnswer:
      "Antes de comprar, busca la marca y modelo exactos en el listado actualizado de la DGT y compara el número de certificado grabado en la tulipa. Comprueba fecha de caducidad y conectividad incluida —la norma exige disponibilidad mínima de 12 años sin cuota adicional—. Guárdala accesible en el habitáculo, no enterrada en el maletero.",
    readingMinutes: 9,
    sections: [
      {
        id: "que-es-valido",
        heading: "Solo la conectada y certificada",
        paragraphs: [
          "Una luz V16 antigua sin conexión dejó de ser válida como medio de preseñalización desde enero de 2026. Tampoco basta con que una baliza incluya GPS o tarjeta: el modelo debe figurar en el listado oficial tras certificación de un laboratorio autorizado.",
          "Comprueba el nombre comercial completo, no solo la marca. Un fabricante puede vender varias versiones similares con certificaciones distintas.",
        ],
      },
      {
        id: "verificacion",
        heading: "Cómo verificar antes de pagar",
        paragraphs: [
          "Abre la página oficial de la DGT, busca marca y modelo y compara laboratorio y número con lo grabado en la tulipa. Revisa también los apartados de certificados con vigencia finalizada y las explicaciones de validez para unidades adquiridas.",
          "La conectividad viene integrada; no requiere app, emparejamiento ni cuota. La fecha de caducidad debe permitir el uso que esperas. Conserva justificante y embalaje por identificación y garantía.",
        ],
        bullets: [
          "Coincidencia exacta de marca y modelo.",
          "Laboratorio IDIADA o LCOE y número grabado.",
          "Conectividad incluida sin alta del usuario.",
          "Fecha de caducidad visible.",
          "Acceso fácil desde el habitáculo.",
        ],
      },
      {
        id: "como-usarla",
        heading: "Cómo usarla sin aumentar la exposición",
        paragraphs: [
          "Ante avería, prioriza controlar el vehículo y detenerlo en el lugar más seguro posible. Activa la baliza desde el interior y colócala preferentemente en la parte más alta si puede hacerse sin salir ni exponerse. La ubicación exacta depende de la carrocería y condiciones.",
          "La baliza transmite la posición al activarse; no registra de forma continua ni necesita asociarse a matrícula o persona. Sigue las instrucciones sobre orientación, duración y prueba de funcionamiento.",
        ],
      },
      {
        id: "mantenimiento",
        heading: "Una baliza olvidada puede no estar disponible",
        paragraphs: [
          "Revísala con la frecuencia indicada, sin activaciones innecesarias que puedan transmitir una incidencia. Comprueba pila o batería, integridad, caducidad y que no haya sufrido temperaturas fuera de rango.",
          "Guárdala sujeta y accesible desde el puesto del conductor. En un choque, un objeto suelto puede convertirse en proyectil.",
        ],
        callout: {
          tone: "important",
          title: "El listado cambia",
          text: "No conviertas una captura o una comparativa comercial en fuente permanente. Verifica el modelo en la DGT el día de compra.",
        },
      },
    ],
    dangerSignals: [
      {
        signal: "Vehículo detenido en carril o arcén estrecho",
        action:
          "Prioriza proteger a las personas, llama al 112 si existe peligro inmediato y evita caminar por la calzada.",
      },
      {
        signal: "Humo, fuego o fuga de combustible",
        action:
          "Evacúa a un lugar seguro, no regreses a colocar la baliza y llama a emergencias.",
      },
      {
        signal: "Para colocarla tendrías que exponerte al tráfico",
        action:
          "No asumas ese riesgo. Actúa según las condiciones y las indicaciones de emergencia.",
      },
    ],
    safeSteps: [
      {
        title: "Verifica en la DGT",
        detail:
          "Modelo y número exactos, no solo reclamos del vendedor.",
      },
      {
        title: "Comprueba caducidad",
        detail:
          "Debe aparecer en dispositivo o envase y cubrir el periodo previsto.",
      },
      {
        title: "Lee las instrucciones",
        detail:
          "Prueba, almacenamiento, temperatura y colocación dependen del modelo.",
      },
      {
        title: "Guárdala accesible",
        detail:
          "Sujeta en guantera o compartimento del habitáculo.",
      },
      {
        title: "En avería, prioriza a las personas",
        detail:
          "Control, detención, señalización y llamada según el riesgo.",
      },
    ],
    workshop: {
      introduction:
        "La V16 no necesita instalación en taller. Consulta a DGT, vendedor o fabricante si los datos grabados no coinciden; no aceptes una etiqueta añadida como sustituto de certificación.",
      urgent: [
        "El vehículo está en una posición peligrosa o existe incendio/fuga.",
        "La baliza está dañada, caliente o con batería deformada.",
      ],
      appointment: [
        "No puedes localizar el modelo exacto en el listado.",
        "La fecha de caducidad no es legible.",
        "El equipo falla en la comprobación prevista por su fabricante.",
      ],
      usefulInformation: [
        "Fotografía de marca, modelo y número de certificado.",
        "Fecha y vendedor de adquisición.",
        "Captura o enlace del registro oficial consultado.",
      ],
    },
    faqs: [
      {
        question: "¿Sirve una V16 sin conexión comprada hace años?",
        answer:
          "No como dispositivo legal de preseñalización desde el 1 de enero de 2026. Consulta el listado y preguntas oficiales de la DGT.",
      },
      {
        question: "¿Necesita una aplicación o pagar una cuota?",
        answer:
          "No. La conectividad está integrada y la normativa exige al menos 12 años sin coste adicional para el usuario.",
      },
      {
        question: "¿La baliza me rastrea siempre?",
        answer:
          "No. La DGT indica que comunica la ubicación cuando se activa y no está asociada a persona o matrícula.",
      },
      {
        question: "¿Todas las balizas que dicen «homologada» son válidas?",
        answer:
          "No. Debe coincidir el modelo exacto y su certificado con el listado oficial actualizado.",
      },
    ],
    relatedSlugs: [
      "checklist-itv-coche-antiguo",
      "coche-no-arranca",
      "neumaticos-dot-desgaste-presion",
      "mantenimiento-coche-10-15-20-anos",
    ],
    sources: [sources.v16, sources.v16Reminder],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(
  category: ArticleCategory,
): readonly Article[] {
  return articles.filter((article) => article.category === category);
}

export function getRelatedArticles(article: Article): readonly Article[] {
  const related = new Set(article.relatedSlugs);
  return articles.filter((candidate) => related.has(candidate.slug));
}
