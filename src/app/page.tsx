import Link from "next/link";
import { sitio } from "@/data/contenido";

const secciones = [
  {
    href: "/recetas",
    titulo: "Recetas",
    emoji: "📖",
    texto: "Todas las recetas de la familia, con ingredientes y preparación.",
  },
  {
    href: "/historia",
    titulo: "Historia Familiar",
    emoji: "🏡",
    texto: "La historia detrás de nuestro recetario y la cocina de la abuela.",
  },
  {
    href: "/imagenes",
    titulo: "Imágenes de las recetas",
    emoji: "📷",
    texto: "Galería de fotos de cada plato terminado.",
  },
  {
    href: "/recetas",
    titulo: "Recomendaciones de la abuela",
    emoji: "👵",
    texto: "Los secretos y consejos que nunca fallan en la cocina.",
  },
  {
    href: "/cursos",
    titulo: "Cursos de cocina",
    emoji: "🎓",
    texto: "Enlaces a cursos en internet para seguir aprendiendo.",
  },
  {
    href: "/herramientas",
    titulo: "Herramientas de cocina",
    emoji: "🍴",
    texto: "Recomendaciones de utensilios con buenas reseñas.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-b from-beige to-crema">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-marron">
            {sitio.titulo}
          </h1>
          <p className="mt-4 italic text-texto/80 max-w-2xl mx-auto">
            {sitio.frase}
          </p>

          {/* Buscador: lleva a la página de recetas */}
          <form action="/recetas" className="relative max-w-md mx-auto mt-8">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-texto/50">
              🔍
            </span>
            <input
              type="text"
              name="q"
              placeholder="Buscar una receta..."
              className="w-full rounded-full border border-naranja-suave bg-white py-3 pl-11 pr-4 outline-none focus:border-naranja focus:ring-2 focus:ring-naranja/30"
            />
          </form>
        </div>
      </section>

      {/* Secciones */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {secciones.map((s) => (
            <Link
              key={s.titulo}
              href={s.href}
              className="group rounded-2xl bg-white border border-naranja-suave p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="text-4xl">{s.emoji}</div>
              <h2 className="mt-3 text-xl font-bold text-marron group-hover:text-naranja transition-colors">
                {s.titulo}
              </h2>
              <p className="mt-1 text-sm text-texto/70">{s.texto}</p>
              <span className="mt-3 inline-block text-sm font-medium text-naranja">
                Abrir →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
