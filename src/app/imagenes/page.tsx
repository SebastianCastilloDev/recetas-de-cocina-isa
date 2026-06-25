import Image from "next/image";
import Link from "next/link";
import { recetas } from "@/data/recetas";

export const metadata = { title: "Imágenes de las recetas | Recetario Familiar" };

export default function ImagenesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-marron mb-2">
        Imágenes de las recetas
      </h1>
      <p className="text-texto/70 mb-8">
        Galería de fotos de cada plato. Toca una foto para ver la receta.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {recetas.map((r) => (
          <Link
            key={r.slug}
            href={`/recetas/${r.slug}`}
            className="group block rounded-2xl overflow-hidden bg-white border border-naranja-suave shadow-sm hover:shadow-md active:scale-[0.98] transition-all"
          >
            <div className="relative aspect-4/3 bg-beige">
              <Image
                src={r.imagen}
                alt={r.nombre}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-marron group-hover:text-naranja transition-colors">
                “{r.nombre}”
              </h2>
              <p className="text-sm text-texto/70">{r.categoria}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
