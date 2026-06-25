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
];

const recomendaciones = [
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
            <SeccionCard key={s.titulo} {...s} />
          ))}
        </div>

        {/* Línea dorada superior */}
        <div className="mt-12 h-1.5 w-full rounded-full bg-linear-to-r from-transparent via-[#d4af37] to-transparent shadow-[0_0_12px_rgba(212,175,55,0.6)]" />

        {/* Separador estiloso: Recomendaciones de la abuela */}
        <div className="my-8 flex items-center gap-4">
          <span className="h-1.5 flex-1 rounded-full bg-linear-to-r from-transparent via-[#d4af37] to-[#f5d061] shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
          <h2 className="flex items-center gap-2 text-center text-2xl font-bold text-marron">
            <span aria-hidden>👵</span>
            <span>Recomendaciones de la abuela</span>
          </h2>
          <span className="h-1.5 flex-1 rounded-full bg-linear-to-l from-transparent via-[#d4af37] to-[#f5d061] shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
        </div>
        <p className="mb-8 text-center text-sm italic text-texto/70">
          Los secretos y consejos que nunca fallan en la cocina.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {recomendaciones.map((s) => (
            <SeccionCard key={s.titulo} {...s} />
          ))}
        </div>

        {/* Línea dorada inferior */}
        <div className="mt-12 h-1.5 w-full rounded-full bg-linear-to-r from-transparent via-[#d4af37] to-transparent shadow-[0_0_12px_rgba(212,175,55,0.6)]" />
      </section>
    </div>
  );
}

function SeccionCard({
  href,
  titulo,
  emoji,
  texto,
}: {
  href: string;
  titulo: string;
  emoji: string;
  texto: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl bg-white border border-naranja-suave p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all"
    >
      <div className="text-4xl">{emoji}</div>
      <h2 className="mt-3 text-xl font-bold text-marron group-hover:text-naranja transition-colors">
        {titulo}
      </h2>
      <p className="mt-1 text-sm text-texto/70">{texto}</p>
      <span className="mt-3 inline-block text-sm font-medium text-naranja">
        Abrir →
      </span>
    </Link>
  );
}
