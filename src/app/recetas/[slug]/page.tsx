import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getReceta, recetas } from "@/data/recetas";

export function generateStaticParams() {
  return recetas.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const receta = getReceta(slug);
  return { title: `${receta?.nombre ?? "Receta"} | Recetario Familiar` };
}

export default async function RecetaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const receta = getReceta(slug);
  if (!receta) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/recetas" className="text-naranja hover:underline text-sm">
        ← Volver a las recetas
      </Link>

      <div className="relative mt-4 rounded-2xl overflow-hidden bg-beige aspect-16/7">
        <Image
          src={receta.imagen}
          alt={receta.nombre}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>

      <span className="mt-6 inline-block text-sm font-medium text-naranja">
        {receta.categoria} · {receta.porciones}
      </span>
      <h1 className="text-3xl font-bold text-marron">{receta.nombre}</h1>

      <div className="mt-8 grid gap-8 sm:grid-cols-[1fr_1.4fr]">
        <section>
          <h2 className="text-xl font-bold text-marron mb-3">Ingredientes</h2>
          <ul className="space-y-1.5">
            {receta.ingredientes.map((ing, i) => (
              <li key={i} className="flex gap-2 text-texto/90">
                <span className="text-naranja">•</span>
                {ing}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-marron mb-3">Preparación</h2>
          <ol className="space-y-3">
            {receta.preparacion.map((paso, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-none w-7 h-7 rounded-full bg-naranja text-white grid place-items-center text-sm font-bold">
                  {i + 1}
                </span>
                <p className="text-texto/90">{paso}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
