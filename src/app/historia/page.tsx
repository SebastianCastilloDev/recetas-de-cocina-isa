import Image from "next/image";
import { historia } from "@/data/contenido";

export const metadata = { title: "Historia Familiar | Recetario Familiar" };

export default function HistoriaPage() {
  return (
    <div className="min-h-screen bg-crema" style={{ fontFamily: "var(--font-script)" }}>
      {/* Hero con foto */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        <Image
          src="/foto-familiar.jpeg"
          alt="Foto familiar"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/10 to-marron/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4 text-center">
          <p className="text-naranja-suave text-xl md:text-2xl mb-1 drop-shadow">
            con amor, de generación en generación
          </p>
          <h1 className="text-white text-5xl md:text-7xl drop-shadow-lg leading-tight">
            {historia.titulo}
          </h1>
        </div>
      </div>

      {/* Contenido */}
      <div className="mx-auto max-w-2xl px-6 py-12">

        {/* Ornamento superior */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-naranja/30" />
          <span className="text-naranja text-3xl select-none">✦</span>
          <div className="flex-1 h-px bg-naranja/30" />
        </div>

        {/* Párrafos */}
        <div className="space-y-6">
          {historia.parrafos.map((p, i) => (
            <p
              key={i}
              className={`leading-relaxed text-texto/90 text-xl md:text-2xl ${
                i === 0
                  ? "first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:text-marron"
                  : ""
              }`}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Cita destacada */}
        <blockquote className="mt-12 border-l-4 border-naranja pl-6 py-2">
          <p className="text-marron text-2xl md:text-3xl leading-snug">
            "Un recetario no es solo un libro de cocina, es la memoria de una familia."
          </p>
        </blockquote>

        {/* Ornamento inferior */}
        <div className="flex items-center gap-4 mt-12">
          <div className="flex-1 h-px bg-naranja/30" />
          <span className="text-naranja text-2xl select-none">❧</span>
          <div className="flex-1 h-px bg-naranja/30" />
        </div>

        {/* Firma */}
        <p className="text-center text-marron text-3xl mt-6 opacity-70">
          La familia Vera
        </p>
      </div>
    </div>
  );
}
