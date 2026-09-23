import type { Article, PrimarySource } from "@/lib/articles";

// Guías añadidas el 23 de septiembre de 2026 para ampliar las secciones de
// mantenimiento e ITV, que tenían menos cobertura que la de batería.
const ACCESSED_AT = "2026-09-23";
const PUBLISHED_AT = "2026-09-23";

const sources = {
  itvLaw: {
    name: "Real Decreto 920/2017, por el que se regula la ITV",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2017-12841",
    accessedAt: ACCESSED_AT,
  },
  itvPortal: {
    name: "Inspección Técnica de Vehículos: normativa, manual y estadísticas",
    publisher: "Ministerio de Industria y Turismo",
    url: "https://industria.gob.es/Calidad-Industrial/vehiculos/Paginas/inspeccion-tecnica-vehiculos.aspx",
    accessedAt: ACCESSED_AT,
  },
  environmentalLabel: {
    name: "Distintivo ambiental",
    publisher: "Dirección General de Tráfico",
    url: "https://www.dgt.es/nuestros-servicios/tu-vehiculo/tus-vehiculos/distintivo-ambiental/",
    accessedAt: ACCESSED_AT,
  },
  climateLaw: {
    name: "Ley 7/2021, de cambio climático y transición energética",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2021-8447",
    accessedAt: ACCESSED_AT,
  },
  lowEmissionDecree: {
    name: "Real Decreto 1052/2022, por el que se regulan las zonas de bajas emisiones",
    publisher: "Boletín Oficial del Estado",
    url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2022-22689",
    accessedAt: ACCESSED_AT,
  },
  lowEmissionZones: {
    name: "Las zonas de bajas emisiones en España",
    publisher: "Ministerio para la Transición Ecológica y el Reto Demográfico",
    url: "https://www.miteco.gob.es/es/calidad-y-evaluacion-ambiental/temas/movilidad/zonas_de_bajas_emisiones_en_espana.html",
    accessedAt: ACCESSED_AT,
  },
  oilLevel: {
    name: "Revisar el nivel de aceite: fácil pero importante",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/noticias/2017/0803-Consejos-cambio-de-aceite.shtml",
    accessedAt: ACCESSED_AT,
  },
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
  timingBelt: {
    name: "Cadena de distribución del coche: qué es y cada cuánto se cambia",
    publisher: "RACE",
    url: "https://www.race.es/cadena-correa-distribucion-coche-funcionamiento-rotura",
    accessedAt: ACCESSED_AT,
  },
  brakeFluid: {
    name: "Líquidos de frenos",
    publisher: "HELLA Tech World",
    url: "https://www.hella.com/techworld/es/lineas-de-producto/sistemas-de-frenos/liquidos-de-frenos/",
    accessedAt: ACCESSED_AT,
  },
} satisfies Record<string, PrimarySource>;

export const itvAndMaintenanceArticles: readonly Article[] = [
  {
    slug: "itv-frecuencia-desfavorable-negativa",
    category: "itv-normativa",
    title:
      "ITV de un coche de más de 10 años: frecuencia, resultado desfavorable o negativo y plazos",
    seoTitle: "ITV coche de más de 10 años: frecuencia y plazos",
    description:
      "Cada cuánto pasa la ITV un turismo con años, cuándo puedes adelantarla sin perder fecha y qué implica un resultado desfavorable o negativo.",
    eyebrow: "ITV y normativa · Plazos",
    summary:
      "Un turismo particular con más de diez años pasa la ITV cada año. Lo que más dudas genera no es la frecuencia, sino qué hacer cuando la inspección no es favorable: qué puedes mover, en qué plazo y qué pasa con los defectos leves.",
    directAnswer:
      "Un turismo de uso particular está exento hasta los 4 años, pasa la ITV cada 2 años entre los 4 y los 10 y cada año a partir de los 10. Puedes adelantarla hasta 30 días naturales sin perder la fecha. Con defectos leves el resultado es favorable, pero debes repararlos. Con defectos graves es desfavorable: solo puedes ir al taller y volver a la estación. Con defectos muy graves es negativa: el coche no puede circular y debe trasladarse por otros medios. En ambos casos tienes un máximo de dos meses para la segunda inspección.",
    readingMinutes: 8,
    sections: [
      {
        id: "frecuencia",
        heading: "Cada cuánto toca: la tabla que aplica a un turismo particular",
        paragraphs: [
          "El Real Decreto 920/2017 fija la periodicidad según la categoría del vehículo y su antigüedad, contada desde la primera matriculación. Para un turismo (categoría M1) de uso particular, la regla es sencilla: exento durante los cuatro primeros años, bienal entre los cuatro y los diez, y anual a partir de los diez.",
          "Si tu coche tiene más de diez años, por tanto, cada inspección favorable te da un año de validez. Los turismos dedicados a taxi, ambulancia o transporte escolar siguen un calendario más exigente, así que no apliques esta tabla si el vehículo tiene un uso distinto del particular.",
        ],
        bullets: [
          "Hasta 4 años: exento.",
          "De 4 a 10 años: cada 2 años.",
          "Más de 10 años: cada año.",
        ],
      },
      {
        id: "adelantar",
        heading: "Adelantar la inspección sin perder días de validez",
        paragraphs: [
          "El mismo reglamento permite pasar la ITV dentro de los 30 días naturales anteriores a su caducidad y calcular la nueva validez desde la fecha de caducidad anterior, no desde el día en que acudes. En la práctica, eso significa que reservar con algo de margen no te penaliza.",
          "Si la pasas antes de esos 30 días, la nueva validez se cuenta desde el día de la inspección favorable y pierdes el tiempo restante. Consulta la fecha exacta en la tarjeta ITV o en el último informe, no en la memoria.",
        ],
        callout: {
          tone: "info",
          title: "Reserva con margen",
          text: "Pedir cita tres o cuatro semanas antes te deja tiempo para reparar un defecto grave y volver a la estación sin circular con la ITV caducada.",
        },
      },
      {
        id: "resultados",
        heading: "Favorable, desfavorable o negativa: qué significa cada resultado",
        paragraphs: [
          "El resultado depende de la clasificación de los defectos detectados según el Manual de Procedimiento de Inspección. Un defecto leve no impide un resultado favorable; uno grave lo convierte en desfavorable; uno muy grave, en negativa.",
          "Con defectos leves, la inspección es favorable y no hace falta volver a la estación, pero el titular debe repararlos. No es una recomendación opcional: la estación lo anota en el informe y suele tratarse de un desgaste que conviene resolver antes de que vaya a más.",
          "Con un resultado desfavorable, el vehículo queda inhabilitado para circular salvo para ir al taller y volver a la estación para la segunda inspección. Con un resultado negativo, el vehículo no puede circular por sus propios medios: hay que trasladarlo en grúa o de otra forma hasta el taller y, después, a la estación.",
        ],
      },
      {
        id: "segunda-inspeccion",
        heading: "La segunda inspección: plazo de dos meses",
        paragraphs: [
          "Tras una inspección desfavorable o negativa, dispones de un plazo máximo de dos meses, contados desde la primera inspección, para presentar el vehículo reparado. En esa segunda visita la estación comprueba los defectos señalados en el informe.",
          "Si se supera el plazo, lo habitual es tener que realizar una inspección completa nueva con su tarifa correspondiente. Las condiciones concretas pueden variar entre comunidades autónomas y empresas concesionarias, así que confirma con tu estación cómo gestiona una reinspección fuera de plazo.",
        ],
        bullets: [
          "Guarda el informe de la primera inspección y llévalo a la segunda.",
          "Pide al taller una factura que describa la reparación de cada defecto.",
          "Si el defecto era de alumbrado o neumáticos, compruébalo tú antes de volver.",
        ],
      },
      {
        id: "documentacion",
        heading: "Qué llevar y cómo prepararla",
        paragraphs: [
          "Lleva el permiso de circulación y la tarjeta ITV (ficha técnica), o su versión electrónica si tu estación la admite. Algunas estaciones piden también el justificante del seguro obligatorio o datos del titular; revisa la confirmación de la cita.",
          "La tarifa depende de la comunidad autónoma, la estación y el tipo de combustible. Compara estaciones cercanas si tu comunidad tiene varias concesionarias y reserva en su canal oficial.",
          "Para preparar la parte técnica, repasa nuestra checklist de ITV: luces, neumáticos, limpiaparabrisas, cinturones, testigos y fugas. Si hay síntomas en frenos, dirección o emisiones, resuélvelos en el taller antes de la cita.",
        ],
      },
      {
        id: "caducada",
        heading: "Circular con la ITV caducada",
        paragraphs: [
          "Circular sin una inspección en vigor es una infracción según la normativa de tráfico, y también lo es moverse fuera de los trayectos que permite un resultado desfavorable o circular con uno negativo. Además de la sanción, un defecto de seguridad sin revisar es el verdadero riesgo.",
          "Si la ITV ya ha caducado, el único trayecto razonable es el que va a la estación con cita o al taller. Si sospechas que el vehículo no es seguro, no lo muevas: solicita asistencia en carretera.",
        ],
        callout: {
          tone: "caution",
          title: "El distintivo no sustituye al informe",
          text: "La pegatina del parabrisas indica la validez, pero el informe detalla los defectos leves que debes reparar. Léelo completo aunque el resultado sea favorable.",
        },
      },
    ],
    dangerSignals: [
      {
        signal: "Resultado negativo por frenos, dirección o estructura",
        action: "No conduzcas el coche al taller: pide traslado en grúa.",
      },
      {
        signal: "Fuga de combustible o de líquido de frenos señalada en el informe",
        action: "Inmoviliza el vehículo hasta que se repare.",
      },
      {
        signal: "Neumático con daños o lona visible",
        action: "Sustitúyelo antes de cualquier desplazamiento.",
      },
    ],
    safeSteps: [
      {
        title: "Comprueba la fecha de caducidad",
        detail:
          "Búscala en la tarjeta ITV o en el último informe y reserva dentro de los 30 días previos.",
      },
      {
        title: "Haz una revisión visual previa",
        detail:
          "Luces, neumáticos, escobillas, cinturones y testigos, con el coche parado.",
      },
      {
        title: "Lee el informe completo",
        detail:
          "Anota los defectos leves aunque el resultado sea favorable y planifica su reparación.",
      },
      {
        title: "Organiza la segunda inspección",
        detail:
          "Si es desfavorable, repara y vuelve dentro de dos meses con el informe y la factura.",
      },
    ],
    workshop: {
      introduction:
        "El taller debe reparar lo que indica el informe, no lo que parezca suficiente para pasar. Pide que la factura identifique cada defecto corregido.",
      urgent: [
        "Defectos muy graves que impiden circular.",
        "Frenos con desequilibrio o eficacia insuficiente.",
        "Holguras de dirección o rótulas.",
      ],
      appointment: [
        "Emisiones fuera de límites.",
        "Defectos leves repetidos en varias inspecciones.",
        "Corrosión en bajos que aún no es estructural.",
      ],
      usefulInformation: [
        "Informe de la ITV con la lista de defectos y su clasificación.",
        "Ficha técnica y reformas anotadas.",
        "Fecha límite de la segunda inspección.",
      ],
    },
    faqs: [
      {
        question: "¿Mi coche de 12 años pasa la ITV cada año o cada dos?",
        answer:
          "Cada año. Para un turismo particular, la periodicidad anual empieza cuando supera los diez años desde su primera matriculación.",
      },
      {
        question: "¿Pierdo días si paso la ITV antes de que caduque?",
        answer:
          "No, si la pasas dentro de los 30 días naturales previos a la caducidad. En ese caso la nueva validez se cuenta desde la fecha de caducidad anterior.",
      },
      {
        question: "¿Puedo conducir hasta casa con una ITV desfavorable?",
        answer:
          "El reglamento solo permite los trayectos al taller y de vuelta a la estación. Consulta el informe y las indicaciones de la estación antes de moverte.",
      },
      {
        question: "¿Tengo que volver a la ITV por un defecto leve?",
        answer:
          "No. La inspección es favorable, pero el titular debe reparar el defecto. Conviene hacerlo cuanto antes y conservar la factura.",
      },
    ],
    relatedSlugs: [
      "checklist-itv-coche-antiguo",
      "etiqueta-ambiental-coche-antiguo",
      "revisar-frenos-liquido-pastillas-discos",
      "neumaticos-dot-desgaste-presion",
    ],
    sources: [sources.itvLaw, sources.itvPortal],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "etiqueta-ambiental-coche-antiguo",
    category: "itv-normativa",
    title:
      "Etiqueta ambiental de un coche antiguo: B, C o sin distintivo y qué supone en las zonas de bajas emisiones",
    seoTitle: "Etiqueta DGT de un coche antiguo: B, C o sin etiqueta",
    description:
      "Qué distintivo ambiental corresponde a un coche de gasolina o diésel con años, cómo comprobarlo por matrícula y cómo afectan las zonas de bajas emisiones.",
    eyebrow: "ITV y normativa · Distintivo ambiental",
    summary:
      "La etiqueta de la DGT depende del combustible y de la norma de emisiones Euro con la que se homologó el coche. La fecha de matriculación orienta, pero la consulta oficial por matrícula es la que manda. Lo que cambia de verdad tu día a día son las ordenanzas de cada zona de bajas emisiones.",
    directAnswer:
      "Según la DGT, un turismo de gasolina matriculado desde el 1 de enero de 2001 suele tener etiqueta B y desde enero de 2006, C. Un diésel matriculado desde 2006 suele tener B y desde septiembre de 2015, C. Los anteriores quedan sin distintivo. Comprueba la clasificación exacta con la matrícula en la sede de la DGT y consulta la ordenanza de cada ciudad antes de entrar en su zona de bajas emisiones.",
    readingMinutes: 8,
    sections: [
      {
        id: "criterios",
        heading: "Cómo clasifica la DGT a un coche de gasolina o diésel",
        paragraphs: [
          "El distintivo ambiental divide el parque en cuatro categorías con etiqueta (0, ECO, C y B) y un grupo sin distintivo. Para coches de combustión sin electrificación, la clave es la norma Euro de homologación. La DGT resume esa norma con fechas de matriculación de referencia, que son las que suelen citarse.",
          "Esas fechas son una aproximación: un coche matriculado justo antes o después del cambio de norma puede estar homologado con la anterior o con la siguiente. La ficha técnica y, sobre todo, la consulta oficial por matrícula resuelven la duda.",
        ],
        bullets: [
          "Gasolina, etiqueta B: matriculados desde el 1 de enero de 2001.",
          "Gasolina, etiqueta C: matriculados desde enero de 2006.",
          "Diésel, etiqueta B: matriculados desde 2006.",
          "Diésel, etiqueta C: matriculados desde septiembre de 2015.",
          "Sin distintivo: gasolina anteriores a 2001 y diésel anteriores a 2006.",
        ],
      },
      {
        id: "comprobar",
        heading: "Comprobarlo por matrícula y conseguir la pegatina",
        paragraphs: [
          "La DGT ofrece una consulta en su sede electrónica con la matrícula del vehículo. Si el resultado no coincide con lo que esperas por la fecha, revisa la ficha técnica: la norma Euro o la fecha de homologación pueden aclararlo. Si crees que hay un error, la vía es la Jefatura de Tráfico, no la pegatina.",
          "La pegatina cuesta 5 euros según la DGT, a los que algunos puntos de venta añaden gastos de gestión o envío. Se puede adquirir en oficinas de Correos, talleres autorizados y otros establecimientos adheridos. La DGT recomienda colocarla en el parabrisas delantero y algunas ordenanzas municipales exigen exhibirla.",
        ],
        callout: {
          tone: "info",
          title: "La cámara lee la matrícula",
          text: "Los accesos controlados suelen identificar el vehículo por matrícula y consultar su clasificación. La pegatina ayuda a los agentes, pero no cambia la categoría asignada.",
        },
      },
      {
        id: "zbe",
        heading: "Zonas de bajas emisiones: quién está obligado y qué decide cada ciudad",
        paragraphs: [
          "La Ley 7/2021 de cambio climático obliga a los municipios de más de 50.000 habitantes, a los territorios insulares y a los de más de 20.000 habitantes que superen los valores límite de calidad del aire a establecer zonas de bajas emisiones. El Real Decreto 1052/2022 fija requisitos mínimos comunes, pero deja a cada ayuntamiento el diseño concreto.",
          "Por eso no existe una respuesta nacional a «¿puedo entrar con etiqueta B?». Cada ordenanza define el perímetro, los horarios, las categorías permitidas, las moratorias, las excepciones para residentes, personas con movilidad reducida o vehículos históricos, y el régimen sancionador.",
        ],
        bullets: [
          "Busca la ordenanza de la ciudad de destino, no un resumen de otra.",
          "Revisa si hay fases o fechas de entrada en vigor escalonadas.",
          "Comprueba excepciones: aparcamientos públicos, residentes, talleres o servicios.",
          "Ten en cuenta aparcamientos disuasorios y transporte público en el perímetro.",
        ],
      },
      {
        id: "opciones",
        heading: "Qué opciones tiene un coche sin etiqueta o con etiqueta B",
        paragraphs: [
          "Antes de cambiar de coche por la etiqueta, calcula cuántas veces entras realmente en una zona restringida y qué alternativas tienes. Para muchos propietarios de coches con años, la respuesta es combinar el coche para trayectos interurbanos con aparcamiento en el perímetro y transporte público dentro.",
          "Un coche con al menos 30 años que cumpla los requisitos puede catalogarse como vehículo histórico, y algunas ordenanzas prevén excepciones para ellos. No es un trámite pensado para esquivar restricciones: exige que el vehículo conserve sus características originales y conlleva sus propias condiciones.",
          "Una transformación a gas (GLP o GNC) debidamente homologada y anotada en la ficha puede modificar la clasificación. Consulta a un instalador autorizado y a la DGT antes de invertir, porque el resultado depende del vehículo concreto.",
        ],
        callout: {
          tone: "caution",
          title: "No manipules el sistema de escape",
          text: "Retirar el catalizador o el filtro de partículas no cambia la etiqueta y puede provocar un resultado desfavorable en la ITV, además de aumentar las emisiones.",
        },
      },
      {
        id: "mantenimiento",
        heading: "La etiqueta no dice cuánto contamina tu coche hoy",
        paragraphs: [
          "El distintivo refleja la homologación de origen. Un coche con etiqueta C mal mantenido puede emitir más que uno con etiqueta B en buen estado. El control real del estado del motor llega en la ITV, con la prueba de emisiones.",
          "Si la ITV te marca emisiones altas, revisa nuestra guía sobre humo del escape y la respuesta sobre gases altos en un gasolina antiguo antes de probar aditivos.",
        ],
      },
    ],
    dangerSignals: [],
    safeSteps: [
      {
        title: "Consulta por matrícula",
        detail:
          "Usa la sede electrónica de la DGT para conocer la clasificación oficial.",
      },
      {
        title: "Contrasta con la ficha técnica",
        detail:
          "Si no coincide con lo esperado, revisa la norma Euro y la fecha de homologación.",
      },
      {
        title: "Lee la ordenanza de destino",
        detail:
          "Perímetro, horarios, categorías permitidas, excepciones y sanciones.",
      },
      {
        title: "Planifica el acceso",
        detail:
          "Aparcamiento en el perímetro o transporte público cuando tu categoría no pueda entrar.",
      },
    ],
    workshop: {
      introduction:
        "Un taller no puede cambiar la etiqueta de un coche, pero sí ayudarte a mantener las emisiones dentro de lo exigible en la ITV o a valorar una transformación homologada.",
      urgent: [
        "Testigo de motor encendido o parpadeando.",
        "Humo abundante o pérdida de potencia.",
      ],
      appointment: [
        "Emisiones altas en la última ITV.",
        "Consulta sobre transformación a GLP homologada.",
      ],
      usefulInformation: [
        "Ficha técnica con la norma Euro.",
        "Informe de emisiones de la última ITV.",
        "Uso habitual: kilómetros al año y trayectos urbanos.",
      ],
    },
    faqs: [
      {
        question: "¿Mi gasolina de 2004 tiene etiqueta?",
        answer:
          "Por fecha le correspondería la B, pero la consulta por matrícula en la DGT es la que confirma la categoría asignada.",
      },
      {
        question: "¿Es obligatorio llevar la pegatina?",
        answer:
          "Depende de la ciudad. La DGT recomienda colocarla y algunas ordenanzas exigen exhibirla. Consulta la normativa municipal de los lugares por donde circules.",
      },
      {
        question: "¿Puedo cambiar la etiqueta pasando la ITV con buenas emisiones?",
        answer:
          "No. La etiqueta depende de la homologación, no del resultado de una prueba concreta.",
      },
      {
        question: "¿Todas las ciudades de más de 50.000 habitantes prohíben entrar sin etiqueta?",
        answer:
          "No necesariamente. Están obligadas a establecer una zona de bajas emisiones, pero cada ayuntamiento decide sus restricciones, fases y excepciones.",
      },
    ],
    relatedSlugs: [
      "itv-frecuencia-desfavorable-negativa",
      "checklist-itv-coche-antiguo",
      "humo-blanco-azul-negro-escape",
      "mantenimiento-coche-10-15-20-anos",
    ],
    sources: [
      sources.environmentalLabel,
      sources.climateLaw,
      sources.lowEmissionDecree,
      sources.lowEmissionZones,
    ],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "aceite-motor-nivel-consumo-cambio",
    category: "mantenimiento",
    title:
      "Aceite del motor en un coche con años: nivel, consumo e intervalo de cambio",
    seoTitle: "Aceite del motor en un coche antiguo: nivel y cambio",
    description:
      "Cómo comprobar el nivel de aceite, cuánto consumo es razonable, cuándo cambiarlo aunque hagas pocos kilómetros y cómo elegir la especificación correcta.",
    eyebrow: "Mantenimiento · Lubricación",
    summary:
      "En un motor con muchos años, el aceite es el mantenimiento más barato y el que más avería evita. Revisarlo a menudo, usar la especificación del fabricante y no alargar el cambio por hacer pocos kilómetros son las tres decisiones que importan.",
    directAnswer:
      "Comprueba el nivel una vez al mes y antes de un viaje, con el coche en llano y siguiendo el manual. Mantén el nivel entre las marcas de mínimo y máximo, sin pasarte. Cambia aceite y filtro según el plan del fabricante, por kilómetros o por tiempo, lo que llegue antes; en uso urbano con trayectos cortos suele aplicar el intervalo de uso severo. Usa la viscosidad y la homologación que indica el manual, no solo la marca.",
    readingMinutes: 9,
    sections: [
      {
        id: "comprobar-nivel",
        heading: "Comprobar el nivel bien, no solo a menudo",
        paragraphs: [
          "La DGT aconseja revisar el nivel una vez al mes y siempre antes de salir de viaje. Aparca en una superficie llana, detén el motor y espera el tiempo que indique el manual para que el aceite baje al cárter. Saca la varilla, límpiala, introdúcela hasta el fondo y vuelve a sacarla para leer el nivel.",
          "Lo correcto es que la marca quede entre el mínimo y el máximo. En muchos motores la distancia entre ambas marcas equivale aproximadamente a un litro, pero no es universal: el manual indica la cantidad exacta. Si tu coche no tiene varilla y mide el nivel electrónicamente, sigue el procedimiento del cuadro de instrumentos.",
        ],
        bullets: [
          "Coche en llano y motor parado.",
          "Varilla limpia antes de leer.",
          "Añade poco a poco y vuelve a medir.",
          "Nunca por encima de la marca de máximo.",
        ],
      },
      {
        id: "demasiado-aceite",
        heading: "Pasarse de nivel también es un problema",
        paragraphs: [
          "Rellenar «por si acaso» por encima del máximo no protege más. El exceso puede provocar que el cigüeñal agite el aceite y forme espuma, aumentar la presión sobre retenes y juntas y, en motores con catalizador o filtro de partículas, acabar parte del aceite en el sistema de escape.",
          "Si te has pasado, lo prudente es extraer el exceso antes de circular. Un taller puede hacerlo por succión o por el tapón de vaciado.",
        ],
      },
      {
        id: "consumo",
        heading: "Cuánto aceite puede consumir un motor con años",
        paragraphs: [
          "Todo motor consume algo de aceite, y un motor desgastado consume más. Los fabricantes suelen indicar en el manual un consumo máximo que consideran admisible. La forma de saber si el tuyo está dentro es medirlo: completa hasta el máximo, anota los kilómetros y revisa cada 1.000 km con el mismo procedimiento.",
          "Un consumo que aumenta rápidamente, humo azulado, bujías o manchas de aceite, o goteo bajo el coche son motivos para diagnosticar. Distingue consumo (el aceite se quema) de fuga (el aceite sale): la solución y el riesgo son distintos.",
        ],
        callout: {
          tone: "important",
          title: "Testigo rojo de presión de aceite",
          text: "Si se enciende el testigo rojo de presión de aceite en marcha, detén el motor en cuanto sea seguro. No es un aviso de nivel bajo que se pueda ignorar hasta la gasolinera.",
        },
      },
      {
        id: "intervalo",
        heading: "Cada cuánto cambiarlo: kilómetros o tiempo, lo que llegue antes",
        paragraphs: [
          "El intervalo lo fija el fabricante. Según la DGT, suele estar entre 5.000 y 30.000 km, un rango tan amplio porque depende del motor, del aceite exigido y del tipo de plan (fijo o variable). Además del kilometraje, casi todos los planes marcan un límite de tiempo, porque el aceite envejece aunque el coche apenas se mueva.",
          "Muchos coches con años hacen pocos kilómetros y en trayectos cortos. Ese uso, con el motor que no llega a calentarse del todo, favorece la condensación y la dilución de combustible en el aceite. Los manuales suelen tratarlo como uso severo, con intervalos más cortos. Si tu coche hace 4.000 km al año, lo razonable es cambiar el aceite por tiempo, no esperar a los kilómetros.",
        ],
        bullets: [
          "Cambia siempre el filtro de aceite con el aceite.",
          "Sustituye la arandela del tapón de vaciado si el fabricante lo indica.",
          "Anota fecha, kilómetros y especificación en el historial.",
        ],
      },
      {
        id: "especificacion",
        heading: "Viscosidad y homologación: lo que debe coincidir",
        paragraphs: [
          "Un aceite se describe por su grado de viscosidad, por ejemplo 5W-30, y por las normas que cumple, como las especificaciones ACEA o las homologaciones propias de cada fabricante. En motores modernos con filtro de partículas, la homologación puede ser tan importante como la viscosidad, porque determina el contenido en cenizas.",
          "Cambiar a un aceite más espeso porque el motor «ya es viejo» no es una reparación. Puede enmascarar un consumo o un ruido, y en algunos motores empeora la lubricación en frío o afecta a tensores hidráulicos. Si el manual admite varias viscosidades según clima, elige dentro de esa tabla.",
        ],
      },
      {
        id: "aceite-usado",
        heading: "Qué hacer con el aceite usado",
        paragraphs: [
          "El aceite usado es un residuo peligroso. Si cambias el aceite tú, recógelo en un recipiente cerrado y llévalo a un punto limpio o a un taller que lo acepte. Nunca lo viertas al desagüe ni a la tierra.",
          "Si lo hace un taller, la gestión del residuo forma parte del servicio. Pide que la factura detalle la cantidad y la especificación del aceite, y la referencia del filtro.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Testigo rojo de presión de aceite encendido en marcha",
        action: "Detén el motor en cuanto sea seguro y no vuelvas a arrancarlo sin comprobar.",
      },
      {
        signal: "Charco de aceite bajo el motor o goteo constante",
        action: "No circules hasta localizar la fuga y comprobar el nivel.",
      },
      {
        signal: "Ruido metálico que aumenta con las revoluciones",
        action: "Para el motor y solicita asistencia.",
      },
    ],
    safeSteps: [
      {
        title: "Lee el nivel con el procedimiento correcto",
        detail: "En llano, motor parado, varilla limpia y lectura entre marcas.",
      },
      {
        title: "Comprueba la especificación en el manual",
        detail: "Viscosidad y homologación; lleva la referencia al comprar.",
      },
      {
        title: "Mide el consumo durante 1.000 km",
        detail: "Completa hasta el máximo, anota los kilómetros y repite.",
      },
      {
        title: "Registra cada cambio",
        detail: "Fecha, kilómetros, aceite, filtro y taller en el historial.",
      },
    ],
    workshop: {
      introduction:
        "Un cambio de aceite es un buen momento para que el taller revise fugas, estado de correas auxiliares y otros niveles.",
      urgent: [
        "Testigo de presión de aceite encendido.",
        "Fuga importante o nivel que baja de forma rápida.",
        "Aceite con aspecto lechoso o con olor intenso a combustible.",
      ],
      appointment: [
        "Consumo creciente entre revisiones.",
        "Humo azulado al acelerar o al arrancar.",
        "Intervalo de cambio superado por tiempo o kilómetros.",
      ],
      usefulInformation: [
        "Kilómetros y fecha del último cambio.",
        "Cantidad de aceite añadida entre cambios.",
        "Tipo de uso: trayectos cortos, ciudad, remolque.",
      ],
    },
    faqs: [
      {
        question: "¿Tengo que cambiar el aceite si apenas hago kilómetros?",
        answer:
          "Sí. Casi todos los planes de mantenimiento fijan también un límite de tiempo. Con trayectos cortos, el aceite se degrada aunque el cuentakilómetros avance poco.",
      },
      {
        question: "¿Puedo mezclar aceites de marcas distintas?",
        answer:
          "Para completar el nivel en una emergencia, un aceite de la misma especificación es aceptable. En el siguiente cambio vuelve a un único aceite correcto.",
      },
      {
        question: "¿El aceite oscuro significa que hay que cambiarlo?",
        answer:
          "No necesariamente. En diésel el aceite se oscurece enseguida. Guíate por el intervalo, el nivel y el olor, no solo por el color.",
      },
      {
        question: "¿Un aditivo reduce el consumo de aceite?",
        answer:
          "No resuelve la causa. Si el consumo aumenta, hay que diagnosticar si es desgaste, un retén, la ventilación del cárter o el turbo.",
      },
    ],
    relatedSlugs: [
      "mantenimiento-coche-10-15-20-anos",
      "humo-blanco-azul-negro-escape",
      "correa-distribucion-cuando-cambiar",
      "testigos-coche-significado",
    ],
    sources: [sources.oilLevel, sources.mechanicsManual, sources.roadsideReview],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "correa-distribucion-cuando-cambiar",
    category: "mantenimiento",
    title:
      "Correa de distribución en un coche de segunda mano: cuándo cambiarla si no hay factura",
    seoTitle: "Correa de distribución: cuándo cambiarla",
    description:
      "Cómo saber si tu motor lleva correa o cadena, qué intervalo aplicar por kilómetros y años, qué incluye el kit y qué hacer cuando no hay historial.",
    eyebrow: "Mantenimiento · Distribución",
    summary:
      "La correa de distribución rara vez avisa antes de romperse, y en muchos motores su rotura causa una avería grave. En un coche con años, la pregunta no es si suena rara, sino cuándo se cambió por última vez y si hay una factura que lo demuestre.",
    directAnswer:
      "Cambia la correa según el intervalo del fabricante, por kilómetros o por años, lo que llegue antes. El RACE sitúa lo habitual en unos 150.000 km o 10 años, pero muchos motores antiguos tienen intervalos más cortos. Si compras un coche usado sin factura que acredite el cambio, considéralo pendiente. Sustituye el kit completo, con tensor y rodillos, y valora la bomba de agua si la mueve la correa.",
    readingMinutes: 9,
    sections: [
      {
        id: "correa-o-cadena",
        heading: "Primero: ¿tu motor lleva correa o cadena?",
        paragraphs: [
          "La distribución sincroniza el cigüeñal con el árbol o árboles de levas para que las válvulas abran y cierren en el momento exacto. Puede hacerse con una correa dentada de goma reforzada o con una cadena metálica. El manual de mantenimiento, el taller o la referencia del motor lo confirman.",
          "No lo deduzcas por la marca o la edad del coche: un mismo modelo puede montar motores con correa y con cadena según la versión. Anota la referencia del motor, que aparece en la ficha técnica o en la placa del bloque.",
        ],
      },
      {
        id: "intervalo",
        heading: "Intervalo: kilómetros y años, lo que llegue antes",
        paragraphs: [
          "La correa se desgasta con el uso, pero también envejece con el tiempo aunque el coche apenas se mueva. Por eso los fabricantes indican dos límites. El RACE señala que lo normal es cambiarla cada 150.000 km o cada diez años, lo que antes suceda, y recuerda que las correas modernas duran más que las de generaciones anteriores.",
          "Eso significa que un coche de hace 20 años puede tener un intervalo bastante más corto que esa referencia. Consulta el plan del fabricante para tu motor concreto y aplica el límite de años aunque hagas pocos kilómetros.",
        ],
        callout: {
          tone: "important",
          title: "Sin factura, sin certeza",
          text: "Una pegatina en el vano motor o una afirmación del vendedor no acreditan el cambio. Si no hay factura con fecha, kilómetros y piezas, planifica la sustitución.",
        },
      },
      {
        id: "que-pasa-si-se-rompe",
        heading: "Qué pasa si se rompe",
        paragraphs: [
          "Si la correa se rompe con el motor en marcha, el motor se detiene y el coche pierde la asistencia de algunos sistemas. En los motores llamados de interferencia, además, pistones y válvulas pueden chocar, lo que suele obligar a reparar la culata y, a veces, el motor completo.",
          "Por eso el cambio preventivo sale a cuenta: la sustitución a tiempo tiene un coste previsible y la rotura, no.",
        ],
      },
      {
        id: "kit",
        heading: "Qué debe incluir el cambio",
        paragraphs: [
          "Según el RACE, hay que sustituir el kit de distribución completo, incluidos el tensor y los rodillos. Montar una correa nueva sobre un tensor desgastado es arriesgar la pieza nueva.",
          "Si la bomba de agua está accionada por la correa de distribución, muchos talleres recomiendan cambiarla a la vez: el acceso ya está hecho y una fuga posterior obligaría a desmontar de nuevo. Revisa también retenes cercanos si muestran aceite.",
        ],
        bullets: [
          "Correa dentada.",
          "Tensor y rodillos guía.",
          "Bomba de agua, si la mueve la correa.",
          "Refrigerante nuevo si se vacía el circuito.",
        ],
      },
      {
        id: "sintomas",
        heading: "Síntomas: por qué no conviene esperar a ellos",
        paragraphs: [
          "Una correa desgastada puede no dar ningún aviso. A veces aparecen ruidos al destensarse y golpear la tapa, grietas o deshilachado visibles al inspeccionarla o dificultad de arranque si ha saltado algún diente, pero muchas veces el primer síntoma es la rotura.",
          "En motores con cadena, el aviso más habitual es un ruido metálico en los primeros segundos tras arrancar en frío o códigos de avería de correlación entre cigüeñal y levas. La cadena está pensada para durar mucho más, pero puede estirarse, sobre todo con un mantenimiento de aceite deficiente.",
        ],
      },
      {
        id: "correa-banada",
        heading: "Correas bañadas en aceite",
        paragraphs: [
          "Algunos motores de gasolina recientes, como ciertos tricilíndricos de Stellantis (PureTech) o Ford (EcoBoost 1.0), usan una correa que trabaja dentro del aceite del motor. En ellos el aceite correcto y el intervalo de revisión de la correa son especialmente importantes, porque la degradación de la correa puede afectar a la lubricación.",
          "Si tu coche monta uno de estos motores, consulta si el fabricante ha publicado campañas o intervalos revisados y sigue estrictamente la especificación de aceite.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Ruido fuerte en el motor seguido de parada súbita",
        action: "No intentes arrancar de nuevo: pide grúa.",
      },
      {
        signal: "Golpeteo o chasquido rítmico nuevo en la zona de distribución",
        action: "Detén el motor y lleva el coche a revisar sin forzarlo.",
      },
      {
        signal: "Fuga de refrigerante en la zona de la bomba de agua",
        action: "Vigila la temperatura y revisa pronto: puede afectar a la correa.",
      },
    ],
    safeSteps: [
      {
        title: "Identifica el motor",
        detail: "Referencia en la ficha técnica o la placa, y si lleva correa o cadena.",
      },
      {
        title: "Busca el intervalo del fabricante",
        detail: "Kilómetros y años; aplica el que llegue antes.",
      },
      {
        title: "Revisa facturas",
        detail: "Fecha, kilómetros y piezas del último cambio.",
      },
      {
        title: "Pide presupuesto del kit completo",
        detail: "Correa, tensor, rodillos y, si procede, bomba de agua.",
      },
    ],
    workshop: {
      introduction:
        "Pide un presupuesto que detalle las piezas y su procedencia, y la factura final con los kilómetros en el momento del cambio.",
      urgent: [
        "Ruidos nuevos en la distribución.",
        "Fuga de aceite o refrigerante sobre la correa.",
        "Intervalo superado con creces.",
      ],
      appointment: [
        "Coche usado sin factura del último cambio.",
        "Intervalo próximo por años aunque haya pocos kilómetros.",
      ],
      usefulInformation: [
        "Referencia del motor.",
        "Facturas anteriores.",
        "Kilómetros actuales y uso habitual.",
      ],
    },
    faqs: [
      {
        question: "¿La cadena de distribución no se cambia nunca?",
        answer:
          "Está pensada para durar mucho, pero puede estirarse. Si aparecen ruidos o códigos de sincronización, hay que revisarla.",
      },
      {
        question: "¿Puedo alargar el cambio si el coche hace pocos kilómetros?",
        answer:
          "No. El límite de años existe porque la goma envejece aunque el coche no se mueva.",
      },
      {
        question: "¿Hace falta cambiar la bomba de agua?",
        answer:
          "Si la mueve la correa de distribución, es muy recomendable aprovechar el desmontaje. Si no, no es obligatorio.",
      },
      {
        question: "¿Cómo sé si ya se cambió?",
        answer:
          "Solo con una factura que indique fecha, kilómetros y piezas. En su ausencia, trata el cambio como pendiente.",
      },
    ],
    relatedSlugs: [
      "mantenimiento-coche-10-15-20-anos",
      "aceite-motor-nivel-consumo-cambio",
      "motor-sobrecalentado-que-hacer",
      "coche-no-arranca",
    ],
    sources: [sources.timingBelt, sources.mechanicsManual],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "revisar-frenos-liquido-pastillas-discos",
    category: "mantenimiento",
    title:
      "Frenos de un coche con años: líquido, pastillas y discos, y cuándo no esperar",
    seoTitle: "Revisar frenos: líquido, pastillas y discos",
    description:
      "Qué puedes comprobar tú en los frenos, cada cuánto se cambia el líquido, cómo saber si las pastillas y los discos están al límite y qué síntomas exigen parar.",
    eyebrow: "Mantenimiento · Frenos",
    summary:
      "Los frenos de un coche con años fallan pocas veces de golpe, pero sí se degradan sin que lo notes: el líquido absorbe agua, las pastillas se gastan y los discos pierden espesor o se corroen si el coche pasa semanas parado.",
    directAnswer:
      "Revisa el nivel de líquido de frenos entre las marcas del depósito y cámbialo según el plan del fabricante; HELLA recomienda hacerlo como muy tarde cada dos años porque absorbe agua y pierde eficacia. Comprueba el grosor de las pastillas y el estado de los discos en cada cambio de neumáticos o revisión. Un pedal esponjoso, un coche que se desvía o el testigo rojo de frenos son motivo para no circular.",
    readingMinutes: 9,
    sections: [
      {
        id: "liquido",
        heading: "Líquido de frenos: por qué caduca aunque no baje",
        paragraphs: [
          "El líquido de frenos convencional es higroscópico: con el tiempo absorbe humedad a través de juntas y latiguillos. Ese agua reduce su punto de ebullición y, en una bajada larga o una frenada exigente, puede formar burbujas de vapor en el circuito. El resultado es un pedal que se hunde sin frenar como debería.",
          "HELLA recomienda controlar el líquido de forma periódica y cambiarlo como muy tarde cada dos años, usando solo el tipo indicado por el fabricante. En la tapa del depósito o en el manual aparece la especificación, normalmente DOT 4 en coches con ABS.",
        ],
        bullets: [
          "Nivel entre MIN y MAX, con el coche en llano.",
          "Tapa bien cerrada: el depósito abierto absorbe humedad.",
          "No mezcles DOT 5 (silicona) con líquidos DOT 3, 4 o 5.1.",
        ],
      },
      {
        id: "nivel-baja",
        heading: "Si el nivel baja: desgaste o fuga",
        paragraphs: [
          "A medida que las pastillas se desgastan, los pistones de las pinzas salen más y el nivel del depósito baja ligeramente. Una bajada lenta y gradual a lo largo de meses puede ser normal. Rellenar hasta el máximo con pastillas gastadas no resuelve nada: cuando se cambien, el nivel subirá.",
          "Una bajada rápida, manchas húmedas junto a las ruedas o en la parte interior de las llantas, o latiguillos húmedos indican una fuga. En ese caso no circules: el sistema de frenos es hidráulico y una fuga puede empeorar sin aviso.",
        ],
        callout: {
          tone: "important",
          title: "Nivel bajo y pedal largo",
          text: "Si el nivel está por debajo del mínimo y el pedal tiene más recorrido del habitual, no uses el coche. Solicita asistencia.",
        },
      },
      {
        id: "pastillas",
        heading: "Pastillas: cómo saber cuánto les queda",
        paragraphs: [
          "Muchas pastillas llevan un avisador: una lengüeta metálica que chirría al rozar el disco o un sensor que enciende un testigo en el cuadro. Si oyes un chirrido metálico al frenar que desaparece al soltar el pedal, revísalas pronto.",
          "A través de los radios de la llanta a menudo se ve la pastilla exterior. El fabricante fija el grosor mínimo de material de fricción; por debajo de él hay que sustituirlas por ejes, las dos ruedas a la vez. Revisa también que el desgaste sea similar en ambas pastillas de la misma rueda: si una está mucho más gastada, la pinza puede estar agarrotada.",
        ],
      },
      {
        id: "discos",
        heading: "Discos: espesor, vibración y corrosión",
        paragraphs: [
          "Cada disco lleva grabado su espesor mínimo. Con el uso se forma un escalón en el borde exterior; un escalón pronunciado indica desgaste. Una vibración en el volante o en el pedal al frenar suele relacionarse con variaciones de espesor del disco o depósitos de material.",
          "En coches que pasan semanas parados es normal ver óxido superficial que desaparece en las primeras frenadas. Si la corrosión es profunda, forma surcos o no se limpia tras varios kilómetros, el disco pierde eficacia y hay que revisarlo.",
        ],
      },
      {
        id: "tambores-freno-mano",
        heading: "Frenos traseros de tambor y freno de mano",
        paragraphs: [
          "Muchos coches con años llevan tambores en el eje trasero. Su desgaste no se ve desde fuera y un freno de mano que necesita muchos puntos para sujetar el coche es un aviso. Un cable agarrotado por falta de uso puede dejar una rueda frenada.",
          "Si el coche huele a quemado tras un trayecto o una rueda está mucho más caliente que las demás, algo está frenando cuando no debería.",
        ],
      },
      {
        id: "itv",
        heading: "Qué mide la ITV",
        paragraphs: [
          "En la inspección, un frenómetro mide la eficacia de frenado de cada eje y el desequilibrio entre ruedas del mismo eje. Un desequilibrio excesivo o una eficacia insuficiente son defectos habituales en coches con años, a menudo por pinzas agarrotadas o discos y pastillas en mal estado.",
          "Una revisión de frenos antes de la ITV es más útil que cambiar piezas a ciegas: el taller puede medir y localizar la rueda que falla.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Pedal esponjoso, que se hunde o con mucho más recorrido",
        action: "No circules. Pide asistencia.",
      },
      {
        signal: "Testigo rojo de frenos encendido",
        action: "Comprueba el freno de mano y el nivel; si persiste, no circules.",
      },
      {
        signal: "El coche se desvía claramente al frenar",
        action: "Reduce la velocidad y acude al taller sin demora.",
      },
      {
        signal: "Chirrido metálico continuo o roce metal con metal",
        action: "Revisa pastillas y discos antes de seguir usando el coche.",
      },
    ],
    safeSteps: [
      {
        title: "Mira el nivel del depósito",
        detail: "Entre MIN y MAX, en llano; anota si baja con rapidez.",
      },
      {
        title: "Comprueba la fecha del último cambio de líquido",
        detail: "En facturas o en el libro de mantenimiento.",
      },
      {
        title: "Observa pastillas y discos a través de la llanta",
        detail: "Grosor, escalón en el borde y surcos.",
      },
      {
        title: "Presta atención al pedal y al volante",
        detail: "Recorrido, dureza, vibraciones y desvíos al frenar.",
      },
    ],
    workshop: {
      introduction:
        "Los frenos no son un sistema para aprender por ensayo y error. Pide que midan espesores y comprueben el punto de ebullición o el contenido de agua del líquido.",
      urgent: [
        "Pedal esponjoso o que se hunde.",
        "Fuga de líquido o nivel por debajo del mínimo.",
        "Testigo rojo de frenos que no se apaga.",
      ],
      appointment: [
        "Chirrido del avisador de desgaste.",
        "Vibración al frenar.",
        "Líquido con más de dos años o sin fecha conocida.",
      ],
      usefulInformation: [
        "Fecha del último cambio de líquido.",
        "Cuándo aparece el síntoma: en frío, en bajadas, a alta velocidad.",
        "Resultado del frenómetro en la última ITV.",
      ],
    },
    faqs: [
      {
        question: "¿Cada cuánto hay que cambiar el líquido de frenos?",
        answer:
          "Según el plan del fabricante; muchos lo fijan en dos años. HELLA recomienda no superar ese plazo.",
      },
      {
        question: "¿Puedo rellenar el líquido de frenos yo mismo?",
        answer:
          "Puedes completar el nivel con el tipo indicado, pero si baja hay que averiguar por qué. El cambio completo requiere purgar el circuito.",
      },
      {
        question: "¿Hay que cambiar los discos cada vez que se cambian las pastillas?",
        answer:
          "No siempre. Depende del espesor medido y de su estado. Si están por debajo del mínimo o dañados, sí.",
      },
      {
        question: "¿Es normal el óxido en los discos tras unos días parado?",
        answer:
          "Una capa superficial que desaparece en las primeras frenadas es normal. La corrosión profunda o los surcos no.",
      },
    ],
    relatedSlugs: [
      "checklist-itv-coche-antiguo",
      "itv-frecuencia-desfavorable-negativa",
      "neumaticos-dot-desgaste-presion",
      "mantenimiento-coche-10-15-20-anos",
    ],
    sources: [sources.brakeFluid, sources.mechanicsManual, sources.roadsideReview],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
];
