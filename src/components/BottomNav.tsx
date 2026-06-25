"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Accesos principales en la barra inferior móvil (estilo app nativa).
const items = [
  { href: "/", label: "Inicio", icono: "🏠" },
  { href: "/recetas", label: "Recetas", icono: "📖" },
  { href: "/imagenes", label: "Fotos", icono: "📷" },
  { href: "/cursos", label: "Cursos", icono: "🎓" },
  { href: "/herramientas", label: "Utensilios", icono: "🍴" },
];

function esActivo(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegación principal"
      className="md:hidden fixed bottom-0 inset-x-0 z-30 border-t border-naranja-suave bg-beige/95 backdrop-blur pb-[env(safe-area-inset-bottom)]"
    >
      <ul className="grid grid-cols-5">
        {items.map((it) => {
          const activo = esActivo(pathname, it.href);
          return (
            <li key={it.href}>
              <Link
                href={it.href}
                aria-current={activo ? "page" : undefined}
                className="flex flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-medium"
              >
                <span
                  className={`grid place-items-center w-10 h-7 rounded-full text-lg transition-colors ${
                    activo ? "bg-naranja text-white" : "text-marron"
                  }`}
                >
                  {it.icono}
                </span>
                <span className={activo ? "text-naranja" : "text-texto/70"}>
                  {it.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
