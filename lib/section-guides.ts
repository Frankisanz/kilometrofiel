import type { SectionGuideBlock } from "@/app/components/SectionGuide";

type SectionGuideContent = {
  eyebrow: string;
  title: string;
  blocks: readonly SectionGuideBlock[];
};

export const MAINTENANCE_GUIDE: SectionGuideContent = {
  eyebrow: "Cómo usar esta sección",
  title: "Mantenimiento de un coche con años: por dónde empezar",
  blocks: [
    {
      heading: "El tiempo cuenta tanto como los kilómetros",
      paragraphs: [
        "Un coche de más de diez años suele hacer menos kilómetros que uno nuevo, y eso lleva a pensar que necesita menos mantenimiento. Pero aceite, líquido de frenos, refrigerante, correa de distribución, neumáticos y batería envejecen aunque el coche no se mueva. Por eso casi todos los planes de fabricante fijan un límite doble: kilómetros o tiempo, lo que llegue antes.",
        "Las guías de esta sección parten de esa idea y te ayudan a decidir qué vence por calendario, qué depende del uso y qué hay que confirmar en el manual de tu versión concreta.",
      ],
    },
    {
      heading: "Si acabas de comprar un coche usado",
      paragraphs: [
        "Sin facturas, lo prudente es tratar como pendientes los elementos cuyo fallo sale caro o compromete la seguridad. Empieza por reconstruir el historial y, con eso, decide.",
      ],
      bullets: [
        "Distribución: si no hay factura del último cambio, planifícalo.",
        "Aceite y filtros: cámbialos para empezar con una referencia conocida.",
        "Líquido de frenos: sin fecha conocida, sustitúyelo.",
        "Neumáticos: comprueba la fecha DOT además del dibujo.",
        "Batería: mide la tensión en reposo y anota su fecha.",
      ],
    },
    {
      heading: "Lo que puedes revisar tú y lo que no",
      paragraphs: [
        "Niveles, presión de neumáticos, luces, escobillas y el aspecto de correas y latiguillos se pueden comprobar en casa con el coche parado. Frenos, dirección, suspensión y distribución requieren herramientas, elevación segura y experiencia. En cada guía separamos claramente ambas partes.",
      ],
    },
  ],
};

export const REGULATION_GUIDE: SectionGuideContent = {
  eyebrow: "Cómo usar esta sección",
  title: "ITV y normativa: lo que cambia cuando el coche cumple diez años",
  blocks: [
    {
      heading: "La ITV pasa a ser anual",
      paragraphs: [
        "Un turismo de uso particular pasa la ITV cada dos años entre los cuatro y los diez desde su primera matriculación, y cada año a partir de ahí. Es el momento en el que muchos propietarios empiezan a preguntarse qué revisa exactamente la estación, qué hacer con un resultado desfavorable y cuánto margen hay para repararlo.",
        "Aquí explicamos la inspección con el Real Decreto 920/2017 y el Manual de Procedimiento de Inspección como referencia, y enlazamos siempre a la fuente oficial para que puedas comprobarlo.",
      ],
    },
    {
      heading: "Etiqueta ambiental y zonas de bajas emisiones",
      paragraphs: [
        "La edad del coche también determina su distintivo ambiental. Un gasolina anterior a 2001 o un diésel anterior a 2006 suele quedarse sin etiqueta, y eso importa en las ciudades que ya aplican restricciones. Cada ayuntamiento decide las suyas, así que explicamos cómo consultar la clasificación oficial y qué mirar en cada ordenanza.",
      ],
    },
    {
      heading: "Equipamiento obligatorio",
      paragraphs: [
        "Desde 2026, la baliza V16 conectada sustituye a los triángulos para señalizar una avería en carretera. Explicamos cómo comprobar que un modelo está certificado en el listado de la DGT antes de comprarlo.",
      ],
    },
    {
      heading: "Por qué mostramos la fecha de cada guía",
      paragraphs: [
        "Las normas cambian. Cada guía indica cuándo se revisó y qué fuentes consultamos. Si detectas un cambio que no hemos recogido, escríbenos desde la página de contacto.",
      ],
    },
  ],
};

export const BUYING_GUIDE: SectionGuideContent = {
  eyebrow: "Cómo usar esta sección",
  title: "Antes de comprar una herramienta para el coche",
  blocks: [
    {
      heading: "Primero, el problema; después, el aparato",
      paragraphs: [
        "Un lector OBD2, un arrancador o un cargador son útiles cuando resuelven una necesidad concreta y son compatibles con tu coche. Comprar el modelo con la cifra más alta no garantiza nada: un arrancador con más amperios no arranca un motor averiado y un lector barato puede no leer los sistemas que necesitas.",
        "Cada guía de esta sección empieza por la situación en la que la herramienta ayuda, sigue con las especificaciones que importan y termina con los casos en los que no hace falta comprar nada.",
      ],
    },
    {
      heading: "Qué comprobar siempre",
      paragraphs: [],
      bullets: [
        "Compatibilidad con la tensión, la tecnología de batería o el protocolo de tu coche.",
        "Protecciones contra inversión de polaridad y cortocircuito.",
        "Instrucciones en español y marcado CE.",
        "Que el producto no figure en alertas de Safety Gate.",
      ],
    },
    {
      heading: "Cómo tratamos los enlaces comerciales",
      paragraphs: [
        "Algunas guías incluyen enlaces de afiliado a Amazon, marcados de forma visible. No publicamos precios ni valoraciones copiadas porque cambian a diario, y no afirmamos haber probado un producto si no lo hemos hecho. La comisión, si existe, no cambia el orden ni el criterio de las recomendaciones.",
      ],
    },
  ],
};

export const TOOLS_GUIDE: SectionGuideContent = {
  eyebrow: "Cómo funcionan",
  title: "Qué hacen estas herramientas y qué no",
  blocks: [
    {
      heading: "Reglas explícitas, no una caja negra",
      paragraphs: [
        "Los tres asistentes funcionan con reglas escritas a partir de nuestras guías y de sus fuentes. Tus respuestas se procesan en tu navegador y no se envían a ningún servidor ni se guardan en una cuenta. No usan inteligencia artificial ni generan un diagnóstico: ordenan comprobaciones prudentes según lo que describes.",
      ],
    },
    {
      heading: "Cuándo usar cada una",
      paragraphs: [],
      bullets: [
        "Diagnóstico de arranque: cuando el coche no arranca y quieres saber si empezar por la batería, el motor de arranque o la alimentación de combustible.",
        "Planificador de mantenimiento: cuando compras un coche usado o no recuerdas qué se hizo y cuándo.",
        "Asistente de batería: antes de comprar una batería de 12 V, para anotar los datos que debe cumplir la nueva.",
      ],
    },
    {
      heading: "Los límites, por escrito",
      paragraphs: [
        "Ninguna herramienta online puede medir la tensión de tu batería, escuchar el motor o ver una fuga. Si el resultado te indica que te detengas o pidas asistencia, hazlo aunque el coche parezca funcionar.",
      ],
    },
  ],
};

export const START_TOOL_GUIDE: SectionGuideContent = {
  eyebrow: "Cómo leer el resultado",
  title: "Cómo razona este asistente",
  blocks: [
    {
      heading: "Cuatro preguntas, una hipótesis de partida",
      paragraphs: [
        "El asistente cruza cuatro datos: qué hace el motor al girar la llave o pulsar el botón, cómo se comportan las luces del cuadro, qué sonido se oye y si hay alguna señal de peligro. Con esa combinación propone por dónde empezar, no cuál es la avería.",
        "Por ejemplo, luces débiles o apagadas y clics repetidos al intentar arrancar apuntan a una alimentación de 12 V insuficiente. Un motor que gira con normalidad pero no llega a arrancar desplaza la sospecha hacia combustible, encendido o inmovilizador, y ahí la batería deja de ser la primera candidata.",
      ],
    },
    {
      heading: "Por qué pregunta por señales de peligro",
      paragraphs: [
        "Humo, fugas, olores anormales, chispas o calor intenso cambian las prioridades: si respondes que sí, el asistente te pedirá que dejes de intentarlo y busques asistencia. Repetir intentos de arranque en esas condiciones puede empeorar la situación.",
      ],
    },
    {
      heading: "Después del resultado",
      paragraphs: [
        "Si la orientación apunta a la batería, mide su tensión o pide que la midan antes de sustituirla. Si el coche arranca con pinzas y vuelve a fallar, el problema puede estar en la carga o en un consumo en reposo, no solo en la batería.",
      ],
    },
  ],
};

export const PLANNER_TOOL_GUIDE: SectionGuideContent = {
  eyebrow: "Cómo leer el resultado",
  title: "Qué tiene en cuenta el planificador",
  blocks: [
    {
      heading: "Seis datos, prioridades ordenadas",
      paragraphs: [
        "El planificador combina antigüedad, kilometraje, tipo de motor, uso habitual, kilómetros al año y si conservas el historial. Con eso ordena qué revisar primero. Un coche de 15 años con pocos kilómetros y sin facturas recibirá prioridades muy distintas de uno con 250.000 km y un libro de mantenimiento completo.",
        "Los trayectos cortos, el uso urbano, el remolque o los caminos con polvo se tratan como uso exigente, igual que hacen muchos fabricantes en sus manuales.",
      ],
    },
    {
      heading: "Por qué no da kilómetros exactos",
      paragraphs: [
        "Los intervalos cambian entre motores del mismo modelo. Dar una cifra universal sería inventar. En su lugar, el planificador te indica qué elementos buscar en el manual y en las facturas, y qué tratar como pendiente si no hay constancia.",
      ],
    },
    {
      heading: "Convierte el resultado en un registro",
      paragraphs: [
        "Apunta en una hoja o en el libro de mantenimiento la fecha, los kilómetros, la pieza o el líquido y el taller de cada intervención. Ese registro te servirá para la próxima revisión, para la ITV y, si algún día lo vendes, para demostrar cómo se ha cuidado el coche.",
      ],
    },
  ],
};

export const BATTERY_TOOL_GUIDE: SectionGuideContent = {
  eyebrow: "Cómo leer el resultado",
  title: "Qué datos de la batería importan y por qué",
  blocks: [
    {
      heading: "Más allá de los amperios hora",
      paragraphs: [
        "La capacidad en Ah indica cuánta energía almacena, pero la corriente de arranque en frío (CCA, en amperios según la norma EN) dice cuánta puede entregar de golpe. Además, la tecnología tiene que coincidir: un coche con Start-Stop diseñado para AGM o EFB necesita la misma tecnología, y algunos exigen registrar la batería nueva en la centralita.",
      ],
    },
    {
      heading: "Medidas, bornes y fijación",
      paragraphs: [
        "Una batería con los datos eléctricos correctos puede no servir si no cabe en la bandeja, si los bornes están invertidos o si no encaja en la pestaña de sujeción. El asistente te pide anotar dimensiones y polaridad para que compares con la nueva; revisa además el tipo de anclaje de la base.",
      ],
    },
    {
      heading: "Antes de comprar",
      paragraphs: [
        "Comprueba que la batería actual está realmente agotada. Una batería que se descarga por un consumo en reposo o por un alternador que no carga fallará igual al cabo de unos días. Nuestras guías sobre descarga y sobre batería, alternador y motor de arranque te ayudan a descartarlo.",
      ],
    },
  ],
};
