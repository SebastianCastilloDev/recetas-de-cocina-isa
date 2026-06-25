export type Receta = {
  slug: string;
  nombre: string;
  emoji: string;
  imagen: string;
  porciones: string;
  categoria: string;
  ingredientes: string[];
  preparacion: string[];
};

// Recetas iniciales del recetario familiar.
// La Isha y su amiga pueden completar/editar los pasos de preparación.
export const recetas: Receta[] = [
  {
    slug: "lasana-de-carne-y-verduras",
    nombre: "Lasaña de carne y verduras",
    emoji: "🍝",
    imagen: "/lasagna.png",
    porciones: "6 porciones",
    categoria: "Plato principal",
    ingredientes: [
      "12 láminas de lasaña",
      "500 g de carne molida",
      "1 cebolla picada",
      "2 dientes de ajo picados",
      "1 zanahoria rallada",
      "1 zapallo italiano en cubos",
      "1 pimentón rojo en tiras",
      "800 g de tomate triturado",
      "2 cdas. de pasta de tomate",
      "500 ml de bechamel",
      "150 g de queso rallado",
      "Aceite de oliva",
      "Sal, pimienta y orégano",
    ],
    preparacion: [
      "Sofríe la cebolla, el ajo y las verduras en aceite de oliva.",
      "Agrega la carne molida y cocina hasta dorar.",
      "Incorpora el tomate triturado y la pasta de tomate. Sazona con sal, pimienta y orégano. Cocina 15 minutos.",
      "Arma capas alternando láminas, salsa de carne, bechamel y queso.",
      "Termina con bechamel y queso. Hornea a 180 °C por 35 minutos.",
    ],
  },
  {
    slug: "risotto-de-champinones",
    nombre: "Risotto de champiñones",
    emoji: "🍚",
    imagen: "/risotto.png",
    porciones: "4 porciones",
    categoria: "Plato principal",
    ingredientes: [
      "320 g de arroz arborio",
      "500 g de champiñones frescos",
      "1 cebolla picada",
      "2 dientes de ajo picados",
      "100 ml de vino blanco",
      "1 litro de caldo de verduras (caliente)",
      "50 g de mantequilla",
      "50 g de queso parmesano rallado",
      "2 cdas. de aceite de oliva",
      "Sal y pimienta",
      "Perejil fresco picado",
    ],
    preparacion: [
      "Sofríe la cebolla y el ajo en aceite de oliva. Agrega los champiñones y cocina hasta dorar.",
      "Incorpora el arroz y tuesta 1 minuto. Vierte el vino blanco y deja evaporar.",
      "Agrega el caldo caliente de a poco, revolviendo, hasta que el arroz esté cremoso (18-20 min).",
      "Fuera del fuego añade la mantequilla y el parmesano. Revuelve bien.",
      "Sazona, decora con perejil y sirve de inmediato.",
    ],
  },
  {
    slug: "kuchen-de-manzana",
    nombre: "Kuchen de manzana",
    emoji: "🥧",
    imagen: "/kuchen.png",
    porciones: "8 porciones",
    categoria: "Postre",
    ingredientes: [
      "3 tazas de harina",
      "150 g de mantequilla fría",
      "1/2 taza de azúcar",
      "1 huevo",
      "4-5 manzanas",
      "1/2 taza de azúcar (relleno)",
      "1 cdta. de canela",
      "1 cdta. de esencia de vainilla",
      "1/2 taza de crema líquida",
      "1 yema de huevo",
    ],
    preparacion: [
      "Forma una masa con la harina, la mantequilla, el azúcar y el huevo. Refrigera 30 minutos.",
      "Forra un molde con la masa y pincha la base con un tenedor.",
      "Pela y corta las manzanas en láminas. Acomódalas sobre la masa.",
      "Espolvorea azúcar y canela. Hornea a 180 °C por 25 minutos.",
      "Mezcla la crema con la yema y la vainilla, vierte sobre el kuchen y hornea 15 minutos más.",
    ],
  },
  {
    slug: "tiramisu-en-vaso",
    nombre: "Tiramisú en vaso",
    emoji: "🍮",
    imagen: "/tiramisu.png",
    porciones: "6 vasos",
    categoria: "Postre",
    ingredientes: [
      "250 g de queso mascarpone",
      "3 huevos",
      "1/2 taza de azúcar",
      "1 cdta. de esencia de vainilla",
      "1 taza de café fuerte frío",
      "2 cdas. de licor (opcional)",
      "200 g de bizcochos de soletilla",
      "Cacao en polvo sin azúcar (para decorar)",
    ],
    preparacion: [
      "Bate las yemas con el azúcar hasta blanquear. Agrega el mascarpone y la vainilla.",
      "Bate las claras a punto de nieve e incorpóralas con movimientos suaves.",
      "Mezcla el café con el licor. Remoja los bizcochos rápidamente.",
      "En cada vaso alterna capas de bizcocho y crema de mascarpone.",
      "Refrigera 4 horas. Antes de servir espolvorea cacao por encima.",
    ],
  },
];

export function getReceta(slug: string) {
  return recetas.find((r) => r.slug === slug);
}
