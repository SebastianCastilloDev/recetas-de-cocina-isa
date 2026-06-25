import BuscadorRecetas from "@/components/BuscadorRecetas";

export const metadata = { title: "Recetas | Recetario Familiar" };

export default async function RecetasPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-marron mb-2">Recetas</h1>
      <p className="text-texto/70 mb-6">
        Busca por nombre, categoría o ingrediente.
      </p>
      <BuscadorRecetas queryInicial={q ?? ""} />
    </div>
  );
}
