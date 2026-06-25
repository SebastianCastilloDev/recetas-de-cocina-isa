"use client";

import { useState } from "react";
import { recetas } from "@/data/recetas";
import RecetaCard from "@/components/RecetaCard";

export default function BuscadorRecetas({
  queryInicial = "",
}: {
  queryInicial?: string;
}) {
  const [query, setQuery] = useState(queryInicial);

  const texto = query.trim().toLowerCase();
  const filtradas = texto
    ? recetas.filter(
        (r) =>
          r.nombre.toLowerCase().includes(texto) ||
          r.categoria.toLowerCase().includes(texto) ||
          r.ingredientes.some((i) => i.toLowerCase().includes(texto))
      )
    : recetas;

  return (
    <div>
      <div className="relative max-w-md mb-8">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-texto/50">
          🔍
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar receta o ingrediente..."
          className="w-full rounded-full border border-naranja-suave bg-white py-3 pl-11 pr-4 outline-none focus:border-naranja focus:ring-2 focus:ring-naranja/30"
        />
      </div>

      {filtradas.length === 0 ? (
        <p className="text-texto/70">
          No encontramos recetas para “{query}”. Prueba con otra palabra.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtradas.map((r) => (
            <RecetaCard key={r.slug} receta={r} />
          ))}
        </div>
      )}
    </div>
  );
}
