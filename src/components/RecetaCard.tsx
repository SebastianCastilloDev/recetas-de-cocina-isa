import Link from "next/link";
import type { Receta } from "@/data/recetas";

export default function RecetaCard({ receta }: { receta: Receta }) {
  return (
    <Link
      href={`/recetas/${receta.slug}`}
      className="group block rounded-2xl bg-white border border-naranja-suave overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
    >
      <div className="aspect-[4/3] flex items-center justify-center bg-linear-to-br from-naranja-suave to-beige text-6xl">
        {receta.emoji}
      </div>
      <div className="p-4">
        <span className="text-xs font-medium text-naranja">
          {receta.categoria}
        </span>
        <h3 className="text-lg font-bold text-marron group-hover:text-naranja transition-colors">
          {receta.nombre}
        </h3>
        <p className="text-sm text-texto/70">{receta.porciones}</p>
      </div>
    </Link>
  );
}
