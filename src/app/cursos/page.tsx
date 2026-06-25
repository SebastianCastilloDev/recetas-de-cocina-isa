import { cursos } from "@/data/contenido";

export const metadata = { title: "Cursos de cocina | Recetario Familiar" };

export default function CursosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-marron mb-2">Cursos de cocina</h1>
      <p className="text-texto/70 mb-8">
        Enlaces a cursos de cocina en internet, con una breve descripción.
      </p>

      <div className="space-y-4">
        {cursos.map((c) => (
          <a
            key={c.titulo}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl bg-white border border-naranja-suave p-5 shadow-sm hover:shadow-md active:scale-[0.98] transition-all"
          >
            <h2 className="text-lg font-bold text-marron group-hover:text-naranja transition-colors">
              🎓 {c.titulo}
            </h2>
            <p className="mt-1 text-sm text-texto/80">{c.descripcion}</p>
            <span className="mt-2 inline-block text-sm font-medium text-naranja">
              Ver curso →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
