import { useState } from "react";

// ─── CONFIGURACIÓN CENTRAL ───────────────────────────────────────────────────
const WA_NUMBER = "5490000000000"; // ← Cambiá este número
const WA_BASE = "https://wa.link/8d92mj";
const WA = (msg = "") =>
  msg ? `${WA_BASE}?text=${encodeURIComponent(msg)}` : WA_BASE;

// ─── DATOS ───────────────────────────────────────────────────────────────────
const NOVEDADES = [
  {
    img: "Imagenes/dragon-ball-super-24.jpg",
    alt: "Dragon Ball Super",
    titulo: "Dragon Ball Super",
    desc: "La obra que marcó generaciones enteras y sigue siendo una puerta de entrada al mundo del manga para miles de lectores.",
    badge: "NUEVO",
  },
  {
    img: "Imagenes/blue-lock-36.webp",
    alt: "Blue Lock",
    titulo: "Blue Lock",
    desc: "El manga que convirtió al fútbol en una batalla psicológica. Rivalidades intensas, personajes virales y una comunidad muy activa.",
    badge: "NUEVO",
  },
  {
    img: "Imagenes/chainsaw-man-22.jpg",
    alt: "Chainsaw Man",
    titulo: "Chainsaw Man",
    desc: "Una obra violenta y totalmente distinta a lo clásico. Chainsaw Man explotó por su estilo caótico y personajes impredecibles.",
    badge: "NUEVO",
  },
  {
    img: "Imagenes/demon-slayer-23.png",
    alt: "Demon Slayer",
    titulo: "Demon Slayer",
    desc: "Uno de los mangas que más nuevos lectores atrajo. Peleas memorables, arte impactante y una historia muy emocional.",
    badge: "NUEVO",
  },
];

const ELEGIRNOS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    titulo: "Stock mayorista confiable",
    desc: "Trabajás con un proveedor que entiende el rubro y mantiene disponibilidad real para tu negocio.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V11.25c0-4.556-4.03-8.25-9-8.25S3.375 6.694 3.375 11.25v6.375c0 .621.504 1.125 1.125 1.125H8.25z" />
      </svg>
    ),
    titulo: "Envíos a todo el país",
    desc: "Llegamos a tu local o depósito con logística pensada para comercios de todo Argentina.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    titulo: "Novedades cada semana",
    desc: "Incorporamos lanzamientos y reposiciones para que tu estantería no se quede atrás.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    titulo: "Asesoría para tu comiquería",
    desc: "Te guiamos en la selección de títulos según tu público, espacio y etapa del negocio.",
  },
];

const BENEFICIOS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    titulo: "Títulos con demanda real",
    desc: "Series que ya tienen comunidades activas y movimiento constante.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    titulo: "Lanzamientos semanales",
    desc: "Nuevos tomos y novedades todas las semanas.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    titulo: "Atención personalizada",
    desc: "Te ayudamos a elegir títulos según tu proyecto.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72M6.75 18h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .414.336.75.75.75z" />
      </svg>
    ),
    titulo: "Empezá sin estructura compleja",
    desc: "Podés arrancar desde tu casa, Instagram o tienda online.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5a1.125 1.125 0 00-1.125-1.125H3.375a1.125 1.125 0 00-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    titulo: "Catálogo en crecimiento",
    desc: "Cada semana aparecen nuevos títulos y tendencias.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    titulo: "Mundo geek en expansión",
    desc: "El anime y manga siguen creciendo año tras año.",
  },
];

const PASOS = [
  {
    n: "01",
    titulo: "Nos contactás",
    desc: "Escribinos por WhatsApp y contanos qué idea tenés en mente.",
  },
  {
    n: "02",
    titulo: "Te mostramos los títulos",
    desc: "Te enseñamos las series más buscadas y novedades disponibles.",
  },
  {
    n: "03",
    titulo: "Elegís qué querés vender",
    desc: "Te ayudamos a encontrar los títulos ideales para empezar.",
  },
  {
    n: "04",
    titulo: "Empezás tu proyecto",
    desc: "Comenzá a crear tu tienda geek online o física.",
  },
];

const TESTIMONIOS = [
  {
    ini: "ML",
    nombre: "Martina Lopez.",
    rol: "Comiquería en · CABA",
    texto:
      "Empecé mi comiquería con KuroganeStore y en seis meses ya tenía más de 80 títulos en stock. La atención es increíble y los tiempos de entrega son exactos. Es el proveedor que estaba buscando.",
  },
  {
    ini: "GR",
    nombre: "Gonzalo Rolo.",
    rol: "Tienda Online · Rosario",
    texto:
      "Los precios mayoristas son reales, el catálogo siempre está actualizado y mi asesor me avisa cada vez que entra algo nuevo. Escalé mi negocio a otro nivel con KuroganeStore.",
  },
  {
    ini: "SV",
    nombre: "Sofía Velez.",
    rol: "Tienda Geek · Córdoba",
    texto:
      "Tenía mi tienda geek pero no encontraba proveedor de manga confiable. En dos meses llegué a 150 títulos en stock. El crecimiento fue inmediato.",
  },
];

const CLIENTES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    label: "Emprendedores",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: "Comiquerías",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.96-1.61L23 6H6" />
      </svg>
    ),
    label: "Tiendas Online",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
        <polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" />
        <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
      </svg>
    ),
    label: "Revendedores",
  },
];

const FAQS = [
  {
    q: "¿Hacen envíos a todo el país?",
    a: "Sí. Trabajamos con correo y transportes que llegan a todo el territorio nacional. Los pedidos se despachan en 48 horas hábiles desde la confirmación del pago.",
  },
  {
    q: "¿Cuál es el pedido mínimo?",
    a: "Tenemos opciones para emprendedores que arrancan y para negocios más consolidados. Escribinos y te asesoramos según tu escala y el tipo de negocio que querés armar.",
  },
  {
    q: "¿Cómo son los precios mayoristas?",
    a: "Los precios dependen del volumen del pedido. A mayor cantidad, mejores condiciones. Te enviamos una lista de precios actualizada cuando nos contactás por WhatsApp.",
  },
  {
    q: "¿Cómo se realizan los pagos?",
    a: "Aceptamos transferencia bancaria y MercadoPago. Todo se acuerda directamente con tu asesor de forma simple y sin complicaciones.",
  },
  {
    q: "¿Necesito tener local físico?",
    a: "No. Trabajamos con emprendedores online, revendedores por redes sociales, tiendas físicas y distribuidores. No importa el formato de tu negocio.",
  },
  {
    q: "¿Trabajan con novedades y lanzamientos?",
    a: "Sí. Actualizamos el catálogo cada semana con los últimos lanzamientos. Nuestros clientes son los primeros en enterarse cuando entra stock nuevo.",
  },
];

// ─── COMPONENTES AUXILIARES ───────────────────────────────────────────────────

const WhatsAppIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.849L.057 23.5l5.818-1.526A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.372l-.36-.214-3.727.978 1.001-3.624-.235-.372A9.818 9.818 0 1112 21.818z" />
  </svg>
);

const HERO_VOLUMES = [
  {
    src: "/Imagenes/jujutsu-kaisen.jpg",
    alt: "Jujutsu Kaisen",
    className: "hero-volume hero-volume--jjk",
  },
  {
    src: "/Imagenes/chainsawman.jpg",
    alt: "Chainsaw Man",
    className: "hero-volume hero-volume--chainsaw",
  },
  {
    src: "/Imagenes/blue-lock.jpg",
    alt: "Blue Lock",
    className: "hero-volume hero-volume--blue-lock",
  },
  {
    src: "/Imagenes/one-piece.jpg",
    alt: "One Piece",
    className: "hero-volume hero-volume--one-piece",
  },
];

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__ambient" />
      <div className="hero-visual__ambient-secondary" />
      <div className="hero-visual__floor" />
      <div className="hero-visual__stage">
        {HERO_VOLUMES.map((vol) => (
          <div key={vol.alt} className={vol.className}>
            <img
              src={vol.src}
              alt=""
              loading="eager"
              decoding="async"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        ))}
      </div>
      <div className="hero-visual__glass" />
      <div className="hero-visual__rim" />
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md border border-zinc-800 overflow-hidden transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left transition-all duration-300 hover:bg-zinc-800/50"
        aria-expanded={open}
      >
        <span className="font-semibold text-zinc-100">{q}</span>
        <span
          className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            open
              ? "rotate-45 border-red-500/40 bg-red-500/15 text-red-400"
              : "border-zinc-700 text-zinc-300"
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-48 pb-5" : "max-h-0"
        }`}
      >
        <p className="px-7 text-sm leading-relaxed text-zinc-200">{a}</p>
      </div>
    </div>
  );
}

// ─── COMPONENTE DE LOGO ───────────────────────────────────────────────────────
// "Kurogane" en blanco, "Store" en rojo
const Logo = ({ className = "text-2xl" }) => (
  <span className={`font-black tracking-tight ${className}`}>
    <span className="text-zinc-100">Kurogane</span><span className="text-red-400">Store</span>
  </span>
);

// ─── APP PRINCIPAL ────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      {/*
        NOTA: Agregá estas meta tags en tu index.html dentro de <head>:

        <meta name="description" content="KuroganeStore — Mayorista de mangas para comiquerías, emprendedores y revendedores de todo el país." />
        <meta property="og:title" content="KuroganeStore — Accedé a los mangas más buscados" />
        <meta property="og:description" content="Más de 300 títulos disponibles. Envíos a todo el país. Atención personalizada." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
      */}

      <div className="min-h-screen overflow-hidden bg-zinc-950 text-zinc-100 scroll-smooth">

        {/* ── NAVBAR ──────────────────────────────────────────────────────── */}
        <header className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/75 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

            <a href="#hero">
              <Logo />
            </a>

            <nav className="ml-auto hidden items-center gap-8 text-sm font-medium text-zinc-200 md:flex">
              <a href="#elegirnos" className="transition-all duration-300 hover:text-zinc-100">Por qué elegirnos</a>
              <a href="#novedades" className="transition-all duration-300 hover:text-zinc-100">Novedades</a>
              <a href="#beneficios" className="transition-all duration-300 hover:text-zinc-100">Beneficios</a>
              <a href="#como" className="transition-all duration-300 hover:text-zinc-100">Cómo funciona</a>
              <a href="#ivrea" className="transition-all duration-300 hover:text-zinc-100">Catálogo Ivrea</a>
              <a href="#faq" className="transition-all duration-300 hover:text-zinc-100">FAQ</a>
            </nav>
          </div>
        </header>

        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section
          id="hero"
          className="relative overflow-hidden border-b border-zinc-900 bg-zinc-950"
          style={{ scrollMarginTop: "80px" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.18),transparent_30%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_30%)]" />

          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-20 pt-16 sm:gap-16 sm:pb-24 sm:pt-20 lg:grid-cols-[1fr_1.05fr] lg:gap-24 lg:pb-28 lg:pt-24 xl:gap-32">

            {/* LEFT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                Accedé a los mangas más buscados
              </div>

              <h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Conectá con el mundo del{" "}
                <span className="text-red-400">MANGA</span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-200">
                Accedé a títulos que generan comunidad, movimiento y demanda constante dentro del universo anime y manga.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WA("Hola! Quiero consultar sobre venta mayorista de mangas en KuroganeStore")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-red-500 active:scale-[0.99]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Quiero más información
                </a>

                <a
                  href="#novedades"
                  className="flex items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900/60 px-8 py-4 text-base font-semibold transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-800"
                >
                  Explorar títulos
                </a>
              </div>

              {/* Stats */}
              <div className="mt-14 grid grid-cols-3 gap-5 border-t border-zinc-900 pt-8">
                <div>
                  <div className="text-3xl font-black">+2500</div>
                  <div className="mt-1 text-sm text-zinc-300">Títulos disponibles</div>
                </div>
                <div>
                  <div className="text-3xl font-black">Manga</div>
                  <div className="mt-1 text-sm text-zinc-300">Mercado en crecimiento</div>
                </div>
                <div>
                  <div className="text-3xl font-black">Online</div>
                  <div className="mt-1 text-sm text-zinc-300">Vende desde cualquier lugar</div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">
              <div className="absolute h-[500px] w-[500px] rounded-full bg-red-500/8 blur-3xl" />

              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-5">
                  <div className="overflow-hidden rounded-[24px] border border-zinc-800 bg-zinc-900/60 backdrop-blur-md border border-zinc-800 shadow-2xl">
                    <img
                      src="Imagenes/luffy-1.jpg"
                      alt="One Piece"
                      loading="lazy"
                      onError={(e) => { e.target.style.display = "none"; }}
                      className="aspect-[2/3] w-full object-cover object-center"
                    />
                  </div>
                  <div className="rounded-[24px] border border-zinc-800 bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-6">
                    <div className="text-xl font-black">One Piece</div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-200">
                      El fenómeno global que sigue sumando lectores todos los días.
                    </p>
                  </div>
                </div>

                <div className="mt-10 space-y-5">
                  <div className="rounded-[24px] border border-zinc-800 bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-6">
                    <div className="text-xl font-black">Blue Lock</div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-200">
                      Uno de los mangas deportivos más virales de los últimos años.
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-[24px] border border-zinc-800 bg-zinc-900/60 backdrop-blur-md border border-zinc-800 shadow-2xl">
                    <img
                      src="/Imagenes/blue-lock-2.jpg"
                      alt="Blue Lock"
                      loading="lazy"
                      onError={(e) => { e.target.style.display = "none"; }}
                      className="aspect-[2/3] w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── POR QUÉ ELEGIRNOS ───────────────────────────────────────────── */}
        <section
          id="elegirnos"
          className="border-y border-zinc-900 bg-zinc-950 py-14"
          style={{ scrollMarginTop: "80px" }}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-5 inline-flex rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-2 text-sm text-zinc-300">
                Por qué elegirnos
              </div>
              <h2 className="text-4xl font-black leading-tight text-zinc-100 md:text-5xl">
                Distribución oficial de mangas{" "}
                <span className="text-red-400">IVREA</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-300">
                Trabajamos con tiendas y emprendimientos de todo el país
                ofreciendo lanzamientos constantes, stock actualizado y
                una operatoria optimizada semana a semana.
              </p>
            </div>

            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-[28px] border border-zinc-800 bg-zinc-900/60 p-8">
                <h3 className="text-2xl font-bold text-zinc-100">🔒 Compra segura</h3>
                <p className="mt-4 leading-relaxed text-zinc-300">Atención personalizada durante todo el proceso.</p>
              </div>
              <div className="rounded-[28px] border border-zinc-800 bg-zinc-900/60 p-8">
                <h3 className="text-2xl font-bold text-zinc-100">🚚 Envíos a todo el país</h3>
                <p className="mt-4 leading-relaxed text-zinc-300">Trabajamos con logística para toda Argentina.</p>
              </div>
              <div className="rounded-[28px] border border-zinc-800 bg-zinc-900/60 p-8">
                <h3 className="text-2xl font-bold text-zinc-100">📦 Lanzamientos constantes</h3>
                <p className="mt-4 leading-relaxed text-zinc-300">Nuevos títulos y novedades todas las semanas.</p>
              </div>
              <div className="rounded-[28px] border border-zinc-800 bg-zinc-900/60 p-8">
                <h3 className="text-2xl font-bold text-zinc-100">💬 Soporte real</h3>
                <p className="mt-4 leading-relaxed text-zinc-300">Te ayudamos a encontrar lo ideal para tu proyecto.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── NOVEDADES ───────────────────────────────────────────────────── */}
        <section
          id="novedades"
          className="border-b border-zinc-900 bg-[#090909] px-6 py-14"
          style={{ scrollMarginTop: "80px" }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                Novedades · Lanzamientos · Stock semanal
              </div>
              <h2 className="text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
                Títulos nuevos{" "}
                <span className="text-zinc-100-500">todas las semanas</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-200">
                El universo manga crece constantemente. Nuestro catálogo se
                actualiza cada semana para que tu negocio siempre tenga lo que
                tus clientes buscan.
              </p>
            </div>

            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {NOVEDADES.map((n) => (
                <div
                  key={n.titulo}
                  className="group relative overflow-hidden rounded-[24px] border border-zinc-800 bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-5 transition-all duration-300 hover:border-zinc-700"
                >
                  {n.badge && (
                    <span className="absolute right-4 top-4 z-10 rounded-full bg-red-500 px-2.5 py-1 text-xs font-bold tracking-wide">
                      {n.badge}
                    </span>
                  )}
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={n.img}
                      alt={n.alt}
                      loading="lazy"
                      onError={(e) => {
                        e.target.parentElement.innerHTML =
                          `<div class="flex h-[220px] items-center justify-center bg-zinc-800 rounded-2xl text-zinc-600 text-sm">${n.titulo}</div>`;
                      }}
                      className="aspect-[2/3] w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-5 text-xl font-black">{n.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-200">{n.desc}</p>
                  <a
                    href={WA(`Hola! Quiero consultar precio mayorista de ${n.titulo}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center gap-1.5 text-sm font-medium text-red-400 transition-all duration-300 hover:text-red-300"
                  >
                    Consultar precio
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href={WA("Hola! Quiero ver el catálogo completo de KuroganeStore")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-900/60 backdrop-blur-md border border-zinc-800 px-7 py-3.5 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-800"
              >
                <WhatsAppIcon className="h-4 w-4 text-green-400" />
                Ver catálogo completo por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ── BENEFICIOS ──────────────────────────────────────────────────── */}
        <section
          id="beneficios"
          className="border-b border-zinc-900 bg-zinc-950 px-6 py-14"
          style={{ scrollMarginTop: "80px" }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
                Beneficios para tu negocio
              </div>
              <h2 className="text-5xl font-black leading-[0.99] tracking-tight md:text-6xl">
                Todo lo que necesitás para crear tu{" "}
                <span className="text-red-400">Comiqueria</span>
              </h2>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {BENEFICIOS.map((b) => (
                <div
                  key={b.titulo}
                  className="group flex gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all duration-300 hover:border-red-500/20 hover:bg-zinc-900/60 backdrop-blur-md border border-zinc-800"
                >
                  <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 transition group-hover:bg-red-500/20">
                    {b.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-100">{b.titulo}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CÓMO FUNCIONA ───────────────────────────────────────────────── */}
        <section
          id="como"
          className="border-b border-zinc-900 bg-[#090909] px-6 py-14"
          style={{ scrollMarginTop: "80px" }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                Simple · Sin contratos · Sin burocracia
              </div>
              <h2 className="text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
                Cómo <span className="text-zinc-100-500">funciona</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-200">
                Empezar es fácil. Te acompañamos para que puedas dar
                tus primeros pasos dentro del mundo manga y anime.
              </p>
            </div>

            <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {PASOS.map((p, i) => (
                <div key={p.n} className="relative">
                  {i < PASOS.length - 1 && (
                    <div className="absolute left-full top-8 hidden h-px w-full -translate-x-4 bg-gradient-to-r from-zinc-800 to-transparent lg:block" />
                  )}
                  <div className="relative mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md border border-zinc-800">

                    {/* Numero */}
                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-sm font-black text-zinc-100">
                      {p.n}
                    </div>

                    {/* ICONOS */}
                    {p.n === "01" && (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-10 w-10 text-zinc-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                      </svg>
                    )}
                    {p.n === "02" && (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-10 w-10 text-zinc-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    )}
                    {p.n === "03" && (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-10 w-10 text-zinc-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                      </svg>
                    )}
                    {p.n === "04" && (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-10 w-10 text-zinc-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    )}
                  </div>
                  <h3 className="mt-5 text-2xl font-black">{p.titulo}</h3>
                  <p className="mt-3 leading-relaxed text-zinc-200">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIOS ─────────────────────────────────────────────────── */}
        <section
          id="testimonios"
          className="border-b border-zinc-900 bg-zinc-950 px-6 py-14"
          style={{ scrollMarginTop: "80px" }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-3xl">
              <div className="mb-5 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
                Resultados
              </div>
              <h2 className="text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
                Negocios que ya{" "}
                <span className="text-zinc-100-500">están creciendo</span>
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIOS.map((t) => (
                <div
                  key={t.nombre}
                  className="flex flex-col rounded-[24px] border border-zinc-800 bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-8 transition-all duration-300 hover:border-zinc-700"
                >
                  <div className="mb-4 text-red-400/60 text-4xl font-serif leading-none">"</div>
                  <p className="flex-1 text-sm leading-relaxed text-zinc-300 italic">
                    {t.texto}
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-zinc-800 pt-5">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 text-sm font-bold text-red-400">
                      {t.ini}
                    </div>
                    <div>
                      <div className="font-semibold text-zinc-100">{t.nombre}</div>
                      <div className="text-xs text-zinc-300">{t.rol}</div>
                    </div>
                    <div className="ml-auto text-sm text-red-400">★★★★★</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section
          id="contacto"
          className="relative overflow-hidden bg-zinc-950 px-6 py-14"
          style={{ scrollMarginTop: "80px" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.13),transparent_45%)]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              Es tu momento
            </div>
            <h2 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Sumate a <Logo className="text-5xl md:text-7xl inline" />
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-zinc-200">
              Convertí tu pasión por el anime y el manga en un proyecto real.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WA("Hola! Quiero sumarme a KuroganeStore y conocer las condiciones mayoristas")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-2xl bg-green-500 px-10 py-5 text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-green-400 shadow-lg shadow-green-500/20 active:scale-[0.99]"
              >
                <WhatsAppIcon className="h-6 w-6" />
                Quiero consultar por WhatsApp
              </a>
            </div>
            <p className="mt-5 text-sm text-zinc-600">
              Sin compromiso · Respondemos en menos de 24hs
            </p>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <section
          id="faq"
          className="border-t border-zinc-900 bg-[#090909] px-6 py-14"
          style={{ scrollMarginTop: "80px" }}
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-5xl font-black tracking-tight md:text-6xl">
              Preguntas frecuentes
            </h2>
            <p className="mb-14 text-center text-zinc-300">
              Todo lo que necesitás saber antes de arrancar.
            </p>

            <div className="space-y-3">
              {FAQS.map((f) => (
                <FaqItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 text-center">
              <p className="text-zinc-200">¿Tenés alguna otra consulta?</p>
              <a
                href={WA("Hola! Tengo una consulta sobre KuroganeStore")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-zinc-800 px-6 py-3 text-sm font-medium text-zinc-100 transition-all duration-300 hover:bg-zinc-700"
              >
                <WhatsAppIcon className="h-4 w-4 text-green-400" />
                Escribinos directamente
              </a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ──────────────────────────────────────────────────────── */}
        <footer className="border-t border-zinc-900 bg-zinc-950 px-6 py-10 text-zinc-300">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

            <div>
              <Logo />
              <p className="mt-1 text-xs text-zinc-600">Manga · Anime · Cultura Geek</p>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <a href="#novedades" className="transition-all duration-300 hover:text-zinc-100">Novedades</a>
              <a href="#beneficios" className="transition-all duration-300 hover:text-zinc-100">Beneficios</a>
              <a href="#como" className="transition-all duration-300 hover:text-zinc-100">Cómo funciona</a>
              <a href="#faq" className="transition-all duration-300 hover:text-zinc-100">FAQ</a>
            </div>

            <div className="text-xs">© 2026 KuroganeStore. Todos los derechos reservados.</div>
          </div>
        </footer>

        {/* ── BOTÓN FLOTANTE WHATSAPP (mobile) ────────────────────────────── */}
        <a
          href={WA("Hola! Quiero información sobre KuroganeStore")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-green-500 px-5 py-3.5 text-sm font-semibold text-zinc-100 shadow-lg shadow-green-900/40 transition-all duration-300 hover:bg-green-400 hover:scale-105 active:scale-95 md:hidden"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Escribinos
        </a>

      </div>
    </>
  );
}
