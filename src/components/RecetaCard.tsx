import Link from "next/link";
import Image from "next/image";
import type { Receta } from "@/data/recetas";

export default function RecetaCard({ receta }: { receta: Receta }) {
  return (
    <Link
      href={`/recetas/${receta.slug}`}
      className="group block rounded-2xl bg-white border border-naranja-suave overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all"
    >
      <div className="relative aspect-4/3 bg-beige">
        <Image
          src={receta.imagen}
          alt={receta.nombre}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
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
