"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export const enlaces = [
  { href: "/", label: "Inicio", icono: "🏠" },
  { href: "/recetas", label: "Recetas", icono: "📖" },
  { href: "/historia", label: "Historia", icono: "🏡" },
  { href: "/imagenes", label: "Imágenes", icono: "📷" },
  { href: "/cursos", label: "Cursos", icono: "🎓" },
  { href: "/herramientas", label: "Herramientas", icono: "🍴" },
];

function esActivo(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);

  // Cierra el menú al cambiar de página.
  useEffect(() => {
    setAbierto(false);
  }, [pathname]);

  // Evita el scroll de fondo cuando el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [abierto]);

  return (
    <header className="sticky top-0 z-30 bg-beige/95 backdrop-blur border-b border-naranja-suave">
      <nav className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between gap-2">
        <Link
          href="/"
          className="text-lg sm:text-xl font-bold text-marron whitespace-nowrap"
        >
          🍳 Recetario Familiar
        </Link>

        {/* Enlaces en escritorio */}
        <ul className="hidden md:flex flex-wrap gap-1 text-sm">
          {enlaces.map((e) => (
            <li key={e.href}>
              <Link
                href={e.href}
                aria-current={esActivo(pathname, e.href) ? "page" : undefined}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  esActivo(pathname, e.href)
                    ? "bg-naranja text-white"
                    : "text-texto hover:bg-naranja/15"
                }`}
              >
                {e.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa en móvil */}
        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
          className="md:hidden grid place-items-center w-11 h-11 -mr-2 rounded-full text-marron active:bg-naranja/15"
        >
          <span className="relative block w-6 h-5">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-all duration-300 ${
                abierto ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-2 block h-0.5 w-6 bg-current transition-all duration-300 ${
                abierto ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-all duration-300 ${
                abierto ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Overlay + panel deslizante en móvil */}
      <div
        onClick={() => setAbierto(false)}
        className={`md:hidden fixed inset-0 top-14 z-20 bg-black/30 transition-opacity duration-300 ${
          abierto ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <div
        className={`md:hidden fixed top-14 inset-x-0 z-20 origin-top bg-beige border-b border-naranja-suave shadow-lg transition-all duration-300 ${
          abierto
            ? "opacity-100 translate-y-0"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <ul className="px-3 py-3 space-y-1">
          {enlaces.map((e) => (
            <li key={e.href}>
              <Link
                href={e.href}
                aria-current={esActivo(pathname, e.href) ? "page" : undefined}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base transition-colors ${
                  esActivo(pathname, e.href)
                    ? "bg-naranja text-white"
                    : "text-texto active:bg-naranja/15"
                }`}
              >
                <span className="text-xl">{e.icono}</span>
                {e.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
