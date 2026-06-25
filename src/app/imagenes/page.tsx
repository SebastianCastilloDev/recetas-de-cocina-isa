import { recetas } from "@/data/recetas";

export const metadata = { title: "Imágenes de las recetas | Recetario Familiar" };

export default function ImagenesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-marron mb-2">
        Imágenes de las recetas
      </h1>
      <p className="text-texto/70 mb-8">
        Galería de fotos de cada plato. Aquí puedes reemplazar los recuadros por
        las fotos reales.
      </p>

      <div className="space-y-10">
        {recetas.map((r) => (
          <section key={r.slug}>
            <h2 className="text-xl font-bold text-marron mb-4">“{r.nombre}”</h2>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="aspect-[4/3] rounded-2xl bg-linear-to-br from-naranja-suave to-beige flex items-center justify-center text-texto/60"
                >
                  📷 Foto {n}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
