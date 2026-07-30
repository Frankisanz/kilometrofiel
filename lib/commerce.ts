export type CommerceCategoryId =
  | "obd2"
  | "arrancadores"
  | "cargadores"
  | "multimetros"
  | "infladores"
  | "v16"
  | "herramienta-basica";

export type CommercialCategory = {
  id: CommerceCategoryId;
  name: string;
  description: string;
  searchIntent: string;
  selectionCriteria: readonly string[];
  warnings: readonly string[];
};

export const affiliateEnabled = true;
export const AMAZON_TRACKING_ID = "kmfiel-21";

export const AMAZON_AFFILIATE_DISCLOSURE =
  "En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables.";

export const EDITORIAL_INDEPENDENCE_NOTICE =
  "Kilómetro Fiel selecciona y ordena sus recomendaciones por utilidad, seguridad, compatibilidad y claridad técnica. La relación de afiliación no permite a Amazon ni a los fabricantes revisar, comprar o alterar nuestras conclusiones. Cuando no sea necesario adquirir una herramienta, también lo indicaremos.";

export const AFFILIATE_STATUS = {
  enabled: affiliateEnabled,
  trackingId: AMAZON_TRACKING_ID,
  activeLinks: true,
  explanation:
    "Los enlaces comerciales se identifican de forma visible y utilizan el ID de seguimiento exclusivo de Kilómetro Fiel. No mostramos precios, disponibilidad, imágenes ni valoraciones de Amazon sin una fuente autorizada y actualizada.",
  disclosure: AMAZON_AFFILIATE_DISCLOSURE,
  editorialIndependence: EDITORIAL_INDEPENDENCE_NOTICE,
} as const;

export type ProductRecommendation = {
  id: string;
  categoryId: CommerceCategoryId;
  name: string;
  asin: string;
  amazonUrl: string;
  bestFor: string;
  verifiedCriteria: readonly string[];
  limitations: readonly string[];
  verification: {
    amazonListingCheckedOn: string;
    listingStatusAtCheck: "active";
    dgt?: {
      checkedOn: string;
      model: string;
      brand: string;
      certificate: string;
      sourceUrl: string;
    };
  };
};

export const PRODUCT_RECOMMENDATIONS_CHECKED_ON = "2026-07-29";
export const DGT_V16_CERTIFIED_MODELS_URL =
  "https://www.dgt.es/muevete-con-seguridad/tecnologia-e-innovacion-en-carretera/Dispositivos-de-presenalizacion-V16/";

export const COMMERCIAL_CATEGORIES = [
  {
    id: "obd2",
    name: "Lectores OBD2",
    description:
      "Equipos para consultar códigos y datos disponibles a través del diagnóstico a bordo sin presentar una lectura como una reparación.",
    searchIntent:
      "Elegir un lector compatible, entender qué puede mostrar y evitar comprar funciones que el vehículo no admite.",
    selectionCriteria: [
      "Compatibilidad declarada con el vehículo, año, combustible y protocolos utilizados.",
      "Sistemas que puede leer: motor, transmisión, ABS, airbag u otros módulos, sin asumir que todos están incluidos.",
      "Funciones disponibles sin suscripción y coste de las licencias o actualizaciones posteriores.",
      "Aplicación, sistema operativo, idioma, conexión y política de actualización.",
      "Visualización de datos en directo, exportación y documentación técnica disponible.",
    ],
    warnings: [
      "Leer o borrar un código no identifica por sí solo la pieza averiada ni corrige la causa.",
      "No borrar fallos antes de guardar códigos y datos de contexto si pueden ser necesarios para el diagnóstico.",
      "Una herramienta genérica puede acceder al motor y no a otros módulos del mismo vehículo.",
    ],
  },
  {
    id: "arrancadores",
    name: "Arrancadores de batería",
    description:
      "Arrancadores portátiles para recuperar temporalmente la puesta en marcha cuando la batería y el vehículo permiten este procedimiento.",
    searchIntent:
      "Escoger tensión, capacidad de arranque y protecciones adecuadas para el tipo de motor y el uso previsto.",
    selectionCriteria: [
      "Tensión del sistema eléctrico y compatibilidad expresa con motores de gasolina o diésel.",
      "Corriente de arranque y límites indicados por el fabricante, no solo la cifra máxima publicitaria.",
      "Protección frente a polaridad inversa, cortocircuito, sobretemperatura y conexión incorrecta.",
      "Calidad, longitud y sección de pinzas y cables.",
      "Autodescarga, intervalo de recarga, temperatura de almacenamiento y estado de batería visible.",
    ],
    warnings: [
      "No utilizar con una batería congelada, hinchada, agrietada, con fugas o de química incompatible.",
      "Seguir el orden de conexión y los puntos de masa descritos en el manual del vehículo.",
      "Arrancar el motor no demuestra que la batería ni el sistema de carga estén en buen estado.",
    ],
  },
  {
    id: "cargadores",
    name: "Cargadores y mantenedores",
    description:
      "Cargadores destinados a recuperar o mantener baterías compatibles durante periodos de poco uso.",
    searchIntent:
      "Distinguir un cargador de un mantenedor y elegirlo según tensión, química, capacidad y tiempo disponible.",
    selectionCriteria: [
      "Compatibilidad con plomo-ácido, AGM, EFB, gel o litio según la batería concreta.",
      "Tensión, corriente de carga y rango de capacidad admitido.",
      "Modo de mantenimiento, compensación de temperatura y recuperación, explicando sus límites.",
      "Protecciones eléctricas, conectores incluidos y claridad de los indicadores.",
      "Condiciones de ventilación, temperatura y montaje previstas por el fabricante.",
    ],
    warnings: [
      "No seleccionar una química o tensión distinta de la indicada en la batería y el manual.",
      "No cargar una batería dañada ni trabajar cerca de llamas, chispas o ventilación insuficiente.",
      "Los modos de reparación no garantizan recuperar una batería degradada o insegura.",
    ],
  },
  {
    id: "multimetros",
    name: "Multímetros",
    description:
      "Instrumentos para comprobaciones eléctricas básicas cuando el usuario conoce el procedimiento, el rango y los límites del equipo.",
    searchIntent:
      "Elegir un multímetro seguro y legible para medir tensión, continuidad y otras magnitudes relevantes en un vehículo.",
    selectionCriteria: [
      "Categoría de medida, tensión máxima y protección real de las entradas.",
      "Fusibles, puntas, aislamiento y cumplimiento documentado de normas aplicables.",
      "Selección automática o manual de rango, resolución y precisión declarada.",
      "Funciones necesarias como continuidad audible, mínimo/máximo o pinza amperimétrica separada.",
      "Pantalla, soporte, funda y disponibilidad de recambios para puntas y fusibles.",
    ],
    warnings: [
      "Una conexión incorrecta en el modo de corriente puede provocar un cortocircuito o dañar el instrumento.",
      "No intervenir en sistemas de alta tensión de vehículos híbridos o eléctricos sin formación y equipos específicos.",
      "La categoría impresa no sustituye la verificación de documentación, construcción y procedencia del equipo.",
    ],
  },
  {
    id: "infladores",
    name: "Infladores y compresores portátiles",
    description:
      "Equipos para ajustar presiones y atender pérdidas leves, sin ocultar que una fuga o daño exige revisión.",
    searchIntent:
      "Comparar velocidad, precisión, alimentación y ciclo de trabajo para el tamaño de neumático previsto.",
    selectionCriteria: [
      "Caudal útil y tiempo de inflado, además de la presión máxima anunciada.",
      "Precisión y resolución del manómetro, con posibilidad de contrastarlo.",
      "Ciclo de trabajo, temperatura, apagado automático y protección térmica.",
      "Alimentación a 12 V o batería, autonomía, longitud de cable y manguera.",
      "Estuche, iluminación y adaptadores realmente necesarios.",
    ],
    warnings: [
      "Usar la presión en frío indicada por el fabricante del vehículo, no la presión máxima del neumático.",
      "Dejar enfriar el compresor según su ciclo de trabajo para evitar sobrecalentamiento.",
      "Un inflador no hace seguro un neumático con corte, deformación, daño estructural o pérdida repetida.",
    ],
  },
  {
    id: "v16",
    name: "Balizas V16 conectadas",
    description:
      "Dispositivos de preseñalización que deben verificarse en el listado oficial vigente, no solo por logotipos o afirmaciones del vendedor.",
    searchIntent:
      "Comprobar si una baliza es válida en España, durante cuánto tiempo incluye conectividad y cómo debe conservarse.",
    selectionCriteria: [
      "Presencia exacta del modelo en el listado oficial vigente de dispositivos certificados de la DGT.",
      "Fecha de caducidad o fin del servicio de comunicaciones y conectividad incluida.",
      "Visibilidad, estabilidad, protección frente a polvo y agua y comportamiento con viento.",
      "Tipo de batería, autonomía declarada, comprobación de carga y condiciones de almacenamiento.",
      "Instrucciones legibles y posibilidad de colocarla sin abandonar el vehículo cuando las circunstancias lo permitan.",
    ],
    warnings: [
      "No considerar válida una baliza únicamente porque el anuncio utilice las palabras homologada, conectada o DGT.",
      "Revisar periódicamente batería, caducidad y conservación sin activar falsas señales.",
      "La baliza no elimina la obligación de situarse en un lugar seguro y seguir las indicaciones de tráfico y emergencias.",
    ],
  },
  {
    id: "herramienta-basica",
    name: "Herramienta básica",
    description:
      "Juegos de llaves, vasos, destornilladores y útiles para tareas delimitadas, seleccionados por ajuste, resistencia y posibilidad de reposición.",
    searchIntent:
      "Formar un equipo inicial útil sin acumular piezas de baja calidad ni asumir trabajos que requieren medios profesionales.",
    selectionCriteria: [
      "Medidas métricas necesarias, perfiles que reduzcan daños y tamaños de cuadradillo adecuados.",
      "Material, tratamiento, ajuste, agarre y legibilidad de cada medida.",
      "Disponibilidad de piezas sueltas, garantía y organización del estuche.",
      "Llave dinamométrica separada cuando el procedimiento exija un par concreto.",
      "Utilidad real para el mantenimiento previsto frente al número total de piezas anunciado.",
    ],
    warnings: [
      "Aplicar siempre el par y el procedimiento del fabricante cuando sean relevantes.",
      "No trabajar bajo un vehículo sostenido únicamente por un gato; hacen falta apoyos apropiados y una superficie estable.",
      "Una herramienta inadecuada o mal ajustada puede redondear fijaciones y convertir una tarea sencilla en una reparación mayor.",
    ],
  },
] as const satisfies readonly CommercialCategory[];

export const PRODUCT_RECOMMENDATIONS = [
  {
    id: "ancel-ad310",
    categoryId: "obd2",
    name: "ANCEL AD310",
    asin: "B071V7PWM7",
    amazonUrl: "https://www.amazon.es/dp/B071V7PWM7?tag=kmfiel-21",
    bestFor:
      "Quien quiere leer códigos genéricos del motor sin depender del móvil, de una aplicación o de una batería interna.",
    verifiedCriteria: [
      "La ficha declara lectura y borrado de códigos de motor, datos en directo, imagen congelada, estado I/M, información del vehículo y prueba EVAP.",
      "Se alimenta desde el conector OBD2 y funciona como unidad autónoma con pantalla y botones.",
      "La ficha enumera los protocolos OBD2 ISO9141, KWP2000, J1850 PWM, J1850 VPW y CAN, e incluye el español entre sus idiomas.",
    ],
    limitations: [
      "La propia ficha excluye ABS, airbag y SRS: es un lector genérico del sistema de motor, no un equipo multimódulo.",
      "El año por sí solo no garantiza compatibilidad; hay que comprobar combustible, mercado, protocolo y conector del vehículo.",
      "Borrar un código no identifica la causa ni sustituye las pruebas de diagnóstico.",
    ],
    verification: {
      amazonListingCheckedOn: PRODUCT_RECOMMENDATIONS_CHECKED_ON,
      listingStatusAtCheck: "active",
    },
  },
  {
    id: "vgate-icar-pro-ble-4",
    categoryId: "obd2",
    name: "Vgate iCar Pro Bluetooth 4.0 (BLE)",
    asin: "B07SQLY39V",
    amazonUrl: "https://www.amazon.es/dp/B07SQLY39V?tag=kmfiel-21",
    bestFor:
      "Quien prefiere ver y registrar datos OBD2 en un móvil o tableta con una aplicación compatible.",
    verifiedCriteria: [
      "La ficha lo presenta como adaptador BLE para Android, iOS y Windows, con lectura de datos en directo y códigos del sistema de emisiones del motor.",
      "Declara compatibilidad con KWP2000, ISO9141, J1850 VPW, J1850 PWM y CAN en vehículos OBD2/EOBD de 12 V compatibles.",
      "Incluye suspensión automática de bajo consumo cuando permanece conectado.",
    ],
    limitations: [
      "No incluye una aplicación: algunas de las aplicaciones compatibles son de pago y las funciones dependen del vehículo y del software elegido.",
      "La ficha indica que trabaja principalmente con emisiones y motor; no garantiza ABS, airbag ni todos los módulos.",
      "La ficha excluye vehículos de 24 V, motocicletas y el protocolo KOBD.",
    ],
    verification: {
      amazonListingCheckedOn: PRODUCT_RECOMMENDATIONS_CHECKED_ON,
      listingStatusAtCheck: "active",
    },
  },
  {
    id: "noco-boost-gb40",
    categoryId: "arrancadores",
    name: "NOCO Boost GB40 (1000 A)",
    asin: "B015TKUPIC",
    amazonUrl: "https://www.amazon.es/dp/B015TKUPIC?tag=kmfiel-21",
    bestFor:
      "Turismos y motos de 12 V con motores de gasolina de hasta 6,0 l o diésel de hasta 3,0 l, dentro de los límites declarados.",
    verifiedCriteria: [
      "La ficha declara 1000 A y compatibilidad hasta 6,0 l en gasolina y 3,0 l en diésel.",
      "Incluye protección antichispas y contra inversión de polaridad.",
      "Integra linterna y salida USB para utilizarlo también como batería externa.",
    ],
    limitations: [
      "No debe elegirse para motores que superen los límites declarados ni para sistemas que no sean de 12 V.",
      "No se debe conectar a una batería congelada, hinchada, agrietada o con fugas.",
      "Debe mantenerse cargado según el manual; conseguir arrancar no demuestra que la batería o el alternador estén bien.",
    ],
    verification: {
      amazonListingCheckedOn: PRODUCT_RECOMMENDATIONS_CHECKED_ON,
      listingStatusAtCheck: "active",
    },
  },
  {
    id: "noco-boost-x-gbx45",
    categoryId: "arrancadores",
    name: "NOCO Boost X GBX45 (1250 A)",
    asin: "B0924V8SPC",
    amazonUrl: "https://www.amazon.es/dp/B0924V8SPC?tag=kmfiel-21",
    bestFor:
      "Quien necesita algo más de margen para un turismo, SUV o furgoneta de 12 V y valora la recarga USB-C Power Delivery.",
    verifiedCriteria: [
      "La ficha declara 1250 A y límites de 6,5 l para gasolina y 4,0 l para diésel.",
      "UltraSafe 2.0 incorpora protección antichispas, contra polaridad inversa y gestión térmica.",
      "La entrada y salida USB-C Power Delivery admite hasta 60 W y el equipo incorpora apagado automático.",
    ],
    limitations: [
      "Los tiempos de recarga anunciados requieren una fuente y un cable USB-C Power Delivery adecuados; hay que comprobar qué accesorios incluye la oferta.",
      "No debe usarse fuera de los límites de motor y tensión declarados ni con una batería dañada o de química incompatible.",
      "Es una ayuda de arranque, no un cargador de diagnóstico ni una reparación de la batería.",
    ],
    verification: {
      amazonListingCheckedOn: PRODUCT_RECOMMENDATIONS_CHECKED_ON,
      listingStatusAtCheck: "active",
    },
  },
  {
    id: "ctek-mxs-5",
    categoryId: "cargadores",
    name: "CTEK MXS 5.0",
    asin: "B00DEID79G",
    amazonUrl: "https://www.amazon.es/dp/B00DEID79G?tag=kmfiel-21",
    bestFor:
      "Mantener o cargar baterías de plomo de 12 V, incluidas AGM compatibles, con un programa específico y compensación térmica.",
    verifiedCriteria: [
      "La ficha identifica una salida de 5 A para baterías de 12 V y un modo AGM dedicado.",
      "Incluye compensación de temperatura y mantenimiento por flotación y pulsos.",
      "Ofrece programas de desulfatación y RECOND para los casos contemplados por su manual.",
    ],
    limitations: [
      "La ficha comprobada no lo presenta como cargador de litio; no debe usarse con una química o tensión no admitida por el manual.",
      "RECOND y la desulfatación no garantizan recuperar una batería degradada y nunca hacen segura una batería dañada.",
      "Con 5 A, el tiempo de carga depende mucho de la capacidad y del estado inicial de la batería.",
    ],
    verification: {
      amazonListingCheckedOn: PRODUCT_RECOMMENDATIONS_CHECKED_ON,
      listingStatusAtCheck: "active",
    },
  },
  {
    id: "noco-genius5",
    categoryId: "cargadores",
    name: "NOCO Genius5 (5 A)",
    asin: "B0828KQKBM",
    amazonUrl: "https://www.amazon.es/dp/B0828KQKBM?tag=kmfiel-21",
    bestFor:
      "Quien necesita un cargador y mantenedor de 5 A para baterías compatibles de 6 o 12 V, incluidas LiFePO4.",
    verifiedCriteria: [
      "La ficha declara compatibilidad con baterías de plomo de 6 y 12 V —AGM, gel, SLA y VRLA— y LiFePO4.",
      "El sensor térmico ajusta la carga a la temperatura ambiente y el equipo puede quedar en mantenimiento supervisado.",
      "Incluye pinzas, terminales de ojal y cables de corriente continua y alterna.",
    ],
    limitations: [
      "Hay que seleccionar el modo que corresponda exactamente a la tensión y química de la batería.",
      "El modo forzado para tensiones muy bajas exige especial cautela y no debe aplicarse a una batería congelada, hinchada, agrietada o con fugas.",
      "Sus 5 A pueden resultar lentos en baterías grandes o muy descargadas.",
    ],
    verification: {
      amazonListingCheckedOn: PRODUCT_RECOMMENDATIONS_CHECKED_ON,
      listingStatusAtCheck: "active",
    },
  },
  {
    id: "fluke-107",
    categoryId: "multimetros",
    name: "Fluke 107",
    asin: "B00V6BBY7A",
    amazonUrl: "https://www.amazon.es/dp/B00V6BBY7A?tag=kmfiel-21",
    bestFor:
      "Comprobaciones con puntas de tensión, resistencia y corriente en las que se necesita un multímetro compacto de rango conocido.",
    verifiedCriteria: [
      "La ficha declara respuesta True RMS y medida de tensión alterna y continua hasta 600 V.",
      "Declara medida de corriente alterna y continua hasta 10 A, resistencia hasta 40 MΩ y capacidad hasta 10 mF.",
      "La ficha publica las precisiones declaradas para tensión, corriente, resistencia y capacidad.",
    ],
    limitations: [
      "La ficha de Amazon comprobada no detalla la categoría de medida ni la protección de sus entradas; hay que consultar la documentación oficial antes de usarlo.",
      "Medir corriente con las puntas exige abrir el circuito, usar la entrada correcta y respetar el límite y el fusible del instrumento.",
      "No es una autorización para trabajar en la alta tensión de un híbrido o eléctrico.",
    ],
    verification: {
      amazonListingCheckedOn: PRODUCT_RECOMMENDATIONS_CHECKED_ON,
      listingStatusAtCheck: "active",
    },
  },
  {
    id: "uni-t-ut210e",
    categoryId: "multimetros",
    name: "UNI-T UT210E",
    asin: "B06XW6FMWQ",
    amazonUrl: "https://www.amazon.es/dp/B06XW6FMWQ?tag=kmfiel-21",
    bestFor:
      "Comprobar corriente continua alrededor de un solo conductor sin abrir el circuito, siempre que el rango y la resolución sean suficientes.",
    verifiedCriteria: [
      "La ficha lo identifica como pinza amperimétrica para corriente continua con autorango y True RMS.",
      "Incluye retención de datos, pantalla retroiluminada y apagado automático.",
      "La ficha declara protección contra sobrecarga y un formato compacto.",
    ],
    limitations: [
      "La ficha comprobada no presenta con claridad todos los rangos, precisión, resolución ni categoría de seguridad; deben verificarse en el manual oficial antes de medir.",
      "Una pinza puede no resolver consumos parásitos muy pequeños y debe abrazar un solo conductor, no el cable completo con ida y retorno.",
      "No debe utilizarse en circuitos de alta tensión de híbridos o eléctricos sin formación y equipo específico.",
    ],
    verification: {
      amazonListingCheckedOn: PRODUCT_RECOMMENDATIONS_CHECKED_ON,
      listingStatusAtCheck: "active",
    },
  },
  {
    id: "bosch-easypump",
    categoryId: "infladores",
    name: "Bosch EasyPump",
    asin: "B08HQHW4LS",
    amazonUrl: "https://www.amazon.es/dp/B08HQHW4LS?tag=kmfiel-21",
    bestFor:
      "Ajustes periódicos de presión y uso portátil sin depender de la toma de 12 V del coche.",
    verifiedCriteria: [
      "La ficha declara batería integrada de 3,0 Ah y 3,6 V, recarga USB-C y presión máxima de 10,3 bar.",
      "Permite preseleccionar la presión y se detiene automáticamente al alcanzarla.",
      "La pantalla muestra presión y batería; incorpora luz LED y adaptadores para válvula Presta, balones y pequeños inflables.",
    ],
    limitations: [
      "La presión máxima no informa del caudal: la ficha comprobada no concreta tiempo de inflado de un neumático de coche ni ciclo de trabajo.",
      "Es más apropiado para ajustar presión que para inflados grandes o repetidos; debe dejarse enfriar según el manual.",
      "No repara un pinchazo ni hace seguro un neumático cortado, deformado o con pérdidas repetidas.",
    ],
    verification: {
      amazonListingCheckedOn: PRODUCT_RECOMMENDATIONS_CHECKED_ON,
      listingStatusAtCheck: "active",
    },
  },
  {
    id: "osram-tyreinflate-450",
    categoryId: "infladores",
    name: "OSRAM TYREinflate 450",
    asin: "B08JQJBMQM",
    amazonUrl: "https://www.amazon.es/dp/B08JQJBMQM?tag=kmfiel-21",
    bestFor:
      "Llevar en el coche un compresor alimentado a 12 V con cable largo y parada automática.",
    verifiedCriteria: [
      "La ficha declara cable de 3,3 m para la toma de 12 V y pantalla digital en bar, kPa y psi.",
      "Incluye preselección, parada automática y memoria de la última presión.",
      "El tiempo publicado es de hasta 3,5 minutos para inflar desde vacío un neumático de 13 pulgadas hasta 2,41 bar.",
    ],
    limitations: [
      "El tiempo declarado corresponde a una prueba concreta con rueda de 13 pulgadas; neumáticos mayores y otras condiciones pueden tardar más.",
      "Necesita una toma de 12 V accesible y la ficha comprobada no detalla el ciclo de trabajo; hay que respetar las pausas del manual.",
      "No sustituye la reparación de un neumático dañado ni la comprobación posterior con un manómetro fiable.",
    ],
    verification: {
      amazonListingCheckedOn: PRODUCT_RECOMMENDATIONS_CHECKED_ON,
      listingStatusAtCheck: "active",
    },
  },
  {
    id: "osram-ledguardian-v16-iot",
    categoryId: "v16",
    name: "OSRAM LEDguardian ROAD FLARE Signal V16 IoT",
    asin: "B0DNFBS3NN",
    amazonUrl: "https://www.amazon.es/dp/B0DNFBS3NN?tag=kmfiel-21",
    bestFor:
      "Quien busca una baliza conectada con pila de 9 V reemplazable y prestaciones luminosas publicadas de forma concreta.",
    verifiedCriteria: [
      "La ficha declara luz ámbar de 360 grados, 140 lm, alcance de hasta 1.000 m y transmisión anónima de la posición a DGT 3.0.",
      "Declara una autonomía de hasta 2,5 horas e incluye una pila de 9 V.",
      "La base es magnética y la ficha recuerda que activar la baliza no sustituye la llamada a emergencias o asistencia.",
    ],
    limitations: [
      "Hay que comprobar en la unidad recibida que marca, modelo e identificación coinciden con el certificado indicado y revisar la fecha final de conectividad.",
      "La pila debe conservar carga suficiente y revisarse sin provocar una señal falsa.",
      "La colocación magnética depende de que exista una superficie adecuada y accesible desde una posición segura.",
    ],
    verification: {
      amazonListingCheckedOn: PRODUCT_RECOMMENDATIONS_CHECKED_ON,
      listingStatusAtCheck: "active",
      dgt: {
        checkedOn: PRODUCT_RECOMMENDATIONS_CHECKED_ON,
        model: "OSRAM LEDguardian® ROAD FLARE Signal V16 IoT",
        brand: "OSRAM",
        certificate: "IDIADA PC24050316",
        sourceUrl: DGT_V16_CERTIFIED_MODELS_URL,
      },
    },
  },
  {
    id: "help-flash-iot-plus",
    categoryId: "v16",
    name: "Help Flash IoT+ (modelo DGT IoT V4)",
    asin: "B0FHBDDBNT",
    amazonUrl: "https://www.amazon.es/dp/B0FHBDDBNT?tag=kmfiel-21",
    bestFor:
      "Quien prioriza una señal luminosa de mayor intensidad declarada y conectividad incluida hasta 2038.",
    verifiedCriteria: [
      "La ficha declara visibilidad de 360 grados y hasta 1 km, más de 290 candelas y emisión de la ubicación durante 2,5 horas.",
      "Incluye eSIM anónima sin cuotas ni suscripciones y conectividad declarada hasta 2038.",
      "Es compatible con la aplicación de asistencia myIncidence, que se presenta como un servicio adicional.",
    ],
    limitations: [
      "Hay que confirmar en el dispositivo recibido el modelo IoT V4, la marca HELP FLASH IoT + y el certificado LCOE 2024070742G1.",
      "La aplicación de asistencia es un extra: activar una V16 no equivale a solicitar ambulancia, policía, grúa o seguro.",
      "La fecha de conectividad y el estado de las pilas deben revisarse periódicamente.",
    ],
    verification: {
      amazonListingCheckedOn: PRODUCT_RECOMMENDATIONS_CHECKED_ON,
      listingStatusAtCheck: "active",
      dgt: {
        checkedOn: PRODUCT_RECOMMENDATIONS_CHECKED_ON,
        model: "IoT V4",
        brand: "HELP FLASH IoT +",
        certificate: "LCOE 2024070742G1",
        sourceUrl: DGT_V16_CERTIFIED_MODELS_URL,
      },
    },
  },
  {
    id: "bahco-sl25",
    categoryId: "herramienta-basica",
    name: 'Bahco SL25, juego de vasos de 1/4" (25 piezas)',
    asin: "B000Y8XCA8",
    amazonUrl: "https://www.amazon.es/dp/B000Y8XCA8?tag=kmfiel-21",
    bestFor:
      "Empezar con un estuche compacto de cuadradillo de 1/4 de pulgada para fijaciones pequeñas y de acceso limitado.",
    verifiedCriteria: [
      "La ficha identifica el modelo Bahco SL25 como juego de 25 piezas y cuadradillo de 1/4 de pulgada.",
      "El fabricante lo presenta como resistente, sencillo de utilizar y apto para uso profesional.",
      "El formato compacto evita comprar un maletín grande cuando solo se necesitan útiles de pequeño cuadradillo.",
    ],
    limitations: [
      "La ficha comprobada no enumera todas las medidas; hay que revisar el contenido exacto frente a las tareas previstas.",
      "El cuadradillo de 1/4 de pulgada no es adecuado para tornillos de rueda ni fijaciones de alto par.",
      "No incluye control de par: cuando el fabricante especifica un par hace falta una dinamométrica adecuada.",
    ],
    verification: {
      amazonListingCheckedOn: PRODUCT_RECOMMENDATIONS_CHECKED_ON,
      listingStatusAtCheck: "active",
    },
  },
  {
    id: "proxxon-23040",
    categoryId: "herramienta-basica",
    name: 'Proxxon 23 040, juego de 1/4" y 1/2" (56 piezas)',
    asin: "B000NDB93Q",
    amazonUrl: "https://www.amazon.es/dp/B000NDB93Q?tag=kmfiel-21",
    bestFor:
      "Un equipo de garaje más amplio, con dos cuadradillos y medidas para mantenimiento general y bujías.",
    verifiedCriteria: [
      "La ficha declara 56 piezas, carracas de 1/4 y 1/2 de pulgada y vasos de 4 a 32 mm.",
      "Incluye vasos largos para bujías de 16 y 21 mm, puntas planas, Phillips y Torx, además de llaves hexagonales.",
      "Las carracas declaradas tienen 52 dientes y el conjunto se entrega en un estuche organizado.",
    ],
    limitations: [
      "Más piezas no sustituyen la comprobación de medidas, perfiles y accesos concretos del vehículo.",
      "No incluye control de par; bujías, ruedas y otras uniones críticas requieren el procedimiento y la dinamométrica correctos.",
      "Nunca se debe trabajar bajo un vehículo sostenido únicamente por un gato.",
    ],
    verification: {
      amazonListingCheckedOn: PRODUCT_RECOMMENDATIONS_CHECKED_ON,
      listingStatusAtCheck: "active",
    },
  },
] as const satisfies readonly ProductRecommendation[];

export function getCommercialCategory(id: CommerceCategoryId) {
  return COMMERCIAL_CATEGORIES.find((category) => category.id === id);
}

export function getProductRecommendations(categoryId: CommerceCategoryId) {
  return PRODUCT_RECOMMENDATIONS.filter(
    (recommendation) => recommendation.categoryId === categoryId,
  );
}

export function getProductRecommendationByAsin(asin: string) {
  return PRODUCT_RECOMMENDATIONS.find(
    (recommendation) => recommendation.asin === asin,
  );
}
