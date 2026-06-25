import { historia } from "@/data/contenido";

export const metadata = { title: "Historia Familiar | Recetario Familiar" };

export default function HistoriaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-marron mb-6">{historia.titulo}</h1>

      <div className="rounded-2xl bg-linear-to-br from-naranja-suave to-beige aspect-[16/6] flex items-center justify-center text-texto/60 mb-6">
        🖼️ Imagen de la familia
      </div>

      <div className="space-y-4 leading-relaxed text-texto/90">
        {historia.parrafos.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}
