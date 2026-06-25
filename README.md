# 🍳 Recetario Familiar

App web de un recetario familiar: recetas con ingredientes y preparación, historia
de la familia, galería de fotos, cursos de cocina y recomendaciones de herramientas.
Diseño cálido en tonos **beige y naranja**, **mobile-first** y con sensación de app nativa.

Construido con **Next.js 16 (App Router) + React 19 + Tailwind CSS v4**.

---

## 🚀 Cómo ejecutarlo

Requisitos: tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).

```bash
# 1. Instalar dependencias (solo la primera vez)
npm install

# 2. Levantar el servidor de desarrollo
npm run dev
```

Luego abre **http://localhost:3000** en el navegador.

> 💡 Para verlo en el teléfono, abre `http://TU-IP-LOCAL:3000` desde el celular
> conectado a la misma red Wi-Fi (la IP aparece como "Network" al iniciar `npm run dev`).

### Otros comandos

```bash
npm run build   # Compila la versión optimizada para producción
npm run start   # Sirve la versión ya compilada
npm run lint    # Revisa el código
```

---

## 📱 Características

- **Navegación mobile-first**: barra superior con menú hamburguesa animado y una
  **barra inferior tipo app nativa** en el celular.
- **Estado activo** en los enlaces para saber siempre dónde estás.
- **Buscador de recetas** por nombre, categoría o ingrediente.
- **Feedback táctil**, áreas de toque cómodas, `safe-area` y `theme-color`.
- Se puede **agregar a la pantalla de inicio** del teléfono y abrir a pantalla completa.

---

## 🗺️ Páginas

| Sección | Ruta | Descripción |
|---|---|---|
| Inicio | `/` | Portada con frase, buscador y accesos a cada sección |
| Recetas | `/recetas` | Listado + buscador de recetas |
| Detalle | `/recetas/[slug]` | Ingredientes y preparación de cada receta |
| Historia | `/historia` | Historia de la familia (texto + imagen) |
| Imágenes | `/imagenes` | Galería de fotos por receta |
| Cursos | `/cursos` | Enlaces a cursos de cocina en internet |
| Herramientas | `/herramientas` | Recomendaciones de utensilios de cocina |

---

## ✏️ Cómo editar el contenido

No hace falta tocar el diseño. Todo el texto vive en dos archivos:

- **`src/data/recetas.ts`** — las recetas (nombre, porciones, ingredientes y pasos).
- **`src/data/contenido.ts`** — la frase, el número de WhatsApp, la historia
  familiar, los cursos y las herramientas.

Por ejemplo, para agregar una receta nueva, copia un bloque dentro de `recetas`
y cambia los datos:

```ts
{
  slug: "pan-amasado",          // identificador en la URL (sin espacios ni tildes)
  nombre: "Pan amasado",
  emoji: "🍞",
  porciones: "8 panes",
  categoria: "Panadería",
  ingredientes: ["500 g de harina", "..."],
  preparacion: ["Mezclar...", "Amasar...", "Hornear..."],
}
```

### Cambiar las fotos

Hoy las recetas y la galería usan emojis y recuadros de color como marcador de
posición. Para usar fotos reales, coloca las imágenes en la carpeta `public/` y
reemplaza esos recuadros por el componente `<Image>` de Next.js.

---

## 🗂️ Estructura del proyecto

```
src/
├─ app/                 # Páginas (cada carpeta es una ruta)
│  ├─ page.tsx          # Inicio
│  ├─ recetas/          # Listado y detalle de recetas
│  ├─ historia/
│  ├─ imagenes/
│  ├─ cursos/
│  ├─ herramientas/
│  ├─ layout.tsx        # Estructura común (navbar, footer, barra inferior)
│  └─ globals.css       # Colores y estilos globales
├─ components/          # Navbar, BottomNav, Footer, tarjetas, buscador
└─ data/                # Contenido editable (recetas y textos)
```

---

## ☁️ Publicar online (opcional)

La forma más simple es [Vercel](https://vercel.com):

1. Sube el proyecto a un repositorio de GitHub.
2. Importa el repo en Vercel.
3. Vercel detecta Next.js solo y entrega un link público.

---

Hecho con cariño para el recetario de la familia 🧡
