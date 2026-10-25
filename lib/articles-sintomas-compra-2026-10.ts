import type { Article, PrimarySource } from "@/lib/articles";

// Guías añadidas el 25 de octubre de 2026 tras comparar la web con las
// páginas que hoy responden a estas búsquedas: vibraciones al ralentí,
// tirones y fallos de encendido, ruidos de dirección, olores a quemado,
// consumo excesivo, filtros, faros opacos en la ITV y compra de un usado.
const ACCESSED_AT = "2026-10-25";
const PUBLISHED_AT = "2026-10-25";

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
  idaeGuide: {
    name: "Guía de vehículos turismo de venta en España: recomendaciones para ahorrar carburante",
    publisher: "IDAE, Ministerio para la Transición Ecológica",
    url: "https://coches.idae.es/storage/pdf/Guiasemestre22021.pdf",
    accessedAt: ACCESSED_AT,
  },
  oilChange: {
    name: "Consejos para el cambio de aceite",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/noticias/2017/0803-Consejos-cambio-de-aceite.shtml",
    accessedAt: ACCESSED_AT,
  },
  buyUsed: {
    name: "Comprar un vehículo de segunda mano",
    publisher: "Dirección General de Tráfico",
    url: "https://www.dgt.es/nuestros-servicios/tu-vehiculo/vas-a-comprar-o-vender-un-vehiculo-de-segunda-mano/comprar-un-vehiculo-de-segunda-mano/",
    accessedAt: ACCESSED_AT,
  },
  vehicleReport: {
    name: "Informe de un vehículo: qué es y cómo solicitarlo",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/tramites/2025/1015-Informe-de-un-vehiculo.shtml",
    accessedAt: ACCESSED_AT,
  },
  vehicleReportSede: {
    name: "Informe de un vehículo",
    publisher: "Sede electrónica de la DGT",
    url: "https://sede.dgt.gob.es/es/vehiculos/informacion-de-vehiculos/informe-de-un-vehiculo/",
    accessedAt: ACCESSED_AT,
  },
  transfer: {
    name: "Comprar un vehículo: cómo cambiar el titular",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/tramites/2023/0620-Transferencia-vehiculo.shtml",
    accessedAt: ACCESSED_AT,
  },
  recalls: {
    name: "Aviso de llamadas a revisión de un vehículo",
    publisher: "Sede electrónica de la DGT",
    url: "https://sede.dgt.gob.es/es/vehiculos/informacion-de-vehiculos/llamadas-a-revision-de-un-vehiculo/",
    accessedAt: ACCESSED_AT,
  },
  usedCars: {
    name: "Coches de segunda mano: lo que hay que mirar",
    publisher: "Revista Tráfico y Seguridad Vial, DGT",
    url: "https://revista.dgt.es/es/motor/reportajes/2017/0424coches-de-segunda-mano.shtml",
    accessedAt: ACCESSED_AT,
  },
} satisfies Record<string, PrimarySource>;

export const symptomsAndBuyingArticles: readonly Article[] = [
  {
    slug: "coche-tiembla-ralenti",
    category: "problemas",
    title: "El coche tiembla o vibra al ralentí: causas por orden de probabilidad",
    seoTitle: "Coche tiembla al ralentí: causas y qué revisar",
    description:
      "Por qué vibra el coche parado con el motor en marcha: soportes del motor, fallo de encendido, entradas de aire, ralentí sucio, EGR o volante bimasa, y cómo distinguirlos.",
    eyebrow: "Problemas · Vibraciones",
    summary:
      "Un motor de combustión siempre vibra algo, pero si notas el volante, los asientos o la palanca temblar en un semáforo más que antes, algo ha cambiado. La clave es fijarse en cuándo aparece: en frío o en caliente, con el aire acondicionado, en punto muerto o con una marcha engranada.",
    directAnswer:
      "Si el coche tiembla al ralentí pero va bien en marcha, las causas más habituales son un soporte del motor gastado, un cilindro que falla (bujía, bobina o inyector), una entrada de aire en la admisión o un ralentí irregular por suciedad en la mariposa o la válvula EGR. En diésel con muchos kilómetros también influye el volante bimasa. Si el testigo de motor parpadea, el temblor es fuerte o huele a combustible, no sigas circulando y pide diagnóstico.",
    readingMinutes: 9,
    sections: [
      {
        id: "cuando-aparece",
        heading: "Fíjate primero en cuándo tiembla",
        paragraphs: [
          "La misma sensación tiene orígenes muy distintos. Antes de pensar en piezas, anota si la vibración aparece con el motor frío y desaparece al calentar, si empeora al encender el aire acondicionado o las luces, si cambia al pisar el embrague o al engranar una marcha en un automático, y si el cuentarrevoluciones oscila o se mantiene estable.",
          "Un ralentí que sube y baja apunta al control de mezcla o de aire. Un ralentí estable con un temblor que se transmite a la carrocería apunta más a los soportes o a la transmisión. Un golpeteo rítmico, como si el motor «cojeara», suele ser un cilindro que no quema bien.",
        ],
        bullets: [
          "Temblor rítmico y testigo de motor encendido o parpadeando: fallo de encendido o de inyección.",
          "Vibración que aumenta al engranar la D o al encender el aire acondicionado: soportes del motor o ralentí demasiado bajo con carga.",
          "Revoluciones que oscilan y a veces se cala: entrada de aire, mariposa sucia, EGR o sensor.",
          "Solo en frío y desaparece en pocos minutos: mezcla o encendido que el motor compensa al calentar.",
          "Diésel con vibración grave en ralentí y golpe al apagar: posible volante bimasa desgastado.",
        ],
      },
      {
        id: "soportes",
        heading: "Soportes del motor: la causa mecánica más frecuente en coches con años",
        paragraphs: [
          "El motor va sujeto a la carrocería con soportes de goma o hidráulicos que absorben sus vibraciones. Con los años, el calor y el aceite, la goma se agrieta o se aplasta y el temblor pasa al habitáculo. Es típico notarlo más en un automático parado en D o al arrancar y soltar el embrague, con un golpe seco.",
          "Con el capó abierto y el freno de mano puesto, una segunda persona puede observar si el motor se mueve mucho al acelerar suavemente en punto muerto. No lo hagas con una marcha engranada ni con alguien delante del coche. Un soporte hidráulico con fuga suele mostrar restos de líquido.",
        ],
      },
      {
        id: "encendido-aire",
        heading: "Encendido, inyección y entradas de aire",
        paragraphs: [
          "En gasolina, una bujía gastada, una bobina que falla o un cable deteriorado hacen que un cilindro no queme bien; en diésel, un inyector que gotea o entrega de más produce un efecto similar. La centralita suele registrar fallos de encendido aunque el testigo no siempre se encienda de inmediato, así que leer los códigos con un OBD2 ahorra mucho tiempo.",
          "Un manguito de vacío agrietado o una junta de admisión que deja pasar aire «falso» desajusta la mezcla, sobre todo al ralentí, donde el caudal de aire es pequeño. A veces se oye un silbido con el motor en marcha. La suciedad en la mariposa de gases o en la válvula EGR también provoca un ralentí irregular en motores con muchos kilómetros de ciudad.",
        ],
        callout: {
          tone: "important",
          title: "Si el testigo de motor parpadea",
          text: "Un testigo de motor que parpadea suele indicar un fallo de encendido capaz de dañar el catalizador. Reduce la carga, evita acelerar a fondo y busca diagnóstico en cuanto sea seguro hacerlo.",
        },
      },
      {
        id: "bimasa",
        heading: "Diésel y volante bimasa",
        paragraphs: [
          "Muchos diésel montan un volante motor de dos masas que filtra las vibraciones del cigüeñal. Cuando se desgasta, el ralentí se nota áspero, aparecen ruidos metálicos al arrancar o al apagar y vibraciones al acelerar en marchas largas a bajas vueltas. Su diagnóstico requiere taller, porque el síntoma se confunde con soportes o embrague.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Testigo de motor parpadeando o pérdida clara de potencia.",
        action: "Reduce la marcha, evita aceleraciones fuertes y busca un lugar seguro para detenerte o pedir asistencia.",
      },
      {
        signal: "Olor a combustible dentro o alrededor del coche.",
        action: "Apaga el motor, aléjate del vehículo y no intentes arrancar de nuevo hasta revisar una posible fuga.",
      },
      {
        signal: "Golpes metálicos fuertes o el motor se desplaza de forma visible.",
        action: "No sigas circulando: un soporte roto puede tensar manguitos, cables o la transmisión.",
      },
    ],
    safeSteps: [
      {
        title: "Observa sin herramientas",
        detail: "Con el coche parado y el freno de mano puesto, mira el cuentarrevoluciones en frío y en caliente, con y sin aire acondicionado, y anota cuándo cambia la vibración.",
      },
      {
        title: "Lee los códigos de avería",
        detail: "Un lector OBD2 muestra fallos de encendido por cilindro o problemas de mezcla. Anota los códigos antes de borrar nada.",
      },
      {
        title: "Revisa lo visible",
        detail: "Con el motor frío busca manguitos agrietados, conectores sueltos, restos de aceite en las bobinas o líquido bajo un soporte hidráulico.",
      },
      {
        title: "Comprueba el mantenimiento",
        detail: "Consulta cuándo se cambiaron bujías y filtro de aire. Si ya pasaron el intervalo del fabricante, es lo primero que conviene actualizar.",
      },
    ],
    workshop: {
      introduction:
        "El taller puede medir el comportamiento de cada cilindro, la presión de admisión y las vibraciones, algo imposible de hacer con fiabilidad en casa.",
      urgent: [
        "Testigo de motor parpadeando, tirones fuertes o pérdida de potencia.",
        "Olor a gasolina o gasóleo.",
        "Golpes metálicos al arrancar, al acelerar o al apagar el motor.",
      ],
      appointment: [
        "Temblor que ha aumentado en las últimas semanas sin otros síntomas.",
        "Ralentí inestable que a veces provoca que el motor se cale.",
        "Vibración que solo aparece con el aire acondicionado o con una marcha engranada.",
      ],
      usefulInformation: [
        "Cuándo aparece la vibración: frío, caliente, con aire acondicionado, en D o en punto muerto.",
        "Códigos OBD2 leídos y si el testigo se ha encendido o parpadeado.",
        "Fecha de los últimos cambios de bujías, filtros y correas.",
      ],
    },
    faqs: [
      {
        question: "¿Es normal que el coche vibre más con el aire acondicionado encendido?",
        answer:
          "Es normal un pequeño cambio, porque el compresor añade carga y la centralita sube algo el ralentí para compensarlo. Si la vibración es claramente mayor o el motor está a punto de calarse, revisa soportes y control de ralentí.",
      },
      {
        question: "¿Puedo seguir usando el coche si tiembla al ralentí?",
        answer:
          "Si va bien en marcha, sin testigos ni olores, normalmente puedes usarlo con prudencia hasta la cita. Con testigo de motor parpadeando, pérdida de potencia u olor a combustible, no.",
      },
      {
        question: "¿Un limpiador de inyectores soluciona el temblor?",
        answer:
          "Puede ayudar si hay depósitos leves, pero no arregla una bobina rota, un soporte gastado ni una entrada de aire. Úsalo como mantenimiento, no como diagnóstico.",
      },
      {
        question: "¿Cuánto duran los soportes del motor?",
        answer:
          "No hay una cifra fija: dependen del uso, del calor y de si hay fugas de aceite sobre ellos. En coches de más de diez años es habitual tener que cambiar al menos uno.",
      },
    ],
    relatedSlugs: [
      "tirones-al-acelerar-fallo-encendido",
      "testigos-coche-significado",
      "como-elegir-lector-obd2",
      "filtro-particulas-dpf-egr-diesel",
    ],
    sources: [sources.mechanicsManual, sources.commonFailures, sources.warningLights],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "tirones-al-acelerar-fallo-encendido",
    category: "problemas",
    title: "Tirones al acelerar: fallo de encendido, combustible o aire",
    seoTitle: "Tirones al acelerar: causas y cómo diagnosticarlo",
    description:
      "El coche da tirones, se ahoga o pierde fuerza al pisar el acelerador: cómo distinguir bujías y bobinas, alimentación de combustible, sensores de aire, turbo y embrague.",
    eyebrow: "Problemas · Motor",
    summary:
      "Un tirón es una interrupción breve de la fuerza del motor. Puede venir de una chispa que no salta, de una falta de combustible, de una lectura de aire errónea o de un turbo que no sopla. Saber en qué condiciones ocurre reduce mucho la lista de sospechosos.",
    directAnswer:
      "Los tirones al acelerar suelen deberse a un fallo de encendido (bujías, bobinas o cables), a una alimentación de combustible insuficiente (filtro obstruido, bomba o inyectores), a una medición de aire errónea (caudalímetro, manguitos o filtro de aire) o, en motores turbo, a una fuga de presión. Si el coche además entra en modo de emergencia o el testigo de motor parpadea, reduce la carga y pide diagnóstico. Un embrague que patina se nota como subida de vueltas sin aceleración, no como tirones.",
    readingMinutes: 9,
    sections: [
      {
        id: "describir",
        heading: "Describe el tirón antes de buscar la pieza",
        paragraphs: [
          "No es lo mismo un golpeteo rítmico que se siente en cada aceleración que un vacío de potencia que aparece al subir una cuesta con el depósito en reserva. Anota la marcha, las revoluciones, si el motor estaba frío o caliente, si llovía y si el testigo de motor se encendió, aunque fuera un instante.",
        ],
        bullets: [
          "Tirones bajo carga (cuesta, adelantamiento) con golpeteo: encendido o mezcla pobre.",
          "Tirones al acelerar fuerte que desaparecen al levantar el pie: alimentación de combustible o turbo.",
          "Peor con humedad o lluvia: bobinas o cables de encendido con derivaciones.",
          "Solo en frío: sensor de temperatura, mezcla o bujías en mal estado.",
          "Sube de vueltas pero no acelera: embrague que patina, no un fallo del motor.",
        ],
      },
      {
        id: "encendido",
        heading: "Bujías, bobinas y cables en motores de gasolina",
        paragraphs: [
          "Las bujías tienen un intervalo de cambio que fija el fabricante en kilómetros o años. Cuando se gastan, necesitan más tensión para producir la chispa y la bobina acaba fallando bajo carga, que es justo cuando más se exige. El resultado es un tirón rítmico que la centralita suele registrar como fallo de encendido de un cilindro concreto.",
          "Una bobina con fisuras o con aceite en su pozo, por una junta de tapa de balancines que gotea, es otra causa clásica en motores con años. Cambiar todas las bujías a la vez y revisar el estado de bobinas y conectores es más eficaz que sustituir piezas sueltas a ciegas.",
        ],
        callout: {
          tone: "important",
          title: "Catalizador en riesgo",
          text: "Cuando un cilindro no quema, el combustible sin quemar llega al catalizador y puede sobrecalentarlo. Por eso un testigo de motor que parpadea pide reducir la carga y no seguir circulando con normalidad.",
        },
      },
      {
        id: "combustible-aire",
        heading: "Combustible, aire y turbo",
        paragraphs: [
          "Un filtro de combustible obstruido o una bomba débil no se notan al ralentí, pero sí cuando el motor pide mucho caudal. En diésel, el filtro también retiene agua; si no se purga o cambia cuando toca, aparecen tirones y arranques difíciles.",
          "La centralita calcula la inyección según el aire que mide. Un caudalímetro sucio, un manguito de admisión roto o un filtro de aire saturado alteran esa cuenta. En motores turbo, una fuga de presión entre el turbo y la admisión produce silbidos, pérdida de fuerza y, a menudo, el paso a modo de emergencia.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Testigo de motor parpadeando.",
        action: "Reduce la velocidad, evita acelerar a fondo y busca diagnóstico cuanto antes.",
      },
      {
        signal: "Pérdida brusca de potencia en carretera o modo de emergencia.",
        action: "Señaliza, sal de la vía rápida en cuanto sea seguro y no fuerces el motor para recuperar velocidad.",
      },
      {
        signal: "Olor a combustible o humo abundante.",
        action: "Detén el coche en un lugar seguro, apaga el motor y pide asistencia.",
      },
    ],
    safeSteps: [
      {
        title: "Lee los códigos",
        detail: "Un lector OBD2 indica fallos de encendido por cilindro, mezcla pobre o rica y problemas de presión de turbo. Guarda los datos congelados si el lector los muestra.",
      },
      {
        title: "Revisa el historial",
        detail: "Comprueba cuándo se cambiaron bujías, filtro de aire y filtro de combustible frente al plan del fabricante.",
      },
      {
        title: "Inspecciona en frío",
        detail: "Busca aceite en los pozos de bujía, manguitos de admisión sueltos o agrietados y conectores flojos. No desmontes bobinas con el motor caliente.",
      },
      {
        title: "Prueba con combustible fresco",
        detail: "Si los tirones empezaron tras un repostaje concreto, anótalo: el combustible contaminado es raro, pero posible.",
      },
    ],
    workshop: {
      introduction:
        "Con un equipo de diagnosis el taller puede ver en tiempo real los fallos de encendido, las correcciones de mezcla, la presión del turbo y el caudal de aire.",
      urgent: [
        "Testigo de motor parpadeando o modo de emergencia.",
        "Tirones fuertes que impiden mantener la velocidad con seguridad.",
        "Olor a combustible o humo abundante.",
      ],
      appointment: [
        "Tirones leves que se repiten bajo carga.",
        "Bujías o filtros fuera de intervalo.",
        "Consumo que ha subido junto con los tirones.",
      ],
      usefulInformation: [
        "Marcha, revoluciones y condiciones en que aparece el tirón.",
        "Códigos OBD2 y datos congelados.",
        "Facturas de bujías, bobinas y filtros.",
      ],
    },
    faqs: [
      {
        question: "¿Cada cuánto se cambian las bujías?",
        answer:
          "Lo marca el fabricante para cada motor: hay intervalos muy distintos según el tipo de bujía. Consulta el plan de mantenimiento de tu versión en lugar de una cifra genérica.",
      },
      {
        question: "¿Los tirones pueden ser del embrague?",
        answer:
          "Un embrague que patina se nota como subida de revoluciones sin que el coche acelere en proporción. Un tirón de motor es una pérdida y recuperación de fuerza. A veces un volante bimasa gastado mezcla ambas sensaciones.",
      },
      {
        question: "¿Puedo pasar la ITV con tirones?",
        answer:
          "Si hay testigo de motor encendido o las emisiones salen de los límites, lo normal es un resultado desfavorable. Repara antes de la inspección.",
      },
      {
        question: "¿Sirve borrar los códigos para que se vaya el tirón?",
        answer:
          "No. Borrar elimina la pista y el fallo volverá. Anota los códigos y llévalos al taller.",
      },
    ],
    relatedSlugs: [
      "coche-tiembla-ralenti",
      "coche-pierde-potencia-modo-emergencia",
      "como-elegir-lector-obd2",
      "filtros-coche-aire-habitaculo-combustible",
    ],
    sources: [sources.mechanicsManual, sources.emergencyMode, sources.warningLights, sources.commonFailures],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "ruido-al-girar-volante-direccion-dura",
    category: "problemas",
    title: "Ruido al girar el volante o dirección dura: qué significa cada síntoma",
    seoTitle: "Ruido al girar el volante o dirección dura: causas",
    description:
      "Crujidos al girar a fondo, chirridos, golpes al pasar baches o un volante que pesa más de lo normal: qué suele indicar cada síntoma y cuándo dejar el coche parado.",
    eyebrow: "Problemas · Dirección",
    summary:
      "La dirección y la suspensión delantera trabajan juntas, así que un ruido al girar puede venir de varias piezas. Escuchar en qué maniobra aparece y si el volante pesa o tiene holgura ayuda a separar una avería urgente de una revisión programada.",
    directAnswer:
      "Un crujido rítmico al girar a fondo y acelerar suele ser una junta homocinética del palier. Un chirrido al girar parado, en coches con dirección hidráulica, apunta a nivel bajo de líquido o a la correa. Golpes al girar sobre baches suelen venir de rótulas, bieletas o copelas de amortiguador. Si la dirección se endurece de golpe, aparece un testigo de dirección o el volante tiene holgura, circula lo mínimo imprescindible y pide revisión: afecta directamente al control del coche.",
    readingMinutes: 8,
    sections: [
      {
        id: "tipo-de-ruido",
        heading: "Qué ruido es y en qué maniobra aparece",
        paragraphs: [
          "Prueba en un aparcamiento vacío, a poca velocidad, girando a fondo hacia cada lado, y después en una calle con baches. Anota si el ruido sale de un lado concreto, si depende de acelerar y si se acompaña de vibración en el volante.",
        ],
        bullets: [
          "Clac-clac rítmico al girar a fondo y acelerar: junta homocinética exterior del palier, a menudo por un fuelle roto.",
          "Chirrido o gemido al girar parado (dirección hidráulica): nivel bajo de líquido, bomba o correa.",
          "Golpe seco o crujido al girar sobre irregularidades: rótulas, bieletas de estabilizadora o silentblocks.",
          "Crujido de muelle al girar parado: copela del amortiguador o muelle roto.",
          "Roce al girar: el neumático toca el paso de rueda o un guardabarros interior suelto.",
        ],
      },
      {
        id: "direccion-dura",
        heading: "Cuando el volante pesa más de lo normal",
        paragraphs: [
          "Antes de nada, mide la presión de los neumáticos delanteros: una rueda baja endurece la dirección y hace que el coche se vaya hacia un lado. Si la presión es correcta, depende del tipo de asistencia.",
          "En dirección hidráulica, un nivel bajo de líquido, una fuga o una correa que patina reducen la asistencia, sobre todo a baja velocidad. En dirección eléctrica, la centralita puede reducir la asistencia por sobrecalentamiento tras muchas maniobras o por un fallo, normalmente con un testigo en el cuadro. Una batería o un alternador débiles también afectan a la asistencia eléctrica.",
        ],
        callout: {
          tone: "important",
          title: "Dirección que se endurece de golpe",
          text: "Si la asistencia desaparece en marcha, el coche sigue siendo dirigible, pero exige mucha más fuerza. Sujeta el volante con las dos manos, reduce la velocidad y detente en un lugar seguro.",
        },
      },
      {
        id: "itv",
        heading: "Dirección y suspensión en la ITV",
        paragraphs: [
          "El manual de procedimiento de las estaciones ITV incluye la comprobación de holguras en la dirección, rótulas, fuelles y fijaciones, además de fugas de líquido. Un fuelle de palier roto o una rótula con holgura suelen dar lugar a un defecto que hay que reparar, así que conviene revisarlo antes de la inspección.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Holgura en el volante, golpes al girar o el coche no mantiene la trayectoria.",
        action: "Circula solo lo imprescindible a velocidad reducida o pide una grúa.",
      },
      {
        signal: "Testigo de dirección asistida o pérdida repentina de asistencia.",
        action: "Reduce la velocidad, sujeta el volante con firmeza y detente en un lugar seguro.",
      },
      {
        signal: "Fuga visible de líquido de dirección o charco rojizo bajo el motor.",
        action: "No sigas añadiendo líquido sin localizar la fuga: puede dañar la bomba y la correa.",
      },
    ],
    safeSteps: [
      {
        title: "Mide la presión de los neumáticos",
        detail: "Con las ruedas frías, ajusta al valor de la placa del coche. Es la causa más simple de una dirección dura.",
      },
      {
        title: "Mira el fuelle del palier",
        detail: "Con las ruedas giradas a fondo, observa por detrás de la rueda delantera si el fuelle de goma está roto o hay grasa salpicada.",
      },
      {
        title: "Revisa el depósito de dirección hidráulica",
        detail: "Si tu coche lo tiene, comprueba el nivel con el motor parado según las marcas del depósito y el manual.",
      },
      {
        title: "Anota cuándo suena",
        detail: "Lado, maniobra, velocidad y si es al acelerar o al pasar baches. Un vídeo con sonido ayuda mucho al taller.",
      },
    ],
    workshop: {
      introduction:
        "La revisión de holguras requiere elevar el coche y mover ruedas y brazos con herramientas; no es una comprobación que se pueda hacer con seguridad en la calle.",
      urgent: [
        "Holgura en el volante o golpes metálicos al girar.",
        "Pérdida repentina de asistencia o testigo de dirección.",
        "El coche se desvía o vibra al girar con fuerza.",
      ],
      appointment: [
        "Crujido al girar a fondo con fuelle roto.",
        "Chirrido de la dirección hidráulica que se repite.",
        "Ruidos de suspensión al girar sobre baches.",
      ],
      usefulInformation: [
        "Lado y maniobra en que aparece el ruido.",
        "Tipo de dirección (hidráulica o eléctrica) y si hubo testigo.",
        "Fecha del último cambio de neumáticos y alineación.",
      ],
    },
    faqs: [
      {
        question: "¿Es peligroso un crujido al girar a fondo?",
        answer:
          "Una junta homocinética que cruje puede seguir funcionando un tiempo, pero el desgaste avanza y en el peor caso el palier se rompe. Si el fuelle está roto, repáralo cuanto antes: cambiar solo el fuelle a tiempo es mucho más barato.",
      },
      {
        question: "¿Por qué la dirección se endurece después de muchas maniobras?",
        answer:
          "En dirección eléctrica, el sistema puede reducir la asistencia para proteger el motor cuando se calienta. Si vuelve a la normalidad tras unos minutos sin maniobrar y no hay testigo, suele ser ese efecto.",
      },
      {
        question: "¿Hace falta alinear tras cambiar una rótula?",
        answer:
          "Normalmente sí: cambiar rótulas de dirección modifica la convergencia y conviene alinear para evitar desgaste irregular de neumáticos.",
      },
      {
        question: "¿Qué líquido lleva la dirección hidráulica?",
        answer:
          "Depende del fabricante: algunos usan aceite tipo ATF y otros un líquido específico. Mezclarlos puede dañar juntas. Consulta el manual o la tapa del depósito.",
      },
    ],
    relatedSlugs: [
      "coche-se-va-hacia-un-lado",
      "amortiguadores-desgaste-cuando-cambiar",
      "neumaticos-dot-desgaste-presion",
      "checklist-itv-coche-antiguo",
    ],
    sources: [sources.mechanicsManual, sources.itvManual, sources.roadsideReview],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "olor-a-quemado-coche",
    category: "problemas",
    title: "Olor a quemado en el coche: qué indica cada olor y cuándo parar",
    seoTitle: "Olor a quemado en el coche: causas según el olor",
    description:
      "Olor a plástico, a aceite, a goma, dulce o a gasolina: qué suele haber detrás de cada olor en un coche, cuáles exigen parar en el acto y qué revisar después.",
    eyebrow: "Problemas · Olores",
    summary:
      "La nariz detecta averías antes que muchos testigos. Cada olor tiene un origen típico, y algunos, como el de plástico quemado o el de combustible, exigen detenerse de inmediato por riesgo de incendio.",
    directAnswer:
      "Olor a plástico o cable quemado: posible cortocircuito, para y apaga el motor. Olor a gasolina o gasóleo: posible fuga, detente y no arranques de nuevo. Olor a aceite quemado: suele ser una fuga que gotea sobre el escape. Olor dulce: refrigerante, revisa nivel y temperatura. Olor a quemado tras bajar un puerto o tras una rampa: frenos o embrague recalentados. Olor a goma: neumático que roza o correa que patina.",
    readingMinutes: 8,
    sections: [
      {
        id: "por-olor",
        heading: "Qué suele indicar cada olor",
        paragraphs: [
          "Fíjate en si el olor entra por la ventilación, si lo notas al bajar del coche junto a una rueda o al motor, y si aparece después de un esfuerzo concreto. Esa información cuenta tanto como el olor en sí.",
        ],
        bullets: [
          "Plástico o cable quemado, con humo o sin él: problema eléctrico. Peligro de incendio.",
          "Gasolina o gasóleo: fuga en el circuito de combustible o en el depósito. Peligro de incendio.",
          "Aceite quemado, con algo de humo bajo el capó: fuga de aceite que cae sobre el colector o el escape.",
          "Olor dulce, a veces con vaho en los cristales: fuga de refrigerante, a menudo por el radiador de calefacción.",
          "Quemado intenso tras bajar un puerto o en una rueda concreta: frenos recalentados o una pinza agarrotada.",
          "Quemado acre tras arrancar en cuesta o maniobrar mucho: embrague patinando.",
          "Goma quemada: neumático rozando o correa auxiliar patinando.",
          "Huevo podrido: catalizador trabajando con mezcla incorrecta.",
        ],
      },
      {
        id: "inmediato",
        heading: "Los olores que exigen parar ya",
        paragraphs: [
          "El olor a plástico o cable quemado y el olor a combustible son los dos que no admiten esperar. Detén el coche en un lugar seguro, apaga el motor y sal con los ocupantes. No abras el capó del todo si ves humo o llamas: el aporte de aire aviva el fuego. Llama al 112 si hay humo denso o llamas.",
          "Una instalación eléctrica tocada por accesorios añadidos, como alarmas, radios o enganches, es una causa clásica de cortocircuitos en coches con años.",
        ],
        callout: {
          tone: "important",
          title: "Humo bajo el capó",
          text: "Si sale humo, aléjate del coche y llama al 112. No intentes apagarlo con agua si puede ser eléctrico o de combustible, y usa el extintor solo si sabes hacerlo y el fuego es incipiente.",
        },
      },
      {
        id: "frenos-embrague",
        heading: "Frenos y embrague recalentados",
        paragraphs: [
          "Bajar un puerto largo frenando de forma continua calienta discos y pastillas hasta producir olor y pérdida de eficacia. Usar una marcha más corta para que el motor retenga reduce ese calor. Si el olor sale siempre de la misma rueda, incluso en llano, una pinza puede estar agarrotada: notarás esa llanta mucho más caliente que las demás.",
          "El embrague huele cuando patina, por ejemplo al arrancar en cuesta con muchas revoluciones. Un episodio aislado no es grave; si el olor se repite en uso normal, el disco puede estar gastado.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Olor a plástico quemado, humo o chispas.",
        action: "Detente, apaga el motor, salid del coche y llama al 112 si hay humo denso.",
      },
      {
        signal: "Olor a combustible.",
        action: "Apaga el motor, no fumes ni arranques y pide asistencia.",
      },
      {
        signal: "Olor a quemado con pedal de freno blando o el coche frena peor.",
        action: "Detente en un lugar seguro y deja enfriar; no reanudes la marcha si el pedal no recupera su tacto.",
      },
    ],
    safeSteps: [
      {
        title: "Localiza el olor",
        detail: "Al bajar del coche, acércate con prudencia a cada rueda y al frontal sin tocar nada caliente. Un olor intenso en una rueda apunta al freno.",
      },
      {
        title: "Busca manchas en frío",
        detail: "Con el motor frío, mira bajo el coche y alrededor del motor si hay restos de aceite o refrigerante.",
      },
      {
        title: "Comprueba niveles",
        detail: "Revisa aceite y refrigerante en frío. Una bajada clara confirma la fuga.",
      },
      {
        title: "Revisa accesorios eléctricos",
        detail: "Si has instalado algo recientemente, desconéctalo y coméntalo en el taller.",
      },
    ],
    workshop: {
      introduction:
        "Muchas fugas solo se ven con el coche elevado y el motor limpio. El taller puede hacer una prueba de presión del circuito de refrigeración o una inspección eléctrica.",
      urgent: [
        "Olor a plástico quemado o a combustible.",
        "Humo bajo el capó o del salpicadero.",
        "Pedal de freno blando tras el olor a quemado.",
      ],
      appointment: [
        "Olor a aceite quemado que se repite.",
        "Olor dulce o vaho en los cristales con la calefacción.",
        "Olor a embrague en uso normal.",
      ],
      usefulInformation: [
        "Tipo de olor y dónde se nota más.",
        "Si aparece tras un esfuerzo concreto (puerto, rampa, atasco).",
        "Accesorios eléctricos instalados y reparaciones recientes.",
      ],
    },
    faqs: [
      {
        question: "¿Es normal que huela a quemado un coche nuevo o recién reparado?",
        answer:
          "Durante los primeros trayectos tras cambiar escape, frenos o tras una reparación con restos de aceite, es habitual un olor leve que desaparece. Si persiste o aumenta, revisa.",
      },
      {
        question: "¿Por qué huele a quemado al poner la calefacción?",
        answer:
          "Tras meses sin usarla, el polvo acumulado se quema los primeros minutos. Un olor dulce es distinto: suele indicar refrigerante y conviene revisarlo.",
      },
      {
        question: "¿El olor a huevo podrido es peligroso?",
        answer:
          "Suele venir del catalizador cuando la mezcla no es correcta. No es una emergencia, pero indica un problema de mezcla o del catalizador que conviene diagnosticar.",
      },
      {
        question: "¿Puedo seguir si huele a aceite quemado?",
        answer:
          "Si el nivel es correcto, no hay humo abundante ni testigos, normalmente sí, con prudencia y cita en el taller. Vigila el nivel a diario hasta repararlo.",
      },
    ],
    relatedSlugs: [
      "manchas-liquido-debajo-coche",
      "ruido-vibracion-al-frenar",
      "embrague-patina-pedal-duro",
      "liquido-refrigerante-anticongelante",
    ],
    sources: [sources.mechanicsManual, sources.commonFailures, sources.roadsideReview],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "coche-gasta-mas-combustible",
    category: "problemas",
    title: "El coche gasta más combustible de lo normal: causas y cómo medirlo",
    seoTitle: "Coche gasta más gasolina o gasóleo: causas",
    description:
      "Cómo medir el consumo real y qué lo dispara en un coche con años: presión de neumáticos, baca, aire acondicionado, trayectos cortos, filtros, sensores, termostato o frenos que rozan.",
    eyebrow: "Problemas · Consumo",
    summary:
      "Un aumento de consumo casi nunca tiene una única causa. Antes de pensar en averías, mide bien y descarta los factores de uso, que según el IDAE pesan mucho más de lo que parece.",
    directAnswer:
      "Primero mide el consumo con el método de llenado completo durante varios depósitos. Si de verdad ha subido, revisa por este orden: presión de neumáticos (0,3 bar por debajo supone en torno a un 3 % más, según el IDAE), baca o accesorios exteriores, peso extra, trayectos cortos en frío y uso del aire acondicionado. Después, mecánica: filtro de aire, bujías, sensores de mezcla, termostato que no deja calentar el motor, un freno que roza o, en diésel, regeneraciones frecuentes del filtro de partículas.",
    readingMinutes: 9,
    sections: [
      {
        id: "medir",
        heading: "Mide el consumo real, no el del ordenador",
        paragraphs: [
          "El ordenador de a bordo es una estimación y puede desviarse. Para medir, llena el depósito hasta que salte el surtidor, pon a cero el cuentakilómetros parcial y, en el siguiente repostaje, llena de nuevo en el mismo surtidor. Divide los litros repostados entre los kilómetros recorridos y multiplica por cien. Repite al menos tres depósitos para tener una media fiable.",
          "Compara con tu propio histórico en condiciones parecidas, no con la cifra de homologación: el uso urbano, el frío y los trayectos cortos cambian mucho el resultado.",
        ],
      },
      {
        id: "uso",
        heading: "Factores de uso que más pesan",
        paragraphs: [
          "La guía del IDAE sobre turismos recoge cifras orientativas útiles para priorizar. Ninguna requiere taller y, sumadas, explican muchas subidas de consumo atribuidas a una avería.",
        ],
        bullets: [
          "Neumáticos 0,3 bar por debajo de la presión recomendada: alrededor de un 3 % más de consumo.",
          "Baca, incluso vacía, u otros accesorios exteriores: hasta un 35 % más.",
          "Aire acondicionado: hasta un 25 % más.",
          "Cada 100 kg de peso extra: alrededor de un 5 % más.",
          "Ventanillas bajadas en carretera: alrededor de un 5 % más.",
          "Pasar de 90 a 120 km/h: alrededor de un 40 % más.",
          "Trayectos urbanos muy cortos en frío: pueden duplicar el consumo de carretera.",
        ],
      },
      {
        id: "mecanica",
        heading: "Causas mecánicas en coches con años",
        paragraphs: [
          "Un termostato que se queda abierto impide que el motor alcance su temperatura y la centralita enriquece la mezcla; lo notarás porque la aguja tarda mucho en subir o la calefacción calienta poco. Un sensor de temperatura, la sonda lambda o el caudalímetro con lecturas erróneas tienen un efecto parecido y suelen dejar códigos de avería.",
          "Una pinza de freno que no libera del todo frena el coche de forma continua: la llanta de esa rueda se calienta más que las otras y puede oler a quemado. En diésel, si el filtro de partículas regenera con demasiada frecuencia por trayectos cortos, el consumo sube durante esas regeneraciones.",
        ],
        callout: {
          tone: "info",
          title: "Mantenimiento al día",
          text: "Filtro de aire, bujías y aceite del grado correcto no dan grandes ahorros por sí solos, pero un filtro saturado o unas bujías gastadas sí empeoran el consumo y la respuesta.",
        },
      },
    ],
    dangerSignals: [
      {
        signal: "Olor a combustible o manchas de combustible bajo el coche.",
        action: "No arranques, aléjate de fuentes de calor y pide revisión de una posible fuga.",
      },
      {
        signal: "Una llanta mucho más caliente que el resto o olor a freno.",
        action: "Deja enfriar y revisa: un freno agarrotado puede sobrecalentarse y perder eficacia.",
      },
    ],
    safeSteps: [
      {
        title: "Mide tres depósitos",
        detail: "Con el método de llenado completo, anota litros y kilómetros. Sin datos fiables no hay diagnóstico.",
      },
      {
        title: "Ajusta la presión",
        detail: "Con las ruedas frías y el valor de la placa del coche, según carga.",
      },
      {
        title: "Quita lo que sobra",
        detail: "Baca, cofre, portabicis o peso en el maletero que no uses a diario.",
      },
      {
        title: "Lee los códigos",
        detail: "Un lector OBD2 puede mostrar problemas de mezcla, del termostato o de sensores aunque no haya testigo encendido.",
      },
      {
        title: "Toca las llantas tras un trayecto",
        detail: "Acerca la mano sin tocar: si una está mucho más caliente que las demás, sospecha de ese freno.",
      },
    ],
    workshop: {
      introduction:
        "Si el consumo sigue alto tras descartar el uso, el taller puede revisar correcciones de mezcla, temperatura real del motor y el estado de frenos y filtros.",
      urgent: [
        "Olor o fuga de combustible.",
        "Freno agarrotado con olor a quemado.",
      ],
      appointment: [
        "Consumo medido claramente superior a tu histórico.",
        "Aguja de temperatura que tarda mucho en subir o calefacción débil.",
        "Códigos OBD2 de mezcla, sonda lambda o caudalímetro.",
      ],
      usefulInformation: [
        "Consumo medido en varios depósitos y tipo de trayectos.",
        "Fecha de cambio de filtros, bujías y aceite.",
        "Códigos OBD2 leídos.",
      ],
    },
    faqs: [
      {
        question: "¿Cuánto más gasta un coche en invierno?",
        answer:
          "El motor tarda más en calentar y la mezcla es más rica en frío, así que en trayectos cortos el consumo sube de forma notable. En carretera la diferencia es menor.",
      },
      {
        question: "¿Merece la pena apagar el motor en paradas?",
        answer:
          "Según el IDAE, al ralentí un turismo consume del orden de 0,5 a 0,7 litros por hora, y recomienda apagar en paradas de más de un minuto. Con baterías y motores de arranque muy gastados, valora su estado.",
      },
      {
        question: "¿Los aditivos reducen el consumo?",
        answer:
          "No hay base para esperar ahorros relevantes de un aditivo en un motor en buen estado. Es más eficaz corregir presión, peso y mantenimiento.",
      },
      {
        question: "¿Un coche viejo gasta más por la edad?",
        answer:
          "La edad por sí sola no dispara el consumo si el mantenimiento está al día. Lo que lo sube son piezas desgastadas concretas, que se pueden identificar.",
      },
    ],
    relatedSlugs: [
      "neumaticos-dot-desgaste-presion",
      "filtros-coche-aire-habitaculo-combustible",
      "filtro-particulas-dpf-egr-diesel",
      "tirones-al-acelerar-fallo-encendido",
    ],
    sources: [sources.idaeGuide, sources.mechanicsManual, sources.roadsideReview],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "filtros-coche-aire-habitaculo-combustible",
    category: "mantenimiento",
    title: "Filtros del coche: aire, habitáculo, combustible y aceite, cuándo cambiarlos",
    seoTitle: "Filtros del coche: cuándo cambiar cada uno",
    description:
      "Para qué sirve cada filtro del coche, qué síntomas da cuando está saturado, cuáles puedes revisar tú y por qué el intervalo debe salir del plan del fabricante.",
    eyebrow: "Mantenimiento · Filtros",
    summary:
      "Un coche de combustión lleva al menos cuatro filtros: aceite, aire del motor, combustible y habitáculo. Son piezas baratas que protegen otras muy caras, y en coches con años es habitual que alguno lleve mucho más tiempo del debido.",
    directAnswer:
      "El filtro de aceite se cambia con cada cambio de aceite. El de aire del motor y el de habitáculo suelen revisarse en cada mantenimiento y cambiarse según kilómetros o tiempo, antes si circulas por polvo o mucha ciudad. El de combustible, sobre todo en diésel, tiene su propio intervalo y retiene agua. El dato exacto lo da el plan de mantenimiento de tu versión. Un filtro de aire o de habitáculo puedes revisarlo tú en pocos minutos.",
    readingMinutes: 7,
    sections: [
      {
        id: "cada-filtro",
        heading: "Qué hace cada filtro",
        paragraphs: [
          "Cada filtro protege un sistema distinto, y saltarse uno no se nota de inmediato, que es justo por lo que se olvida.",
        ],
        bullets: [
          "Aceite: retiene partículas metálicas y suciedad del lubricante. Se cambia siempre junto con el aceite.",
          "Aire del motor: evita que entre polvo a los cilindros y al turbo. Saturado, reduce potencia y puede subir el consumo.",
          "Combustible: protege bomba e inyectores. En diésel separa además el agua, crítica para los sistemas de alta presión.",
          "Habitáculo o antipolen: filtra el aire que respiras. Saturado, reduce el caudal de la ventilación, empaña cristales y huele mal.",
        ],
      },
      {
        id: "sintomas",
        heading: "Síntomas de un filtro saturado",
        paragraphs: [
          "Un filtro de aire del motor muy sucio se traduce en menos fuerza al acelerar y, en algunos casos, más humo negro en diésel. Uno de combustible obstruido da tirones bajo carga y arranques difíciles. Un filtro de habitáculo agotado se nota en el poco caudal del ventilador incluso al máximo y en cristales que tardan en desempañar.",
        ],
        callout: {
          tone: "caution",
          title: "Agua en el gasóleo",
          text: "Muchos diésel avisan con un testigo de agua en el filtro. Si se enciende, no lo ignores: el agua dañará la bomba y los inyectores. Purga o cambia el filtro según el manual.",
        },
      },
      {
        id: "hazlo-tu",
        heading: "Lo que puedes revisar tú",
        paragraphs: [
          "El filtro de aire del motor suele ir en una caja de plástico con pinzas o tornillos. Con el motor apagado, ábrela, saca el filtro y míralo a contraluz: si apenas pasa luz o está negro, toca cambiarlo. Limpia el interior de la caja sin dejar caer suciedad hacia el conducto del motor.",
          "El filtro de habitáculo suele estar detrás de la guantera o bajo el parabrisas. El manual indica el acceso. Al montarlo, respeta la flecha de sentido del aire.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Testigo de agua en el gasóleo.",
        action: "Reduce el uso al mínimo y purga o cambia el filtro cuanto antes.",
      },
      {
        signal: "Olor a combustible tras cambiar el filtro de combustible.",
        action: "No arranques: revisa que las conexiones estén bien montadas o pide ayuda.",
      },
    ],
    safeSteps: [
      {
        title: "Consulta el plan del fabricante",
        detail: "Busca los intervalos de cada filtro para tu motor en el manual o el libro de mantenimiento.",
      },
      {
        title: "Revisa facturas",
        detail: "Comprueba cuándo se cambió cada filtro por última vez. Si no hay registro, asume que toca.",
      },
      {
        title: "Mira el filtro de aire",
        detail: "Con el motor apagado, ábrelo y obsérvalo a contraluz.",
      },
      {
        title: "Cambia el de habitáculo en primavera",
        detail: "Antes de la época de polen y del uso intensivo del aire acondicionado.",
      },
    ],
    workshop: {
      introduction:
        "El filtro de combustible, sobre todo en diésel de inyección directa, conviene cambiarlo en taller: un mal purgado puede impedir el arranque o dañar la bomba.",
      urgent: ["Testigo de agua en el gasóleo encendido de forma persistente."],
      appointment: [
        "Filtros sin registro de cambio en mucho tiempo.",
        "Pérdida de fuerza o tirones bajo carga.",
        "Ventilación con poco caudal y cristales que se empañan.",
      ],
      usefulInformation: [
        "Último cambio de cada filtro y kilómetros desde entonces.",
        "Tipo de uso: ciudad, polvo, trayectos cortos.",
      ],
    },
    faqs: [
      {
        question: "¿Se puede limpiar el filtro de aire con aire a presión?",
        answer:
          "En filtros de papel desechables no es recomendable: se puede romper el material y dejar pasar polvo. Algunos filtros específicos son lavables, siguiendo las instrucciones del fabricante.",
      },
      {
        question: "¿Un filtro de habitáculo de carbón activo merece la pena?",
        answer:
          "Retiene además olores y algunos gases. Es útil si circulas mucho por ciudad o túneles, siempre que sea la referencia correcta para tu coche.",
      },
      {
        question: "¿El filtro de aceite se puede cambiar sin cambiar el aceite?",
        answer:
          "No tiene sentido: el aceite usado ensuciaría el filtro nuevo. Se cambian juntos.",
      },
      {
        question: "¿Afecta un filtro sucio a la ITV?",
        answer:
          "Indirectamente: un filtro de aire muy saturado puede empeorar las emisiones, especialmente la opacidad en diésel.",
      },
    ],
    relatedSlugs: [
      "aceite-motor-nivel-consumo-cambio",
      "mantenimiento-coche-10-15-20-anos",
      "coche-gasta-mas-combustible",
      "aire-acondicionado-coche-no-enfria",
    ],
    sources: [sources.mechanicsManual, sources.oilChange, sources.roadsideReview],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "faros-amarillentos-luces-itv",
    category: "itv-normativa",
    title: "Faros amarillentos, bombillas y reglaje: cómo pasar las luces en la ITV",
    seoTitle: "Faros opacos y luces en la ITV: qué revisan",
    description:
      "Qué comprueba la ITV en el alumbrado, si unos faros amarillentos u opacos pueden suspender, cómo restaurarlos bien y qué pasa con las bombillas LED en faros halógenos.",
    eyebrow: "ITV y normativa · Alumbrado",
    summary:
      "El alumbrado es uno de los capítulos de la ITV que más defectos acumula en coches con años, y casi todo se puede revisar en casa en diez minutos. Los faros opacos, además de suspender, reducen mucho lo que ves de noche.",
    directAnswer:
      "La ITV comprueba que todas las luces funcionen, tengan el color correcto, estén bien fijadas y orientadas, y que el faro no tenga roturas ni una opacidad que reduzca la luz. Unos faros muy amarillentos pueden dar un defecto si afectan a la emisión o al reglaje del haz. Se recuperan puliendo y, sobre todo, sellando con un protector UV. Montar bombillas LED en un faro diseñado para halógenos solo es válido si el kit está homologado para tu modelo concreto.",
    readingMinutes: 7,
    sections: [
      {
        id: "que-revisa",
        heading: "Qué revisa la ITV en el alumbrado",
        paragraphs: [
          "El manual de procedimiento de las estaciones ITV dedica un capítulo al alumbrado y la señalización. Se inspeccionan las luces de cruce y carretera, posición, freno, intermitentes, emergencia, marcha atrás, antiniebla trasera y matrícula, además de los catadióptricos.",
        ],
        bullets: [
          "Funcionamiento de todas las luces y sus testigos en el cuadro.",
          "Color correcto de cada luz y que ambos lados emitan de forma similar.",
          "Orientación del haz de cruce, medida con un regloscopio.",
          "Estado de los faros: roturas, humedad interior, opacidad o reflectores deteriorados.",
          "Fijación de faros y pilotos y ausencia de elementos no homologados.",
        ],
      },
      {
        id: "faros-opacos",
        heading: "Faros amarillentos u opacos",
        paragraphs: [
          "Los faros de policarbonato llevan una capa protectora frente a los rayos UV. Con los años se degrada, el plástico se oxida y se vuelve amarillo y mate. El resultado es menos luz útil y un haz más difuso que deslumbra a otros conductores.",
          "La restauración consiste en lijar al agua con granos progresivamente más finos, pulir y, lo más importante, aplicar un sellador o barniz con protección UV. Sin ese último paso, el faro vuelve a amarillear en pocos meses. Si el reflector interior está quemado o hay humedad dentro, pulir no basta y hay que sustituir el faro.",
        ],
        callout: {
          tone: "caution",
          title: "Cuidado con los «trucos»",
          text: "Pasta de dientes, repelentes o productos similares dan brillo temporal, pero no restauran la capa protectora. Pueden servir para salir del paso, no como reparación.",
        },
      },
      {
        id: "led",
        heading: "Bombillas LED en faros halógenos",
        paragraphs: [
          "Un faro está homologado con un tipo de fuente de luz. Sustituir la halógena por una bombilla LED genérica cambia el haz y no está permitido. Existen kits de sustitución homologados para modelos concretos; si optas por uno, comprueba que tu coche figura en la lista de compatibilidad del fabricante del kit y conserva la documentación para la ITV.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "Luces de cruce o de freno que no funcionan.",
        action: "Repara antes de circular de noche o con mala visibilidad: es un riesgo para ti y para los demás.",
      },
    ],
    safeSteps: [
      {
        title: "Prueba todas las luces",
        detail: "Con ayuda de otra persona o frente a una pared: cruce, largas, posición, intermitentes, emergencia, freno, marcha atrás, antiniebla y matrícula.",
      },
      {
        title: "Compara los dos faros",
        detail: "Si uno ilumina claramente menos o tiene otro tono, revisa la bombilla y la opacidad.",
      },
      {
        title: "Revisa el reglaje en casa",
        detail: "Frente a una pared plana, con el coche descargado, ambos cortes del haz deben quedar a la misma altura. El ajuste fino, en taller.",
      },
      {
        title: "Restaura con sellado UV",
        detail: "Si pules los faros, termina siempre con un protector UV y deja curar el tiempo indicado.",
      },
    ],
    workshop: {
      introduction:
        "El reglaje preciso del haz requiere un regloscopio, el mismo aparato que usa la ITV. Muchos talleres lo ajustan en pocos minutos.",
      urgent: ["Faro roto con riesgo de que se suelte o luces de freno sin funcionar."],
      appointment: [
        "Faros muy opacos o con humedad interior.",
        "Haz desajustado o deslumbramientos de otros conductores.",
        "Testigos de fallo de bombilla.",
      ],
      usefulInformation: [
        "Tipo de faro (halógeno, xenón, LED de serie).",
        "Bombillas cambiadas recientemente y su referencia.",
      ],
    },
    faqs: [
      {
        question: "¿Suspende la ITV por tener los faros amarillos?",
        answer:
          "Depende del grado: si la opacidad reduce la emisión de luz o altera el haz, el inspector puede anotar un defecto. Unos faros ligeramente mates normalmente no, pero es mejor restaurarlos antes.",
      },
      {
        question: "¿Cuánto dura la restauración de un faro?",
        answer:
          "Con un buen sellado UV puede durar años; sin él, el amarilleo vuelve en meses.",
      },
      {
        question: "¿Hay que cambiar las dos bombillas a la vez?",
        answer:
          "Es recomendable: la que no se ha fundido también ha perdido intensidad y así ambos lados iluminan igual.",
      },
      {
        question: "¿Puedo pasar la ITV con una luz fundida?",
        answer:
          "Una luz obligatoria que no funciona es un defecto. Cambia la bombilla antes de ir.",
      },
    ],
    relatedSlugs: [
      "checklist-itv-coche-antiguo",
      "itv-frecuencia-desfavorable-negativa",
      "testigos-coche-significado",
      "itv-caducada-que-hacer",
    ],
    sources: [sources.itvManual, sources.itvLaw, sources.roadsideReview],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
  {
    slug: "comprar-coche-segunda-mano-que-revisar",
    category: "itv-normativa",
    title: "Comprar un coche de segunda mano: qué revisar y qué papeles pedir",
    seoTitle: "Comprar coche de segunda mano: revisión y papeles",
    description:
      "Lista práctica para comprar un coche usado con años: informe de la DGT, cargas, ITV, mantenimiento, prueba en carretera, contrato, impuesto y cambio de titular en 30 días.",
    eyebrow: "ITV y normativa · Compraventa",
    summary:
      "Comprar un coche con años puede ser una buena decisión si sabes qué estás comprando. La mitad del trabajo es documental, y la DGT ofrece herramientas oficiales para evitar sorpresas antes de pagar.",
    directAnswer:
      "Antes de pagar, pide el informe de la DGT con la matrícula para ver cargas, embargos, ITV y kilometraje registrado; comprueba que la ITV está vigente y los impuestos al día; revisa facturas de mantenimiento (aceite, distribución, frenos) y haz una prueba en carretera, idealmente con un taller de confianza. Firmad un contrato con los datos de ambas partes, del coche, precio, fecha y hora. Después, liquida el impuesto de transmisiones en tu comunidad y haz el cambio de titular en la DGT en un plazo de 30 días.",
    readingMinutes: 10,
    sections: [
      {
        id: "informe",
        heading: "Pide el informe de la DGT antes de ver el coche",
        paragraphs: [
          "Con la matrícula puedes solicitar en la sede electrónica de la DGT, en la app miDGT, por teléfono en el 060 o en una Jefatura un informe del vehículo. El reducido es gratuito e indica la fecha de primera matriculación y si hay impedimentos para la transferencia. Los informes detallados tienen una tasa y añaden, según el tipo, historial de ITV, kilometraje registrado, datos técnicos y revisiones pendientes.",
          "La DGT recomienda comprobar que el coche no tiene reserva de dominio ni embargos, que las multas están pagadas y que el impuesto de circulación del año anterior está abonado. Una reserva de dominio, por ejemplo de una financiera, puede tardar unos quince días en cancelarse.",
        ],
        callout: {
          tone: "info",
          title: "Kilometraje coherente",
          text: "Compara los kilómetros del cuadro con los registrados en las ITV del informe y con las facturas. Una cifra que baja entre inspecciones es una señal de alarma.",
        },
      },
      {
        id: "estado",
        heading: "Revisa el estado del coche",
        paragraphs: [
          "Si no puedes llevarlo a un profesional, la DGT sugiere al menos revisar pintura y golpes, aceite, correa de distribución y que los neumáticos tengan como mínimo 1,6 mm de dibujo. En coches con años añade: facturas del cambio de distribución, estado de frenos, fugas bajo el motor y testigos en el cuadro al arrancar.",
          "Consulta también si el modelo tiene llamadas a revisión pendientes: la DGT ofrece ese aviso por matrícula.",
        ],
        bullets: [
          "Arranque en frío: ruidos, humo y testigos que se apagan como deben.",
          "Prueba en carretera: dirección recta, frenada sin desvíos, cambios suaves y embrague que no patina.",
          "Bajos y motor: manchas de aceite, refrigerante o combustible.",
          "Documentación: permiso de circulación, ficha técnica con ITV vigente y libro de mantenimiento.",
          "Lectura OBD2: códigos almacenados que se hayan borrado recientemente.",
        ],
      },
      {
        id: "contrato",
        heading: "Contrato, impuesto y cambio de titular",
        paragraphs: [
          "El contrato de compraventa debe incluir, como mínimo, nombre y documento de identidad de comprador y vendedor, marca, modelo y matrícula, precio, fecha y hora de la firma, y estar firmado por ambas partes en cada hoja. La hora importa: delimita quién responde de una multa ese día.",
          "Después, el comprador justifica el impuesto de transmisiones patrimoniales con el modelo 620 o 621 en su comunidad autónoma y solicita el cambio de titularidad en la DGT, en línea o presencialmente, dentro de los 30 días siguientes a la firma. Para circular, el coche necesita ITV vigente y seguro a nombre del nuevo propietario desde el primer día.",
        ],
      },
    ],
    dangerSignals: [
      {
        signal: "El vendedor no deja ver la documentación o pide pagar antes del informe.",
        action: "No pagues ni dejes señal: pide el informe de la DGT por tu cuenta.",
      },
      {
        signal: "Reserva de dominio o embargo en el informe.",
        action: "No cierres la compra hasta que esté cancelado y conste en el registro.",
      },
    ],
    safeSteps: [
      {
        title: "Informe por matrícula",
        detail: "Pídelo en la sede de la DGT o en miDGT antes de desplazarte a ver el coche.",
      },
      {
        title: "Revisa papeles y facturas",
        detail: "Permiso de circulación, ficha técnica, ITV vigente y facturas de mantenimiento.",
      },
      {
        title: "Prueba y revisión",
        detail: "Arranque en frío, prueba en carretera y, si puedes, revisión en un taller elegido por ti.",
      },
      {
        title: "Contrato completo",
        detail: "Con datos de ambos, del coche, precio, fecha y hora, firmado en cada hoja.",
      },
      {
        title: "Impuesto y transferencia",
        detail: "Modelo 620 o 621 en tu comunidad y cambio de titular en la DGT en 30 días.",
      },
    ],
    workshop: {
      introduction:
        "Una revisión de compra en un taller independiente cuesta poco frente al precio del coche y puede detectar averías caras que no se ven en una prueba corta.",
      urgent: ["Testigos rojos encendidos, humo abundante o ruidos metálicos en la prueba."],
      appointment: [
        "Revisión previa a la compra en un taller de tu elección.",
        "Comprobación de distribución si no hay factura de su cambio.",
      ],
      usefulInformation: [
        "Informe de la DGT y facturas del vendedor.",
        "Códigos OBD2 leídos en la prueba.",
      ],
    },
    faqs: [
      {
        question: "¿Cuánto cuesta el informe de la DGT?",
        answer:
          "El reducido es gratuito. Los informes detallados tienen una tasa, que en 2025 la DGT cifraba en 8,67 euros (tasa 4.1). Comprueba el importe vigente en la sede electrónica.",
      },
      {
        question: "¿Quién paga el cambio de titular?",
        answer:
          "Lo habitual es que lo pague el comprador, junto con el impuesto de transmisiones, salvo que el contrato diga otra cosa.",
      },
      {
        question: "¿Qué pasa si el comprador no hace la transferencia?",
        answer:
          "El vendedor puede notificar la venta a la DGT para dejar de figurar como responsable. Por eso conviene que el vendedor haga esa notificación y que el comprador tramite el cambio dentro del plazo.",
      },
      {
        question: "¿Puedo comprar un coche con la ITV caducada?",
        answer:
          "Sí, pero no puede circular hasta pasarla: solo puede llevarse a la estación en grúa o por otro medio autorizado.",
      },
    ],
    relatedSlugs: [
      "vender-o-dar-de-baja-coche-viejo",
      "itv-caducada-que-hacer",
      "correa-distribucion-cuando-cambiar",
      "como-elegir-lector-obd2",
    ],
    sources: [
      sources.buyUsed,
      sources.vehicleReport,
      sources.vehicleReportSede,
      sources.transfer,
      sources.recalls,
      sources.usedCars,
    ],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
  },
];
