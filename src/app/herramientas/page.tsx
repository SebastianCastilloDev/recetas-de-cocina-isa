import { herramientas } from "@/data/contenido";

export const metadata = { title: "Herramientas de cocina | Recetario Familiar" };

export default function HerramientasPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-marron mb-2">
        Herramientas de cocina
      </h1>
      <p className="text-texto/70 mb-8">
        Recomendaciones de herramientas con buenas reseñas para usar en casa.
      </p>

      <div className="space-y-4">
        {herramientas.map((h) => (
          <a
            key={h.nombre}
            href={h.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl bg-white border border-naranja-suave p-5 shadow-sm hover:shadow-md active:scale-[0.98] transition-all"
          >
            <h2 className="text-lg font-bold text-marron group-hover:text-naranja transition-colors">
              🍴 {h.nombre}
            </h2>
            <p className="mt-1 text-sm text-texto/80">{h.descripcion}</p>
            <span className="mt-2 inline-block text-sm font-medium text-naranja">
              Ver recomendación →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
