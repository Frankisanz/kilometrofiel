import type { Article, PrimarySource } from "@/lib/articles";

// Guías añadidas el 25 de noviembre de 2026 para búsquedas de temporada y de
// trámite que la web aún no cubría: los nuevos estados de la carretera por
// nieve de la campaña 2026-2027, cadenas y neumáticos de invierno, el cambio
// de titularidad con su impuesto y el testigo de presión de neumáticos.
const ACCESSED_AT = "2026-11-25";
const PUBLISHED_AT = "2026-11-25";

const sources = {
  dgtWinterStates: {
    name: "Actualización de los estados de vialidad por meteorología adversa",
    publisher: "Dirección General de Tráfico, nota de prensa del 19 de noviembre de 2026",
    url: "https://www.dgt.es/comunicacion/notas-de-prensa/20261119-actualizacion-estados-de-vialidad-por-meteorologia-adversa/",
    accessedAt: ACCESSED_AT,
  },
  dgtWinterStatesPdf: {
    name: "Nota de prensa: nuevos estados de vialidad y tramos con neumáticos de invierno",
    publisher: "Dirección General de Tráfico",
    url: "https://www.dgt.es/export/sites/web-DGT/.galleries/downloads/nota_prensa/2026/20261119-NOTA-DE-PRENSA.pdf",
    accessedAt: ACCESSED_AT,
  },
  winterSupplement: {
    name: "Suplemento de invierno: conducir con nieve, hielo y frío",
    publisher: "Revista Tráfico y Seguridad Vial, DGT (n.º 268)",
    url: "https://revista.dgt.es/Galerias/hemeroteca/revista/N268-SUP-INVIERNO.pdf",
    accessedAt: ACCESSED_AT,
  },
  circulationRules: {
    name: "Reglamento General de Circulación (Real Decreto 1428/2003)",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2003-23514",
    accessedAt: ACCESSED_AT,
  },
  signsDecree: {
    name: "Real Decreto 465/2025, por el que se modifica el Reglamento General de Circulación",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-12199",
    accessedAt: ACCESSED_AT,
  },
  dgtTransfer: {
    name: "Transferencia o cambio de titularidad de un vehículo",
    publisher: "Sede electrónica de la DGT",
    url: "https://sede.dgt.gob.es/es/vehiculos/transferencias-de-vehiculos/",
    accessedAt: ACCESSED_AT,
  },
  dgtSaleNotice: {
    name: "Notificación de venta de un vehículo",
    publisher: "Sede electrónica de la DGT",
    url: "https://sede.dgt.gob.es/es/vehiculos/notificacion-de-venta/",
    accessedAt: ACCESSED_AT,
  },
  averagePrices2026: {
    name: "Orden HAC/1501/2025: precios medios de venta de vehículos para 2026",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26357",
    accessedAt: ACCESSED_AT,
  },
  itpLaw: {
    name: "Texto refundido de la Ley del Impuesto sobre Transmisiones Patrimoniales (Real Decreto Legislativo 1/1993)",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-1993-25359",
    accessedAt: ACCESSED_AT,
  },
  itpRegulation: {
    name: "Reglamento del Impuesto sobre Transmisiones Patrimoniales (Real Decreto 828/1995)",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-1995-14143",
    accessedAt: ACCESSED_AT,
  },
  raceTpms: {
    name: "¿Qué es el TPMS y cómo funciona?",
    publisher: "RACE",
    url: "https://www.race.es/que-es-el-tpms",
    accessedAt: ACCESSED_AT,
  },
  raceTpmsLight: {
    name: "Testigo de presión de neumáticos: qué significa y qué hacer",
    publisher: "RACE",
    url: "https://www.race.es/testigo-presion-neumaticos",
    accessedAt: ACCESSED_AT,
  },
  tpmsRegulation: {
    name: "Reglamento (CE) n.º 661/2009 sobre seguridad general de los vehículos de motor",
    publisher: "Diario Oficial de la Unión Europea",
    url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32009R0661",
    accessedAt: ACCESSED_AT,
  },
  tyres: {
    name: "Todo lo que tiene que saber de neumáticos",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/tecnologia-seguridad/2019/0910-Neumaticos.shtml",
    accessedAt: ACCESSED_AT,
  },
} satisfies Record<string, PrimarySource>;

export const winterAndPaperworkArticles: readonly Article[] = [
  {
    slug: "nieve-cadenas-neumaticos-invierno-niveles-dgt",
    category: "itv-normativa",
    title:
      "Nieve en la carretera: niveles de la DGT, cadenas, fundas y neumáticos de invierno",
    seoTitle: "Niveles de nieve DGT 2026: cadenas y neumáticos de invierno",
    description:
      "Qué significan los nuevos estados amarillo, naranja, rojo y negro de la DGT para la campaña 2026-2027, cuándo son obligatorias las cadenas, si valen las fundas textiles y los neumáticos de invierno, y los tramos donde se prohíben las cadenas.",
    eyebrow: "Normativa · Invierno 2026-2027",
    summary:
      "Desde la campaña de invierno 2026-2027 la DGT usa los mismos colores que los avisos de AEMET para indicar el estado de las carreteras. Saber qué permite cada color y qué equipamiento acepta la norma evita quedarse parado en un puerto o volverse en el control.",
    directAnswer:
      "La DGT ha unificado sus estados de la carretera con los colores de AEMET: amarillo (afectado), naranja (dificultado), rojo (adverso) y negro (intransitable, vía cortada). En rojo, con la calzada completamente nevada, solo pueden seguir los turismos que lleven cadenas o neumáticos de invierno, y en tres tramos con túneles (A-23 en Huesca, A-67 en Cantabria y A-6 en Lugo) se exige neumático de invierno y se prohíben las cadenas. Donde haya una señal de cadenas obligatorias debes llevar cadenas, neumáticos especiales para nieve u otro dispositivo antideslizante autorizado en las ruedas motrices; no hacerlo es una infracción grave, con multa habitual de 200 euros.",
    readingMinutes: 8,
    sections: [
      {
        id: "colores",
        heading: "Los cuatro colores de la campaña 2026-2027",
        paragraphs: [
          "El 19 de noviembre de 2026 la DGT publicó la instrucción que actualiza los estados de vialidad por meteorología adversa. Los nombres y colores se alinean con los niveles de aviso de AEMET, de modo que el mismo color significa lo mismo en el parte del tiempo y en los paneles de la carretera. El blanco indica que no hay incidencia meteorológica o que no se alcanzan los umbrales mínimos.",
          "Las medidas concretas (límites de velocidad, carril obligatorio, prohibición de adelantar o de circular para camiones y vehículos especiales) se anuncian en los paneles de mensaje variable y en la información de tráfico de la DGT. Lo que sigue es la idea general de cada nivel.",
        ],
        bullets: [
          "Amarillo, afectado: la circulación empieza a notar la meteorología. Hay recomendaciones, preaviso y limitaciones para camiones y vehículos especiales; conviene evitar los puertos de montaña.",
          "Naranja, dificultado: calzada parcialmente nevada. Todos por el carril derecho, prohibido adelantar en autopistas y autovías y velocidad reducida; los vehículos pesados y especiales no pueden circular.",
          "Rojo, adverso: calzada completamente nevada. Solo turismos con cadenas o neumáticos de invierno, a velocidad muy reducida, por el carril derecho y sin adelantar.",
          "Negro, intransitable: corte total de la vía. Ningún vehículo puede continuar.",
        ],
        callout: {
          tone: "important",
          title: "El carril izquierdo es para las quitanieves",
          text: "Cuando la nieve dificulte la circulación hay que dejar libre el carril izquierdo para que puedan pasar las máquinas quitanieves y los servicios de emergencia. Con tres o más carriles por sentido se puede usar también el contiguo al derecho.",
        },
      },
      {
        id: "tramos-sin-cadenas",
        heading: "Tramos donde en rojo se prohíben las cadenas",
        paragraphs: [
          "La DGT ha señalado tramos de vías de alta capacidad con túneles sucesivos en los que, en estado rojo, solo pueden circular vehículos con neumáticos de invierno y se prohíbe el uso de cadenas. Si vas a cruzarlos con nieve, las cadenas no te sirven: o llevas neumático de invierno o esperas a que mejore el estado.",
        ],
        bullets: [
          "A-23, Huesca: del punto kilométrico 374,458 al 395,139.",
          "A-67, Cantabria: del punto kilométrico 135,386 al 175,169.",
          "A-6, Lugo: del punto kilométrico 406,3 al 455.",
        ],
      },
      {
        id: "que-vale",
        heading: "Cadenas, fundas textiles y neumáticos de invierno: qué vale",
        paragraphs: [
          "El Reglamento General de Circulación, en la redacción del Real Decreto 465/2025, obliga a no seguir la marcha sin cadenas para nieve, neumáticos especiales de nieve u otros dispositivos antideslizantes autorizados donde esté la señal de cadenas obligatorias. Los dispositivos deben actuar al menos en las ruedas motrices.",
          "Los neumáticos de invierno y los todo tiempo que llevan el símbolo de la montaña de tres picos con un copo de nieve (3PMSF) han superado un ensayo homologado de tracción sobre nieve. El marcado M+S, en cambio, lo declara el fabricante sin ese ensayo, así que no garantiza el mismo agarre. Si compras neumáticos pensando en la nieve, busca el 3PMSF.",
          "Las fundas o cadenas textiles certificadas según la norma europea EN 16662-1 se venden como dispositivo antideslizante alternativo. Son ligeras y fáciles de montar, pero se desgastan rápido sobre asfalto y su fabricante limita la velocidad, habitualmente a 50 km/h. Comprueba la certificación en el envase y lleva el modelo de tu medida exacta de rueda.",
        ],
        callout: {
          tone: "caution",
          title: "Mira el manual antes de comprar cadenas",
          text: "Algunos coches, sobre todo con llantas grandes o poco hueco en el paso de rueda, solo admiten cadenas de eslabón fino o fundas textiles. El manual del propietario indica en qué eje montarlas y qué tipo admite.",
        },
      },
      {
        id: "antes-de-salir",
        heading: "Antes de salir con previsión de nieve",
        paragraphs: [
          "Consulta el estado de las carreteras y la previsión antes de viajar y durante el trayecto. Lleva el depósito lleno, ropa de abrigo, agua y el móvil cargado, y si el tramo está en rojo valora si el viaje es imprescindible.",
        ],
        bullets: [
          "Prueba a montar las cadenas o fundas en casa, en seco, antes de necesitarlas.",
          "Comprueba la presión de los neumáticos en frío: con temperaturas bajas baja la presión.",
          "Revisa batería, anticongelante y líquido limpiaparabrisas apto para heladas.",
          "Lleva guantes, una linterna, una rasqueta y una alfombrilla para arrodillarte al montar las cadenas.",
          "Con nieve, conduce con marchas largas, suavidad en volante, freno y acelerador, y mucha más distancia de seguridad.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Panel o agentes indican estado rojo y no llevas cadenas ni neumáticos de invierno",
        action:
          "No sigas. Detente en un área de servicio o lugar seguro fuera de la calzada y espera a que mejore el estado o a que los agentes lo indiquen.",
      },
      {
        signal: "El coche patina o no responde al volante sobre nieve o hielo",
        action:
          "Suelta suavemente el acelerador, no frenes de golpe y mantén el volante en la dirección en la que quieres ir. Detente en cuanto sea seguro y monta las cadenas.",
      },
      {
        signal: "Ruido de golpeteo en el paso de rueda con las cadenas puestas",
        action:
          "Para en un lugar seguro: la cadena está floja o rota y puede dañar frenos, sensores o carrocería. Retensa o retira.",
      },
    ],
    safeSteps: [
      {
        title: "Consulta el estado de la carretera",
        detail:
          "Mira el color del tramo en la información de tráfico de la DGT antes de salir y durante el viaje.",
      },
      {
        title: "Elige el equipamiento",
        detail:
          "Cadenas o fundas certificadas de tu medida, o neumáticos con símbolo 3PMSF si pasas por los tramos con túneles.",
      },
      {
        title: "Ensaya el montaje",
        detail:
          "Móntalas una vez en casa para saber cuánto tardas y si te sobran piezas.",
      },
      {
        title: "Monta en un lugar seguro",
        detail:
          "Fuera de la calzada, con chaleco, luces de emergencia y la baliza V16 encendida si estás en el arcén.",
      },
      {
        title: "Retensa y retira a tiempo",
        detail:
          "Comprueba la tensión tras los primeros metros y quítalas cuando la calzada quede libre de nieve y hielo.",
      },
    ],
    workshop: {
      introduction:
        "Antes de la temporada de nieve conviene que un taller o centro de neumáticos revise el estado del dibujo, la presión y la batería, y te confirme qué cadenas admite tu coche.",
      urgent: [
        "Neumáticos con el dibujo cerca del mínimo legal de 1,6 mm o con cortes en el flanco.",
        "Batería que ya arranca con dificultad en frío.",
        "Testigo de ABS, ESP o presión de neumáticos encendido.",
      ],
      appointment: [
        "Cambio a neumáticos de invierno o todo tiempo con 3PMSF si vives o viajas a zonas de nieve.",
        "Comprobar la concentración del anticongelante.",
        "Cambiar escobillas que dejan marcas.",
      ],
      usefulInformation: [
        "Medida exacta de los neumáticos (por ejemplo, 205/55 R16).",
        "Tipo de tracción del coche: delantera, trasera o total.",
        "Recomendaciones del manual sobre cadenas.",
      ],
    },
    faqs: [
      {
        question: "¿Qué significa el nivel rojo de la DGT?",
        answer:
          "Calzada completamente nevada. Solo pueden circular turismos con cadenas o neumáticos de invierno, por el carril derecho, sin adelantar y a velocidad muy reducida. Camiones, autobuses, conjuntos y vehículos especiales no pueden circular.",
      },
      {
        question: "¿Las fundas textiles valen como cadenas?",
        answer:
          "Las certificadas según la norma EN 16662-1 se comercializan como dispositivo antideslizante alternativo a las cadenas. Respeta la velocidad máxima de su fabricante y retíralas en cuanto haya asfalto limpio.",
      },
      {
        question: "¿Me pueden multar por no llevar cadenas?",
        answer:
          "Sí, si no respetas la señal de cadenas obligatorias o las restricciones del estado de la vía. Es una infracción grave con multa habitual de 200 euros, y los agentes pueden impedir que continúes.",
      },
      {
        question: "¿Con neumáticos de invierno puedo ir sin cadenas en nivel rojo?",
        answer:
          "Sí: en estado rojo pueden circular los turismos con cadenas o con neumáticos de invierno. En los tramos con túneles de la A-23, la A-67 y la A-6 el neumático de invierno es la única opción, porque allí se prohíben las cadenas.",
      },
      {
        question: "¿Tengo que llevar cadenas en el maletero siempre?",
        answer:
          "No existe una obligación general de llevarlas siempre. Lo obligatorio es cumplir la señal y el estado de la vía cuando los encuentres, así que si viajas a zonas con previsión de nieve debes llevar algún dispositivo.",
      },
    ],
    relatedSlugs: [
      "neumaticos-dot-desgaste-presion",
      "testigo-presion-neumaticos-tpms",
      "baliza-v16-conectada-certificada",
      "liquido-refrigerante-anticongelante",
    ],
    sources: [
      sources.dgtWinterStates,
      sources.dgtWinterStatesPdf,
      sources.circulationRules,
      sources.signsDecree,
      sources.tyres,
      sources.winterSupplement,
    ],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "cambio-titularidad-coche-segunda-mano",
    category: "itv-normativa",
    title:
      "Cambio de titularidad de un coche usado: pasos, tasa de la DGT e impuesto",
    seoTitle: "Cambio de titularidad de un coche: pasos y coste 2026",
    description:
      "Cómo se hace el cambio de nombre de un coche de segunda mano en 2026: quién lo paga, plazo de 30 días, tasa de 55,70 euros, cómo se calcula el ITP con las tablas de Hacienda y qué tiene que hacer el vendedor.",
    eyebrow: "Normativa · Comprar y vender",
    summary:
      "Después de revisar el coche y cerrar el precio queda el papeleo. Si se hace bien, el comprador queda como titular sin sorpresas y el vendedor deja de responder de las multas del coche desde el primer día.",
    directAnswer:
      "Si compras a un particular, tú haces el cambio de titularidad en la DGT en un plazo máximo de 30 días desde la firma del contrato. Antes debes pagar el Impuesto de Transmisiones Patrimoniales (ITP) en tu comunidad autónoma, normalmente con el modelo 620 o el que use tu comunidad, en 30 días hábiles. Después pagas la tasa de la DGT de 55,70 euros y presentas la solicitud por internet o con cita previa. El ITP se calcula sobre el valor fiscal del coche (precio medio de Hacienda por un porcentaje según su antigüedad) y el tipo depende de la comunidad, habitualmente entre el 4 % y el 8 %. Si compras a un concesionario o compraventa, no pagas ITP porque la operación lleva factura con IVA.",
    readingMinutes: 8,
    sections: [
      {
        id: "quien-hace-que",
        heading: "Qué hace el comprador y qué hace el vendedor",
        paragraphs: [
          "El comprador es quien está obligado a pedir el cambio de titularidad, en un plazo máximo de 30 días desde la firma del contrato de compraventa. También es quien paga el ITP: la ley del impuesto lo atribuye al adquirente aunque el contrato diga otra cosa.",
          "El vendedor debe presentar la notificación de venta en la DGT nada más vender. Desde que la presenta deja de responder de las sanciones del vehículo aunque el comprador todavía no haya hecho el cambio. La notificación tiene una tasa de 8,67 euros y se hace con el mismo contrato firmado.",
        ],
        callout: {
          tone: "caution",
          title: "Vendedor: no esperes al comprador",
          text: "Si el comprador tarda o no llega a hacer la transferencia, sin notificación de venta seguirás figurando como titular, con las multas y el impuesto de circulación del coche.",
        },
      },
      {
        id: "antes-de-firmar",
        heading: "Qué comprobar antes de firmar",
        paragraphs: [
          "La DGT solo tramita el cambio si el coche está de alta, sin reserva de dominio, sin embargos o precintos (o con el documento correspondiente firmado por el comprador), con las multas pagadas y con el impuesto de circulación del año anterior abonado. El nuevo permiso de circulación solo es válido si el coche tiene la ITV en vigor.",
          "El informe del vehículo de la DGT, que se pide con la matrícula, muestra cargas, ITV, kilómetros registrados y titulares anteriores. Pídelo antes de pagar.",
        ],
        bullets: [
          "Contrato de compraventa con datos de ambas partes, matrícula, bastidor, precio, fecha, hora y kilómetros.",
          "Firma de comprador y vendedor en todas las hojas.",
          "Permiso de circulación y tarjeta ITV (o su versión electrónica).",
          "Justificante del impuesto de circulación del último año.",
        ],
      },
      {
        id: "itp",
        heading: "Cuánto se paga de ITP y cómo se calcula",
        paragraphs: [
          "La base del ITP es el valor real del coche. Para comprobarlo, Hacienda y las comunidades usan las tablas de precios medios de venta que se publican cada año en el BOE (para 2026, la Orden HAC/1501/2025), multiplicadas por un porcentaje según los años de uso: 100 % el primer año, 47 % entre cuatro y cinco años, 19 % entre nueve y diez y 10 % a partir de doce años.",
          "Declara el precio real que has pagado. Si es claramente inferior al valor de las tablas, la administración puede comprobarlo y reclamar la diferencia, así que conviene que el precio del contrato sea coherente con el estado del coche y, si es muy bajo por una avería, conservar el presupuesto o informe que lo justifique.",
          "El tipo depende de la comunidad autónoma donde vive el comprador: la ley estatal fija un 4 % para bienes muebles, pero cada comunidad puede aprobar el suyo, y algunas aplican tipos distintos por antigüedad o cilindrada. Consulta el portal tributario de tu comunidad antes de presentar el modelo.",
        ],
        callout: {
          tone: "info",
          title: "Ejemplo orientativo",
          text: "Un coche con un precio medio en tablas de 20.000 euros y entre seis y siete años de uso tiene un valor fiscal de 6.800 euros (34 %). Con un tipo del 4 %, el ITP sería de 272 euros, más la tasa de la DGT de 55,70 euros.",
        },
      },
      {
        id: "tramite",
        heading: "El trámite en la DGT paso a paso",
        paragraphs: [
          "Por internet se presenta en el registro electrónico de la sede de la DGT con DNI electrónico, certificado digital o Cl@ve, adjuntando el contrato firmado en todas sus hojas (o la factura si vende un profesional) y el justificante del ITP o de su exención. La tasa de transferencia se paga en el mismo formulario. Las empresas solo pueden hacerlo por internet.",
          "En persona, los particulares piden cita previa en la web o en el 060 y llevan el impreso oficial de solicitud firmado por ambas partes, el contrato o la factura, el DNI del comprador, el justificante de la tasa y la copia del modelo de ITP.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "El vendedor no figura como titular en el informe de la DGT",
        action:
          "No pagues hasta aclararlo: necesitas que firme el titular registrado o la documentación que acredite que puede vender.",
      },
      {
        signal: "El informe muestra reserva de dominio o embargo",
        action:
          "La DGT no hará el cambio hasta que se levante. Exige el documento de cancelación antes de pagar.",
      },
      {
        signal: "Te piden firmar un contrato con un precio muy inferior al pagado",
        action:
          "No lo hagas: es tu impuesto el que se comprueba y la diferencia puede acabar reclamándose con recargos.",
      },
    ],
    safeSteps: [
      {
        title: "Pide el informe del vehículo",
        detail:
          "Comprueba titular, cargas, ITV y kilómetros antes de pagar.",
      },
      {
        title: "Firma el contrato",
        detail:
          "Con todos los datos, en todas las hojas, y guarda una copia cada parte.",
      },
      {
        title: "Vendedor: notifica la venta",
        detail:
          "El mismo día, con la tasa de 8,67 euros.",
      },
      {
        title: "Comprador: paga el ITP",
        detail:
          "En tu comunidad autónoma, en 30 días hábiles.",
      },
      {
        title: "Comprador: pide el cambio",
        detail:
          "En la DGT, con la tasa de 55,70 euros, en 30 días desde la firma.",
      },
    ],
    workshop: {
      introduction:
        "El papeleo no te dice cómo está el coche. Antes de firmar, una revisión previa a la compra en un taller de tu elección puede ahorrarte un ITP pagado por un coche con averías caras.",
      urgent: [
        "Testigos encendidos o ruidos de motor y caja en la prueba.",
        "Fugas visibles o humo anormal por el escape.",
      ],
      appointment: [
        "Revisión previa a la compra con lectura de códigos OBD2.",
        "Comprobar si la distribución y el mantenimiento están al día.",
      ],
      usefulInformation: [
        "Facturas de mantenimiento que entregue el vendedor.",
        "Último informe de ITV con defectos anotados.",
        "Informe de la DGT por matrícula.",
      ],
    },
    faqs: [
      {
        question: "¿Quién paga el cambio de nombre de un coche?",
        answer:
          "El comprador, salvo pacto en contrario para la tasa. El ITP, por ley, lo paga siempre el comprador.",
      },
      {
        question: "¿Cuánto cuesta el cambio de titularidad en 2026?",
        answer:
          "La tasa de la DGT es de 55,70 euros. A eso se suma el ITP de tu comunidad, que depende del valor fiscal del coche y del tipo autonómico. Si lo encargas a una gestoría, añade sus honorarios.",
      },
      {
        question: "¿Qué pasa si no hago el cambio en 30 días?",
        answer:
          "Incumples el plazo que fija la DGT y puedes ser sancionado. Además, si el vendedor no notificó la venta, seguirá figurando como titular, con el lío que supone para los dos.",
      },
      {
        question: "¿Hay que pagar ITP si compro en un concesionario?",
        answer:
          "No, si el vendedor es un empresario que emite factura con IVA. En ese caso presentas la factura en lugar del justificante del ITP.",
      },
      {
        question: "¿Cuánto cuesta la notificación de venta?",
        answer:
          "Tiene una tasa de 8,67 euros. Se hace por internet o con cita previa y deja al vendedor libre de las sanciones del coche desde que la presenta.",
      },
    ],
    relatedSlugs: [
      "comprar-coche-segunda-mano-que-revisar",
      "vender-o-dar-de-baja-coche-viejo",
      "itv-caducada-que-hacer",
      "etiqueta-ambiental-coche-antiguo",
    ],
    sources: [
      sources.dgtTransfer,
      sources.dgtSaleNotice,
      sources.averagePrices2026,
      sources.itpLaw,
      sources.itpRegulation,
    ],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "testigo-presion-neumaticos-tpms",
    category: "problemas",
    title:
      "Testigo de presión de neumáticos encendido: qué significa y cómo resetearlo",
    seoTitle: "Testigo de presión de neumáticos: qué hacer y resetear",
    description:
      "Por qué se enciende el testigo de presión de los neumáticos (TPMS), cómo saber si tu coche tiene sistema directo o indirecto, cómo resetearlo y qué hacer si sigue encendido o parpadea.",
    eyebrow: "Diagnóstico · Neumáticos",
    summary:
      "Es uno de los testigos que más se encienden cuando llega el frío. Casi siempre avisa de una presión baja de verdad, pero también puede ser un sensor sin pila o un sistema sin recalibrar tras cambiar ruedas.",
    directAnswer:
      "El testigo amarillo con forma de herradura y un signo de exclamación avisa de que al menos un neumático ha perdido presión. Comprueba la presión de las cuatro ruedas en frío, ajústala a la del fabricante (en la tapa del depósito o el marco de la puerta), busca pinchazos y reinicia el sistema desde el botón o el menú del coche. Si tras unos kilómetros sigue encendido con la presión correcta, o si parpadea, el fallo está en un sensor o en el propio sistema y debe revisarlo un taller.",
    readingMinutes: 6,
    sections: [
      {
        id: "por-que",
        heading: "Por qué se enciende",
        paragraphs: [
          "Desde noviembre de 2014 todos los turismos nuevos que se matriculan en la Unión Europea llevan un sistema de control de presión de neumáticos. Con el primer frío es habitual que salte: la presión baja cuando baja la temperatura del aire que hay dentro del neumático.",
        ],
        bullets: [
          "Presión baja en una o varias ruedas, a menudo por el frío.",
          "Pinchazo lento o fuga por la válvula o la llanta.",
          "Cambio o rotación de neumáticos sin recalibrar el sistema.",
          "Sensor con la pila agotada o dañado (sistemas directos).",
          "Fallo de la centralita o del sistema.",
        ],
      },
      {
        id: "directo-indirecto",
        heading: "Sistema directo o indirecto: cómo saber cuál tienes",
        paragraphs: [
          "En el sistema directo cada rueda lleva un sensor junto a la válvula que transmite la presión. Lo reconoces porque el cuadro o la pantalla muestran la presión en bares de cada neumático. La pila del sensor dura entre cinco y siete años y va sellada, así que cuando se agota se cambia el sensor entero; el RACE estima entre 40 y 120 euros por rueda.",
          "El sistema indirecto, el más común, no lleva sensores en las ruedas: usa los sensores del ABS para comparar la velocidad de giro de las cuatro ruedas. Una rueda con menos aire tiene menor diámetro y gira más deprisa. Por eso avisa, pero no dice qué rueda es, y necesita que lo reinicies cada vez que ajustas presiones o cambias neumáticos.",
        ],
      },
      {
        id: "resetear",
        heading: "Cómo resetearlo después de inflar",
        paragraphs: [
          "Con las cuatro ruedas a la presión correcta, busca el botón del sistema (a veces en la guantera o junto al volante) o la opción en el menú del ordenador de a bordo, normalmente en un apartado de neumáticos o de presión. En algunos coches con sistema directo el reinicio es automático al circular.",
          "Después conduce unos kilómetros a velocidad constante para que el sistema aprenda los nuevos valores. Si reinicias con una rueda baja, el sistema tomará esa presión como buena y no te avisará después.",
        ],
        callout: {
          tone: "caution",
          title: "Infla siempre en frío",
          text: "Mide la presión antes de recorrer más de unos pocos kilómetros. Con el neumático caliente la lectura sale más alta y acabarías dejándolo por debajo de lo que necesita.",
        },
      },
    ],
    dangerSignals: [
      {
        signal: "El testigo se enciende de golpe y el coche tira hacia un lado",
        action:
          "Reduce la velocidad sin frenar bruscamente y detente en un lugar seguro: puede ser un reventón o una pérdida rápida de aire.",
      },
      {
        signal: "Una rueda se ve claramente aplastada o con un bulto",
        action:
          "No sigas circulando con ella. Cambia a la de repuesto o usa el kit antipinchazos si el daño lo permite y llama a asistencia.",
      },
    ],
    safeSteps: [
      {
        title: "Mide las cuatro ruedas en frío",
        detail:
          "Y la de repuesto si la llevas.",
      },
      {
        title: "Ajusta a la presión del fabricante",
        detail:
          "Está en la tapa del depósito, el marco de la puerta o el manual; hay valores distintos con el coche cargado.",
      },
      {
        title: "Busca pinchazos",
        detail:
          "Clavos, cortes y bultos en banda y flancos; escucha si pierde aire por la válvula.",
      },
      {
        title: "Reinicia el sistema",
        detail:
          "Desde el botón o el menú del coche.",
      },
      {
        title: "Circula y vigila",
        detail:
          "Unos kilómetros a velocidad constante y comprueba de nuevo la presión al día siguiente.",
      },
    ],
    workshop: {
      introduction:
        "Si la presión es correcta y el testigo no se apaga, un taller con equipo de diagnosis puede leer el código del sistema y saber qué sensor falla.",
      urgent: [
        "Una rueda pierde presión de un día para otro.",
        "Daños visibles en el flanco del neumático.",
      ],
      appointment: [
        "Testigo que sigue encendido o parpadea con la presión correcta.",
        "Sensores de más de cinco o seis años en un sistema directo.",
        "Recalibrar tras montar ruedas nuevas o de invierno.",
      ],
      usefulInformation: [
        "Si el coche muestra la presión de cada rueda (sistema directo) o solo un aviso.",
        "Cuándo se cambiaron neumáticos o llantas por última vez.",
        "Si el testigo está fijo o parpadea.",
      ],
    },
    faqs: [
      {
        question: "¿Puedo circular con el testigo de presión encendido?",
        answer:
          "Solo lo justo para llegar a una gasolinera o taller cercano y comprobar las presiones. Un neumático bajo aumenta la distancia de frenado, el consumo y el desgaste, y puede reventar.",
      },
      {
        question: "¿Por qué se enciende cuando hace frío?",
        answer:
          "Porque la presión baja al bajar la temperatura. Si al ajustarlas y reiniciar se apaga, no había avería.",
      },
      {
        question: "¿Qué significa que el testigo parpadee?",
        answer:
          "En muchos coches indica un fallo del propio sistema, por ejemplo un sensor sin pila o sin señal, no una presión baja. Necesita diagnóstico.",
      },
      {
        question: "¿Hay que cambiar los sensores al poner neumáticos nuevos?",
        answer:
          "No necesariamente: se pueden reutilizar si funcionan. Conviene cambiar la válvula o su junta y, si los sensores tienen muchos años, valorar sustituirlos a la vez para no desmontar dos veces.",
      },
    ],
    relatedSlugs: [
      "neumaticos-dot-desgaste-presion",
      "testigos-coche-significado",
      "nieve-cadenas-neumaticos-invierno-niveles-dgt",
      "coche-se-va-hacia-un-lado",
    ],
    sources: [
      sources.raceTpms,
      sources.raceTpmsLight,
      sources.tpmsRegulation,
      sources.tyres,
    ],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
];
