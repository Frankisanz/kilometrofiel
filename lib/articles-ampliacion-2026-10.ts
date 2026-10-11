import type { Article, PrimarySource } from "@/lib/articles";

// Guías añadidas el 11 de octubre de 2026 para cubrir síntomas, mantenimiento
// y trámites muy buscados que la web aún no trataba (frenos, dirección,
// embrague, climatización, fugas, pérdida de potencia, DPF/EGR, refrigerante,
// amortiguadores, coche parado, ITV caducada y baja o venta del coche).
const ACCESSED_AT = "2026-10-11";
const PUBLISHED_AT = "2026-10-11";

const sources = {
  mechanicsManual: {
    name: "Manual VIII de mecánica para formación vial, edición 2026",
    publisher: "Dirección General de Tráfico",
    url: "https://sede.dgt.gob.es/export/sites/dgt/.galleries/permisos-de-conducir/certificacion-aptitud-profesores-formacion-vial/2026/MANUAL-VIII-Mecanica.pdf",
    accessedAt: ACCESSED_AT,
  },
  roadsideReview: {
    name: "Revisiones contra «sustos»",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/reportajes/2018/03MARZO/0320-Revisar-el-coche.shtml",
    accessedAt: ACCESSED_AT,
  },
  commonFailures: {
    name: "Las cinco averías más frecuentes",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/noticias/2022/04ABRIL/0428-Averias-mas-frecuentes.shtml",
    accessedAt: ACCESSED_AT,
  },
  warningLights: {
    name: "Para que los testigos del coche no te suenen a chino",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/reportajes/2019/0926-Los-testigos-del-coche.shtml",
    accessedAt: ACCESSED_AT,
  },
  emergencyMode: {
    name: "El vehículo, en modo emergencia",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/tecnologia-seguridad/2023/1221-N268-vehiculo-dia-emergencia.shtml",
    accessedAt: ACCESSED_AT,
  },
  tyres: {
    name: "Todo lo que tiene que saber de neumáticos",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/tecnologia-seguridad/2019/0910-Neumaticos.shtml",
    accessedAt: ACCESSED_AT,
  },
  brakeFluid: {
    name: "Líquidos de frenos",
    publisher: "HELLA Tech World",
    url: "https://www.hella.com/techworld/es/lineas-de-producto/sistemas-de-frenos/liquidos-de-frenos/",
    accessedAt: ACCESSED_AT,
  },
  itvManual: {
    name: "Manual de procedimiento de inspección de las estaciones ITV, versión 7.9",
    publisher: "Ministerio de Industria y Turismo",
    url: "https://industria.gob.es/Calidad-Industrial/vehiculos/itv1/Manual%20de%20procedimiento%20de%20inspecci%C3%B3n/Manual%20de%20procedimiento%20de%20inspeccion%20de%20estaciones%20ITV-V%207.9_final2.pdf",
    accessedAt: ACCESSED_AT,
  },
  itvLaw: {
    name: "Real Decreto 920/2017, por el que se regula la ITV",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2017-12841",
    accessedAt: ACCESSED_AT,
  },
  trafficLaw: {
    name: "Real Decreto Legislativo 6/2015, Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722",
    accessedAt: ACCESSED_AT,
  },
  insuranceLaw: {
    name: "Real Decreto Legislativo 8/2004, Ley sobre responsabilidad civil y seguro en la circulación de vehículos a motor",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/eli/es/rdlg/2004/10/29/8",
    accessedAt: ACCESSED_AT,
  },
  endOfLifeDecree: {
    name: "Real Decreto 265/2021, sobre los vehículos al final de su vida útil",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/eli/es/rd/2021/04/13/265",
    accessedAt: ACCESSED_AT,
  },
  permanentDeregistration: {
    name: "Baja definitiva",
    publisher: "Dirección General de Tráfico",
    url: "https://www.dgt.es/nuestros-servicios/tu-vehiculo/no-vas-a-usar-tu-vehiculo/baja-definitiva/",
    accessedAt: ACCESSED_AT,
  },
  temporaryDeregistration: {
    name: "Baja temporal",
    publisher: "Dirección General de Tráfico",
    url: "https://www.dgt.es/nuestros-servicios/tu-vehiculo/no-vas-a-usar-tu-vehiculo/baja-temporal/",
    accessedAt: ACCESSED_AT,
  },
  saleNotice: {
    name: "Notificación de venta de un vehículo",
    publisher: "RACE",
    url: "https://www.race.es/notificar-venta-vehiculo",
    accessedAt: ACCESSED_AT,
  },
  clutch: {
    name: "Problemas de embrague: síntomas y averías",
    publisher: "RACE",
    url: "https://www.race.es/problemas-embrague-sintomas-averias",
    accessedAt: ACCESSED_AT,
  },
  airConditioning: {
    name: "El aire acondicionado del coche no enfría",
    publisher: "RACE",
    url: "https://www.race.es/aire-acondicionado-no-enfria",
    accessedAt: ACCESSED_AT,
  },
  fluorinatedGases: {
    name: "Real Decreto 115/2017, sobre comercialización y manipulación de gases fluorados",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/eli/es/rd/2017/02/17/115",
    accessedAt: ACCESSED_AT,
  },
  shockAbsorbers: {
    name: "Amortiguadores y la ITV",
    publisher: "RACE",
    url: "https://www.race.es/amortiguadores-itv",
    accessedAt: ACCESSED_AT,
  },
  dpf: {
    name: "El sistema DPF: filtro de partículas diésel",
    publisher: "HELLA Tech World",
    url: "https://www.hella.com/techworld/es/ti/pdf/El-sistema-DPF-Filtro-de-Particulas-Diesel/El-sistema-DPF-Filtro-de-Particulas-Diesel.pdf",
    accessedAt: ACCESSED_AT,
  },
} satisfies Record<string, PrimarySource>;

export const october2026Articles: readonly Article[] = [
  {
    slug: "ruido-vibracion-al-frenar",
    category: "problemas",
    title: "Ruido o vibración al frenar: qué indica cada síntoma",
    seoTitle: "Ruido al frenar o vibración: causas y qué hacer",
    description:
      "Chirrido, roce metálico, volante que tiembla o pedal que late al frenar: qué suele indicar cada síntoma, cuándo dejar de circular y qué revisar en el taller.",
    eyebrow: "Problemas · Frenos",
    summary:
      "Los frenos avisan antes de fallar, pero cada aviso significa algo distinto. Un chirrido agudo, un roce metálico grave, una vibración en el volante o un pedal que se hunde no se resuelven igual ni tienen la misma urgencia.",
    directAnswer:
      "Un chirrido suave en las primeras frenadas con humedad suele ser óxido superficial y desaparece. Un chirrido constante puede ser el avisador de desgaste de las pastillas; un roce metálico grave suele indicar que el material de fricción se ha agotado y el metal toca el disco. Si el volante o el pedal vibran al frenar desde velocidad, lo habitual es un disco con variación de espesor o una fijación incorrecta. Un pedal blando, que se hunde o un coche que se desvía al frenar exigen dejar de circular y pedir revisión.",
    readingMinutes: 8,
    sections: [
      {
        id: "identificar-el-sonido",
        heading: "Identifica el tipo de ruido y cuándo aparece",
        paragraphs: [
          "Antes de suponer nada, fíjate en tres datos: si el ruido aparece solo al frenar o también al rodar, si cambia con la presión del pedal y si sucede siempre o solo en frío, con lluvia o tras dejar el coche parado varios días. Esa información orienta mucho más que la descripción genérica «hace ruido».",
          "Un coche de más de diez años suele haber tenido varias sustituciones de pastillas y discos, a veces con piezas de calidades distintas. Por eso conviene conocer qué se cambió y cuándo: una factura reciente cambia por completo la interpretación de un ruido.",
        ],
        bullets: [
          "Chirrido agudo breve tras lluvia o noche a la intemperie: suele ser óxido superficial del disco.",
          "Chirrido metálico constante que desaparece al frenar fuerte: posible avisador de desgaste de pastillas.",
          "Roce grave, como lija o metal contra metal: material de fricción agotado o un cuerpo extraño.",
          "Golpe seco al empezar a frenar o al cambiar de sentido: holgura en pinza, soportes o suspensión.",
          "Ruido al rodar que no cambia al frenar: puede ser un rodamiento, un neumático o la transmisión, no el freno.",
        ],
      },
      {
        id: "vibraciones",
        heading: "Vibración en el volante o pulsación en el pedal",
        paragraphs: [
          "Cuando el volante tiembla o el pedal late solo al frenar, y sobre todo al hacerlo desde velocidad de carretera, la causa más frecuente es que el disco tiene zonas de distinto espesor o que gira con alabeo por suciedad u óxido entre disco y buje. Aunque se habla de «disco alabeado», el origen suele ser un desgaste irregular o un montaje mejorable.",
          "Si la vibración aparece también sin frenar, a una velocidad concreta, es más probable un desequilibrio de rueda, un neumático deformado o un elemento de suspensión o dirección con holgura. En ese caso, cambiar discos no lo resolverá.",
        ],
        callout: {
          tone: "info",
          title: "El ABS también se nota",
          text: "En una frenada fuerte sobre suelo deslizante es normal sentir un pulso rápido en el pedal y un ruido de bomba: es el ABS actuando. Si ocurre en frenadas suaves sobre asfalto seco, comunícalo en el taller.",
        },
      },
      {
        id: "pedal-y-trayectoria",
        heading: "Pedal blando, largo o coche que se desvía: no es un ruido más",
        paragraphs: [
          "El tacto del pedal informa del circuito hidráulico. Un pedal que llega más abajo de lo habitual, que se hunde poco a poco con el coche detenido o que necesita bombear puede indicar aire, fuga, líquido degradado o un fallo de la bomba. El líquido de frenos absorbe humedad con el tiempo y pierde capacidad de soportar calor, por eso los fabricantes fijan su sustitución por tiempo además de kilómetros.",
          "Si el coche tira hacia un lado solo al frenar, una pinza puede estar agarrotada o un lado puede frenar menos. Es una avería que afecta directamente a la estabilidad en una frenada de emergencia.",
        ],
        callout: {
          tone: "important",
          title: "Testigo de freno encendido",
          text: "Un testigo rojo de frenos con el freno de mano quitado puede indicar nivel bajo de líquido o fallo del circuito. Detén el coche en un lugar seguro y no reanudes la marcha sin revisión.",
        },
      },
      {
        id: "que-revisar",
        heading: "Qué revisar y qué pedir en el taller",
        paragraphs: [
          "Con el coche frío y en un lugar seguro, puedes mirar el nivel del depósito de líquido de frenos entre las marcas y, a través de los radios de la llanta, si el disco muestra surcos profundos o un reborde marcado. No desmontes ruedas ni pinzas sin elevación segura y formación.",
          "En el taller, pide que midan espesor de pastillas y discos frente al mínimo indicado, que comprueben el deslizamiento de guías y pistones y que revisen el estado del líquido. Pastillas y discos se cambian por ejes completos para que ambos lados frenen igual.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Pedal que se hunde, muy blando o que necesita bombear",
        action:
          "No circules. Puede haber una fuga o aire en el circuito. Solicita asistencia o traslado.",
      },
      {
        signal: "Testigo rojo de frenos encendido con el freno de mano quitado",
        action:
          "Detente en un lugar seguro, comprueba el nivel sin abrir el circuito y pide revisión antes de seguir.",
      },
      {
        signal: "Roce metálico continuo o olor a quemado en una rueda",
        action:
          "Reduce la velocidad, para y no sigas circulando: puede haber una pinza agarrotada o pastillas agotadas.",
      },
      {
        signal: "El coche se desvía con claridad al frenar",
        action:
          "Circula despacio hasta un taller o pide asistencia; no hagas pruebas de frenada fuerte en vías abiertas.",
      },
    ],
    safeSteps: [
      {
        title: "Anota cuándo aparece",
        detail:
          "Velocidad, presión del pedal, temperatura, lluvia y si el ruido cambia al girar. Graba el sonido desde dentro si puedes hacerlo con seguridad.",
      },
      {
        title: "Comprueba el nivel del líquido",
        detail:
          "Con el motor apagado y el coche nivelado, mira el depósito sin abrirlo. Un nivel bajo puede deberse a desgaste de pastillas o a una fuga.",
      },
      {
        title: "Mira el disco a través de la llanta",
        detail:
          "Surcos profundos, un reborde marcado o zonas azuladas son motivo para revisarlo. No metas los dedos ni herramientas con el coche encendido.",
      },
      {
        title: "Revisa la presión de los neumáticos",
        detail:
          "Una presión desigual puede hacer que el coche se desvíe al frenar y confundir el diagnóstico.",
      },
      {
        title: "Pide una medición, no una suposición",
        detail:
          "El taller debe medir espesores y comprobar pinzas antes de recomendar sustituir pastillas, discos o líquido.",
      },
    ],
    workshop: {
      introduction:
        "Los frenos son un elemento de seguridad. Pide que te enseñen las piezas sustituidas y que figuren en factura marca, referencia y kilometraje.",
      urgent: [
        "Pedal blando, largo o que se hunde.",
        "Testigo rojo de frenos o de nivel de líquido.",
        "Roce metálico continuo, humo u olor a quemado en una rueda.",
      ],
      appointment: [
        "Chirrido persistente que no desaparece tras varias frenadas.",
        "Vibración en el volante o el pedal al frenar desde velocidad.",
        "Líquido de frenos sin sustituir dentro del plazo del fabricante.",
      ],
      usefulInformation: [
        "Fecha y kilómetros del último cambio de pastillas, discos y líquido.",
        "Si el ruido es delantero, trasero, izquierdo o derecho.",
        "Velocidad y condiciones en las que aparece la vibración.",
      ],
    },
    faqs: [
      {
        question: "¿Es normal que los frenos chirríen por la mañana?",
        answer:
          "Un chirrido breve en las primeras frenadas tras una noche húmeda suele deberse a óxido superficial del disco y desaparece en pocos metros. Si persiste, conviene revisarlo.",
      },
      {
        question: "¿Hay que cambiar los discos cada vez que se cambian las pastillas?",
        answer:
          "No siempre. Depende del espesor medido frente al mínimo del fabricante y de su estado superficial. Lo que no conviene es montar pastillas nuevas sobre discos por debajo del mínimo.",
      },
      {
        question: "¿Cada cuánto se cambia el líquido de frenos?",
        answer:
          "Lo fija el fabricante en el plan de mantenimiento, normalmente por tiempo. Es habitual encontrar intervalos de dos años, pero manda el manual del vehículo.",
      },
      {
        question: "¿La vibración al frenar se arregla equilibrando las ruedas?",
        answer:
          "Si solo aparece al frenar, normalmente no. El equilibrado corrige vibraciones que aparecen al rodar a cierta velocidad, no las causadas por los discos.",
      },
    ],
    relatedSlugs: [
      "revisar-frenos-liquido-pastillas-discos",
      "coche-se-va-hacia-un-lado",
      "neumaticos-dot-desgaste-presion",
      "checklist-itv-coche-antiguo",
    ],
    sources: [
      sources.mechanicsManual,
      sources.brakeFluid,
      sources.roadsideReview,
      sources.itvManual,
    ],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "coche-se-va-hacia-un-lado",
    category: "problemas",
    title: "El coche se va hacia un lado o el volante vibra: causas probables",
    seoTitle: "El coche se va hacia un lado: causas y solución",
    description:
      "Por qué un coche tira a la derecha o a la izquierda, por qué el volante queda torcido o vibra a cierta velocidad y qué comprobar antes de pagar una alineación.",
    eyebrow: "Problemas · Dirección",
    summary:
      "Que el coche se desvíe al soltar ligeramente el volante no siempre se arregla con una alineación. La presión de los neumáticos, su desgaste, la suspensión, los frenos y hasta la inclinación de la carretera influyen en la trayectoria.",
    directAnswer:
      "Empieza por lo sencillo: comprueba en frío que la presión de los neumáticos coincide con la del fabricante en ambos lados. Si sigue desviándose en una vía recta y llana, las causas más habituales son la alineación (paralelo), un neumático con desgaste o estructura irregular, holguras en rótulas o brazos y una pinza de freno que roza. Si el volante vibra a una velocidad concreta, lo más probable es un desequilibrio de rueda o un neumático deformado.",
    readingMinutes: 8,
    sections: [
      {
        id: "comprobar-bien",
        heading: "Comprueba que el desvío es real",
        paragraphs: [
          "Las carreteras tienen bombeo: están ligeramente inclinadas hacia el arcén para evacuar el agua. Por eso casi todos los coches tienden un poco hacia la derecha. Para saber si hay un problema, observa el comportamiento en una recta llana, sin viento lateral y a velocidad moderada, sin soltar del todo el volante.",
          "Distingue entre tres síntomas: el coche se desvía siempre, el volante queda torcido aunque el coche vaya recto, o el desvío solo aparece al frenar o al acelerar. Cada uno apunta a causas diferentes.",
        ],
        bullets: [
          "Desvío constante en recta: presión, neumático, alineación o freno que roza.",
          "Volante torcido con trayectoria recta: alineación descentrada, habitual tras cambiar piezas de dirección.",
          "Desvío solo al frenar: pinza o latiguillo de freno, o diferencia de frenado entre lados.",
          "Vibración a una velocidad concreta: equilibrado o neumático deformado.",
          "Vibración que aumenta al frenar: discos con espesor irregular.",
        ],
      },
      {
        id: "neumaticos-primero",
        heading: "Los neumáticos, lo primero que hay que descartar",
        paragraphs: [
          "Una diferencia de presión entre las ruedas de un mismo eje basta para que el coche tire hacia el lado más desinflado. Mide en frío con un manómetro fiable y ajusta según la etiqueta del vehículo o el manual. Si una rueda pierde presión repetidamente, puede tener un pinchazo lento o una válvula defectuosa.",
          "Un neumático con un defecto interno, un bulto en el flanco o un desgaste muy desigual puede provocar desvío o vibración. Intercambiar las ruedas delanteras entre sí es una prueba que hacen los talleres: si el desvío cambia de lado, el origen está en el neumático.",
        ],
        callout: {
          tone: "caution",
          title: "Bulto en el flanco",
          text: "Una protuberancia en el lateral indica que la estructura interna está dañada. Ese neumático debe sustituirse; no se repara.",
        },
      },
      {
        id: "alineacion-y-holguras",
        heading: "Alineación, holguras y desgaste irregular",
        paragraphs: [
          "La alineación ajusta los ángulos con que las ruedas apoyan sobre el asfalto. Se desajusta con golpes contra bordillos, baches fuertes o al sustituir rótulas, bieletas o brazos. Su síntoma más visible, además del desvío, es el desgaste de un neumático por el borde interior o exterior.",
          "En coches con muchos kilómetros, rótulas, silentblocks y bieletas acumulan holguras. Alinear sobre piezas con juego no sirve: el ajuste no se mantiene. Por eso conviene revisar la suspensión antes de pagar una alineación.",
        ],
      },
      {
        id: "que-pedir",
        heading: "Qué pedir en el taller",
        paragraphs: [
          "Explica cuándo aparece el problema y pide que comprueben primero presiones, estado de neumáticos y holguras. Si la alineación es necesaria, solicita el informe con los valores antes y después del ajuste: es la forma de comprobar que se ha hecho.",
          "Si el desvío aparece al frenar, la revisión debe incluir pinzas, guías y latiguillos. La ITV mide la diferencia de frenado entre ruedas del mismo eje y la considera defecto cuando supera el límite del manual de inspección.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Golpe fuerte contra un bordillo seguido de volante torcido",
        action:
          "Circula con prudencia y pide revisión: puede haber una pieza de suspensión o dirección doblada.",
      },
      {
        signal: "Vibración intensa que aparece de repente",
        action:
          "Reduce la velocidad, detente en un lugar seguro y revisa visualmente ruedas y tuercas. No sigas si hay daño visible.",
      },
      {
        signal: "Dirección con holgura evidente o ruidos metálicos al girar",
        action:
          "No circules a velocidad de carretera hasta revisarla; una rótula muy gastada puede soltarse.",
      },
    ],
    safeSteps: [
      {
        title: "Mide la presión en frío",
        detail:
          "Ajusta las cuatro ruedas a la presión indicada por el fabricante para la carga habitual.",
      },
      {
        title: "Mira el desgaste",
        detail:
          "Compara el dibujo de las dos ruedas delanteras. Un borde mucho más gastado sugiere alineación incorrecta o holguras.",
      },
      {
        title: "Busca daños en los flancos",
        detail:
          "Bultos, cortes o grietas en los laterales del neumático son motivo de sustitución.",
      },
      {
        title: "Prueba en una recta llana",
        detail:
          "Comprueba el comportamiento en una vía sin pendiente lateral y sin tráfico, sin soltar el volante.",
      },
      {
        title: "Pide informe de alineación",
        detail:
          "Solicita los valores antes y después del ajuste y la revisión previa de holguras.",
      },
    ],
    workshop: {
      introduction:
        "Un buen diagnóstico separa neumáticos, frenos, suspensión y geometría antes de vender una alineación o un juego de neumáticos.",
      urgent: [
        "Vibración fuerte repentina o ruido metálico en la dirección.",
        "El coche tira con fuerza al frenar.",
        "Golpe que ha dejado una rueda visiblemente inclinada.",
      ],
      appointment: [
        "Volante torcido tras cambiar piezas o golpear un bordillo.",
        "Desgaste irregular de neumáticos.",
        "Vibración a una velocidad concreta.",
      ],
      usefulInformation: [
        "Velocidad a la que aparece la vibración.",
        "Golpes recientes y piezas cambiadas en dirección o suspensión.",
        "Presiones medidas y fecha de los neumáticos.",
      ],
    },
    faqs: [
      {
        question: "¿Cada cuánto hay que alinear el coche?",
        answer:
          "No hay un intervalo universal. Conviene comprobarla al montar neumáticos nuevos, tras un golpe fuerte, al cambiar piezas de dirección o suspensión y cuando aparece desgaste irregular.",
      },
      {
        question: "¿Es lo mismo alinear que equilibrar?",
        answer:
          "No. Alinear ajusta los ángulos de las ruedas; equilibrar compensa el reparto de peso de cada rueda para evitar vibraciones al girar.",
      },
      {
        question: "¿Por qué mi coche se va un poco a la derecha?",
        answer:
          "Las carreteras están inclinadas hacia el arcén para evacuar el agua. Un ligero desvío a la derecha puede ser normal; si es claro en una recta llana, hay que revisarlo.",
      },
      {
        question: "¿Unos neumáticos nuevos corrigen el desvío?",
        answer:
          "Solo si el origen era un neumático. Si la alineación o la suspensión están mal, los nuevos neumáticos se desgastarán igual de rápido.",
      },
    ],
    relatedSlugs: [
      "neumaticos-dot-desgaste-presion",
      "ruido-vibracion-al-frenar",
      "amortiguadores-desgaste-cuando-cambiar",
      "checklist-itv-coche-antiguo",
    ],
    sources: [sources.tyres, sources.mechanicsManual, sources.itvManual],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "embrague-patina-pedal-duro",
    category: "problemas",
    title: "Embrague que patina, pedal duro o ruidos: cómo saber si está gastado",
    seoTitle: "Embrague gastado: síntomas y cuándo cambiarlo",
    description:
      "Señales de embrague desgastado: patina, el pedal está duro o blando, hace ruido o da tirones. Cómo comprobarlo sin forzarlo y qué revisar junto al kit.",
    eyebrow: "Problemas · Transmisión",
    summary:
      "El embrague es una pieza de desgaste y en un coche de más de diez años es frecuente que esté cerca del final de su vida útil. Reconocer los síntomas a tiempo evita quedarse parado y permite planificar el gasto.",
    directAnswer:
      "El síntoma más claro es que patine: el motor sube de vueltas al acelerar en una marcha larga pero el coche apenas gana velocidad. Otros avisos son un pedal más duro o que engrana muy arriba, olor a quemado tras arrancar en pendiente, tirones al salir, ruidos al pisar el pedal o dificultad para meter marchas. Un pedal que se queda abajo o se vuelve blando suele indicar un fallo hidráulico y requiere revisión inmediata.",
    readingMinutes: 8,
    sections: [
      {
        id: "sintomas",
        heading: "Síntomas habituales de un embrague gastado",
        paragraphs: [
          "El disco de embrague tiene un material de fricción que se desgasta con cada salida, cambio de marcha y maniobra. Cuando queda poco material, el plato de presión ya no consigue transmitir todo el par del motor y aparece el patinaje, sobre todo con carga, en cuestas o al acelerar fuerte en marchas largas.",
          "No todos los síntomas son del disco. El cojinete de empuje, el plato, el volante motor o el circuito hidráulico pueden fallar por separado, y cada uno tiene su propia señal.",
        ],
        bullets: [
          "Patina: suben las revoluciones sin aumento proporcional de velocidad.",
          "El punto de embrague queda cada vez más alto en el recorrido del pedal.",
          "Olor a quemado o humo tras arrancar en pendiente o maniobrar mucho.",
          "Tirones o vibraciones al salir desde parado.",
          "Ruido al pisar o soltar el pedal, frecuente en el cojinete de empuje.",
          "Pedal duro, blando, que no vuelve o que se queda abajo.",
        ],
      },
      {
        id: "comprobar",
        heading: "Cómo comprobarlo sin dañar nada",
        paragraphs: [
          "La prueba más segura es observar durante la conducción normal: en una marcha larga, a pocas revoluciones y en una vía sin tráfico, acelera de forma progresiva. Si la aguja del cuentarrevoluciones sube de golpe y la velocidad no acompaña, el embrague patina.",
          "Evita pruebas agresivas como arrancar en marchas altas con el freno de mano puesto: calientan el embrague, pueden dañar el volante motor y no aportan un diagnóstico mejor que el que hará el taller.",
        ],
        callout: {
          tone: "caution",
          title: "Pedal que se queda abajo",
          text: "Si el pedal pierde la resistencia o no vuelve, el circuito hidráulico puede tener una fuga. En muchos coches comparte depósito con el líquido de frenos: revisa el nivel y pide asistencia.",
        },
      },
      {
        id: "volante-bimasa",
        heading: "El volante bimasa y otros elementos que conviene revisar",
        paragraphs: [
          "Muchos coches diésel y bastantes de gasolina montan volante motor bimasa, que amortigua vibraciones y también se desgasta. Golpeteos al arrancar o parar el motor, vibraciones a bajas vueltas o ruidos metálicos al ralentí pueden indicar que está al final de su vida.",
          "Como para cambiar el embrague hay que desmontar la caja de cambios, la mayor parte del coste es mano de obra. Por eso conviene preguntar por el estado del volante, el cojinete y el bombín al presupuestar el kit, en lugar de pagar dos veces la misma mano de obra.",
        ],
      },
      {
        id: "alargar-vida",
        heading: "Hábitos que alargan la vida del embrague",
        paragraphs: [
          "No apoyes el pie en el pedal mientras circulas, no mantengas el coche detenido en pendiente jugando con el embrague y pon punto muerto en esperas largas. Arranca con las revoluciones justas y suelta el pedal de forma progresiva pero sin prolongar el resbalamiento.",
          "Si el coche pasa la mayor parte del tiempo en ciudad, el desgaste será mayor que en carretera. Es un dato útil para planificar el cambio en un coche de segunda mano.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Humo u olor intenso a quemado desde el motor o la caja",
        action:
          "Detén el coche en un lugar seguro, deja que se enfríe y no fuerces nuevas salidas en pendiente.",
      },
      {
        signal: "El pedal se queda abajo o no puedes desembragar",
        action:
          "No sigas circulando. Puede ser una fuga hidráulica; pide asistencia.",
      },
      {
        signal: "Las marchas no entran o saltan solas",
        action:
          "Reduce la velocidad y lleva el coche al taller sin forzar la palanca.",
      },
    ],
    safeSteps: [
      {
        title: "Observa el punto de embrague",
        detail:
          "Si cada vez engrana más arriba en el recorrido, el disco puede estar muy gastado.",
      },
      {
        title: "Haz una prueba suave",
        detail:
          "En marcha larga y vía libre, acelera progresivamente y vigila si suben las vueltas sin ganar velocidad.",
      },
      {
        title: "Revisa el depósito hidráulico",
        detail:
          "Si el embrague es hidráulico, comprueba el nivel sin abrir el circuito y busca restos de líquido junto al pedal.",
      },
      {
        title: "Anota los ruidos",
        detail:
          "Indica si suenan al pisar, al soltar, al ralentí o al arrancar el motor.",
      },
      {
        title: "Pide presupuesto completo",
        detail:
          "Solicita que incluya disco, plato, cojinete y la valoración del volante motor y del bombín.",
      },
    ],
    workshop: {
      introduction:
        "El taller puede confirmar el desgaste con una prueba de carretera y valorar el resto del conjunto antes de desmontar la caja.",
      urgent: [
        "Pedal sin resistencia o que se queda abajo.",
        "Humo u olor a quemado persistente.",
        "Imposibilidad de meter marchas.",
      ],
      appointment: [
        "Patinaje en marchas largas o en cuestas.",
        "Punto de embrague muy alto.",
        "Ruidos o vibraciones al arrancar.",
      ],
      usefulInformation: [
        "Kilómetros del embrague actual, si se conocen.",
        "Uso habitual: ciudad, carretera, remolque o carga.",
        "Ruidos y condiciones en las que aparece cada síntoma.",
      ],
    },
    faqs: [
      {
        question: "¿Cuántos kilómetros dura un embrague?",
        answer:
          "Depende mucho del uso y del conductor. En ciudad, con remolque o con maniobras frecuentes dura bastante menos que en carretera. No existe una cifra fiable para todos los coches.",
      },
      {
        question: "¿Cuánto cuesta cambiar el embrague?",
        answer:
          "El RACE estima entre 600 y 1.000 euros con mano de obra según el coche, y más si hay que sustituir el volante bimasa. Pide siempre un presupuesto desglosado.",
      },
      {
        question: "¿Puedo seguir conduciendo si el embrague patina?",
        answer:
          "Durante poco tiempo y con suavidad, pero el patinaje genera calor y acelera el desgaste. Puede dejarte parado, sobre todo en cuestas o adelantamientos.",
      },
      {
        question: "¿Siempre hay que cambiar el volante bimasa con el embrague?",
        answer:
          "No siempre. Debe valorarse su estado con el conjunto desmontado o con las comprobaciones que indique el fabricante.",
      },
    ],
    relatedSlugs: [
      "mantenimiento-coche-10-15-20-anos",
      "coche-pierde-potencia-modo-emergencia",
      "testigos-coche-significado",
      "manchas-liquido-debajo-coche",
    ],
    sources: [sources.clutch, sources.mechanicsManual, sources.commonFailures],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "aire-acondicionado-coche-no-enfria",
    category: "problemas",
    title: "El aire acondicionado del coche no enfría: causas y qué revisar",
    seoTitle: "Aire acondicionado del coche no enfría: causas",
    description:
      "Por qué el aire acondicionado del coche no enfría o huele mal: fugas, ventilador, fusibles o filtro. Qué puedes comprobar tú y por qué recargar gas sin buscar la fuga no sirve.",
    eyebrow: "Problemas · Climatización",
    summary:
      "En un coche con años, el aire acondicionado suele perder eficacia por pequeñas fugas, suciedad o desgaste. Recargar gas cada verano sin localizar la causa es pagar varias veces por el mismo problema.",
    directAnswer:
      "Si el aire sale pero no enfría, la causa más común es la falta de refrigerante por una fuga; el sistema es cerrado y no debería perder gas con el uso. Si apenas sale aire, revisa el filtro de habitáculo y el ventilador. Si el compresor no se activa, puede haber un fusible, un relé o un sensor de presión implicado. Una recarga debe incluir vacío del circuito y prueba de estanqueidad, y la manipulación del gas está reservada a profesionales certificados.",
    readingMinutes: 7,
    sections: [
      {
        id: "sintomas",
        heading: "Distingue el síntoma antes de pagar una recarga",
        paragraphs: [
          "No es lo mismo que no salga aire, que salga poco, que salga a temperatura ambiente o que enfríe a ratos. Cada caso apunta a una parte del sistema: ventilación, circuito de refrigerante, mando eléctrico o trampillas de mezcla.",
          "Con el motor en marcha y el aire acondicionado activado, es habitual oír un clic en el vano motor cuando se conecta el compresor y ver que el ventilador del radiador funciona. Si nada de eso ocurre, el problema puede ser eléctrico.",
        ],
        bullets: [
          "No sale aire o sale muy poco: filtro de habitáculo obstruido o ventilador averiado.",
          "Sale aire a temperatura ambiente: falta de refrigerante, compresor o embrague del compresor.",
          "Enfría a ratos: condensador sucio, ventilador del radiador, exceso o defecto de carga.",
          "Sale frío por un lado y caliente por otro: trampilla de mezcla o su motor eléctrico.",
          "Mal olor: humedad y suciedad en el evaporador o tubo de condensación obstruido.",
        ],
      },
      {
        id: "comprobaciones",
        heading: "Comprobaciones que puedes hacer sin herramientas especiales",
        paragraphs: [
          "Mira si el condensador, situado delante del radiador, está tapado por hojas, insectos o suciedad, y si el ventilador del radiador gira al activar el aire. Revisa en el manual dónde está el filtro de habitáculo y cuándo se cambió por última vez; muchos fabricantes recomiendan sustituirlo con frecuencia anual.",
          "Es normal que el coche gotee agua limpia bajo la zona del habitáculo tras usar el aire: es la condensación. Si no gotea nunca y el interior huele a humedad, el tubo de drenaje puede estar obstruido.",
        ],
        callout: {
          tone: "info",
          title: "Usa el aire también en invierno",
          text: "Activarlo de vez en cuando, por ejemplo para desempañar, mantiene lubricadas las juntas del compresor y ayuda a detectar fallos antes del verano.",
        },
      },
      {
        id: "recarga",
        heading: "Recargar gas: cuándo tiene sentido",
        paragraphs: [
          "El circuito de aire acondicionado es cerrado. Si falta gas, es porque hay una fuga. Una recarga correcta incluye recuperar el gas existente, hacer vacío, comprobar que el circuito mantiene la estanqueidad, cargar la cantidad exacta indicada por el fabricante y, si es posible, añadir trazador para localizar fugas.",
          "Los gases refrigerantes fluorados están regulados y su manipulación requiere profesionales y equipos certificados. Los kits de recarga domésticos no permiten medir la carga correcta y pueden dañar el compresor por exceso de presión.",
        ],
        callout: {
          tone: "caution",
          title: "Comprueba el tipo de gas",
          text: "Los coches más antiguos suelen usar R134a y los más modernos R1234yf. La etiqueta del vano motor indica el tipo y la cantidad; no se deben mezclar.",
        },
      },
      {
        id: "olores",
        heading: "Malos olores: limpiar, no tapar",
        paragraphs: [
          "El olor a humedad procede de bacterias y hongos que crecen en el evaporador. Sustituir el filtro de habitáculo y aplicar un higienizante específico en el circuito resuelve la mayoría de los casos; un ambientador solo disimula el problema.",
          "Para reducir la humedad, apaga el aire acondicionado unos minutos antes de llegar y deja el ventilador funcionando para secar el evaporador.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Olor dulce dentro del habitáculo o cristales que se empañan con película grasa",
        action:
          "Puede ser una fuga de refrigerante del motor por el radiador de calefacción. Vigila la temperatura y pide revisión.",
      },
      {
        signal: "Ruido fuerte o chirrido al conectar el aire acondicionado",
        action:
          "Desconéctalo y pide revisión: el compresor o su correa pueden estar fallando.",
      },
      {
        signal: "La temperatura del motor sube al usar el aire",
        action:
          "Apágalo, vigila el indicador y revisa ventilador y refrigerante antes de seguir.",
      },
    ],
    safeSteps: [
      {
        title: "Describe el síntoma",
        detail:
          "Anota si no sale aire, si sale templado o si enfría a ratos, y desde cuándo ocurre.",
      },
      {
        title: "Revisa el filtro de habitáculo",
        detail:
          "Comprueba cuándo se cambió. Un filtro saturado reduce el caudal y provoca olores.",
      },
      {
        title: "Mira el condensador",
        detail:
          "Con el motor apagado y frío, comprueba si está obstruido por suciedad.",
      },
      {
        title: "Comprueba que el compresor se activa",
        detail:
          "Con el motor en marcha, escucha el clic al encender el aire. No toques correas ni ventiladores.",
      },
      {
        title: "Pide prueba de estanqueidad",
        detail:
          "Si falta gas, solicita que localicen la fuga antes o durante la recarga.",
      },
    ],
    workshop: {
      introduction:
        "Un taller con equipo de climatización puede medir presiones, recuperar y pesar el gas y localizar fugas con trazador o detector.",
      urgent: [
        "Ruido fuerte del compresor o correa que patina.",
        "La temperatura del motor sube con el aire activado.",
        "Olor a refrigerante del motor dentro del coche.",
      ],
      appointment: [
        "El aire sale templado.",
        "Necesitaste recargar gas el año anterior.",
        "Mal olor persistente al encender la climatización.",
      ],
      usefulInformation: [
        "Fecha y cantidad de la última recarga.",
        "Tipo de gas indicado en la etiqueta del vano motor.",
        "Si el fallo es constante o solo con calor extremo o en atascos.",
      ],
    },
    faqs: [
      {
        question: "¿Hay que recargar el aire acondicionado cada año?",
        answer:
          "No. Si el sistema está sano, no pierde gas. Necesitar recargas periódicas indica una fuga que conviene reparar.",
      },
      {
        question: "¿Puedo recargar el gas yo mismo?",
        answer:
          "La manipulación de gases fluorados está regulada y reservada a profesionales certificados. Además, sin equipo no se puede medir la carga correcta.",
      },
      {
        question: "¿El aire acondicionado aumenta el consumo?",
        answer:
          "Sí, porque el compresor toma energía del motor. Aun así, a velocidad de carretera con ventanillas cerradas suele ser preferible a circular con ellas abiertas.",
      },
      {
        question: "¿Por qué gotea agua debajo del coche?",
        answer:
          "Es la condensación del evaporador y es normal tras usar el aire. Debe ser agua limpia, sin olor ni color.",
      },
    ],
    relatedSlugs: [
      "manchas-liquido-debajo-coche",
      "liquido-refrigerante-anticongelante",
      "motor-sobrecalentado-que-hacer",
      "mantenimiento-coche-10-15-20-anos",
    ],
    sources: [sources.airConditioning, sources.fluorinatedGases, sources.mechanicsManual],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "manchas-liquido-debajo-coche",
    category: "problemas",
    title: "Manchas debajo del coche: qué líquido pierde según el color",
    seoTitle: "Mancha debajo del coche: qué líquido es por color",
    description:
      "Cómo identificar una fuga por el color, el olor y la posición de la mancha: agua, aceite, refrigerante, líquido de frenos, transmisión o combustible. Cuándo no circular.",
    eyebrow: "Problemas · Fugas",
    summary:
      "Una mancha en el suelo del garaje puede ser simple agua del aire acondicionado o el primer aviso de una fuga de frenos. Color, olor, textura y posición permiten hacerse una idea antes de ir al taller.",
    directAnswer:
      "Coloca un cartón blanco bajo el coche durante una noche. Agua transparente sin olor bajo el habitáculo suele ser condensación del aire acondicionado. Marrón o negro y aceitoso bajo el motor apunta a aceite. Verde, rosa, naranja o azul con olor dulce suele ser refrigerante. Rojo o rosado aceitoso puede ser transmisión automática o dirección asistida. Transparente o amarillento cerca de una rueda puede ser líquido de frenos. Olor a combustible exige no arrancar y pedir asistencia.",
    readingMinutes: 7,
    sections: [
      {
        id: "carton-blanco",
        heading: "La prueba del cartón blanco",
        paragraphs: [
          "Con el coche aparcado en llano y el motor frío, coloca un cartón o papel blanco grande debajo del vano motor y de la zona central. A la mañana siguiente, la posición de las gotas respecto al coche y su color sobre fondo blanco aportan mucha información.",
          "Haz una foto del cartón con el coche todavía encima, para que se vea la posición, y otra de cerca. Le ahorrará tiempo al taller.",
        ],
        bullets: [
          "Delante, bajo el motor: aceite, refrigerante o dirección asistida.",
          "Bajo el salpicadero o centro del coche: condensación del aire acondicionado o caja de cambios.",
          "Junto a una rueda: líquido de frenos o amortiguador.",
          "Parte trasera: combustible, diferencial o escape (agua de condensación).",
        ],
      },
      {
        id: "colores",
        heading: "Qué suele ser cada color",
        paragraphs: [
          "Los colores son una orientación, no una regla: los fabricantes usan tintes distintos y los líquidos cambian de color con el uso y la suciedad. Combina color con olor y textura.",
          "El líquido de frenos y el combustible requieren especial atención por seguridad. El refrigerante es tóxico y de sabor dulce, peligroso para niños y animales.",
        ],
        bullets: [
          "Transparente, sin olor, como agua: condensación del aire acondicionado o del escape. Normal.",
          "Ámbar, marrón o negro, aceitoso: aceite de motor.",
          "Verde, rosa, naranja o azul, con olor dulce: refrigerante.",
          "Rojo o rosado, aceitoso: transmisión automática o dirección asistida en algunos modelos.",
          "Transparente o amarillento, resbaladizo, cerca de una rueda: líquido de frenos.",
          "Azul muy líquido, con olor a alcohol: líquido limpiaparabrisas.",
          "Olor fuerte a gasolina o gasóleo: combustible.",
        ],
      },
      {
        id: "gravedad",
        heading: "Cuándo es urgente y cuándo puede esperar",
        paragraphs: [
          "Unas gotas de aceite que dejan una mancha pequeña tras varios días pueden esperar a una cita, siempre que vigiles el nivel con la varilla. Un charco que crece en una noche, cualquier fuga de líquido de frenos o de combustible y un nivel de refrigerante que baja rápido no deben esperar.",
          "La ITV considera defecto las pérdidas de líquidos, y las fugas importantes de aceite, combustible o frenos pueden suponer un resultado desfavorable o negativo.",
        ],
        callout: {
          tone: "important",
          title: "Combustible o frenos: no arranques",
          text: "Si huele a combustible o sospechas de fuga en los frenos, no arranques el motor. Pide asistencia en carretera.",
        },
      },
      {
        id: "despues",
        heading: "Después de identificarla",
        paragraphs: [
          "Comprueba los niveles en frío: aceite con la varilla, refrigerante en el vaso de expansión, frenos y dirección en sus depósitos. Un nivel que baja confirma la fuga; si los niveles se mantienen, la mancha puede venir de otro vehículo o ser condensación.",
          "No rellenes una y otra vez sin buscar el origen. Una pequeña fuga de refrigerante puede acabar en sobrecalentamiento y una de aceite en daño grave del motor.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Olor a combustible o gotas bajo el depósito o el motor",
        action:
          "No arranques, no fumes ni uses llamas cerca y pide asistencia.",
      },
      {
        signal: "Fuga junto a una rueda con pedal de freno más blando",
        action:
          "No circules. Puede ser una fuga del circuito de frenos.",
      },
      {
        signal: "Charco grande que aparece en poco tiempo",
        action:
          "Comprueba niveles y no circules si alguno está por debajo del mínimo.",
      },
      {
        signal: "Testigo de presión de aceite o de temperatura encendido",
        action:
          "Detén el motor en un lugar seguro y no continúes la marcha.",
      },
    ],
    safeSteps: [
      {
        title: "Pon un cartón blanco",
        detail:
          "Déjalo una noche bajo el coche aparcado en llano y con el motor frío.",
      },
      {
        title: "Fotografía la posición",
        detail:
          "Haz fotos con el coche encima y luego de cerca para mostrar color y tamaño.",
      },
      {
        title: "Huele y toca con guantes",
        detail:
          "Olor dulce, a combustible o a aceite ayuda a identificarla. No pruebes ni inhales directamente.",
      },
      {
        title: "Comprueba los niveles",
        detail:
          "En frío y en llano, revisa aceite, refrigerante, frenos y dirección.",
      },
      {
        title: "Limpia y vuelve a mirar",
        detail:
          "Limpiar el suelo permite saber si la fuga continúa y a qué ritmo.",
      },
    ],
    workshop: {
      introduction:
        "El taller puede limpiar la zona, añadir trazador si es necesario y localizar el punto exacto de la fuga antes de sustituir piezas.",
      urgent: [
        "Fuga de combustible o de líquido de frenos.",
        "Nivel de aceite o refrigerante por debajo del mínimo.",
        "Testigo rojo encendido.",
      ],
      appointment: [
        "Gotas de aceite persistentes.",
        "Necesidad de rellenar refrigerante con frecuencia.",
        "Manchas rojizas bajo la caja de cambios.",
      ],
      usefulInformation: [
        "Fotos del cartón con la posición de la mancha.",
        "Cuánto has rellenado y cada cuánto tiempo.",
        "Si la fuga aparece con el motor frío, caliente o tras circular.",
      ],
    },
    faqs: [
      {
        question: "¿Es normal que el coche gotee agua?",
        answer:
          "Sí, si es agua transparente y sin olor tras usar el aire acondicionado o en días fríos por el escape. Es condensación.",
      },
      {
        question: "¿Puedo pasar la ITV con una fuga de aceite?",
        answer:
          "Una ligera humedad puede no ser defecto, pero una pérdida con goteo sí lo es y puede dar un resultado desfavorable. Conviene repararla antes.",
      },
      {
        question: "¿Cuánto aceite es normal que gaste un coche viejo?",
        answer:
          "El fabricante indica el consumo admisible. Si necesitas rellenar a menudo y hay manchas en el suelo, probablemente hay una fuga además del consumo.",
      },
      {
        question: "¿El refrigerante es peligroso?",
        answer:
          "Sí. Suele contener glicoles tóxicos de sabor dulce. Limpia las manchas y evita que niños o animales lo toquen.",
      },
    ],
    relatedSlugs: [
      "aceite-motor-nivel-consumo-cambio",
      "liquido-refrigerante-anticongelante",
      "revisar-frenos-liquido-pastillas-discos",
      "motor-sobrecalentado-que-hacer",
    ],
    sources: [sources.mechanicsManual, sources.roadsideReview, sources.itvManual],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "coche-pierde-potencia-modo-emergencia",
    category: "problemas",
    title: "El coche pierde potencia o entra en modo emergencia: qué hacer",
    seoTitle: "El coche pierde potencia: modo emergencia y causas",
    description:
      "Qué significa que el coche entre en modo degradado o pierda fuerza al acelerar, causas habituales en coches antiguos (turbo, EGR, filtro de partículas, combustible) y cómo actuar con seguridad.",
    eyebrow: "Problemas · Motor",
    summary:
      "El modo emergencia es una protección: la centralita limita potencia y revoluciones para evitar daños mayores cuando detecta un fallo. Permite llegar a un lugar seguro, pero no es una forma de seguir circulando.",
    directAnswer:
      "Si el coche deja de acelerar con normalidad y se enciende el testigo de motor, prioriza la seguridad: señaliza, sal de la vía si es posible y no fuerces adelantamientos. Apagar y arrancar puede devolver la potencia temporalmente, pero el fallo quedará registrado. En diésel con años, las causas frecuentes son fugas de presión del turbo, válvula EGR sucia, filtro de partículas saturado o sensores; en gasolina, encendido, admisión o combustible. Una lectura OBD2 orienta, pero el diagnóstico requiere mediciones.",
    readingMinutes: 8,
    sections: [
      {
        id: "que-es",
        heading: "Qué es el modo emergencia",
        paragraphs: [
          "Cuando la gestión electrónica detecta un valor fuera de rango (presión de turbo, temperatura, sensor, emisiones), puede activar un modo de funcionamiento degradado. El coche limita la potencia, las revoluciones o el uso de ciertos sistemas para proteger el motor y permitir llegar a un lugar seguro.",
          "Suele acompañarse del testigo de gestión del motor, de un mensaje en el cuadro o del testigo de precalentamiento parpadeando en algunos diésel. No todos los coches lo avisan igual: el manual indica el significado de cada indicador.",
        ],
      },
      {
        id: "actuar",
        heading: "Cómo actuar en ese momento",
        paragraphs: [
          "Mantén una velocidad adecuada a la potencia disponible, evita incorporaciones y adelantamientos y busca una salida o área de servicio. Si el coche apenas acelera en una vía rápida, sitúate en el arcén con la señalización reglamentaria.",
          "Con el coche detenido, observa si hay testigos rojos, humo, olor a quemado o ruido anormal. Si alguno aparece, no reanudes la marcha. Si solo hay pérdida de potencia y testigo ámbar, puedes valorar continuar con prudencia hasta un taller cercano.",
        ],
        callout: {
          tone: "important",
          title: "Testigo de motor parpadeando",
          text: "Si el testigo de motor parpadea y el motor tiembla, suele indicar fallos de combustión que pueden dañar el catalizador. Reduce la carga y detente lo antes posible.",
        },
      },
      {
        id: "causas",
        heading: "Causas frecuentes en coches con muchos kilómetros",
        paragraphs: [
          "En motores turbo, un manguito de admisión agrietado o suelto deja escapar presión y el sistema detecta sobrealimentación insuficiente. La válvula EGR y el colector de admisión acumulan carbonilla, especialmente con uso urbano. El filtro de partículas puede saturarse si no completa regeneraciones.",
          "También son habituales filtros de combustible o aire sucios, caudalímetros o sensores de presión defectuosos, inyectores con desgaste y fallos de encendido en gasolina. Muchos de estos problemas dejan códigos de avería que pueden leerse con un lector OBD2.",
        ],
        bullets: [
          "Silbido o soplido al acelerar: posible fuga de presión del turbo.",
          "Humo negro y pérdida de fuerza: exceso de combustible o falta de aire.",
          "Testigo del filtro de partículas: regeneración pendiente o filtro saturado.",
          "Tirones a bajas vueltas: EGR, inyección o encendido.",
        ],
      },
      {
        id: "despues",
        heading: "Después: leer averías y no borrar sin anotar",
        paragraphs: [
          "Un lector OBD2 permite consultar los códigos almacenados. Anótalos con su descripción antes de borrar nada: borrar quita la pista al taller y el fallo volverá si la causa sigue presente.",
          "Un código indica qué valor detectó la centralita, no siempre qué pieza falla. Por ejemplo, un código de presión de turbo insuficiente puede deberse a un manguito roto, no al turbo.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Pérdida de potencia con humo abundante u olor a quemado",
        action:
          "Detén el coche en un lugar seguro, apaga el motor y pide asistencia.",
      },
      {
        signal: "Testigo rojo de temperatura o presión de aceite",
        action:
          "Para y apaga el motor. No continúes la marcha.",
      },
      {
        signal: "El coche no supera una velocidad mínima segura en vía rápida",
        action:
          "Sal de la vía o detente en el arcén señalizando, y solicita asistencia.",
      },
    ],
    safeSteps: [
      {
        title: "Prioriza la seguridad",
        detail:
          "Evita maniobras que necesiten potencia y busca un lugar seguro para detenerte.",
      },
      {
        title: "Observa los testigos",
        detail:
          "Anota color y si parpadean. Un rojo implica detenerse.",
      },
      {
        title: "Revisa lo visible",
        detail:
          "Con el motor frío, busca manguitos sueltos o con aceite y conectores desenchufados, sin desmontar.",
      },
      {
        title: "Lee los códigos",
        detail:
          "Con un lector OBD2, anota códigos y datos antes de borrar.",
      },
      {
        title: "Acude al taller",
        detail:
          "Lleva los códigos y la descripción de cuándo apareció el fallo.",
      },
    ],
    workshop: {
      introduction:
        "El diagnóstico debe incluir lectura de códigos, datos en vivo y comprobaciones físicas antes de sustituir piezas costosas como turbo, inyectores o filtro de partículas.",
      urgent: [
        "Humo abundante, ruido metálico o olor a quemado.",
        "Testigo rojo o testigo de motor parpadeando.",
        "Pérdida de potencia severa que impide circular con seguridad.",
      ],
      appointment: [
        "Modo emergencia que desaparece tras reiniciar.",
        "Testigo de motor fijo con pérdida leve de fuerza.",
        "Testigo del filtro de partículas recurrente.",
      ],
      usefulInformation: [
        "Códigos OBD2 anotados.",
        "Condiciones: frío o caliente, subida, velocidad, marcha.",
        "Mantenimiento reciente de filtros, aceite e inyección.",
      ],
    },
    faqs: [
      {
        question: "¿Puedo seguir conduciendo en modo emergencia?",
        answer:
          "Está pensado para llegar a un lugar seguro o a un taller cercano, no para circular con normalidad. Si hay testigos rojos o síntomas graves, no continúes.",
      },
      {
        question: "¿Por qué al apagar y encender vuelve la potencia?",
        answer:
          "El reinicio vuelve a evaluar los sensores. Si el fallo es intermitente, el coche funciona un tiempo, pero la avería sigue registrada y puede repetirse.",
      },
      {
        question: "¿Un lector OBD2 me dice qué pieza cambiar?",
        answer:
          "No exactamente. Indica qué detectó la centralita. Hay que comprobar la causa con mediciones antes de sustituir piezas.",
      },
      {
        question: "¿Los aditivos limpian la EGR o el turbo?",
        answer:
          "Pueden ayudar en casos leves según el producto, pero no sustituyen al diagnóstico ni reparan fugas, sensores o piezas dañadas.",
      },
    ],
    relatedSlugs: [
      "filtro-particulas-dpf-egr-diesel",
      "testigos-coche-significado",
      "como-elegir-lector-obd2",
      "humo-blanco-azul-negro-escape",
    ],
    sources: [sources.emergencyMode, sources.warningLights, sources.mechanicsManual],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "filtro-particulas-dpf-egr-diesel",
    category: "mantenimiento",
    title: "Filtro de partículas y válvula EGR en un diésel antiguo: cómo cuidarlos",
    seoTitle: "Filtro de partículas (DPF) y EGR: cuidados y averías",
    description:
      "Cómo funciona la regeneración del filtro de partículas, por qué se obstruye con uso urbano, qué hacer si se enciende el testigo y cómo evitar averías de la válvula EGR.",
    eyebrow: "Mantenimiento · Diésel",
    summary:
      "El filtro de partículas y la válvula EGR reducen emisiones en los diésel, pero sufren con trayectos cortos y uso urbano. Entender cómo se limpian evita averías caras y sustituciones innecesarias.",
    directAnswer:
      "El filtro de partículas (DPF o FAP) retiene el hollín y lo quema periódicamente en un proceso llamado regeneración, que necesita temperatura y suele completarse en trayectos de carretera. Si el coche solo hace recorridos cortos, el filtro se llena. Si se enciende su testigo, en general hay que circular por vía rápida durante un rato a régimen constante para permitir la regeneración; si el testigo sigue encendido o parpadea, hay que ir al taller. La EGR acumula carbonilla con el uso urbano y su limpieza o sustitución debe decidirse tras diagnóstico.",
    readingMinutes: 9,
    sections: [
      {
        id: "como-funciona",
        heading: "Cómo funciona el filtro de partículas",
        paragraphs: [
          "El filtro retiene las partículas de hollín de los gases de escape. Cuando sensores de presión diferencial detectan que está lleno, la gestión del motor modifica la inyección para elevar la temperatura del escape y quemar el hollín. Algunos sistemas usan además un aditivo que se dosifica desde un depósito y reduce la temperatura necesaria.",
          "Según la documentación técnica de HELLA, la regeneración suele producirse cada 400 a 800 kilómetros y se favorece con trayectos de autopista o autovía. La ceniza que queda tras quemar el hollín no se elimina y se acumula con el tiempo; cuando el filtro está lleno de ceniza hay que limpiarlo o sustituirlo.",
        ],
      },
      {
        id: "uso-urbano",
        heading: "Por qué se obstruye con trayectos cortos",
        paragraphs: [
          "En recorridos de pocos kilómetros el escape no alcanza la temperatura necesaria y la regeneración se interrumpe. Si se interrumpe repetidamente, el hollín se acumula y el coche puede entrar en modo emergencia. Además, las regeneraciones incompletas pueden diluir combustible en el aceite, lo que eleva el nivel en la varilla y degrada la lubricación.",
          "Si tu diésel hace sobre todo trayectos urbanos, conviene incluir con regularidad un recorrido por vía rápida y vigilar el nivel de aceite. Si el uso va a seguir siendo urbano, es un dato importante al decidir el próximo coche.",
        ],
        callout: {
          tone: "caution",
          title: "No interrumpas una regeneración",
          text: "Algunos coches indican la regeneración con un testigo o con el ventilador funcionando tras apagar. HELLA advierte de que interrumpir el proceso repetidamente puede causar daños graves.",
        },
      },
      {
        id: "egr",
        heading: "La válvula EGR",
        paragraphs: [
          "La EGR recircula parte de los gases de escape hacia la admisión para reducir óxidos de nitrógeno. Con el tiempo, el hollín y los vapores de aceite forman carbonilla que puede dejar la válvula atascada abierta o cerrada.",
          "Los síntomas típicos son tirones a bajas vueltas, ralentí inestable, humo negro, pérdida de potencia y testigo de motor. Anular la EGR o retirar el filtro de partículas no es legal en vías públicas: altera las emisiones homologadas y la ITV comprueba la presencia de estos sistemas y los códigos de avería.",
        ],
        callout: {
          tone: "important",
          title: "Anulaciones y vaciados",
          text: "Eliminar el DPF o anular la EGR modifica el vehículo respecto a su homologación. Puede suponer un resultado desfavorable en la ITV y sanciones.",
        },
      },
      {
        id: "mantenimiento",
        heading: "Mantenimiento que ayuda",
        paragraphs: [
          "Usa el aceite con la especificación exacta del fabricante: los diésel con filtro de partículas suelen requerir aceites de baja ceniza. Respeta los cambios de filtros de aire y combustible y no ignores un testigo de motor encendido.",
          "En sistemas con aditivo, el depósito debe reponerse según el plan de mantenimiento. Cuando el filtro alcanza su límite, existen limpiezas profesionales; antes de sustituirlo, pide que comprueben sensores, presión diferencial y causa de la saturación.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Testigo del filtro de partículas parpadeando o fijo tras un trayecto largo",
        action:
          "Acude al taller: la regeneración no puede completarse por sí sola.",
      },
      {
        signal: "Nivel de aceite por encima del máximo",
        action:
          "Puede haber dilución de combustible. No sigas circulando largas distancias y pide revisión.",
      },
      {
        signal: "Modo emergencia con humo abundante",
        action:
          "Detén el coche en un lugar seguro y pide asistencia.",
      },
    ],
    safeSteps: [
      {
        title: "Conoce tu sistema",
        detail:
          "Consulta en el manual si tu coche tiene filtro de partículas y si usa aditivo.",
      },
      {
        title: "Haz trayectos de carretera",
        detail:
          "Incluye con regularidad recorridos por vía rápida a régimen constante.",
      },
      {
        title: "Vigila el aceite",
        detail:
          "Comprueba el nivel con frecuencia; si sube, informa al taller.",
      },
      {
        title: "Usa el aceite correcto",
        detail:
          "Respeta la norma de aceite del fabricante para motores con filtro de partículas.",
      },
      {
        title: "No ignores testigos",
        detail:
          "Un testigo de motor o de DPF persistente necesita diagnóstico.",
      },
    ],
    workshop: {
      introduction:
        "Antes de limpiar o sustituir el filtro, el taller debe comprobar por qué se satura: sensores, EGR, inyectores, turbo o tipo de uso.",
      urgent: [
        "Testigo del filtro parpadeando.",
        "Modo emergencia persistente.",
        "Nivel de aceite por encima del máximo.",
      ],
      appointment: [
        "Regeneraciones muy frecuentes.",
        "Tirones a bajas vueltas o ralentí inestable.",
        "Consumo de combustible en aumento.",
      ],
      usefulInformation: [
        "Tipo de uso y longitud de los trayectos habituales.",
        "Códigos de avería leídos.",
        "Fecha del último cambio de aceite y especificación usada.",
      ],
    },
    faqs: [
      {
        question: "¿Cómo sé si mi coche está regenerando?",
        answer:
          "Algunos lo indican en el cuadro. Otros señales son ralentí algo más alto, ventilador funcionando tras apagar u olor caliente. El manual indica cómo lo muestra tu modelo.",
      },
      {
        question: "¿Se puede quitar el filtro de partículas?",
        answer:
          "No para circular legalmente. Altera las emisiones homologadas y puede suponer un resultado desfavorable en la ITV.",
      },
      {
        question: "¿Cada cuánto se cambia el filtro de partículas?",
        answer:
          "No tiene un intervalo fijo para todos. Depende del uso, la ceniza acumulada y el fabricante. Algunos sistemas indican cuándo está al límite.",
      },
      {
        question: "¿Un diésel es mala opción para ciudad?",
        answer:
          "Con filtro de partículas y uso exclusivamente urbano, tiene más riesgo de problemas de regeneración. Depende de los kilómetros y del tipo de trayecto.",
      },
    ],
    relatedSlugs: [
      "coche-pierde-potencia-modo-emergencia",
      "aceite-motor-nivel-consumo-cambio",
      "humo-blanco-azul-negro-escape",
      "etiqueta-ambiental-coche-antiguo",
    ],
    sources: [sources.dpf, sources.mechanicsManual, sources.itvManual],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "liquido-refrigerante-anticongelante",
    category: "mantenimiento",
    title: "Líquido refrigerante: cómo revisar el nivel, cuándo cambiarlo y qué tipo usar",
    seoTitle: "Líquido refrigerante: nivel, cambio y tipo correcto",
    description:
      "Cómo comprobar el refrigerante sin riesgo, por qué baja el nivel, cada cuánto se cambia, si se pueden mezclar colores y qué pasa si se usa agua.",
    eyebrow: "Mantenimiento · Refrigeración",
    summary:
      "El refrigerante evita que el motor se sobrecaliente, que se congele en invierno y que el circuito se oxide. En coches con años, revisarlo es una de las comprobaciones caseras más útiles.",
    directAnswer:
      "Comprueba el nivel con el motor frío en el vaso de expansión: debe estar entre las marcas mínima y máxima. Nunca abras el tapón en caliente. Usa el tipo de refrigerante que especifica el fabricante, no te guíes solo por el color, y no lo sustituyas por agua salvo emergencia. El cambio completo se hace según el plan de mantenimiento, por tiempo o kilómetros, porque los aditivos anticorrosión se agotan aunque el nivel sea correcto.",
    readingMinutes: 7,
    sections: [
      {
        id: "comprobar-nivel",
        heading: "Cómo comprobar el nivel con seguridad",
        paragraphs: [
          "Con el coche en llano y el motor frío, localiza el vaso de expansión, un depósito translúcido con marcas de mínimo y máximo. El nivel debe estar entre ambas. Si está por debajo del mínimo, rellena con el refrigerante adecuado hasta la marca, no por encima.",
          "El circuito trabaja con presión y temperatura elevadas. Abrir el tapón en caliente puede provocar una salida violenta de líquido hirviendo y quemaduras graves.",
        ],
        callout: {
          tone: "important",
          title: "Nunca en caliente",
          text: "Espera a que el motor esté frío antes de abrir el tapón del vaso de expansión o del radiador.",
        },
      },
      {
        id: "por-que-baja",
        heading: "Por qué baja el nivel",
        paragraphs: [
          "Un circuito de refrigeración sano no debería perder líquido de forma apreciable. Si tienes que rellenar a menudo, hay una fuga externa (manguitos, radiador, bomba de agua, tapón) o interna. Busca manchas bajo el coche, restos de cristales blanquecinos en manguitos y olor dulce tras circular.",
          "Una pérdida interna, como una junta de culata dañada, puede manifestarse con humo blanco abundante y olor dulce por el escape, burbujas en el vaso de expansión, aceite con aspecto lechoso o sobrecalentamiento repetido.",
        ],
        bullets: [
          "Manchas verdes, rosas, naranjas o azules bajo el motor.",
          "Restos secos alrededor de abrazaderas o del radiador.",
          "Calefacción que no calienta o que va y viene.",
          "Testigo de nivel o de temperatura encendido.",
        ],
      },
      {
        id: "tipo",
        heading: "Qué refrigerante usar y si se pueden mezclar",
        paragraphs: [
          "Los refrigerantes se diferencian por su tecnología de aditivos (inorgánicos, orgánicos o híbridos) y por la norma del fabricante. El color es un tinte y no garantiza compatibilidad: dos líquidos del mismo color pueden ser incompatibles. Busca en el envase la especificación que indica el manual.",
          "Mezclar tipos incompatibles puede reducir la protección contra la corrosión o formar depósitos. En una emergencia, rellenar con agua permite llegar a un taller, pero diluye la protección anticongelante y anticorrosión, así que conviene corregir la mezcla después.",
        ],
      },
      {
        id: "cambio",
        heading: "Cuándo cambiarlo",
        paragraphs: [
          "El refrigerante pierde con el tiempo sus aditivos anticorrosión. Por eso el fabricante fija su sustitución por años o kilómetros, aunque el nivel sea correcto. En un coche de segunda mano sin historial, es razonable pedir que se compruebe su estado y su punto de congelación.",
          "El cambio requiere vaciar, a veces lavar el circuito, rellenar y purgar el aire. Una purga incorrecta deja bolsas de aire que provocan sobrecalentamiento, por eso es un trabajo que conviene dejar al taller si no tienes experiencia.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Aguja de temperatura en zona roja o testigo de temperatura",
        action:
          "Detén el coche en un lugar seguro y apaga el motor. No abras el tapón en caliente.",
      },
      {
        signal: "Humo blanco abundante con olor dulce por el escape",
        action:
          "Puede haber una fuga interna. No sigas circulando y pide revisión.",
      },
      {
        signal: "Aceite con aspecto de mayonesa en la varilla o el tapón",
        action:
          "Puede indicar mezcla de refrigerante y aceite. No arranques y consulta al taller.",
      },
    ],
    safeSteps: [
      {
        title: "Espera a que esté frío",
        detail:
          "Revisa el nivel con el motor frío y el coche en llano.",
      },
      {
        title: "Compara con las marcas",
        detail:
          "El nivel debe estar entre mínimo y máximo del vaso de expansión.",
      },
      {
        title: "Usa la especificación correcta",
        detail:
          "Compra el refrigerante que cumple la norma del manual, no solo por color.",
      },
      {
        title: "Anota cuánto rellenas",
        detail:
          "Si tienes que rellenar con frecuencia, hay una fuga que localizar.",
      },
      {
        title: "Programa el cambio",
        detail:
          "Revisa en el plan de mantenimiento cuándo toca sustituirlo.",
      },
    ],
    workshop: {
      introduction:
        "El taller puede medir la protección anticongelante, hacer una prueba de presión del circuito y comprobar si hay gases de combustión en el refrigerante.",
      urgent: [
        "Sobrecalentamiento o testigo rojo de temperatura.",
        "Humo blanco abundante con olor dulce.",
        "Aceite contaminado con refrigerante.",
      ],
      appointment: [
        "Necesidad de rellenar con frecuencia.",
        "Refrigerante sin cambiar dentro del plazo.",
        "Calefacción irregular.",
      ],
      usefulInformation: [
        "Cuánto has rellenado y en cuánto tiempo.",
        "Tipo de refrigerante usado.",
        "Si aparecen manchas en el suelo.",
      ],
    },
    faqs: [
      {
        question: "¿Puedo echar agua en lugar de refrigerante?",
        answer:
          "Solo como solución de emergencia para llegar al taller. El agua no protege contra congelación ni corrosión y puede dejar depósitos.",
      },
      {
        question: "¿Se pueden mezclar refrigerantes de distinto color?",
        answer:
          "El color no garantiza compatibilidad. Usa el que cumple la especificación del fabricante y evita mezclar tecnologías distintas.",
      },
      {
        question: "¿Es normal que el nivel baje un poco?",
        answer:
          "El nivel varía con la temperatura, pero no debería bajar de forma progresiva. Si hay que rellenar, conviene buscar la causa.",
      },
      {
        question: "¿Cada cuánto se cambia el refrigerante?",
        answer:
          "Lo indica el plan de mantenimiento del fabricante, normalmente por tiempo o kilómetros. Varía mucho entre marcas y tipos de líquido.",
      },
    ],
    relatedSlugs: [
      "motor-sobrecalentado-que-hacer",
      "manchas-liquido-debajo-coche",
      "aire-acondicionado-coche-no-enfria",
      "mantenimiento-coche-10-15-20-anos",
    ],
    sources: [sources.mechanicsManual, sources.roadsideReview, sources.commonFailures],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "amortiguadores-desgaste-cuando-cambiar",
    category: "mantenimiento",
    title: "Amortiguadores gastados: síntomas, revisión y cuándo cambiarlos",
    seoTitle: "Amortiguadores gastados: síntomas y cuándo cambiar",
    description:
      "Cómo saber si los amortiguadores están gastados, qué comprueba la ITV, por qué afectan a la frenada y por qué se cambian por ejes.",
    eyebrow: "Mantenimiento · Suspensión",
    summary:
      "Los amortiguadores pierden eficacia de forma gradual y el conductor se acostumbra. En un coche con años y muchos kilómetros, es habitual que estén gastados sin que nadie lo haya notado.",
    directAnswer:
      "Sospecha de los amortiguadores si el coche rebota tras un bache, balancea en curvas, hunde el morro al frenar, se mueve con el viento lateral o desgasta los neumáticos de forma irregular. Una fuga de aceite visible en el cuerpo del amortiguador es un defecto. La ITV los comprueba en banco y visualmente. Se sustituyen por parejas en el mismo eje, y conviene revisar a la vez copelas, topes y guardapolvos.",
    readingMinutes: 7,
    sections: [
      {
        id: "funcion",
        heading: "Para qué sirven y por qué importan",
        paragraphs: [
          "El amortiguador controla el movimiento del muelle para que la rueda se mantenga en contacto con el suelo. Si pierde eficacia, la rueda rebota y pierde adherencia, lo que afecta a la frenada, la estabilidad en curva y el funcionamiento de sistemas como el ABS o el control de estabilidad.",
          "Como el deterioro es progresivo, el conductor se adapta y no lo percibe. Por eso conviene revisarlos periódicamente aunque el coche parezca ir bien.",
        ],
      },
      {
        id: "sintomas",
        heading: "Síntomas de amortiguadores gastados",
        paragraphs: [
          "El RACE enumera como señales habituales los rebotes excesivos, los balanceos y la pérdida de estabilidad, las diferencias entre ruedas de un mismo eje, el hundimiento al frenar, los ruidos metálicos y el desgaste irregular de los neumáticos.",
          "También puedes notar que el coche «flota» a velocidad de carretera, que necesitas corregir más la trayectoria con viento lateral o que el morro se levanta mucho al acelerar.",
        ],
        bullets: [
          "Rebote prolongado tras pasar un bache o un badén.",
          "Balanceo excesivo en curvas o cambios de carril.",
          "Morro que se hunde mucho al frenar.",
          "Ruidos secos o metálicos en la suspensión.",
          "Manchas de aceite en el cuerpo del amortiguador.",
          "Desgaste en forma de calvas en los neumáticos.",
        ],
      },
      {
        id: "itv",
        heading: "Qué revisa la ITV",
        paragraphs: [
          "La inspección comprueba visualmente fugas, golpes, corrosión, anclajes y guardapolvos, y en muchas estaciones mide la eficacia en un banco de suspensiones. Una diferencia importante de eficacia entre los dos lados de un eje o una fuga con goteo pueden suponer un defecto grave.",
          "Antes de la ITV, mira los amortiguadores con una linterna a través del paso de rueda y busca aceite en el cuerpo. Una ligera humedad no es lo mismo que un goteo.",
        ],
      },
      {
        id: "cambio",
        heading: "Cuándo y cómo cambiarlos",
        paragraphs: [
          "No hay un kilometraje único para todos los coches; depende del estado de las carreteras, la carga y el modelo. Lo razonable es revisarlos en cada mantenimiento a partir de cierto kilometraje y sustituirlos cuando la medición o la inspección lo indiquen.",
          "Se cambian por parejas en el mismo eje para que ambos lados trabajen igual. Después de sustituirlos puede ser necesario comprobar la alineación, sobre todo si se han desmontado elementos de la suspensión delantera.",
        ],
        callout: {
          tone: "info",
          title: "Piezas que acompañan",
          text: "Copelas, rodamientos de copela, topes y guardapolvos se desgastan con el amortiguador. Pregunta por su estado para no pagar dos veces la mano de obra.",
        },
      },
    ],
    dangerSignals: [
      {
        signal: "Muelle roto o coche visiblemente más bajo en una esquina",
        action:
          "Circula con mucha precaución hasta el taller o pide asistencia.",
      },
      {
        signal: "Golpes metálicos fuertes al pasar baches",
        action:
          "Revisa cuanto antes: puede haber un anclaje suelto o un amortiguador roto.",
      },
      {
        signal: "Pérdida de control o rebote fuerte en curva",
        action:
          "Reduce la velocidad y no circules por carretera hasta revisarlo.",
      },
    ],
    safeSteps: [
      {
        title: "Mira con linterna",
        detail:
          "Busca aceite en el cuerpo del amortiguador a través del paso de rueda.",
      },
      {
        title: "Observa los neumáticos",
        detail:
          "Un desgaste en calvas o irregular puede indicar mala amortiguación.",
      },
      {
        title: "Compara lados",
        detail:
          "Fíjate en si el coche está nivelado o si una esquina queda más baja.",
      },
      {
        title: "Presta atención a los ruidos",
        detail:
          "Anota si suenan al pasar baches, al girar o al frenar.",
      },
      {
        title: "Pide prueba en banco",
        detail:
          "Muchos talleres pueden medir la eficacia de cada amortiguador.",
      },
    ],
    workshop: {
      introduction:
        "La revisión debe incluir inspección visual con el coche elevado, prueba de eficacia y comprobación de holguras en rótulas y silentblocks.",
      urgent: [
        "Muelle roto o coche desnivelado.",
        "Ruido metálico fuerte en la suspensión.",
        "Inestabilidad clara en curva o frenada.",
      ],
      appointment: [
        "Fugas de aceite visibles.",
        "Rebotes y balanceos excesivos.",
        "Desgaste irregular de neumáticos.",
      ],
      usefulInformation: [
        "Kilómetros desde el último cambio, si se conocen.",
        "Uso habitual y carga.",
        "Ruidos y en qué situaciones aparecen.",
      ],
    },
    faqs: [
      {
        question: "¿Cada cuántos kilómetros se cambian los amortiguadores?",
        answer:
          "No hay una cifra válida para todos. Depende del modelo, la carga y las carreteras. Lo adecuado es revisarlos periódicamente y cambiarlos según su estado.",
      },
      {
        question: "¿Se puede cambiar solo un amortiguador?",
        answer:
          "Lo recomendable es cambiarlos por parejas en el mismo eje para que ambos lados se comporten igual.",
      },
      {
        question: "¿Los amortiguadores influyen en la frenada?",
        answer:
          "Sí. Si la rueda rebota, pierde contacto con el suelo y la distancia de frenado puede aumentar.",
      },
      {
        question: "¿Suspenden la ITV unos amortiguadores gastados?",
        answer:
          "Pueden hacerlo si hay fuga con goteo, daño visible o una diferencia de eficacia importante entre lados de un eje.",
      },
    ],
    relatedSlugs: [
      "coche-se-va-hacia-un-lado",
      "neumaticos-dot-desgaste-presion",
      "checklist-itv-coche-antiguo",
      "mantenimiento-coche-10-15-20-anos",
    ],
    sources: [sources.shockAbsorbers, sources.itvManual, sources.mechanicsManual],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "coche-parado-mucho-tiempo",
    category: "mantenimiento",
    title: "Coche parado mucho tiempo: cómo guardarlo y volver a arrancarlo",
    seoTitle: "Coche parado mucho tiempo: qué hacer y qué revisar",
    description:
      "Qué le pasa a un coche que pasa semanas o meses sin moverse: batería, neumáticos, frenos, combustible. Cómo prepararlo, cómo volver a usarlo y qué dice la ley sobre seguro e ITV.",
    eyebrow: "Mantenimiento · Inactividad",
    summary:
      "Un coche que no se mueve también se deteriora. La batería se descarga, los neumáticos se deforman, los frenos se oxidan y los líquidos envejecen. Prepararlo bien evita sorpresas al volver a usarlo.",
    directAnswer:
      "Si el coche va a estar parado varias semanas, desconecta o mantén la batería con un mantenedor adecuado, ajusta los neumáticos a la presión correcta, aparca preferiblemente en un lugar seco sin echar el freno de mano durante meses si el manual lo permite, y deja el depósito razonablemente lleno. Si está en la vía pública debe tener seguro e ITV vigentes. Si no lo vas a usar en mucho tiempo y lo guardas en un lugar privado, la baja temporal en la DGT evita pagar el seguro.",
    readingMinutes: 8,
    sections: [
      {
        id: "que-se-estropea",
        heading: "Qué se deteriora cuando el coche no se mueve",
        paragraphs: [
          "La batería es lo primero que falla. Los coches modernos mantienen consumos en reposo para alarmas, centralitas y memoria, y en pocas semanas pueden descargarla lo suficiente para que no arranque. Una batería que se descarga profundamente varias veces pierde capacidad de forma permanente.",
          "Los neumáticos pierden presión y pueden deformarse por apoyar siempre en el mismo punto. Los discos de freno se cubren de óxido y las pastillas pueden quedarse pegadas, sobre todo con humedad y freno de mano accionado. El combustible envejece y los líquidos siguen degradándose por tiempo.",
        ],
        bullets: [
          "Batería descargada o dañada por descarga profunda.",
          "Neumáticos con poca presión o deformados.",
          "Frenos oxidados o pastillas pegadas al disco.",
          "Juntas resecas y pequeñas fugas.",
          "Roedores que dañan cableado o anidan en el filtro de aire.",
        ],
      },
      {
        id: "preparar",
        heading: "Cómo prepararlo para una parada larga",
        paragraphs: [
          "Lava el coche y limpia el interior para evitar humedad y olores. Ajusta la presión de los neumáticos a la indicada por el fabricante o ligeramente superior si el manual lo contempla. Si está en un garaje y el terreno es llano, deja el coche con una marcha engranada o en P y calzado, sin freno de mano, para evitar que se peguen las zapatas o pastillas, siempre que sea seguro.",
          "Para la batería, la opción más cómoda es un mantenedor inteligente compatible con su tecnología. Si no hay enchufe, desconectar el borne negativo reduce el consumo en reposo, aunque puede borrar memorias de radio o ajustes y algunos coches requieren procedimientos especiales al reconectar.",
        ],
        callout: {
          tone: "caution",
          title: "Encender el motor unos minutos no basta",
          text: "Arrancar el coche parado y dejarlo al ralentí unos minutos puede gastar más batería de la que recupera y genera condensación. Es mejor un trayecto real de al menos veinte o treinta minutos o un mantenedor.",
        },
      },
      {
        id: "legal",
        heading: "Seguro, ITV y baja temporal",
        paragraphs: [
          "Un vehículo matriculado debe tener seguro obligatorio, salvo que esté dado de baja. Según la DGT, si el coche está en la vía pública debe tener seguro e ITV en vigor aunque no circule. Si está guardado en un espacio privado y se tramita la baja temporal, no es necesario mantener el seguro ni la ITV mientras dure.",
          "La baja temporal voluntaria dura como máximo un año y puede prorrogarse. Al terminar, el vehículo vuelve a estar de alta automáticamente. El impuesto de circulación se devenga el 1 de enero, así que conviene tramitar la baja antes de fin de año si no vas a usar el coche.",
        ],
      },
      {
        id: "volver",
        heading: "Cómo volver a ponerlo en marcha",
        paragraphs: [
          "Antes de arrancar, revisa niveles de aceite, refrigerante y frenos, comprueba que no hay manchas debajo ni restos de roedores en el vano motor y ajusta la presión de los neumáticos. Si la batería está descargada, cárgala con un cargador adecuado antes de intentar arrancar.",
          "En los primeros kilómetros, frena suavemente varias veces a baja velocidad para limpiar el óxido de los discos y presta atención a ruidos o vibraciones. Si el coche ha estado parado muchos meses, programa una revisión de líquidos y frenos.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Olor a combustible o cables mordidos en el vano motor",
        action:
          "No arranques el motor y pide revisión: hay riesgo de incendio o cortocircuito.",
      },
      {
        signal: "Batería hinchada, con fugas o muy corroída",
        action:
          "No la cargues ni intentes arrancar con pinzas. Sustitúyela con un profesional.",
      },
      {
        signal: "Pedal de freno blando o rueda bloqueada al empezar a moverte",
        action:
          "Detente y no circules hasta revisar los frenos.",
      },
    ],
    safeSteps: [
      {
        title: "Decide cuánto tiempo estará parado",
        detail:
          "Para semanas, un mantenedor y presión correcta suelen bastar. Para muchos meses, valora la baja temporal.",
      },
      {
        title: "Cuida la batería",
        detail:
          "Usa un mantenedor compatible o desconecta el borne negativo siguiendo el manual.",
      },
      {
        title: "Ajusta los neumáticos",
        detail:
          "Revisa presión al guardar y al volver a usar el coche.",
      },
      {
        title: "Revisa antes de arrancar",
        detail:
          "Niveles, fugas, roedores y estado de la batería.",
      },
      {
        title: "Haz un trayecto real",
        detail:
          "Circula al menos veinte o treinta minutos y frena suavemente al principio.",
      },
    ],
    workshop: {
      introduction:
        "Tras una inactividad larga, una revisión básica de batería, frenos, neumáticos y líquidos evita averías en los primeros kilómetros.",
      urgent: [
        "Olor a combustible o cableado dañado.",
        "Frenos que no responden con normalidad.",
        "Fugas importantes bajo el coche.",
      ],
      appointment: [
        "Coche parado más de seis meses.",
        "Batería que no mantiene la carga.",
        "Neumáticos con deformaciones o grietas.",
      ],
      usefulInformation: [
        "Tiempo que ha estado parado y dónde.",
        "Si la batería estuvo conectada a un mantenedor.",
        "Fecha del último cambio de aceite y líquidos.",
      ],
    },
    faqs: [
      {
        question: "¿Cuánto tiempo aguanta la batería con el coche parado?",
        answer:
          "Depende de la batería, el consumo en reposo y la temperatura. En coches modernos puede descargarse lo suficiente en pocas semanas.",
      },
      {
        question: "¿Tengo que tener seguro si el coche no circula?",
        answer:
          "Sí, mientras esté de alta. Solo la baja temporal o definitiva exime del seguro obligatorio. En la vía pública también necesita ITV vigente.",
      },
      {
        question: "¿Es bueno arrancarlo cada semana unos minutos?",
        answer:
          "No es lo ideal. Unos minutos al ralentí gastan batería y generan condensación. Mejor un trayecto real o un mantenedor.",
      },
      {
        question: "¿Hay que cambiar el aceite si el coche ha estado parado?",
        answer:
          "El aceite envejece también por tiempo. Respeta el intervalo temporal del fabricante aunque no se hayan hecho kilómetros.",
      },
    ],
    relatedSlugs: [
      "bateria-se-descarga-coche-parado",
      "cargador-mantenedor-bateria",
      "neumaticos-dot-desgaste-presion",
      "vender-o-dar-de-baja-coche-viejo",
    ],
    sources: [
      sources.temporaryDeregistration,
      sources.insuranceLaw,
      sources.mechanicsManual,
      sources.roadsideReview,
    ],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "itv-caducada-que-hacer",
    category: "itv-normativa",
    title: "ITV caducada: multa, seguro y qué hacer para regularizarla",
    seoTitle: "ITV caducada: multa, seguro y qué hacer",
    description:
      "Qué pasa si circulas con la ITV caducada: sanción, efectos en el seguro, si puedes ir a la estación con ella vencida y cómo se calcula la próxima fecha.",
    eyebrow: "ITV · Plazos",
    summary:
      "Que se pase la fecha de la ITV es más habitual de lo que parece, sobre todo en coches que se usan poco. Tiene consecuencias, pero regularizarlo es sencillo si se actúa rápido.",
    directAnswer:
      "Circular con la ITV caducada es una infracción grave según la Ley de Tráfico, con una multa habitual de 200 euros, y los agentes pueden inmovilizar el coche si la última inspección fue negativa. El seguro obligatorio sigue cubriendo los daños a terceros, aunque algunas pólizas limitan las coberturas voluntarias. Lo que debes hacer es pedir cita cuanto antes y circular solo lo imprescindible hasta la estación. Si la pasas fuera de plazo, la próxima fecha se cuenta desde el día de la nueva inspección.",
    readingMinutes: 7,
    sections: [
      {
        id: "sancion",
        heading: "Qué sanción tiene",
        paragraphs: [
          "La Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial considera infracción grave circular con un vehículo que no haya superado la inspección técnica obligatoria. La cuantía habitual de las infracciones graves es de 200 euros, sin pérdida de puntos.",
          "Si la última inspección fue desfavorable y el plazo para corregir los defectos ha vencido, o si fue negativa y el coche circula fuera del trayecto permitido hasta el taller o la estación, la situación es más grave y los agentes pueden inmovilizar el vehículo.",
        ],
        callout: {
          tone: "info",
          title: "Cámaras y controles",
          text: "La fecha de la ITV figura en el registro de vehículos de la DGT, así que los agentes pueden comprobarla en cualquier control a partir de la matrícula.",
        },
      },
      {
        id: "seguro",
        heading: "¿Y el seguro?",
        paragraphs: [
          "El seguro obligatorio cubre los daños causados a terceros aunque la ITV esté caducada: la aseguradora no puede negarse a indemnizar a las víctimas por ese motivo.",
          "Las coberturas voluntarias, como daños propios, lunas o asistencia, dependen de lo que diga cada contrato, y algunas pólizas excluyen o limitan esas coberturas cuando el vehículo no tiene la inspección en vigor. Revisa las condiciones generales de tu póliza si tienes dudas.",
        ],
      },
      {
        id: "regularizar",
        heading: "Cómo regularizarla",
        paragraphs: [
          "Pide cita en una estación ITV de tu comunidad autónoma lo antes posible y circula solo para ir a ella. Lleva la documentación del vehículo y, antes de ir, revisa luces, neumáticos, limpiaparabrisas y testigos encendidos para no sumar un resultado desfavorable.",
          "El Real Decreto 920/2017 permite pasar la inspección hasta 30 días antes de la fecha de vencimiento sin que cambie la fecha de la siguiente. Si la pasas fuera de plazo, la periodicidad se cuenta desde la fecha de la nueva inspección, así que no se gana nada retrasándola.",
        ],
        bullets: [
          "Reserva cita en la estación más cercana.",
          "Comprueba luces, neumáticos, frenos y testigos antes de ir.",
          "Lleva el permiso de circulación y la tarjeta ITV o su versión electrónica.",
          "Circula solo lo imprescindible hasta la inspección.",
        ],
      },
      {
        id: "frecuencia",
        heading: "Cada cuánto toca en un turismo particular",
        paragraphs: [
          "Para turismos de uso particular, el Real Decreto 920/2017 establece que están exentos hasta los cuatro años, pasan cada dos años entre los cuatro y los diez, y cada año a partir de los diez. La fecha exacta figura en la tarjeta ITV y en la pegatina del parabrisas.",
          "Si no recuerdas cuándo te toca, nuestra calculadora orientativa te ayuda a estimarlo a partir de la fecha de matriculación y la última inspección. La fecha oficial es siempre la que consta en tu documentación.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Última ITV negativa",
        action:
          "El coche solo puede circular hasta el taller o la estación por el trayecto permitido. No lo uses para otros desplazamientos.",
      },
      {
        signal: "Defectos de frenos, dirección o neumáticos sin reparar",
        action:
          "Repáralos antes de circular, con o sin ITV vigente.",
      },
    ],
    safeSteps: [
      {
        title: "Comprueba la fecha",
        detail:
          "Mira la tarjeta ITV o la pegatina del parabrisas.",
      },
      {
        title: "Pide cita cuanto antes",
        detail:
          "Reserva en una estación de tu comunidad autónoma.",
      },
      {
        title: "Revisa lo básico",
        detail:
          "Luces, neumáticos, limpiaparabrisas, cinturones y testigos.",
      },
      {
        title: "Circula lo mínimo",
        detail:
          "Usa el coche solo para ir a la inspección.",
      },
      {
        title: "Anota la próxima fecha",
        detail:
          "Pon un recordatorio un mes antes del vencimiento.",
      },
    ],
    workshop: {
      introduction:
        "Una revisión previa puede evitar un resultado desfavorable, sobre todo si hace tiempo que no se revisan frenos, luces y neumáticos.",
      urgent: [
        "Testigos de airbag, ABS o frenos encendidos.",
        "Fugas visibles o neumáticos por debajo del límite.",
      ],
      appointment: [
        "Luces fundidas o faros opacos.",
        "Holguras en dirección o suspensión.",
        "Emisiones sospechosas o testigo de motor.",
      ],
      usefulInformation: [
        "Último informe de ITV con defectos leves anotados.",
        "Fecha de la próxima inspección.",
        "Reparaciones realizadas desde la última ITV.",
      ],
    },
    faqs: [
      {
        question: "¿Cuánto es la multa por ITV caducada?",
        answer:
          "La infracción es grave y la cuantía habitual es de 200 euros, sin pérdida de puntos. Puede haber consecuencias mayores si la última inspección fue desfavorable o negativa.",
      },
      {
        question: "¿Puedo ir a la ITV con ella caducada?",
        answer:
          "Sí. Lo que debes hacer es pedir cita y circular solo lo imprescindible para llegar a la estación.",
      },
      {
        question: "¿Me cubre el seguro con la ITV caducada?",
        answer:
          "El seguro obligatorio cubre los daños a terceros. Las coberturas voluntarias dependen de la póliza y algunas las limitan si la ITV no está en vigor.",
      },
      {
        question: "¿Puedo pasar la ITV antes de la fecha?",
        answer:
          "Sí. Hasta 30 días antes del vencimiento sin que cambie la fecha de la siguiente inspección.",
      },
    ],
    relatedSlugs: [
      "itv-frecuencia-desfavorable-negativa",
      "checklist-itv-coche-antiguo",
      "testigos-coche-significado",
      "etiqueta-ambiental-coche-antiguo",
    ],
    sources: [
      sources.itvLaw,
      sources.trafficLaw,
      sources.insuranceLaw,
      sources.itvManual,
    ],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "vender-o-dar-de-baja-coche-viejo",
    category: "itv-normativa",
    title: "Vender, dar de baja o llevar al desguace un coche viejo: trámites",
    seoTitle: "Dar de baja un coche viejo o venderlo: trámites",
    description:
      "Cuándo compensa reparar, vender o dar de baja un coche de más de diez años. Notificación de venta, baja definitiva en un centro autorizado, baja temporal e impuesto de circulación.",
    eyebrow: "Normativa · Trámites",
    summary:
      "Llega un momento en que una reparación cuesta más que el valor del coche. Antes de decidir, conviene conocer los trámites para venderlo, darlo de baja de forma temporal o llevarlo al desguace sin seguir pagando impuestos ni asumir responsabilidades.",
    directAnswer:
      "Si lo vendes, firma un contrato de compraventa y notifica la venta a la DGT; el RACE indica un plazo de 10 días desde la firma, y así dejas de responder de multas y accidentes. Si lo desguazas, llévalo a un Centro Autorizado de Tratamiento (CAT), que tramita la baja definitiva y te entrega el certificado de destrucción; no hace falta ir a Tráfico. Si solo vas a dejar de usarlo, la baja temporal dura hasta un año prorrogable. Hazlo antes del 1 de enero para no pagar el impuesto de circulación del año siguiente.",
    readingMinutes: 8,
    sections: [
      {
        id: "reparar-o-no",
        heading: "¿Reparar, vender o desguazar?",
        paragraphs: [
          "No existe una regla fija, pero ayuda comparar el coste de la reparación con el valor de mercado del coche y con el gasto que supondría sustituirlo. Ten en cuenta también qué otras reparaciones previsibles se acercan: distribución, embrague, neumáticos o una ITV con defectos.",
          "Un coche bien mantenido y con historial puede seguir siendo la opción más económica durante años. En cambio, si acumula averías graves de motor o caja, corrosión estructural o problemas eléctricos recurrentes, puede que reparar solo retrase la decisión.",
        ],
        bullets: [
          "Pide presupuesto por escrito de la avería principal.",
          "Consulta el valor aproximado de coches similares en anuncios.",
          "Lista las reparaciones previsibles en los próximos dos años.",
          "Valora restricciones locales por etiqueta ambiental si circulas por ciudades con zonas de bajas emisiones.",
        ],
      },
      {
        id: "vender",
        heading: "Vender a un particular o a un profesional",
        paragraphs: [
          "Firma un contrato de compraventa con los datos de ambas partes, la fecha, la hora y los kilómetros. Antes de notificar la venta, el RACE recomienda comprobar que el coche está de alta, sin multas pendientes, sin reserva de dominio ni embargo y con el impuesto del año anterior pagado.",
          "La notificación de venta comunica a la DGT que ya no eres el titular y te libera de responsabilidades por multas y accidentes posteriores. No necesitas esperar a que el comprador haga el cambio de titularidad para presentarla.",
        ],
        callout: {
          tone: "caution",
          title: "No entregues el coche sin papeles",
          text: "Vender sin contrato ni notificación puede dejarte como titular de un coche que conduce otra persona, con sus multas y su responsabilidad.",
        },
      },
      {
        id: "baja-definitiva",
        heading: "Baja definitiva en un desguace autorizado",
        paragraphs: [
          "Para un turismo que vas a desguazar, llévalo a un Centro Autorizado de Tratamiento. El centro tramita la baja definitiva ante la DGT y te entrega el certificado de destrucción y el justificante de baja, que conviene conservar. La DGT indica que no es necesario acudir a las oficinas de Tráfico.",
          "El Real Decreto 265/2021 establece que la entrega no tiene coste para el titular cuando el vehículo carece de valor de mercado, siempre que conserve al menos la carrocería y el grupo motopropulsor y no se le hayan desmontado piezas. No puede tramitarse si el coche tiene un precinto judicial o administrativo.",
        ],
      },
      {
        id: "baja-temporal",
        heading: "Baja temporal: si no lo vas a usar durante un tiempo",
        paragraphs: [
          "La baja temporal voluntaria permite dejar de pagar el seguro mientras el coche esté guardado en un espacio privado. Dura como máximo un año y puede prorrogarse; al terminar, el vehículo vuelve a estar de alta automáticamente.",
          "El impuesto de circulación se devenga el 1 de enero. Si el coche está de alta ese día, se paga el año completo, así que conviene tramitar cualquier baja antes de que termine el año. La DGT comunica la baja al ayuntamiento.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Comprador que no quiere firmar contrato",
        action:
          "No entregues el coche ni la documentación sin contrato firmado y notifica la venta.",
      },
      {
        signal: "Ofertas de «desguace» sin centro autorizado",
        action:
          "Comprueba que es un CAT y exige el certificado de destrucción.",
      },
    ],
    safeSteps: [
      {
        title: "Calcula el coste real",
        detail:
          "Compara reparación, valor del coche y reparaciones previsibles.",
      },
      {
        title: "Reúne la documentación",
        detail:
          "Permiso de circulación, tarjeta ITV y justificante del impuesto.",
      },
      {
        title: "Firma contrato",
        detail:
          "Incluye fecha, hora, kilómetros y datos de comprador y vendedor.",
      },
      {
        title: "Notifica la venta",
        detail:
          "Hazlo cuanto antes tras la firma para dejar de ser responsable.",
      },
      {
        title: "Conserva los justificantes",
        detail:
          "Guarda el certificado de destrucción o el justificante de baja.",
      },
    ],
    workshop: {
      introduction:
        "Antes de decidir, un diagnóstico claro de la avería y una estimación de reparaciones próximas ayudan a no gastar dinero en un coche que no compensa.",
      urgent: [
        "Avería grave de motor o caja con presupuesto superior al valor del coche.",
        "Corrosión estructural que comprometa la seguridad.",
      ],
      appointment: [
        "Inspección previa a la venta para informar al comprador.",
        "Valoración de reparaciones antes de la próxima ITV.",
      ],
      usefulInformation: [
        "Historial de mantenimiento y facturas.",
        "Último informe de ITV.",
        "Presupuestos por escrito.",
      ],
    },
    faqs: [
      {
        question: "¿Cuánto cuesta dar de baja un coche en el desguace?",
        answer:
          "Para un turismo sin valor de mercado que conserve carrocería y motor sin piezas desmontadas, la entrega en un CAT no tiene coste para el titular según el Real Decreto 265/2021.",
      },
      {
        question: "¿Tengo que ir a Tráfico para la baja definitiva?",
        answer:
          "No. El centro autorizado tramita la baja y te entrega el justificante.",
      },
      {
        question: "¿Qué plazo hay para notificar la venta?",
        answer:
          "El RACE indica 10 días desde la firma del contrato. Conviene hacerlo cuanto antes.",
      },
      {
        question: "¿Pago el impuesto de circulación si doy de baja el coche en marzo?",
        answer:
          "El impuesto se devenga el 1 de enero. Algunos ayuntamientos prorratean en caso de baja definitiva, pero depende de cada ordenanza. Lo más seguro es tramitar la baja antes de fin de año.",
      },
    ],
    relatedSlugs: [
      "coche-parado-mucho-tiempo",
      "etiqueta-ambiental-coche-antiguo",
      "itv-caducada-que-hacer",
      "mantenimiento-coche-10-15-20-anos",
    ],
    sources: [
      sources.permanentDeregistration,
      sources.temporaryDeregistration,
      sources.endOfLifeDecree,
      sources.saleNotice,
    ],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
];
