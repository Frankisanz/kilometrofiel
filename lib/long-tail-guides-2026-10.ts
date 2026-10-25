import type { LongTailGuide } from "@/lib/long-tail-guides";

// Respuestas específicas añadidas el 25 de octubre de 2026, colgadas de las
// guías nuevas de vibraciones, tirones, dirección, olores, consumo, faros y
// compra de un usado.
const CONTENT_DATE = "2026-10-25";

const SOURCES = {
  dgtMechanics: {
    title: "Manual VIII de mecánica para formación vial, edición 2026",
    publisher: "Dirección General de Tráfico",
    url: "https://sede.dgt.gob.es/export/sites/dgt/.galleries/permisos-de-conducir/certificacion-aptitud-profesores-formacion-vial/2026/MANUAL-VIII-Mecanica.pdf",
  },
  dgtCommonFailures: {
    title: "Las cinco averías más frecuentes",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/noticias/2022/04ABRIL/0428-Averias-mas-frecuentes.shtml",
  },
  dgtWarningLights: {
    title: "Para que los testigos del coche no te suenen a chino",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/reportajes/2019/0926-Los-testigos-del-coche.shtml",
  },
  dgtCooling: {
    title: "Puesta a punto: sistema de refrigeración del motor",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/reportajes/2023/06JUNIO/0608-Como-preparar-el-coche.shtml",
  },
  idaeGuide: {
    title: "Guía de vehículos turismo de venta en España: recomendaciones para ahorrar carburante",
    publisher: "IDAE, Ministerio para la Transición Ecológica",
    url: "https://coches.idae.es/storage/pdf/Guiasemestre22021.pdf",
  },
  itvManual: {
    title: "Manual de procedimiento de inspección ITV, versión 7.9",
    publisher: "Ministerio de Industria y Turismo",
    url: "https://industria.gob.es/Calidad-Industrial/vehiculos/itv1/Manual%20de%20procedimiento%20de%20inspecci%C3%B3n/Manual%20de%20procedimiento%20de%20inspeccion%20de%20estaciones%20ITV-V%207.9_final2.pdf",
  },
  dgtVehicleReport: {
    title: "Informe de un vehículo: qué es y cómo solicitarlo",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/tramites/2025/1015-Informe-de-un-vehiculo.shtml",
  },
  dgtVehicleReportSede: {
    title: "Informe de un vehículo",
    publisher: "Sede electrónica de la DGT",
    url: "https://sede.dgt.gob.es/es/vehiculos/informacion-de-vehiculos/informe-de-un-vehiculo/",
  },
  dgtBuyUsed: {
    title: "Comprar un vehículo de segunda mano",
    publisher: "Dirección General de Tráfico",
    url: "https://www.dgt.es/nuestros-servicios/tu-vehiculo/vas-a-comprar-o-vender-un-vehiculo-de-segunda-mano/comprar-un-vehiculo-de-segunda-mano/",
  },
} as const;

const HUBS = {
  idle: {
    slug: "coche-tiembla-ralenti",
    title: "El coche tiembla o vibra al ralentí",
    href: "/diagnostico/coche-tiembla-ralenti",
  },
  misfire: {
    slug: "tirones-al-acelerar-fallo-encendido",
    title: "Tirones al acelerar: fallo de encendido, combustible o aire",
    href: "/diagnostico/tirones-al-acelerar-fallo-encendido",
  },
  steering: {
    slug: "ruido-al-girar-volante-direccion-dura",
    title: "Ruido al girar el volante o dirección dura",
    href: "/diagnostico/ruido-al-girar-volante-direccion-dura",
  },
  smell: {
    slug: "olor-a-quemado-coche",
    title: "Olor a quemado en el coche: qué indica cada olor",
    href: "/diagnostico/olor-a-quemado-coche",
  },
  fuel: {
    slug: "coche-gasta-mas-combustible",
    title: "El coche gasta más combustible de lo normal",
    href: "/diagnostico/coche-gasta-mas-combustible",
  },
  headlights: {
    slug: "faros-amarillentos-luces-itv",
    title: "Faros amarillentos, bombillas y reglaje en la ITV",
    href: "/itv-y-normativa/faros-amarillentos-luces-itv",
  },
  buying: {
    slug: "comprar-coche-segunda-mano-que-revisar",
    title: "Comprar un coche de segunda mano: qué revisar",
    href: "/itv-y-normativa/comprar-coche-segunda-mano-que-revisar",
  },
} as const;

export const OCTOBER_2026_LONG_TAIL_GUIDES: readonly LongTailGuide[] = [
  {
    slug: "coche-vibra-aire-acondicionado-parado",
    query: "¿Por qué el coche vibra al encender el aire acondicionado estando parado?",
    cluster: "Vibraciones al ralentí",
    hub: HUBS.idle,
    seoTitle: "El coche vibra con el aire acondicionado parado",
    description:
      "Por qué aumenta la vibración al encender el aire acondicionado con el coche detenido, cuándo es normal y cuándo apunta a soportes del motor o al control del ralentí.",
    directAnswer:
      "El compresor del aire acondicionado añade carga al motor y la centralita sube algo el ralentí para compensarla. Un ligero cambio de sonido o vibración es normal. Si la vibración es claramente mayor, el ralentí cae mucho o el motor está a punto de calarse, las causas habituales son soportes del motor gastados, un control de ralentí sucio (mariposa o válvula) o un compresor que empieza a fallar.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "Cómo saber si es normal",
        paragraphs: [
          "Con el coche parado y caliente, observa el cuentarrevoluciones al encender el aire acondicionado. Lo esperable es una pequeña caída seguida de una recuperación, o una subida leve del ralentí. Si las revoluciones bajan y se quedan oscilando, o la vibración se transmite con fuerza al volante y a los asientos, hay algo más.",
        ],
        list: [
          "Ralentí estable y vibración ligeramente mayor: normal.",
          "Ralentí que cae y oscila: control de ralentí, mariposa sucia o entrada de aire.",
          "Ralentí estable pero vibración fuerte: soportes del motor.",
          "Ruido metálico o chirrido al conectar el compresor: compresor, embrague del compresor o correa.",
        ],
      },
      {
        title: "Soportes del motor y compresor",
        paragraphs: [
          "Un soporte de motor gastado deja pasar al habitáculo vibraciones que antes absorbía. Con la carga extra del compresor, el motor se mueve más y el defecto se hace evidente. En un automático, la combinación de marcha D engranada y aire acondicionado es la prueba más reveladora.",
          "Si al conectar el compresor oyes un golpe o un chirrido y la correa vibra, el problema puede estar en el propio compresor o en la tensión de la correa auxiliar.",
        ],
      },
    ],
    safety: [
      "No observes el motor con una marcha engranada ni con personas delante del coche.",
      "No acerques las manos a correas ni al ventilador con el motor en marcha.",
    ],
    whenWorkshop: [
      "El motor llega a calarse con el aire acondicionado.",
      "Golpes o chirridos al conectar el compresor.",
      "Vibración que ha ido a más en las últimas semanas.",
    ],
    faqs: [
      {
        question: "¿Puedo seguir usando el aire acondicionado?",
        answer:
          "Si solo vibra algo más y el ralentí es estable, sí. Si el motor se cala o hay ruidos del compresor, evita usarlo hasta revisar.",
      },
      {
        question: "¿Limpiar la mariposa soluciona la vibración?",
        answer:
          "Si el ralentí oscila por suciedad, puede mejorarlo. No arregla un soporte gastado.",
      },
    ],
    relatedSlugs: ["tirones-en-frio-desaparecen-en-caliente", "olor-dulce-calefaccion-coche"],
    sources: [SOURCES.dgtMechanics, SOURCES.dgtCommonFailures],
  },
  {
    slug: "tirones-en-frio-desaparecen-en-caliente",
    query: "Mi coche da tirones en frío pero cuando se calienta va bien, ¿qué le pasa?",
    cluster: "Tirones y fallos de encendido",
    hub: HUBS.misfire,
    seoTitle: "Tirones en frío que desaparecen en caliente",
    description:
      "Qué indica que el coche dé tirones solo con el motor frío: bujías, bobinas, sensor de temperatura, humedad en el encendido o mezcla, y cómo confirmarlo.",
    directAnswer:
      "En frío el motor necesita una mezcla más rica y una chispa más fuerte. Si da tirones solo los primeros minutos, las causas habituales son bujías gastadas, una bobina o cable que deriva con la humedad, un sensor de temperatura del motor con lectura errónea o una entrada de aire que se cierra al dilatarse las piezas. Lee los códigos con el motor frío y revisa el intervalo de bujías.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "Por qué el frío lo hace visible",
        paragraphs: [
          "Con el motor frío, el combustible se evapora peor y la centralita enriquece la mezcla usando el dato del sensor de temperatura. Si ese sensor informa de una temperatura falsa, la mezcla será incorrecta justo al arrancar. Del mismo modo, una bujía gastada o una bobina con fisuras fallan antes con humedad y frío, y mejoran cuando el vano motor se seca y se calienta.",
        ],
        list: [
          "Peor en mañanas húmedas: bobinas, cables o capuchones de bujía.",
          "Peor cuanto más frío hace: mezcla y sensor de temperatura.",
          "Silbido al arrancar que desaparece: posible entrada de aire en la admisión.",
        ],
      },
      {
        title: "Cómo confirmarlo",
        paragraphs: [
          "Conecta un lector OBD2 a primera hora, antes de calentar el motor, y lee códigos y, si el lector lo permite, la temperatura del refrigerante que ve la centralita. Debería ser similar a la temperatura ambiente con el coche frío. Una diferencia grande apunta al sensor.",
          "Revisa también cuándo se cambiaron las bujías. Si no hay registro o se ha superado el intervalo del fabricante, cambiarlas es el primer paso razonable.",
        ],
      },
    ],
    safety: [
      "Si el testigo de motor parpadea, no fuerces el motor en frío: el combustible sin quemar puede dañar el catalizador.",
      "No manipules bobinas ni cables con el motor en marcha.",
    ],
    whenWorkshop: [
      "Testigo de motor que parpadea al arrancar.",
      "Tirones que empiezan a aparecer también en caliente.",
      "Códigos de fallo de encendido o del sensor de temperatura.",
    ],
    faqs: [
      {
        question: "¿Es peligroso conducir con tirones en frío?",
        answer:
          "Si son leves y desaparecen en uno o dos minutos, normalmente no es urgente, pero conviene revisarlo antes de que empeore. Con el testigo parpadeando, sí lo es.",
      },
      {
        question: "¿Calentar el motor parado ayuda?",
        answer:
          "No es necesario y alarga el periodo de mezcla rica. Es mejor arrancar y circular suave los primeros kilómetros.",
      },
    ],
    relatedSlugs: ["coche-vibra-aire-acondicionado-parado", "como-calcular-consumo-real-coche"],
    sources: [SOURCES.dgtMechanics, SOURCES.dgtWarningLights],
  },
  {
    slug: "crujido-al-girar-volante-a-fondo",
    query: "Mi coche hace clac-clac al girar el volante a fondo, ¿qué es?",
    cluster: "Ruidos de dirección",
    hub: HUBS.steering,
    seoTitle: "Clac-clac al girar el volante a fondo: causas",
    description:
      "Qué indica un crujido rítmico al girar a fondo y acelerar, cómo comprobar el fuelle del palier y por qué conviene repararlo pronto.",
    directAnswer:
      "Un clac-clac rítmico al girar a fondo y acelerar, por ejemplo al salir de un aparcamiento, suele ser la junta homocinética exterior del palier. Casi siempre empieza con un fuelle de goma roto que deja salir la grasa y entrar suciedad. Si el fuelle está roto pero la junta aún no suena, cambiar solo el fuelle es mucho más barato. Si ya suena, la junta o el palier completo necesitan sustitución.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "Cómo confirmarlo",
        paragraphs: [
          "En un aparcamiento vacío, gira el volante a fondo hacia un lado y avanza despacio acelerando un poco. Repite hacia el otro lado. Si el ruido aparece solo hacia un lado, revisa los fuelles de ambas ruedas: el que esté roto suele señalar la junta afectada.",
          "Con las ruedas giradas a fondo, mira por detrás de la rueda delantera el fuelle de goma junto al buje. Grietas, roturas o grasa salpicada por el interior de la llanta confirman el problema.",
        ],
      },
      {
        title: "Otras causas que se confunden",
        paragraphs: [
          "Si el ruido es un golpe sordo al pasar baches mientras giras, sospecha de bieletas, rótulas o copelas. Si es un crujido al girar parado, de la copela del amortiguador o del muelle. La junta homocinética se distingue porque el ruido es rítmico y depende de la tracción.",
        ],
      },
    ],
    safety: [
      "No te tumbes bajo el coche sin elevación segura con borriquetas.",
      "Si el ruido se convierte en golpes fuertes o vibración al acelerar en recta, no sigas circulando.",
    ],
    whenWorkshop: [
      "Fuelle roto, aunque aún no haya ruido.",
      "Clac-clac al girar acelerando.",
      "Vibración al acelerar en línea recta.",
    ],
    faqs: [
      {
        question: "¿Cuánto puedo circular con la junta homocinética sonando?",
        answer:
          "No hay una cifra segura. El desgaste avanza y en el peor caso el palier se rompe y el coche se queda sin tracción. Repara cuanto antes.",
      },
      {
        question: "¿Afecta a la ITV?",
        answer:
          "Un fuelle de palier roto suele anotarse como defecto en la inspección de transmisión.",
      },
    ],
    relatedSlugs: ["olor-quemado-bajar-puerto", "faros-opacos-suspenden-itv"],
    sources: [SOURCES.dgtMechanics, SOURCES.itvManual],
  },
  {
    slug: "olor-quemado-bajar-puerto",
    query: "Huele a quemado después de bajar un puerto, ¿son los frenos?",
    cluster: "Olores a quemado",
    hub: HUBS.smell,
    seoTitle: "Olor a quemado al bajar un puerto: frenos",
    description:
      "Por qué huele a quemado tras una bajada larga, cómo saber si son los frenos o el embrague, qué hacer en el momento y cómo evitar que se repita.",
    directAnswer:
      "Casi siempre son las pastillas y discos de freno recalentados por frenar de forma continua en una bajada larga. Si el pedal mantiene su tacto, detente en un lugar seguro, deja enfriar sin echar agua y continúa usando una marcha más corta para que el motor retenga. Si el pedal está blando o el coche frena peor, no reanudes la marcha hasta que se recupere. Si el olor sale siempre de una rueda, incluso en llano, una pinza puede estar agarrotada.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "Qué hacer en el momento",
        paragraphs: [
          "Detén el coche en un lugar seguro, fuera de la calzada. Con cambio manual, deja una marcha engranada además del freno de mano. No eches agua sobre los discos: el cambio brusco de temperatura puede deformarlos. Espera a que dejen de oler y comprueba el tacto del pedal antes de seguir.",
          "Al reanudar, baja con una marcha más corta, la que usarías para subir la misma pendiente, y frena de forma firme y discontinua en lugar de mantener el pie apoyado.",
        ],
      },
      {
        title: "Frenos o embrague",
        paragraphs: [
          "El olor a freno es metálico y aparece junto a una o varias ruedas, que estarán muy calientes. El de embrague es más acre, sale del centro del coche y suele aparecer tras arrancar en cuesta o maniobrar mucho, no tras una bajada.",
          "Si el olor y el calor se concentran siempre en la misma rueda, incluso en llano, sospecha de una pinza que no libera. Es una avería que conviene revisar pronto: además de gastar pastillas, puede sobrecalentar el líquido de frenos.",
        ],
      },
    ],
    safety: [
      "Si el pedal se hunde o está blando, no continúes: pide asistencia.",
      "No toques discos, pinzas ni llantas: pueden causar quemaduras.",
    ],
    whenWorkshop: [
      "El pedal no recupera su tacto tras enfriar.",
      "Una rueda concreta huele y se calienta en uso normal.",
      "Ruido o vibración al frenar después del episodio.",
    ],
    faqs: [
      {
        question: "¿Se estropean los frenos por un recalentamiento?",
        answer:
          "Un episodio puntual suele dejar las pastillas algo cristalizadas o los discos con marcas. Si después notas vibración o menos frenada, revísalos.",
      },
      {
        question: "¿Hay que cambiar el líquido de frenos?",
        answer:
          "Si el pedal se ablandó durante el recalentamiento, conviene revisar el líquido: con humedad absorbida hierve antes.",
      },
    ],
    relatedSlugs: ["olor-dulce-calefaccion-coche", "crujido-al-girar-volante-a-fondo"],
    sources: [SOURCES.dgtMechanics, SOURCES.dgtCommonFailures],
  },
  {
    slug: "olor-dulce-calefaccion-coche",
    query: "Huele dulce dentro del coche al poner la calefacción, ¿es peligroso?",
    cluster: "Olores a quemado",
    hub: HUBS.smell,
    seoTitle: "Olor dulce con la calefacción del coche",
    description:
      "Por qué huele dulce en el habitáculo al usar la calefacción, cómo confirmar una fuga de refrigerante y por qué no conviene dejarlo pasar.",
    directAnswer:
      "Un olor dulce dentro del coche al poner la calefacción suele indicar una fuga de refrigerante en el radiador de calefacción o en sus conexiones. Suele acompañarse de vaho grasiento en los cristales o de humedad en la alfombra del acompañante. Comprueba el nivel de refrigerante en frío y vigila la temperatura del motor. No es una emergencia si el nivel y la temperatura son normales, pero sí conviene repararlo pronto.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "Cómo confirmarlo",
        paragraphs: [
          "Con el motor frío, comprueba si el nivel del depósito de expansión ha bajado respecto a las marcas. Mira la alfombra del lado del acompañante: una zona húmeda y pegajosa refuerza la sospecha. Si los cristales se empañan con una película que cuesta limpiar, el vapor de refrigerante es lo más probable.",
          "Si el olor dulce se nota fuera, junto al frontal, la fuga puede estar en el radiador principal, en un manguito o en la bomba de agua.",
        ],
      },
      {
        title: "Por qué no conviene esperar",
        paragraphs: [
          "Una fuga de refrigerante, por pequeña que sea, acaba bajando el nivel hasta provocar un sobrecalentamiento. Además, respirar vapor de refrigerante dentro del habitáculo no es recomendable y el vaho reduce la visibilidad.",
        ],
      },
    ],
    safety: [
      "No abras el tapón del refrigerante en caliente: el circuito está a presión.",
      "Si la temperatura sube, sigue la guía de motor sobrecalentado y detente.",
    ],
    whenWorkshop: [
      "Nivel de refrigerante que baja.",
      "Alfombra húmeda o vaho grasiento persistente.",
      "Temperatura del motor por encima de lo habitual.",
    ],
    faqs: [
      {
        question: "¿Puedo rellenar con agua?",
        answer:
          "Para salir del paso, el agua evita quedarse sin líquido, pero diluye el anticongelante. Usa el refrigerante que indica el fabricante y repara la fuga.",
      },
      {
        question: "¿Un sellador de fugas lo arregla?",
        answer:
          "Puede taponar poros muy pequeños, pero también obstruir conductos finos como los del radiador de calefacción. Mejor reparar.",
      },
    ],
    relatedSlugs: ["olor-quemado-bajar-puerto", "coche-vibra-aire-acondicionado-parado"],
    sources: [SOURCES.dgtCooling, SOURCES.dgtMechanics],
  },
  {
    slug: "como-calcular-consumo-real-coche",
    query: "¿Cómo calculo el consumo real de mi coche?",
    cluster: "Consumo de combustible",
    hub: HUBS.fuel,
    seoTitle: "Cómo calcular el consumo real del coche",
    description:
      "El método de llenado completo paso a paso, cómo interpretar el resultado y por qué el ordenador de a bordo puede equivocarse.",
    directAnswer:
      "Llena el depósito hasta que salte el surtidor y pon a cero el cuentakilómetros parcial. En el siguiente repostaje, llena de nuevo en el mismo surtidor. Divide los litros repostados entre los kilómetros recorridos y multiplica por 100: ese es tu consumo en litros cada 100 km. Repite al menos tres depósitos y compáralo con tu propio histórico en trayectos parecidos.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "Paso a paso con un ejemplo",
        paragraphs: [
          "Supón que tras el primer llenado recorres 612 km y en el segundo repostas 38,5 litros. El consumo es 38,5 ÷ 612 × 100 = 6,3 litros cada 100 km. Si usas el mismo surtidor y no rellenas después del primer corte, el error es pequeño.",
        ],
        list: [
          "Llena hasta el primer corte del surtidor, sin rellenar después.",
          "Pon a cero el parcial justo al terminar de repostar.",
          "Anota litros y kilómetros en cada repostaje.",
          "Calcula la media de al menos tres depósitos.",
        ],
      },
      {
        title: "Cómo interpretarlo",
        paragraphs: [
          "Compara con tu histórico en condiciones similares. Según el IDAE, en trayectos urbanos muy cortos un coche puede llegar a consumir más del doble que en carretera, y el aire acondicionado, la baca o una presión baja de neumáticos lo suben de forma apreciable. Si tras descartar esos factores el consumo sigue alto, revisa la guía principal.",
        ],
      },
    ],
    safety: ["No anotes datos ni manipules el móvil mientras conduces."],
    whenWorkshop: [
      "Consumo claramente superior a tu histórico tras descartar uso, presión y carga.",
      "Consumo alto con olor a combustible, tirones o testigo de motor.",
    ],
    faqs: [
      {
        question: "¿Por qué no coincide con el ordenador de a bordo?",
        answer:
          "El ordenador estima el consumo a partir de la inyección y suele desviarse algo. El método de llenado mide lo que realmente sale del surtidor.",
      },
      {
        question: "¿Influye cambiar de gasolinera?",
        answer:
          "Cada surtidor corta en un punto algo distinto, por eso conviene repetir en el mismo para medir.",
      },
    ],
    relatedSlugs: ["tirones-en-frio-desaparecen-en-caliente", "informe-dgt-antes-de-comprar-coche"],
    sources: [SOURCES.idaeGuide],
  },
  {
    slug: "faros-opacos-suspenden-itv",
    query: "¿Se puede suspender la ITV por tener los faros opacos o amarillentos?",
    cluster: "Alumbrado en la ITV",
    hub: HUBS.headlights,
    seoTitle: "¿Suspende la ITV por faros opacos?",
    description:
      "Cuándo unos faros amarillentos u opacos pueden dar defecto en la ITV, qué mira el inspector y cómo restaurarlos para que duren.",
    directAnswer:
      "Sí puede ocurrir. La ITV revisa el estado de los faros y la emisión y el reglaje del haz de luz. Si la opacidad reduce claramente la luz o la dispersa, el inspector puede anotar un defecto. Unos faros ligeramente mates no suelen ser problema. Para evitarlo, restaura los faros con lijado al agua, pulido y un sellado con protección UV, y comprueba el reglaje después.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "Qué mira el inspector",
        paragraphs: [
          "El manual de procedimiento de las estaciones ITV incluye el estado de los dispositivos de alumbrado: roturas, deterioro de la superficie y del reflector y la emisión de luz. Con el regloscopio se comprueba además la orientación del haz de cruce. Un faro muy opaco puede alterar ambas mediciones.",
        ],
      },
      {
        title: "Restaurar bien un faro",
        paragraphs: [
          "Protege la pintura alrededor con cinta, lija al agua con granos cada vez más finos hasta eliminar la capa amarilla, pule y aplica un barniz o sellador con filtro UV. Deja curar el tiempo que indique el fabricante del producto antes de lavar el coche. Sin sellado, el faro vuelve a amarillear en pocos meses.",
        ],
        list: [
          "Humedad dentro del faro: pulir no basta, revisa juntas o cambia el faro.",
          "Reflector interior quemado o pelado: sustitución.",
          "Faro roto o con fisuras: sustitución antes de la ITV.",
        ],
      },
    ],
    safety: ["Usa guantes y gafas al lijar y aplicar barnices, en un lugar ventilado."],
    whenWorkshop: [
      "Reglaje del haz tras restaurar o cambiar faros.",
      "Faros con humedad interior o reflector dañado.",
    ],
    faqs: [
      {
        question: "¿La pasta de dientes sirve para los faros?",
        answer:
          "Puede dar algo de brillo temporal, pero no restaura la capa protectora. El amarilleo vuelve pronto.",
      },
      {
        question: "¿Puedo poner bombillas LED para que ilumine más?",
        answer:
          "Solo si es un kit homologado para tu modelo concreto. Una LED genérica en un faro halógeno no está permitida.",
      },
    ],
    relatedSlugs: ["informe-dgt-antes-de-comprar-coche", "crujido-al-girar-volante-a-fondo"],
    sources: [SOURCES.itvManual],
  },
  {
    slug: "informe-dgt-antes-de-comprar-coche",
    query: "¿Qué informe de la DGT tengo que pedir antes de comprar un coche usado?",
    cluster: "Compra de un coche usado",
    hub: HUBS.buying,
    seoTitle: "Informe DGT antes de comprar un coche usado",
    description:
      "Qué informe del vehículo pedir a la DGT antes de comprar un coche de segunda mano, qué incluye, cuánto cuesta y cómo solicitarlo con la matrícula.",
    directAnswer:
      "Pide un informe detallado del vehículo en la sede electrónica de la DGT, en la app miDGT, en el 060 o en una Jefatura. El reducido es gratuito y muestra la fecha de primera matriculación y si hay impedimentos para la transferencia. El detallado, con tasa, añade historial de ITV, kilometraje registrado, datos técnicos y revisiones pendientes. Revísalo antes de pagar o dejar señal.",
    updatedAt: CONTENT_DATE,
    sections: [
      {
        title: "Qué mirar en el informe",
        paragraphs: [
          "Lo primero, las cargas: reserva de dominio, embargos u otras limitaciones que impidan la transferencia. Después, el historial de ITV y los kilómetros registrados en cada inspección, que deben crecer de forma coherente con lo que marca el cuadro. Por último, si constan revisiones pendientes por llamadas a revisión del fabricante.",
        ],
        list: [
          "Cargas o embargos: no compres hasta que estén cancelados.",
          "Kilometraje: debe aumentar entre inspecciones.",
          "ITV: vigencia y resultados anteriores.",
          "Titulares: número de propietarios y tipo de uso.",
        ],
      },
      {
        title: "Cómo solicitarlo",
        paragraphs: [
          "En la sede electrónica de la DGT, con Cl@ve o certificado digital, o en la app miDGT, introduces la matrícula y eliges el tipo de informe. También se puede pedir llamando al 060 o en una Jefatura de Tráfico con cita previa. En 2025 la DGT cifraba la tasa de los informes detallados en 8,67 euros; comprueba el importe vigente al solicitarlo.",
        ],
      },
    ],
    safety: [
      "Desconfía si el vendedor se niega a darte la matrícula o te presiona para pagar antes de ver el informe.",
    ],
    whenWorkshop: [
      "El informe es correcto pero quieres conocer el estado mecánico: pide una revisión previa a la compra.",
    ],
    faqs: [
      {
        question: "¿Necesito permiso del vendedor para pedir el informe?",
        answer:
          "No: se solicita con la matrícula. Los datos personales del titular están protegidos y solo se facilitan en los supuestos que permite la normativa.",
      },
      {
        question: "¿El informe garantiza que el coche está bien?",
        answer:
          "No: informa de la situación administrativa y del historial registrado, no del estado mecánico actual. Complétalo con una prueba y una revisión.",
      },
    ],
    relatedSlugs: ["como-calcular-consumo-real-coche", "faros-opacos-suspenden-itv"],
    sources: [SOURCES.dgtVehicleReport, SOURCES.dgtVehicleReportSede, SOURCES.dgtBuyUsed],
  },
];
