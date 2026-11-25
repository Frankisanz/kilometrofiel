import type { LongTailGuide } from "@/lib/long-tail-guides";

// Respuestas específicas añadidas el 25 de noviembre de 2026, colgadas de las
// guías de nieve y cadenas, cambio de titularidad y testigo de presión.
const CONTENT_DATE = "2026-11-25";

const SOURCES = {
  dgtWinterStates: {
    title: "Actualización de los estados de vialidad por meteorología adversa",
    publisher: "Dirección General de Tráfico",
    url: "https://www.dgt.es/comunicacion/notas-de-prensa/20261119-actualizacion-estados-de-vialidad-por-meteorologia-adversa/",
  },
  dgtWinterStatesPdf: {
    title: "Nota de prensa: nuevos estados de vialidad y tramos con neumáticos de invierno",
    publisher: "Dirección General de Tráfico",
    url: "https://www.dgt.es/export/sites/web-DGT/.galleries/downloads/nota_prensa/2026/20261119-NOTA-DE-PRENSA.pdf",
  },
  circulationRules: {
    title: "Reglamento General de Circulación (Real Decreto 1428/2003)",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2003-23514",
  },
  winterSupplement: {
    title: "Suplemento de invierno: conducir con nieve, hielo y frío",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/Galerias/hemeroteca/revista/N268-SUP-INVIERNO.pdf",
  },
  dgtTyres: {
    title: "Todo lo que tiene que saber de neumáticos",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/tecnologia-seguridad/2019/0910-Neumaticos.shtml",
  },
  dgtTransfer: {
    title: "Transferencia o cambio de titularidad de un vehículo",
    publisher: "Sede electrónica de la DGT",
    url: "https://sede.dgt.gob.es/es/vehiculos/transferencias-de-vehiculos/",
  },
  averagePrices2026: {
    title: "Orden HAC/1501/2025: precios medios de venta de vehículos para 2026",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26357",
  },
  itpLaw: {
    title: "Texto refundido de la Ley del Impuesto sobre Transmisiones Patrimoniales",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-1993-25359",
  },
  euRoadworthiness: {
    title: "Directiva 2014/45/UE sobre inspecciones técnicas periódicas",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/buscar/doc.php?id=DOUE-L-2014-80849",
  },
  raceTpms: {
    title: "¿Qué es el TPMS y cómo funciona?",
    publisher: "RACE",
    url: "https://www.race.es/que-es-el-tpms",
  },
  raceTpmsLight: {
    title: "Testigo de presión de neumáticos: qué significa y qué hacer",
    publisher: "RACE",
    url: "https://www.race.es/testigo-presion-neumaticos",
  },
} as const;

const HUBS = {
  snow: {
    slug: "nieve-cadenas-neumaticos-invierno-niveles-dgt",
    title: "Nieve en la carretera: niveles de la DGT, cadenas, fundas y neumáticos de invierno",
    href: "/itv-y-normativa/nieve-cadenas-neumaticos-invierno-niveles-dgt",
  },
  transfer: {
    slug: "cambio-titularidad-coche-segunda-mano",
    title: "Cambio de titularidad de un coche usado: pasos, tasa de la DGT e impuesto",
    href: "/itv-y-normativa/cambio-titularidad-coche-segunda-mano",
  },
  tpms: {
    slug: "testigo-presion-neumaticos-tpms",
    title: "Testigo de presión de neumáticos encendido: qué significa y cómo resetearlo",
    href: "/diagnostico/testigo-presion-neumaticos-tpms",
  },
} as const;

export const NOVEMBER_2026_LONG_TAIL_GUIDES: readonly LongTailGuide[] = [
  {
    slug: "como-poner-cadenas-nieve-coche",
    query: "¿Cómo se ponen las cadenas de nieve y en qué ruedas?",
    cluster: "Nieve y cadenas",
    hub: HUBS.snow,
    seoTitle: "Cómo poner cadenas de nieve: ruedas, pasos y velocidad",
    description:
      "En qué ruedas se montan las cadenas según la tracción, cómo ponerlas paso a paso en un lugar seguro, a qué velocidad circular y cuándo quitarlas.",
    directAnswer:
      "Las cadenas se montan en las ruedas motrices: las delanteras en un coche de tracción delantera, las traseras en uno de propulsión, y en un 4x4 donde indique el manual. Detén el coche fuera de la calzada, pon el freno de mano, despliega la cadena por detrás de la rueda, une los extremos por dentro y por fuera, avanza medio metro y termina de tensarla. Circula despacio (la mayoría de fabricantes limita a 50 km/h), retensa tras los primeros cien metros y quítalas en cuanto la calzada quede sin nieve ni hielo.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "Paso a paso",
        paragraphs: [
          "Practica una vez en casa, en seco y con luz: con frío, guantes y nieve se tarda el triple. Así sabrás si la cadena es de tu medida y cómo se cierra.",
        ],
        list: [
          "Para en un área o apartadero, fuera de la calzada, con luces de emergencia, chaleco y la baliza V16 si estás en el arcén.",
          "Freno de mano y marcha engranada; gira el volante para tener acceso a la rueda.",
          "Desenreda la cadena y pásala por detrás del neumático, con los ganchos hacia fuera.",
          "Une primero el cierre interior y después el exterior.",
          "Avanza medio metro para que la cadena se asiente y tensa el cierre o el tensor.",
          "Tras unos cien metros, para y comprueba la tensión de nuevo.",
        ],
      },
      {
        title: "Fundas textiles y cadenas autotensables",
        paragraphs: [
          "Las fundas textiles se colocan desde la parte superior de la rueda, se avanza un poco y se termina de cubrir la parte que apoyaba en el suelo. Son más rápidas de montar, pero se gastan pronto sobre asfalto.",
          "Las cadenas autotensables o de montaje frontal cuestan más, pero se colocan sin meter las manos detrás de la rueda, algo que se agradece en coches con poco hueco en el paso de rueda.",
        ],
      },
    ],
    safety: [
      "Nunca montes las cadenas en un carril de circulación ni en una curva sin visibilidad.",
      "No circules con cadenas sobre asfalto seco: se rompen y pueden dañar llanta, frenos y sensores.",
      "Con cadenas, evita acelerones y frenazos: la tracción mejora, pero no hace milagros sobre hielo.",
    ],
    whenWorkshop: [
      "El manual indica que tu coche no admite cadenas convencionales y no sabes qué alternativa usar.",
      "Una cadena rota ha golpeado el paso de rueda o los latiguillos de freno.",
    ],
    faqs: [
      {
        question: "¿Se ponen cadenas en las cuatro ruedas?",
        answer:
          "No es obligatorio: basta con las ruedas motrices. En un 4x4 sigue lo que diga el manual; si tienes dos juegos, ponerlos en las cuatro mejora la frenada y el control.",
      },
      {
        question: "¿A qué velocidad se puede ir con cadenas?",
        answer:
          "La que marque el fabricante de la cadena o la funda, habitualmente 50 km/h como máximo, y siempre por debajo del límite que indique la vía según su estado.",
      },
    ],
    relatedSlugs: ["neumaticos-m-s-3pmsf-sirven-sin-cadenas"],
    sources: [SOURCES.circulationRules, SOURCES.winterSupplement, SOURCES.dgtWinterStates],
  },
  {
    slug: "neumaticos-m-s-3pmsf-sirven-sin-cadenas",
    query: "¿Con neumáticos de invierno o M+S puedo ir sin cadenas?",
    cluster: "Nieve y cadenas",
    hub: HUBS.snow,
    seoTitle: "Neumáticos M+S y 3PMSF: ¿sirven sin cadenas?",
    description:
      "Diferencia entre el marcado M+S y el símbolo de montaña con copo 3PMSF, cuándo sustituyen a las cadenas y en qué tramos de la DGT son la única opción.",
    directAnswer:
      "La norma acepta neumáticos especiales para nieve como alternativa a las cadenas, y en estado rojo pueden circular los turismos con neumáticos de invierno. El neumático que acredita agarre en nieve es el que lleva el símbolo de la montaña de tres picos con un copo (3PMSF), porque ha superado un ensayo homologado de tracción sobre nieve. El marcado M+S, solo, es una declaración del fabricante sin ese ensayo. En los tramos con túneles de la A-23 (Huesca), la A-67 (Cantabria) y la A-6 (Lugo), con estado rojo, el neumático de invierno es obligatorio y las cadenas están prohibidas.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "Cómo leer el flanco del neumático",
        paragraphs: [
          "Busca dos marcas en el flanco. M+S (o M&S) significa barro y nieve y aparece en muchos neumáticos de invierno, todo tiempo y de todoterreno. El 3PMSF es un pictograma de una montaña con tres picos y un copo de nieve dentro, y solo puede llevarlo el neumático que ha pasado la prueba de tracción en nieve.",
        ],
        list: [
          "Solo M+S: declaración del fabricante; agarre en nieve variable.",
          "3PMSF (con o sin M+S): ensayo de tracción en nieve superado.",
          "Neumático de verano sin marcas: necesitas cadenas o fundas con nieve.",
        ],
      },
      {
        title: "Invierno o todo tiempo",
        paragraphs: [
          "Un neumático de invierno usa un compuesto más blando y más laminillas, que trabajan mejor por debajo de unos 7 °C. Un todo tiempo con 3PMSF es un compromiso razonable si vives en una zona con nieve ocasional y no quieres cambiar de juego dos veces al año.",
          "Aunque lleves 3PMSF, conviene llevar cadenas o fundas si vas a puertos con nieve abundante o hielo: en pendientes pronunciadas pueden marcar la diferencia, salvo en los tramos donde se prohíben.",
        ],
      },
    ],
    safety: [
      "Un neumático de invierno con el dibujo gastado pierde gran parte de su ventaja: revisa la profundidad.",
      "Con hielo, ningún neumático sustituye a reducir mucho la velocidad.",
    ],
    whenWorkshop: [
      "Quieres montar neumáticos de invierno y necesitas saber si tu coche admite otra medida o llanta.",
      "Tras montar el juego de invierno se enciende el testigo de presión.",
    ],
    faqs: [
      {
        question: "¿Me multan si llevo M+S y no cadenas con la señal de cadenas obligatorias?",
        answer:
          "La norma admite neumáticos especiales para nieve, pero el marcado M+S por sí solo no acredita el agarre del 3PMSF. Si dudas, lleva cadenas o fundas certificadas además de los neumáticos.",
      },
      {
        question: "¿Los neumáticos todo tiempo valen en los tramos de túneles?",
        answer:
          "Si llevan el símbolo 3PMSF se consideran neumáticos aptos para nieve. Comprueba el flanco antes del viaje.",
      },
    ],
    relatedSlugs: ["como-poner-cadenas-nieve-coche"],
    sources: [SOURCES.dgtWinterStatesPdf, SOURCES.circulationRules, SOURCES.dgtTyres],
  },
  {
    slug: "cuanto-cuesta-cambio-nombre-coche",
    query: "¿Cuánto cuesta cambiar de nombre un coche de segunda mano?",
    cluster: "Comprar y vender",
    hub: HUBS.transfer,
    seoTitle: "Cuánto cuesta el cambio de nombre de un coche en 2026",
    description:
      "Lo que cuesta el cambio de titularidad de un coche usado en 2026: tasa de la DGT, ITP según las tablas de Hacienda por antigüedad, notificación de venta y gestoría.",
    directAnswer:
      "Entre un particular y otro pagas la tasa de transferencia de la DGT, de 55,70 euros, más el Impuesto de Transmisiones Patrimoniales de tu comunidad. El ITP se calcula sobre el valor fiscal del coche: el precio medio de su modelo en las tablas de Hacienda de 2026 multiplicado por un porcentaje que baja con los años, hasta el 10 % a partir de doce años. Con un tipo del 4 %, un coche de más de doce años y un precio medio de 18.000 euros paga 72 euros de ITP. Si encargas el trámite a una gestoría, añade sus honorarios. El vendedor paga aparte 8,67 euros por la notificación de venta.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "Porcentaje del valor según los años de uso",
        paragraphs: [
          "Estos son los porcentajes que se aplican al precio medio de venta que figura en las tablas de Hacienda para tu modelo. El resultado es el valor mínimo que Hacienda considera coherente para un coche de esa antigüedad.",
        ],
        list: [
          "Hasta 1 año: 100 %.",
          "De 1 a 2 años: 84 %. De 2 a 3: 67 %. De 3 a 4: 56 %.",
          "De 4 a 5 años: 47 %. De 5 a 6: 39 %. De 6 a 7: 34 %.",
          "De 7 a 8 años: 28 %. De 8 a 9: 24 %. De 9 a 10: 19 %.",
          "De 10 a 11 años: 17 %. De 11 a 12: 13 %. Más de 12: 10 %.",
        ],
      },
      {
        title: "Dónde encontrar el precio medio de tu coche",
        paragraphs: [
          "Las tablas se publican cada año en el BOE; para 2026 están en la Orden HAC/1501/2025. Muchas comunidades tienen además un buscador por marca, modelo y versión en su portal tributario, que calcula el valor directamente.",
          "Si el precio que has pagado es mayor que el valor de tablas, tributas por el precio pagado. Si es claramente menor, la administración puede revisarlo.",
        ],
      },
    ],
    safety: [
      "No firmes un contrato con un precio falso para pagar menos impuesto: el comprador es quien responde.",
    ],
    whenWorkshop: [
      "El precio es bajo por una avería: guarda el presupuesto o informe del taller para justificarlo.",
    ],
    faqs: [
      {
        question: "¿Un coche de más de 12 años paga ITP?",
        answer:
          "Sí, sobre el 10 % del precio medio de tablas o sobre el precio pagado si es mayor. Algunas comunidades aplican cuotas fijas o bonificaciones a coches antiguos: consulta la tuya.",
      },
      {
        question: "¿La tasa de 55,70 euros es igual en toda España?",
        answer:
          "Sí, es una tasa estatal de la DGT. Lo que cambia por comunidad es el ITP.",
      },
    ],
    relatedSlugs: ["informe-dgt-antes-de-comprar-coche"],
    sources: [SOURCES.dgtTransfer, SOURCES.averagePrices2026, SOURCES.itpLaw],
  },
  {
    slug: "testigo-presion-neumaticos-sigue-encendido",
    query: "¿Por qué sigue encendido el testigo de presión después de inflar las ruedas?",
    cluster: "Testigo de presión",
    hub: HUBS.tpms,
    seoTitle: "Testigo de presión sigue encendido tras inflar: causas",
    description:
      "Qué hacer si el testigo de presión de neumáticos no se apaga después de inflar: reinicio del sistema, rueda de repuesto, sensor sin pila o fallo del sistema.",
    directAnswer:
      "Lo más habitual es que no se haya reiniciado el sistema o que no hayas circulado lo suficiente para que aprenda las nuevas presiones: reinícialo desde el botón o el menú y conduce unos kilómetros a velocidad constante. Si sigue encendido, revisa que las presiones sean las del fabricante para la carga que llevas y que no haya un pinchazo lento. Si aun así no se apaga o parpadea, lo normal es un sensor con la pila agotada o dañado, o un fallo del sistema, y necesitas un taller con equipo de diagnosis.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "Comprobaciones por orden",
        paragraphs: [
          "Hazlas en este orden: las primeras son gratis y resuelven la mayoría de casos.",
        ],
        list: [
          "Reinicia el sistema con las cuatro ruedas ya infladas y circula unos kilómetros.",
          "Comprueba la presión otra vez al día siguiente, en frío: si una rueda ha vuelto a bajar, hay pinchazo lento.",
          "Mira si tu coche mide también la rueda de repuesto.",
          "Revisa que usas la presión correcta: muchos coches tienen un valor para carga normal y otro para carga completa.",
          "Si el testigo parpadea, el aviso es del sistema, no de la presión.",
        ],
      },
      {
        title: "Sensor sin pila o ruedas nuevas",
        paragraphs: [
          "En los sistemas directos, la pila del sensor dura entre cinco y siete años según el RACE y no se cambia por separado. Si el coche tiene esa edad y el aviso aparece sin causa, es el sospechoso principal. También pasa al montar llantas o neumáticos de invierno sin sensores o sin programarlos en la centralita.",
        ],
      },
    ],
    safety: [
      "No ignores el testigo durante semanas: si un día pierdes aire de verdad, no te enterarás.",
    ],
    whenWorkshop: [
      "El testigo parpadea o sigue fijo con las presiones correctas tras reiniciar.",
      "Has cambiado ruedas o llantas y el sistema no las reconoce.",
    ],
    faqs: [
      {
        question: "¿Pasa la ITV con el testigo de presión encendido?",
        answer:
          "La Directiva 2014/45/UE, que fija los defectos de la ITV, incluye el mal funcionamiento del sistema de control de presión entre los defectos de los neumáticos. Lo prudente es resolverlo antes de ir.",
      },
      {
        question: "¿Cuánto cuesta cambiar un sensor de presión?",
        answer:
          "El RACE estima entre 40 y 120 euros por rueda, según el coche y el sensor, más la programación.",
      },
    ],
    relatedSlugs: ["neumaticos-m-s-3pmsf-sirven-sin-cadenas"],
    sources: [SOURCES.raceTpms, SOURCES.raceTpmsLight, SOURCES.euRoadworthiness],
  },
];
