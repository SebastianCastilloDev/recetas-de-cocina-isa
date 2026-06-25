import { sitio } from "@/data/contenido";

export default function Footer() {
  const url = `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(
    sitio.whatsappMensaje
  )}`;
  return (
    <footer className="mt-12 bg-beige border-t border-naranja-suave">
      <div className="mx-auto max-w-5xl px-4 py-8 text-center space-y-4">
        <p className="italic text-marron max-w-2xl mx-auto">{sitio.frase}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-naranja px-6 py-3 text-white font-medium hover:bg-marron active:scale-95 transition-all"
        >
          💬 Escríbenos por WhatsApp
        </a>
        <p className="text-sm text-texto/70">
          © {new Date().getFullYear()} Recetario Familiar
        </p>
      </div>
    </footer>
  );
}
