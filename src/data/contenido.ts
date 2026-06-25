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
    "Este recetario nació de las manos de la abuela, que durante años guardó en una libreta sus recetas favoritas. Cada plato cuenta un pedacito de nuestra historia: los almuerzos de domingo, los cumpleaños y las tardes de lluvia con olor a kuchen recién horneado.",
    "Con el tiempo, la familia fue sumando sus propias recetas y secretos. Hoy reunimos todo en este espacio para que nunca se pierdan y para que las próximas generaciones también puedan cocinarlas.",
    "Más que ingredientes y pasos, aquí encontrarás recuerdos. Esperamos que cada receta te haga sentir, aunque sea un poquito, en la cocina de la abuela.",
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
