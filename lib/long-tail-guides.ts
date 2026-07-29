export type LongTailGuide = {
  slug: string;
  query: string;
  cluster: string;
  hub: {
    slug: string;
    title: string;
    href: `/${string}`;
  };
  seoTitle: string;
  description: string;
  directAnswer: string;
  updatedAt: "2026-07-29";
  sections: readonly {
    title: string;
    paragraphs: readonly string[];
    list?: readonly string[];
  }[];
  safety: readonly string[];
  whenWorkshop: readonly string[];
  faqs: readonly {
    question: string;
    answer: string;
  }[];
  relatedSlugs: readonly string[];
  sources: readonly {
    title: string;
    publisher: string;
    url: `https://${string}`;
  }[];
};

const CONTENT_DATE = "2026-07-29" as const;

const SOURCES = {
  dgtBattery: {
    title: "La «chispa» del coche: batería, arranque y carga",
    publisher: "Dirección General de Tráfico",
    url: "https://revista.dgt.es/es/motor/tecnologia-seguridad/2019/0606-Baterias-al-dia.shtml",
  },
  dgtMaintenance: {
    title: "Revisiones contra «sustos»",
    publisher: "Dirección General de Tráfico",
    url: "https://revista.dgt.es/es/reportajes/2018/03MARZO/0320-Revisar-el-coche.shtml",
  },
  boschBatteries: {
    title: "Baterías: comprobación, almacenamiento y tecnologías",
    publisher: "Bosch Mobility Aftermarket",
    url: "https://www.boschaftermarket.com/es/es/piezas/productos/bater%C3%ADas/",
  },
  boschStarting: {
    title: "Motores de arranque y alternadores",
    publisher: "Bosch Mobility Aftermarket",
    url: "https://www.boschaftermarket.com/es/es/piezas/productos/motores-de-arranque-y-alternadores/",
  },
  boschBatteryService: {
    title: "Equipos para comprobar baterías y sistemas de arranque y carga",
    publisher: "Bosch Mobility Aftermarket",
    url: "https://www.boschaftermarket.com/es/es/equipos-y-diagnosis/equipos-de-taller/servicio-de-bater%C3%ADas-y-herramientas-para-veh%C3%ADculos-electricos/",
  },
  boschParasiticDraw: {
    title: "FSA 740: medición de descarga de batería de 24 horas",
    publisher: "Bosch Mobility Aftermarket",
    url: "https://www.boschaftermarket.com/es/es/equipos-y-diagnosis/analisis/analisis-de-sistemas-del-veh%C3%ADculo/fsa-740-sin-kts-560/",
  },
  boschDiagnostics: {
    title: "KTS 980: protocolos y diagnosis multimarca",
    publisher: "Bosch Mobility Aftermarket",
    url: "https://www.boschaftermarket.com/es/es/equipos-y-diagnosis/diagnosis/equipos-de-diagnosis/kts-980",
  },
  vartaAgmEfb: {
    title: "EFB y AGM en vehículos Start-Stop",
    publisher: "VARTA Automotive",
    url: "https://www.varta-automotive.com/es-es/knowledge/articles/article-details/efb-y-agm",
  },
  vartaReplacement: {
    title: "Sustitución de la batería en vehículos Start-Stop",
    publisher: "VARTA Automotive",
    url: "https://www.varta-automotive.com/es-es/knowledge/articles/article-details/sustitucion-de-la-bateria-de-arranque-parada",
  },
  unObd: {
    title: "Reglamento ONU sobre emisiones y diagnóstico OBD",
    publisher: "EUR-Lex",
    url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:42019X0253",
  },
  euObd: {
    title: "Reglamento (CE) 715/2007 sobre emisiones y acceso a información OBD",
    publisher: "EUR-Lex",
    url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32007R0715",
  },
  fordWarnings: {
    title: "Testigos del salpicadero y actuación del conductor",
    publisher: "Ford España",
    url: "https://www.ford.es/soporte/guias/mas-temas-sobre-el-vehiculo/luces-y-bombillas/que-son-los-testigos-del-coche-del-salpicadero",
  },
  dgtEmergencyMode: {
    title: "El vehículo en modo emergencia",
    publisher: "Dirección General de Tráfico",
    url: "https://revista.dgt.es/es/motor/tecnologia-seguridad/2023/1221-N268-vehiculo-dia-emergencia.shtml",
  },
  fordCoolant: {
    title: "Comprobación del nivel de refrigerante del motor",
    publisher: "Ford España",
    url: "https://www.ford.es/soporte/guias/mas-temas-sobre-el-vehiculo/motor-y-transmision/comprobacion-de-los-niveles-de-refrigerante-del-motor",
  },
  seatManual: {
    title: "Manual de instrucciones: temperatura y nivel del refrigerante",
    publisher: "SEAT",
    url: "https://www.seat.es/datamanual-manual/leon/my12_w45/es-es/Leon_ES.pdf",
  },
  dgtCooling: {
    title: "Puesta a punto: sistema de refrigeración del motor",
    publisher: "Dirección General de Tráfico",
    url: "https://revista.dgt.es/es/reportajes/2023/06JUNIO/0608-Como-preparar-el-coche.shtml",
  },
  itvManual: {
    title: "Manual de procedimiento de inspección ITV, versión 7.9",
    publisher: "Ministerio de Industria y Turismo",
    url: "https://industria.gob.es/Calidad-Industrial/vehiculos/itv1/Manual%20de%20procedimiento%20de%20inspecci%C3%B3n/Manual%20de%20procedimiento%20de%20inspeccion%20de%20estaciones%20ITV-V%207.9_final2.pdf",
  },
  itvRoyalDecree: {
    title: "Real Decreto 920/2017, por el que se regula la ITV",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2017-12841",
  },
  euRoadworthiness: {
    title: "Directiva 2014/45/UE sobre inspecciones técnicas periódicas",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/buscar/doc.php?id=DOUE-L-2014-80849",
  },
  dgtV16: {
    title: "Dispositivos de preseñalización V16 y modelos certificados",
    publisher: "Dirección General de Tráfico",
    url: "https://www.dgt.es/muevete-con-seguridad/tecnologia-e-innovacion-en-carretera/Dispositivos-de-presenalizacion-V16/",
  },
  boeV16: {
    title: "Real Decreto 159/2021 sobre auxilio en vías públicas y señal V16",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2021-4194",
  },
  dgtV16Technical: {
    title: "Especificación y certificación de la señal V16 conectada",
    publisher: "Dirección General de Tráfico",
    url: "https://www.dgt.es/export/sites/web-DGT/.galleries/downloads/muevete-con-seguridad/tecnologia-e-innovacion/certificados-v16/2311_SENAL-V-16_v11-ES.pdf",
  },
} as const;

export const LONG_TAIL_GUIDES = [
  {
    slug: "coche-hace-clic-no-arranca-luces-funcionan",
    query: "Mi coche hace clic pero no arranca y las luces funcionan, ¿qué puede ser?",
    cluster: "Arranque sin giro del motor",
    hub: {
      slug: "coche-no-arranca",
      title: "El coche no arranca: diagnóstico completo",
      href: "/diagnostico/coche-no-arranca",
    },
    seoTitle: "Coche hace clic pero no arranca: qué comprobar",
    description:
      "Si al girar la llave se oye un clic pero el motor no gira, sigue estas comprobaciones para separar batería, conexiones y motor de arranque.",
    directAnswer:
      "Que las luces se enciendan no descarta una batería débil: iluminar exige mucha menos corriente que mover el motor de arranque. Un clic único o repetido también puede aparecer por bornes o masas con mala conexión, por el solenoide o por el propio motor de arranque. No cambies una pieza solo por el ruido; observa cómo cambia la iluminación, revisa el estado visible de la batería y solicita una prueba de batería, caída de tensión y sistema de arranque.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "Qué indica el tipo de clic",
        paragraphs: [
          "Una sucesión rápida de clics suele coincidir con una tensión que cae cada vez que el solenoide intenta actuar. Un golpe único y claro puede aparecer cuando el solenoide recibe la orden pero el motor de arranque no llega a girar. Son pistas, no diagnósticos: una conexión oxidada o una masa deficiente puede imitar ambos casos.",
          "Mira también el cuadro y las luces interiores durante el intento. Si se apagan o pierden mucha intensidad, la batería o el recorrido de alta corriente ganan peso en la investigación. Si casi no cambian, aún hay que comprobar la señal de mando, el solenoide y el motor de arranque.",
        ],
        list: [
          "Clics rápidos: comprobar carga de batería, bornes y masa.",
          "Un clic fuerte: comprobar alimentación de alta corriente y motor de arranque.",
          "Sin clic: revisar posición P/N, embrague, inmovilizador, mando y fusibles según el manual.",
        ],
      },
      {
        title: "Comprobaciones seguras antes de pedir asistencia",
        paragraphs: [
          "Pon la caja automática en P y prueba una sola vez en N; en un manual, pisa el embrague a fondo. Apaga climatización, luneta y otros consumidores. Si la batería es accesible, inspecciona con el contacto quitado que la carcasa no esté hinchada o dañada y que los bornes no parezcan sueltos o cubiertos de corrosión.",
          "No golpees el motor de arranque ni puentes terminales con una herramienta. En coches con gestión electrónica de batería, puntos remotos de arranque o batería en el habitáculo, sigue exclusivamente el procedimiento y los puntos que indica el manual.",
        ],
      },
      {
        title: "Qué prueba separa batería, cableado y arranque",
        paragraphs: [
          "Una lectura de tensión en reposo no basta. La batería debe evaluarse bajo carga o con un comprobador adecuado, y después observar la caída de tensión mientras se intenta arrancar. Si la batería supera la prueba, el siguiente paso es comprobar alimentación positiva, masa, señal de mando y consumo del motor de arranque.",
          "Anota si ocurre en frío, en caliente o de forma aleatoria. Un fallo que solo aparece con el motor caliente puede orientar el diagnóstico de forma distinta a una batería que empeora tras una noche fría.",
        ],
        list: [
          "Prueba de estado y capacidad de arranque de la batería.",
          "Caída de tensión en positivo y masa durante el intento.",
          "Señal de activación y consumo del motor de arranque.",
        ],
      },
      {
        title: "Cómo encaja esta guía en el diagnóstico",
        paragraphs: [
          "Esta consulta pertenece al hub de arranque y batería, donde se comparan los síntomas de clic, giro lento, ausencia total de respuesta y arranque con ayuda externa. Volver al hub evita aplicar la misma solución a fallos que se parecen desde el asiento pero tienen causas distintas.",
        ],
      },
    ],
    safety: [
      "Deja de insistir si los cables se calientan, aparece humo, olor a quemado o la batería está hinchada, rota o pierde líquido.",
      "No acerques herramientas metálicas entre el borne positivo y la carrocería.",
      "No trabajes bajo un vehículo ni intentes acceder al motor de arranque sin desconectar y asegurar el sistema como indica el fabricante.",
    ],
    whenWorkshop: [
      "La batería supera una prueba de carga pero el motor sigue sin girar.",
      "El fallo es intermitente, aparece en caliente o hay un clic único con luces estables.",
      "Hay corrosión severa, cables dañados, olor, humo o calentamiento.",
    ],
    faqs: [
      {
        question: "¿Si funcionan las luces significa que la batería está bien?",
        answer:
          "No. Las luces necesitan mucha menos corriente que el motor de arranque. La batería puede mantenerlas encendidas y desplomarse al pedir el esfuerzo de arranque.",
      },
      {
        question: "¿Un clic único confirma que el motor de arranque está roto?",
        answer:
          "No. También puede faltar corriente por batería, bornes, cable positivo o masa. Hace falta medir durante el intento antes de condenar el motor de arranque.",
      },
      {
        question: "¿Puedo seguir probando hasta que arranque?",
        answer:
          "No conviene. Los intentos largos o repetidos descargan y calientan el sistema. Haz intentos breves según el manual y detente si el síntoma no cambia.",
      },
    ],
    relatedSlugs: [
      "coche-arranca-con-pinzas-vuelve-a-fallar",
      "cargador-bateria-indica-llena-coche-no-arranca",
      "bateria-coche-se-descarga-varios-dias",
    ],
    sources: [SOURCES.dgtBattery, SOURCES.boschBatteries, SOURCES.boschStarting],
  },
  {
    slug: "coche-arranca-con-pinzas-vuelve-a-fallar",
    query: "El coche arranca con pinzas pero después vuelve a fallar, ¿es batería o alternador?",
    cluster: "Arranque asistido y fallo recurrente",
    hub: {
      slug: "bateria-alternador-motor-arranque",
      title: "Batería, alternador o motor de arranque",
      href: "/diagnostico/bateria-alternador-motor-arranque",
    },
    seoTitle: "Arranca con pinzas y vuelve a fallar: causas",
    description:
      "Arrancar con pinzas no identifica la avería. Aprende a diferenciar batería descargada, batería degradada, carga insuficiente y alternador.",
    directAnswer:
      "Las pinzas solo demuestran que una fuente externa permitió el arranque; no confirman si falla la batería, el sistema de carga o existe un consumo con el coche parado. Si vuelve a fallar inmediatamente, tras un trayecto o después de varias horas, el momento aporta una pista distinta. La solución correcta es probar batería, arranque y carga, no sustituir el alternador por intuición.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "El tiempo que tarda en volver a fallar importa",
        paragraphs: [
          "Si se para el motor y ya no vuelve a arrancar, la batería puede no aceptar o conservar carga, pero también pudo circular demasiado poco para recuperar la energía del arranque. Si falla mientras el motor está en marcha o aparece el testigo de batería, hay que tratarlo como un posible problema de carga o de correa y detenerse con seguridad.",
          "Si funciona todo el día y falla tras una noche o varios días, gana importancia la descarga con el vehículo parado, un módulo que no entra en reposo o una batería con autodescarga elevada.",
        ],
        list: [
          "Fallo al apagar y volver a arrancar: batería sin reserva, carga insuficiente o conexiones.",
          "Fallo durante la marcha: sistema de carga, cableado o correa; requiere atención inmediata.",
          "Fallo después de horas o días: batería degradada o consumo en reposo.",
        ],
      },
      {
        title: "Qué datos conservar después del arranque asistido",
        paragraphs: [
          "Anota cuánto tiempo llevaba parado, la temperatura exterior, si las luces quedaron encendidas, la duración del trayecto posterior y cualquier testigo. Esa cronología vale más que afirmar que «el alternador carga» porque el coche se mantuvo encendido unos minutos.",
          "No desconectes un borne con el motor en marcha para probar el alternador. Esa práctica antigua puede generar picos, dañar electrónica y no ofrece un diagnóstico fiable.",
        ],
      },
      {
        title: "La secuencia de prueba que evita cambiar piezas",
        paragraphs: [
          "Primero se inspeccionan batería, bornes, masas y correa. Después se prueba la capacidad de la batería y la caída de tensión al arrancar. Con una batería conocida y conexiones correctas se comprueba la tensión y corriente de carga en las condiciones que indique el fabricante, incluyendo consumidores si procede.",
          "Si todo lo anterior es correcto y el fallo aparece tras estar aparcado, la investigación pasa al consumo en reposo. El vehículo necesita tiempo para que sus módulos duerman; medir demasiado pronto lleva a conclusiones falsas.",
        ],
        list: [
          "Estado y capacidad real de la batería.",
          "Caídas de tensión en el circuito de arranque.",
          "Rendimiento del alternador y control de carga.",
          "Consumo en reposo una vez dormidos los módulos.",
        ],
      },
      {
        title: "Volver al hub de arranque y batería",
        paragraphs: [
          "En el hub encontrarás rutas diferentes para el coche que hace clic, el que gira despacio y el que se descarga aparcado. Esta guía se centra en el dato concreto de que una fuente externa sí permite arrancar.",
        ],
      },
    ],
    safety: [
      "Usa solo los puntos y el orden de conexión descritos por el fabricante; algunos coches incorporan puntos remotos y sensores de batería.",
      "No uses pinzas si la batería está congelada, hinchada, agrietada o pierde líquido.",
      "Si aparece el testigo de batería durante la marcha, reduce consumidores y detente en un lugar seguro; el motor puede pararse cuando se agote la energía disponible.",
    ],
    whenWorkshop: [
      "El vehículo vuelve a fallar después de una carga completa y una prueba de batería.",
      "El testigo de carga aparece, la dirección se endurece o la temperatura aumenta.",
      "La batería requiere registro, adaptación o acceso difícil para sustituirla.",
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo tengo que conducir para cargar la batería?",
        answer:
          "No existe un tiempo universal. Depende de la descarga, la batería, el alternador, la estrategia de carga y los consumidores. Una batería muy descargada debe cargarse con el método indicado, no confiar en un trayecto corto.",
      },
      {
        question: "¿Si el coche sigue encendido el alternador está bien?",
        answer:
          "No necesariamente. Puede cargar poco, de forma intermitente o no cubrir la demanda. Hay que medir el sistema bajo condiciones controladas.",
      },
      {
        question: "¿Puedo comprobar el alternador quitando un borne?",
        answer:
          "No. No es una prueba segura ni fiable en un coche moderno y puede provocar daños eléctricos.",
      },
    ],
    relatedSlugs: [
      "coche-hace-clic-no-arranca-luces-funcionan",
      "bateria-coche-se-descarga-varios-dias",
      "cargador-bateria-indica-llena-coche-no-arranca",
    ],
    sources: [
      SOURCES.dgtBattery,
      SOURCES.boschStarting,
      SOURCES.boschBatteryService,
    ],
  },
  {
    slug: "bateria-coche-se-descarga-varios-dias",
    query: "La batería del coche se descarga después de varios días parado, ¿cómo encuentro la causa?",
    cluster: "Descarga de batería en reposo",
    hub: {
      slug: "bateria-se-descarga-coche-parado",
      title: "Batería que se descarga con el coche parado",
      href: "/diagnostico/bateria-se-descarga-coche-parado",
    },
    seoTitle: "La batería se descarga en varios días: causas",
    description:
      "Diferencia batería degradada, trayectos cortos y consumo parásito cuando el coche pierde la carga después de permanecer aparcado.",
    directAnswer:
      "Una descarga tras varios días puede venir de una batería con poca capacidad, de no recuperar la carga en trayectos cortos o de un consumo que permanece activo con el coche cerrado. Antes de buscar un «fusible culpable», carga y prueba la batería, registra cuánto tarda en fallar y confirma que el vehículo entra en reposo. Medir consumos modernos exige respetar tiempos de sueño y no despertar módulos.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "Separa capacidad insuficiente de consumo en reposo",
        paragraphs: [
          "Una batería envejecida puede mostrar una tensión aceptable recién cargada y conservar muy poca energía útil. También puede descargarse sin que el coche consuma más de lo normal. Por eso la primera prueba es su estado y capacidad, no abrir la caja de fusibles.",
          "Si la batería está bien, compara el tiempo hasta el fallo. Un vehículo que cae siempre tras un número parecido de días orienta hacia un consumo sostenido; uno que falla de forma aleatoria puede tener un módulo, luz o accesorio que queda activo solo algunas veces.",
        ],
      },
      {
        title: "Pistas que puedes reunir sin desmontar nada",
        paragraphs: [
          "Anota fecha, trayectos previos, temperatura y días estacionado. Comprueba si permanecen encendidas luces de maletero, guantera o accesorios añadidos. Aleja la llave manos libres si el fabricante advierte que la proximidad puede mantener comunicaciones.",
          "Revisa si el problema empezó después de instalar radio, cámara, localizador, alarma o cargador USB. Una coincidencia temporal no demuestra causalidad, pero ordena las comprobaciones.",
        ],
        list: [
          "Edad, tecnología y antecedentes de descarga profunda de la batería.",
          "Duración y frecuencia de los trayectos.",
          "Accesorios instalados y reparaciones recientes.",
          "Número de días exacto hasta que aparece el fallo.",
        ],
      },
      {
        title: "Por qué medir amperios no es un primer paso doméstico",
        paragraphs: [
          "Intercalar un multímetro mal configurado puede quemar su fusible, abrir circuitos o provocar un cortocircuito. Abrir una puerta o retirar un fusible puede despertar redes completas y falsear la lectura. Algunos vehículos tardan bastante en entrar en reposo y otros ejecutan tareas periódicas.",
          "Un diagnóstico profesional registra la corriente durante horas, identifica el momento de las activaciones y aísla el circuito sin perder la cronología. Esa medición es más útil que una única lectura tomada justo después de cerrar el coche.",
        ],
      },
      {
        title: "Orden recomendado y acceso al hub",
        paragraphs: [
          "Carga compatible, prueba de batería, comprobación del sistema de carga y, solo después, medición de reposo. El hub de arranque y batería explica cómo se relaciona esta descarga con los fallos después de usar pinzas o con el cargador que marca batería llena.",
        ],
      },
    ],
    safety: [
      "No intercalas un multímetro en serie si no conoces sus bornes, fusibles, rango y el procedimiento de sueño del vehículo.",
      "No retires fusibles de sistemas de seguridad ni manipules cableado amarillo o naranja.",
      "Ventila y evita chispas al cargar una batería de plomo; utiliza un cargador compatible con su tecnología.",
    ],
    whenWorkshop: [
      "La batería y el sistema de carga superan las pruebas pero el vehículo vuelve a descargarse.",
      "El consumo es intermitente o el coche incorpora muchas redes y módulos conectados.",
      "Hay agua, cableado modificado, olor eléctrico o calentamiento en la caja de fusibles.",
    ],
    faqs: [
      {
        question: "¿Desconectar la batería evita el problema?",
        answer:
          "Puede impedir la descarga durante el estacionamiento, pero no repara la causa y puede borrar ajustes o exigir procedimientos de reconexión. Consulta el manual antes de hacerlo.",
      },
      {
        question: "¿Cuánto consumo en reposo es normal?",
        answer:
          "No hay una cifra universal. Depende del vehículo, sus equipos y el momento de la medición. Se compara con la información técnica del modelo una vez completado su ciclo de reposo.",
      },
      {
        question: "¿Sacar fusibles uno a uno sirve?",
        answer:
          "Puede orientar en sistemas sencillos, pero también despertar módulos, borrar memoria o afectar seguridad. En coches modernos es preferible registrar la corriente y seguir el esquema del fabricante.",
      },
    ],
    relatedSlugs: [
      "coche-arranca-con-pinzas-vuelve-a-fallar",
      "cargador-bateria-indica-llena-coche-no-arranca",
      "bateria-agm-o-efb-start-stop",
    ],
    sources: [
      SOURCES.dgtBattery,
      SOURCES.boschBatteries,
      SOURCES.boschParasiticDraw,
    ],
  },
  {
    slug: "testigo-motor-parpadea-coche-tiembla",
    query: "El testigo del motor parpadea y el coche tiembla, ¿puedo seguir conduciendo?",
    cluster: "Fallos de combustión y testigo motor",
    hub: {
      slug: "testigos-coche-significado",
      title: "Testigos del coche y cuándo parar",
      href: "/diagnostico/testigos-coche-significado",
    },
    seoTitle: "Testigo motor parpadea y el coche tiembla: qué hacer",
    description:
      "Un testigo motor parpadeando con vibraciones puede indicar fallos de combustión capaces de dañar el catalizador. Actúa sin borrar pistas.",
    directAnswer:
      "No continúes un trayecto normal. En motores de gasolina, el modo parpadeante del testigo se utiliza cuando se detectan fallos de combustión a un nivel que puede dañar el catalizador. Reduce la carga, evita aceleraciones y detente en cuanto sea seguro. Si sigue parpadeando o el motor tiembla con fuerza, apágalo y solicita asistencia; no borres códigos antes de guardar el diagnóstico.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "Por qué parpadea en vez de quedarse fijo",
        paragraphs: [
          "La normativa OBD contempla una advertencia diferenciada, como el parpadeo, durante fallos de combustión capaces de sobrecalentar y dañar el catalizador. El temblor puede ser el cilindro o los cilindros que no aportan par de forma regular.",
          "Una luz fija requiere diagnóstico, pero la combinación de parpadeo y funcionamiento irregular cambia la prioridad: limitar de inmediato el tiempo de funcionamiento y la carga del motor.",
        ],
      },
      {
        title: "Qué hacer en ese momento",
        paragraphs: [
          "Suelta el acelerador, evita exigir potencia y busca un lugar seguro sin detenerte en un carril activo. Si hay además testigo rojo de aceite o temperatura, humo, olor intenso a combustible o golpes mecánicos, apaga el motor tan pronto como puedas hacerlo con seguridad.",
          "No mantengas el motor acelerado para «limpiarlo». El combustible sin quemar puede elevar la temperatura del catalizador y una avería de encendido no se corrige conduciendo a más revoluciones.",
        ],
        list: [
          "Reduce carga y velocidad sin maniobras bruscas.",
          "Detente en un lugar protegido y señaliza la inmovilización.",
          "Solicita asistencia si el parpadeo o las vibraciones continúan.",
        ],
      },
      {
        title: "Códigos que orientan, pero no condenan una pieza",
        paragraphs: [
          "Los códigos P0300 o P0301-P030x, cuando existen, describen fallos aleatorios o asociados a cilindros. No dicen automáticamente «cambiar bobina». Bujía, bobina, inyector, cableado, fuga de admisión, presión de combustible o un problema mecánico pueden producir un síntoma parecido.",
          "Guarda todos los códigos, su estado y los datos congelados antes de borrar. El orden de pruebas parte de inspección y datos, continúa con encendido y combustible y llega a compresión o estanqueidad si lo anterior no explica el fallo.",
        ],
      },
      {
        title: "Más diagnosis en el hub de motor",
        paragraphs: [
          "El hub diferencia el testigo fijo, el parpadeante, la pérdida de potencia y los problemas de lectura OBD2. Esta página resuelve específicamente el caso urgente de parpadeo acompañado de vibraciones.",
        ],
      },
    ],
    safety: [
      "No sigas circulando si el testigo continúa parpadeando, el motor tiembla con fuerza o hay olor a combustible.",
      "No trabajes cerca del escape y el catalizador después del fallo: pueden alcanzar temperaturas muy elevadas.",
      "No borres códigos para apagar la luz antes de registrar la información; puedes eliminar pistas y monitores útiles.",
    ],
    whenWorkshop: [
      "Siempre que el testigo haya parpadeado y existan vibraciones o pérdida de potencia.",
      "Hay códigos de fallo de combustión recurrentes después de una primera comprobación.",
      "Se percibe olor a combustible, escape al rojo, humo o ruido mecánico.",
    ],
    faqs: [
      {
        question: "¿Puedo conducir despacio hasta el taller?",
        answer:
          "Si el parpadeo y el temblor continúan, la opción prudente es asistencia. Conducir despacio no elimina el combustible sin quemar ni el riesgo para el catalizador.",
      },
      {
        question: "¿Seguro que es una bobina?",
        answer:
          "No. Es una causa posible, pero el código identifica el fenómeno o cilindro, no necesariamente la pieza causante.",
      },
      {
        question: "¿Borrar el código permite saber si vuelve?",
        answer:
          "Borrarlo elimina datos valiosos y reinicia monitores. Primero registra códigos y datos congelados; después sigue el procedimiento de diagnóstico.",
      },
    ],
    relatedSlugs: [
      "obd2-conecta-pero-no-lee-codigos",
      "itv-gases-altos-gasolina-antiguo",
      "temperatura-sube-atasco-baja-carretera",
    ],
    sources: [SOURCES.unObd, SOURCES.fordWarnings, SOURCES.dgtEmergencyMode],
  },
  {
    slug: "temperatura-sube-atasco-baja-carretera",
    query: "La temperatura del coche sube en atascos pero baja en carretera, ¿qué falla?",
    cluster: "Sobrecalentamiento a baja velocidad",
    hub: {
      slug: "motor-sobrecalentado-que-hacer",
      title: "Motor sobrecalentado: qué hacer",
      href: "/diagnostico/motor-sobrecalentado-que-hacer",
    },
    seoTitle: "La temperatura sube en atasco y baja en carretera",
    description:
      "Si el motor se calienta parado pero recupera temperatura al circular, revisa el flujo de aire y el circuito sin abrir el refrigerante en caliente.",
    directAnswer:
      "El patrón sugiere que el sistema refrigera mejor con el aire que atraviesa el radiador al circular. El electroventilador, su control, el flujo de aire o un radiador parcialmente obstruido son candidatos, pero un nivel bajo, aire en el circuito, termostato o bomba también pueden influir. Si entra en zona roja, aparece el testigo o sale vapor, detente y apaga el motor; no abras el tapón en caliente.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "Por qué el atasco cambia el síntoma",
        paragraphs: [
          "En carretera el movimiento del vehículo fuerza aire a través del radiador. A baja velocidad ese trabajo depende mucho más del electroventilador. Por eso un fallo de ventilador, relé, fusible, resistencia, módulo o sensor puede hacerse visible primero en tráfico lento.",
          "Ese patrón no demuestra que el ventilador sea la única causa. Un radiador sucio por fuera o restringido por dentro, refrigerante insuficiente, aire atrapado o una circulación deficiente pueden dejar un margen tan pequeño que solo funciona bien con mucho aire.",
        ],
      },
      {
        title: "Qué observar con el motor completamente frío",
        paragraphs: [
          "Con el coche frío y en una superficie nivelada, comprueba el nivel en el depósito según el manual. Busca manchas, residuos secos y daños visibles en mangueras o radiador. Utiliza exactamente el refrigerante especificado y no mezcles tipos por color.",
          "No acerques manos, ropa ni herramientas al ventilador: puede arrancar automáticamente incluso con el motor parado. La comprobación de activación, alimentación y orden de mando debe hacerse con procedimiento y equipo adecuados.",
        ],
        list: [
          "Nivel y aspecto del refrigerante en frío.",
          "Fugas, residuos y obstrucción exterior del radiador.",
          "Estado de conectores, fusibles y cableado accesible según el manual.",
          "Temperatura indicada frente a temperatura real leída por diagnosis.",
        ],
      },
      {
        title: "Qué hacer si vuelve a subir",
        paragraphs: [
          "Apaga el aire acondicionado y reduce la carga mientras buscas un lugar seguro. Si la aguja llega a la zona roja, se enciende el aviso o aparece vapor, para y apaga. Usar la calefacción al máximo puede retirar algo de calor en ciertas situaciones, pero no convierte el coche en apto para continuar ni sustituye una reparación.",
          "Espera a que enfríe. Nunca abras el tapón presurizado en caliente: el líquido y el vapor pueden provocar quemaduras graves. Una vez frío, una pérdida evidente o un depósito vacío exige localizar la causa, no rellenar repetidamente y seguir.",
        ],
      },
      {
        title: "Ruta del hub de refrigeración",
        paragraphs: [
          "El hub separa sobrecalentamiento en carretera, en atasco, pérdida de refrigerante y calefacción que deja de calentar. Esa separación ayuda a priorizar flujo de aire, circulación o estanqueidad.",
        ],
      },
    ],
    safety: [
      "No abras el depósito ni el radiador con el motor caliente o si sale vapor.",
      "Mantén manos y ropa lejos del electroventilador: puede activarse sin aviso.",
      "No continúes con testigo rojo, zona roja, vapor o pérdida importante de refrigerante.",
    ],
    whenWorkshop: [
      "La temperatura vuelve a subir aunque el nivel en frío sea correcto.",
      "El ventilador no actúa, actúa de forma irregular o hay que comprobar su circuito.",
      "Existen burbujas continuas, pérdida sin fuga visible, humo blanco persistente o mezcla de aceite y refrigerante.",
    ],
    faqs: [
      {
        question: "¿Si baja en carretera puedo seguir circulando?",
        answer:
          "No es una reparación. El siguiente atasco o una mayor carga puede repetir el sobrecalentamiento. Debe revisarse antes de un uso normal.",
      },
      {
        question: "¿Puedo abrir el tapón cuando la aguja ya ha bajado?",
        answer:
          "La aguja puede bajar antes de que el circuito pierda presión y temperatura. Espera a que el motor esté completamente frío y sigue el manual.",
      },
      {
        question: "¿Es siempre el electroventilador?",
        answer:
          "No. Es una hipótesis fuerte por el patrón, pero nivel, aire, radiador, termostato, bomba, sensor y control también deben considerarse.",
      },
    ],
    relatedSlugs: [
      "testigo-motor-parpadea-coche-tiembla",
      "coche-arranca-con-pinzas-vuelve-a-fallar",
    ],
    sources: [SOURCES.fordCoolant, SOURCES.seatManual, SOURCES.dgtCooling],
  },
  {
    slug: "obd2-conecta-pero-no-lee-codigos",
    query: "El lector OBD2 conecta con el móvil pero no lee códigos del coche, ¿qué hago?",
    cluster: "Comunicación OBD2",
    hub: {
      slug: "como-elegir-lector-obd2",
      title: "Cómo elegir y entender un lector OBD2",
      href: "/guias-de-compra/como-elegir-lector-obd2",
    },
    seoTitle: "OBD2 conecta pero no lee códigos: soluciones",
    description:
      "Bluetooth conectado no significa comunicación con la centralita. Comprueba contacto, protocolo, aplicación, módulo y alcance del lector OBD2.",
    directAnswer:
      "Si el móvil enlaza con el adaptador, solo está confirmada la conexión móvil-adaptador. Todavía puede faltar comunicación entre el adaptador y el vehículo, estar seleccionado un perfil incorrecto o buscar códigos en un módulo que el lector genérico no admite. Comprueba contacto, alimentación, configuración y cobertura sin puentear pines; que no aparezcan códigos genéricos tampoco demuestra que el coche no tenga averías en otros módulos.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "Divide la comunicación en tres tramos",
        paragraphs: [
          "El proceso tiene tres enlaces: vehículo con adaptador, adaptador con teléfono y aplicación con el módulo solicitado. Un icono Bluetooth solo confirma uno. Las aplicaciones suelen mostrar por separado «adaptador conectado», «ECU conectada» y el protocolo detectado.",
          "El OBD genérico se centra en información relacionada con emisiones. ABS, airbag, confort, dirección o caja de cambios pueden requerir software y cobertura específica del fabricante aunque utilicen el mismo conector físico.",
        ],
        list: [
          "Teléfono ↔ adaptador: Bluetooth o Wi-Fi y permisos.",
          "Adaptador ↔ vehículo: alimentación, contacto y protocolo.",
          "Aplicación ↔ módulo: perfil, cobertura y sesión correcta.",
        ],
      },
      {
        title: "Secuencia de comprobación sin alterar el coche",
        paragraphs: [
          "Confirma en el manual la posición de contacto necesaria. Cierra otras aplicaciones que puedan retener el adaptador, selecciona el tipo correcto de conexión y deja la detección de protocolo en automático antes de forzar uno. Registra el mensaje exacto: «sin adaptador», «sin ECU» y «sin códigos» son resultados distintos.",
          "Comprueba si el conector recibe alimentación solo con un método seguro y la documentación eléctrica del vehículo. Si el adaptador no enciende, un fusible compartido puede ser una posibilidad, pero no sustituyas fusibles a ciegas ni puentes terminales del conector.",
        ],
      },
      {
        title: "Cuándo el problema es la cobertura, no la conexión",
        paragraphs: [
          "Un lector puede mostrar datos de motor y no acceder al ABS. Otro puede leer códigos pero no ejecutar funciones de servicio o codificación. Consulta la matriz de cobertura por marca, modelo, año y sistema; «compatible con OBD2» no equivale a diagnosis completa.",
          "En coches antiguos, importados o cercanos a los años de transición, comprueba la obligación y el estándar aplicable al mercado de origen. La forma del conector por sí sola no garantiza todas las funciones.",
        ],
      },
      {
        title: "Conservar información y volver al hub",
        paragraphs: [
          "No borres datos ni ejecutes actuadores para probar el enlace. El hub de motor y emisiones explica cómo registrar códigos, estados y datos congelados y cómo diferenciar una ausencia de comunicación de una ausencia real de códigos.",
        ],
      },
    ],
    safety: [
      "No puentes pines del conector OBD ni introduzcas puntas sin conocer el esquema.",
      "No uses funciones de codificación, programación o actuadores como prueba de conexión.",
      "No borres códigos antes de guardar su estado y datos congelados.",
    ],
    whenWorkshop: [
      "Ningún equipo conocido puede comunicarse con la ECU o varios módulos dejan de responder.",
      "Hay daños, humedad o pines deformados en el conector.",
      "Se sospecha un fallo de red CAN, alimentación de módulos o seguridad de acceso.",
    ],
    faqs: [
      {
        question: "¿Si pone conectado y no hay códigos significa que no hay avería?",
        answer:
          "No necesariamente. Puede haber códigos en módulos no cubiertos, códigos pendientes o un síntoma que todavía no cumple criterios de registro.",
      },
      {
        question: "¿Todos los lectores leen ABS y airbag?",
        answer:
          "No. OBD genérico y diagnosis de fabricante tienen alcances distintos. Hay que verificar cobertura exacta por vehículo y módulo.",
      },
      {
        question: "¿Puedo probar otro protocolo manualmente?",
        answer:
          "Puedes seguir las opciones no invasivas de la aplicación, pero primero usa detección automática. No fuerces conexiones eléctricas ni pines.",
      },
    ],
    relatedSlugs: [
      "testigo-motor-parpadea-coche-tiembla",
      "itv-gases-altos-gasolina-antiguo",
    ],
    sources: [SOURCES.euObd, SOURCES.unObd, SOURCES.boschDiagnostics],
  },
  {
    slug: "cargador-bateria-indica-llena-coche-no-arranca",
    query: "El cargador indica batería llena pero el coche no arranca, ¿por qué?",
    cluster: "Carga aparente sin capacidad de arranque",
    hub: {
      slug: "cargador-mantenedor-bateria",
      title: "Cargador y mantenedor de batería",
      href: "/guias-de-compra/cargador-mantenedor-bateria",
    },
    seoTitle: "El cargador marca llena y el coche no arranca",
    description:
      "Una indicación de carga completa no prueba la capacidad de arranque. Separa batería degradada, conexión, motor de arranque e inmovilizador.",
    directAnswer:
      "El cargador puede detectar que la tensión ha alcanzado su objetivo aunque la batería tenga poca capacidad o elevada resistencia interna. También puede haber seleccionado un modo incompatible, existir una conexión deficiente o estar el fallo fuera de la batería. Deja reposar según el procedimiento, prueba la capacidad de arranque y mide la caída bajo carga antes de comprar otra batería.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "Qué significa realmente «llena»",
        paragraphs: [
          "Cada cargador decide el final mediante su propia secuencia de tensión, corriente y tiempo. Ese estado describe el proceso observado por el cargador, no certifica los amperios de arranque ni la capacidad restante. Una batería sulfatada o con una celda dañada puede alcanzar tensión con rapidez y caer al solicitar corriente.",
          "Una tensión tomada justo al desconectar puede incluir carga superficial. La comprobación relevante combina reposo, estado de batería y comportamiento durante el intento de arranque.",
        ],
      },
      {
        title: "Comprueba primero que la carga era compatible",
        paragraphs: [
          "Verifica tensión y tecnología: convencional, EFB, AGM o litio requieren modos y límites compatibles. Confirma que las pinzas hicieron buen contacto y que el cargador no terminó por detectar una batería demasiado pequeña, una interrupción o un error.",
          "En vehículos con puntos remotos o sensor de batería, conecta donde indica el fabricante. Una conexión incorrecta puede saltarse la medición del sistema o no cargar como se esperaba.",
        ],
        list: [
          "Modo y tensión compatibles con la etiqueta de la batería.",
          "Conexiones limpias, firmes y en los puntos previstos.",
          "Finalización normal, sin código de error o interrupción.",
          "Tiempo de carga coherente con la descarga y la corriente disponible.",
        ],
      },
      {
        title: "Si la batería sí supera la prueba",
        paragraphs: [
          "Vuelve al síntoma: clics, giro lento, giro normal sin encendido o silencio total llevan a rutas distintas. Con una batería probada, hay que revisar caídas de tensión, motor de arranque, mando, posición P/N o embrague e inmovilizador.",
          "No confundas «no gira» con «gira pero no enciende». En el segundo caso, seguir cargando la batería rara vez resuelve por sí solo un problema de combustible, encendido, sincronización o autorización de arranque.",
        ],
      },
      {
        title: "Conexión con el hub",
        paragraphs: [
          "El hub de arranque y batería permite elegir la ruta por ruido y velocidad de giro. Esta guía resuelve el caso particular en el que el cargador ya ha dado una indicación de fin.",
        ],
      },
    ],
    safety: [
      "No cargues una batería congelada, deformada, con fugas o de tecnología incompatible.",
      "Ventila el lugar, evita chispas y respeta el orden de conexión y desconexión.",
      "No mantengas intentos largos de arranque; sigue el tiempo máximo y las pausas del manual.",
    ],
    whenWorkshop: [
      "La batería marca llena pero falla una prueba de capacidad o cae con rapidez.",
      "La batería supera la prueba y el motor no gira o gira anormalmente.",
      "El vehículo requiere registro de batería, presenta errores de inmovilizador o tiene una instalación compleja.",
    ],
    faqs: [
      {
        question: "¿Una batería puede marcar 12 voltios y estar mal?",
        answer:
          "Sí. La tensión sin carga no muestra por sí sola la capacidad ni la caída al mover el motor de arranque.",
      },
      {
        question: "¿Debo repetir el modo de reparación del cargador?",
        answer:
          "Solo si el fabricante lo permite para esa tecnología y situación. No recupera daños físicos ni garantiza capacidad de arranque.",
      },
      {
        question: "¿Si el motor gira normal la batería queda descartada?",
        answer:
          "Reduce su probabilidad como causa principal, pero hay que identificar si el problema es que no gira o que gira y no llega a encender.",
      },
    ],
    relatedSlugs: [
      "coche-hace-clic-no-arranca-luces-funcionan",
      "coche-arranca-con-pinzas-vuelve-a-fallar",
      "bateria-agm-o-efb-start-stop",
    ],
    sources: [
      SOURCES.boschBatteries,
      SOURCES.boschBatteryService,
      SOURCES.dgtBattery,
    ],
  },
  {
    slug: "bateria-agm-o-efb-start-stop",
    query: "¿Qué diferencia hay entre batería AGM y EFB y cuál necesita mi coche Start-Stop?",
    cluster: "Baterías para Start-Stop",
    hub: {
      slug: "como-elegir-bateria-coche",
      title: "Cómo elegir una batería compatible",
      href: "/mantenimiento/como-elegir-bateria-coche",
    },
    seoTitle: "Batería AGM o EFB para Start-Stop: diferencias",
    description:
      "AGM y EFB no son intercambiables por intuición. Comprueba tecnología original, recuperación, medidas, capacidad y registro del vehículo.",
    directAnswer:
      "Monta la tecnología y especificación que indique el fabricante o su catálogo técnico. EFB suele usarse en sistemas Start-Stop básicos; AGM soporta ciclos más exigentes y recuperación de energía. No rebajes una AGM a EFB salvo autorización expresa. Una EFB puede admitir actualización a AGM en aplicaciones concretas, pero deben coincidir compatibilidad, medidas, polaridad, ventilación y gestión electrónica.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "La diferencia práctica entre EFB y AGM",
        paragraphs: [
          "EFB es una batería inundada mejorada para más ciclos que una convencional. AGM inmoviliza el electrolito en fibra de vidrio y está diseñada para demandas de ciclo y aceptación de carga más altas. Ambas pueden aparecer en Start-Stop, pero responden a estrategias eléctricas distintas.",
          "El hecho de que una batería quepa no demuestra compatibilidad. El sistema de gestión ajusta carga y consumo según tecnología, capacidad y estado.",
        ],
      },
      {
        title: "Qué copiar de la batería y qué verificar en catálogo",
        paragraphs: [
          "Anota tecnología, tensión, amperios-hora, corriente de arranque, dimensiones, base de fijación, posición de bornes y salida de ventilación. Contrasta matrícula o bastidor en un catálogo técnico y con el manual; no selecciones solo por una cifra de amperios mayor.",
          "En algunos vehículos la sustitución debe registrarse o adaptarse para que la gestión conozca la batería nueva. En otros basta el montaje siguiendo el procedimiento. La obligación depende del modelo, no de que la batería sea AGM o EFB por sí sola.",
        ],
        list: [
          "Tecnología original y tecnologías de sustitución autorizadas.",
          "Capacidad, corriente de arranque y tamaño.",
          "Polaridad, fijación y ventilación.",
          "Necesidad de alimentación de respaldo, registro o adaptación.",
        ],
      },
      {
        title: "Errores de sustitución que generan problemas",
        paragraphs: [
          "Instalar una convencional en lugar de EFB o AGM puede reducir vida útil y desactivar o degradar funciones Start-Stop. Rebajar AGM a EFB puede no soportar la recuperación y los ciclos previstos. Subir de capacidad sin autorización tampoco garantiza mejor carga.",
          "Antes de culpar a la batería nueva, revisa estado de carga, conexiones, sensor de batería y registro. Una batería almacenada puede necesitar carga inicial aunque sea nueva.",
        ],
      },
      {
        title: "Más contexto en el hub de batería",
        paragraphs: [
          "El hub reúne elección, carga, descarga y síntomas de arranque. Esta guía se limita a decidir tecnología y procedimiento de sustitución en vehículos Start-Stop.",
        ],
      },
    ],
    safety: [
      "No sustituyas una AGM por EFB o convencional sin aprobación técnica para ese vehículo.",
      "Respeta orden de desconexión, puntos de masa y procedimientos para conservar alimentación cuando el fabricante lo exija.",
      "No manipules la batería de alta tensión de un híbrido o eléctrico: esta guía trata de la batería auxiliar de baja tensión.",
    ],
    whenWorkshop: [
      "El fabricante exige registro o adaptación y no dispones de diagnosis compatible.",
      "La batería está en el habitáculo, bajo asientos o requiere desmontar sistemas de seguridad.",
      "Persisten fallos de carga o Start-Stop después de instalar y cargar correctamente.",
    ],
    faqs: [
      {
        question: "¿Puedo poner AGM si llevaba EFB?",
        answer:
          "En ciertas aplicaciones se admite como mejora, pero no es una regla universal. Confirma la aplicación concreta y el procedimiento de gestión.",
      },
      {
        question: "¿Puedo poner EFB si llevaba AGM?",
        answer:
          "No como decisión genérica. Es una rebaja tecnológica que puede ser incompatible con recuperación y demanda eléctrica.",
      },
      {
        question: "¿Hay que codificar siempre una batería Start-Stop?",
        answer:
          "No siempre. Algunos modelos exigen registro o adaptación y otros no. Debe consultarse la información del vehículo.",
      },
    ],
    relatedSlugs: [
      "cargador-bateria-indica-llena-coche-no-arranca",
      "bateria-coche-se-descarga-varios-dias",
      "coche-arranca-con-pinzas-vuelve-a-fallar",
    ],
    sources: [
      SOURCES.vartaAgmEfb,
      SOURCES.vartaReplacement,
      SOURCES.boschBatteries,
    ],
  },
  {
    slug: "itv-gases-altos-gasolina-antiguo",
    query: "Mi coche de gasolina antiguo da gases altos en la ITV, ¿qué debo revisar antes de repetir?",
    cluster: "Emisiones en motores de gasolina",
    hub: {
      slug: "checklist-itv-coche-antiguo",
      title: "Checklist ITV para un coche de más de 10 años",
      href: "/itv-y-normativa/checklist-itv-coche-antiguo",
    },
    seoTitle: "ITV: gases altos en un gasolina antiguo",
    description:
      "Lee CO y lambda del informe de ITV antes de cambiar catalizador. Ordena encendido, admisión, combustible, escape y control de emisiones.",
    directAnswer:
      "Empieza por el informe: identifica qué valor falló, a qué régimen y qué límites aplicaron al vehículo. CO alto y lambda fuera de rango no señalan por sí solos el catalizador. Un motor frío, fallos de encendido, mezcla incorrecta, entrada de aire, fuga de escape, sonda o catalizador degradado pueden alterar la prueba. Repara primero cualquier fallo de combustión y llega a la repetición con el motor en temperatura normal, sin recurrir a aditivos ni a conducir de forma peligrosa.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "Lee el resultado antes de comprar piezas",
        paragraphs: [
          "El Manual ITV vigente distingue procedimientos y límites según fecha, homologación y sistema de control de emisiones. Copia del informe los valores de CO a ralentí y ralentí acelerado, lambda cuando se mida, régimen y cualquier defecto OBD.",
          "No uses una tabla genérica de internet para decidir que «está cerca» o «está muy alto». El límite aplicable está ligado a la documentación y características del vehículo.",
        ],
      },
      {
        title: "Qué puede elevar CO o alterar lambda",
        paragraphs: [
          "En un gasolina, la combustión incompleta o una mezcla rica puede elevar CO. Bujías, encendido, inyección, presión de combustible, sensor de temperatura o admisión requieren comprobación. Una fuga de escape antes de la sonda o del punto de medición puede introducir oxígeno y alterar lambda.",
          "El catalizador necesita alcanzar temperatura y recibir gases de un motor que quema correctamente. Cambiarlo antes de reparar fallos de combustión puede dañar también el recambio.",
        ],
        list: [
          "Mantenimiento pendiente y fallos de encendido.",
          "Códigos, datos de mezcla y temperatura real de motor.",
          "Fugas de admisión o escape y estado de sondas.",
          "Eficiencia del catalizador solo después de verificar lo anterior.",
        ],
      },
      {
        title: "Preparación legítima para la repetición",
        paragraphs: [
          "Realiza el mantenimiento prescrito y repara la causa. Evita llegar con el motor recién arrancado si el procedimiento y el vehículo requieren temperatura normal de servicio, pero no aceleres en vacío ni circules infringiendo normas para «calentar el catalizador».",
          "Los aditivos no sustituyen diagnosis y pueden no ser compatibles. Tampoco borres códigos justo antes: reinicia monitores y oculta información que ayuda a comprobar la reparación.",
        ],
      },
      {
        title: "Continúa por el hub de motor y emisiones",
        paragraphs: [
          "El hub conecta este resultado de ITV con testigo motor, lectura OBD2 y fallos de combustión. Esta guía no crea una página por cada valor: enseña a interpretar el patrón completo.",
        ],
      },
    ],
    safety: [
      "No realices pruebas de gases en un espacio cerrado: el monóxido de carbono es tóxico.",
      "No toques escape, sonda o catalizador en caliente.",
      "Si el testigo motor parpadea o el coche tiembla, no intentes completar un trayecto para calentar el catalizador.",
    ],
    whenWorkshop: [
      "Hay fallo de encendido, códigos activos, consumo elevado o funcionamiento irregular.",
      "Se necesitan analizador de gases, osciloscopio, prueba de presión o comprobación de fugas.",
      "El catalizador se sospecha degradado después de confirmar mezcla, encendido y estanqueidad.",
    ],
    faqs: [
      {
        question: "¿Dar una vuelta a altas revoluciones soluciona los gases?",
        answer:
          "No repara una avería y puede agravar un fallo de combustión. El vehículo debe llegar a temperatura normal de forma segura después de haber corregido la causa.",
      },
      {
        question: "¿CO alto significa catalizador roto?",
        answer:
          "No por sí solo. También puede existir mezcla rica, combustión incompleta o problema de control. El catalizador se evalúa dentro de una secuencia.",
      },
      {
        question: "¿Borrar el testigo antes de la ITV ayuda?",
        answer:
          "No es una reparación, elimina pistas y reinicia monitores. La ITV puede comprobar el sistema OBD según el procedimiento aplicable.",
      },
    ],
    relatedSlugs: [
      "testigo-motor-parpadea-coche-tiembla",
      "obd2-conecta-pero-no-lee-codigos",
    ],
    sources: [
      SOURCES.itvManual,
      SOURCES.itvRoyalDecree,
      SOURCES.euRoadworthiness,
      SOURCES.unObd,
    ],
  },
  {
    slug: "baliza-v16-comprobar-certificado-caducidad",
    query: "¿Cómo compruebo que mi baliza V16 está certificada y cuándo caduca?",
    cluster: "Señalización de emergencia V16",
    hub: {
      slug: "baliza-v16-conectada-certificada",
      title: "Baliza V16 conectada y modelos certificados",
      href: "/itv-y-normativa/baliza-v16-conectada-certificada",
    },
    seoTitle: "Baliza V16: comprobar certificado y caducidad",
    description:
      "Verifica marca, modelo, número de certificado y caducidad de una V16 conectada en el listado oficial de la DGT actualizado.",
    directAnswer:
      "Desde el 1 de enero de 2026, en España la V16 conectada es el dispositivo legal de preseñalización. Busca en la carcasa y el envase la marca, modelo y número de certificado y compáralos exactamente con el listado oficial de la DGT; no basta con que el anuncio diga «homologada». Comprueba también la fecha de caducidad impresa, que incluye el periodo de conectividad, y el estado de la pila o batería según sus instrucciones.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "Comprobación en cuatro datos",
        paragraphs: [
          "Abre el listado de la DGT y localiza la marca comercial, modelo y número de certificado. Los tres deben corresponder con el dispositivo, no solo con una fotografía de la caja. Si existen variantes, verifica que la tuya esté incluida en el certificado enlazado.",
          "La DGT también conserva una tabla de certificados cuya vigencia de fabricación terminó. La situación del certificado no debe confundirse con la fecha de servicio de una unidad adquirida legalmente: conserva factura, envase e instrucciones y atiende a la información oficial y a la caducidad impresa.",
        ],
        list: [
          "Marca comercial exacta.",
          "Modelo o variante exactos.",
          "Número de certificado grabado o impreso.",
          "Fecha de caducidad del dispositivo o conectividad.",
        ],
      },
      {
        title: "Conectada no significa usar una aplicación",
        paragraphs: [
          "La comunicación debe estar integrada y funcionar sin depender del móvil. La normativa contempla al menos doce años de conectividad incluida en el precio, sin una cuota posterior para el conductor. La fecha concreta hasta la que tu unidad dispone de servicio debe figurar en ella y en su envase.",
          "Una V16 no conectada dejó de ser válida como medio de preseñalización en España el 1 de enero de 2026. Tampoco es suficiente una baliza conectada que no aparezca como modelo certificado.",
        ],
      },
      {
        title: "Conservación y uso sin falsas activaciones",
        paragraphs: [
          "Guárdala accesible en la guantera, no bajo el equipaje. Revisa visualmente carcasa, fijación y batería con la periodicidad indicada. No la actives en la vía para «probar cobertura»: al activarse comunica una posición de incidencia.",
          "En una inmovilización real, enciéndela y colócala preferiblemente en la parte más alta del vehículo si puedes hacerlo sin abandonar un lugar seguro. La baliza mejora visibilidad física y virtual, pero no sustituye la decisión de permanecer protegido, salir por un lado seguro cuando proceda o seguir instrucciones de emergencias.",
        ],
      },
      {
        title: "Hub de equipamiento seguro",
        paragraphs: [
          "En el hub se explican V16, chaleco, inflador y otros elementos sin convertir la obligación legal en una recomendación comercial. Esta guía se limita a validar certificado y vida útil de la baliza.",
        ],
      },
    ],
    safety: [
      "No te expongas al tráfico para colocar la baliza; prioriza un punto alto accesible desde una posición segura.",
      "No actives una V16 conectada como prueba en una carretera ni generes una señal de incidencia falsa.",
      "Una V16 no hace seguro permanecer junto al vehículo en un carril activo; sigue las instrucciones de DGT y emergencias.",
    ],
    whenWorkshop: [
      "La toma de alimentación, la batería del vehículo o la inmovilización forman parte de otra avería; la V16 no diagnostica el coche.",
      "Para dudas de certificación o caducidad, consulta a DGT o al fabricante, no a un taller como única fuente.",
    ],
    faqs: [
      {
        question: "¿Una pegatina que pone DGT 3.0 demuestra que es válida?",
        answer:
          "No. Debes encontrar la combinación exacta de marca, modelo y certificado en el listado oficial de la DGT.",
      },
      {
        question: "¿Tengo que pagar una cuota de conectividad?",
        answer:
          "La DGT indica que la conectividad mínima de doce años está incluida en el precio y no requiere una cuota del particular.",
      },
      {
        question: "¿Los triángulos o una V16 sin conexión siguen siendo válidos?",
        answer:
          "Desde el 1 de enero de 2026, la V16 conectada certificada es el medio legal de preseñalización en España; una V16 no conectada ya no cumple esa función.",
      },
    ],
    relatedSlugs: [
      "coche-hace-clic-no-arranca-luces-funcionan",
      "coche-arranca-con-pinzas-vuelve-a-fallar",
      "temperatura-sube-atasco-baja-carretera",
    ],
    sources: [SOURCES.dgtV16, SOURCES.boeV16, SOURCES.dgtV16Technical],
  },
] as const satisfies readonly LongTailGuide[];

export function getLongTailGuide(
  slug: string,
): LongTailGuide | undefined {
  return LONG_TAIL_GUIDES.find((guide) => guide.slug === slug);
}
