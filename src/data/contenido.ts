// Contenido editable del sitio: frase, WhatsApp, historia, cursos y herramientas.
// La Isha puede reemplazar estos textos con los que consiga con su amiga.

export const sitio = {
  titulo: "Recetario Familiar",
  frase: "“La cocina es el corazón de la casa, y cada receta una historia que se cuenta con amor.”",
  // Formato internacional sin + ni espacios.
  whatsapp: "56979602958",
  whatsappMensaje: "¡Hola! Vi el Recetario Familiar y quería preguntar...",
};

export const historia = {
  titulo: "Historia Familiar",
  parrafos: [
    "Todo comenzó la abuela de Simón Vera, una mujer apasionada por la cocina y por reunir a la familia alrededor de la mesa. Durante muchos años fue escribiendo en un recetario las preparaciones que aprendió de su madre, de su abuela, de ella misma y de otros familiares. Con el paso del tiempo, ese cuaderno se convirtió en un verdadero tesoro familiar, ya que guardaba recetas transmitidas de generación en generación.",
    "Cuando ya era mayor, decidió entregar ese valioso recetario a su nieto, Simón Vera, para que las recetas y las tradiciones familiares no se perdieran. Gracias a ese legado, nosotros recopilamos toda esa información y la transformamos en un recetario digital, conservando la historia y las preparaciones de nuestra familia para que puedan seguir compartiéndose con las futuras generaciones.",
  ],
};

export type Curso = {
  titulo: string;
  descripcion: string;
  url: string;
};

export const cursos: Curso[] = [
  {
    titulo: "Curso de cocina básica",
    descripcion: "Técnicas esenciales para principiantes: cortes, cocciones y manejo de la cocina.",
    url: "https://www.youtube.com/results?search_query=curso+de+cocina+basica",
  },
  {
    titulo: "Repostería desde cero",
    descripcion: "Aprende a hacer kuchen, tortas y postres caseros paso a paso.",
    url: "https://www.youtube.com/results?search_query=curso+de+reposteria+para+principiantes",
  },
  {
    titulo: "Cocina italiana en casa",
    descripcion: "Pastas, risottos y salsas tradicionales explicadas de forma simple.",
    url: "https://www.youtube.com/results?search_query=curso+cocina+italiana",
  },
];

export type Herramienta = {
  nombre: string;
  descripcion: string;
  url: string;
};

export const herramientas: Herramienta[] = [
  {
    nombre: "Set de cuchillos de cocina",
    descripcion: "Indispensables para cortar con seguridad. Busca acero inoxidable con buenas reseñas.",
    url: "https://www.google.com/search?q=set+de+cuchillos+de+cocina+mejor+valorados",
  },
  {
    nombre: "Olla de fondo grueso",
    descripcion: "Reparte mejor el calor y evita que la comida se pegue. Ideal para risottos y salsas.",
    url: "https://www.google.com/search?q=olla+fondo+grueso+recomendada",
  },
  {
    nombre: "Batidora de mano",
    descripcion: "Perfecta para postres como el tiramisú. Versátil y fácil de guardar.",
    url: "https://www.google.com/search?q=batidora+de+mano+mejor+valorada",
  },
];
