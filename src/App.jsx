import hero from "./assets/hero.png";

export default function App() {
  const whatsappLink = "https://wa.me/5491111111111";

  const benefits = [
    {
      title: "Stock actualizado",
      text: "Recib\u00ed constantemente novedades y reposiciones.",
    },
    {
      title: "Atenci\u00f3n personalizada",
      text: "Te ayudamos a elegir productos para tu p\u00fablico.",
    },
    {
      title: "Env\u00edos a todo el pa\u00eds",
      text: "Trabajamos con log\u00edstica para toda Argentina.",
    },
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[900px] w-[900px] -translate-x-1/2 bg-red-600/20 blur-[180px]" />
      </div>

      <section className="relative min-h-screen flex items-center">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-semibold text-red-400">
              Distribuci&oacute;n mayorista de mangas
            </div>

            <h1 className="mt-8 text-5xl font-black leading-[0.95] sm:text-6xl md:text-8xl">
              El lugar donde
              <span className="text-red-600"> empieza </span>
              tu negocio otaku.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-zinc-400">
              Acced&eacute; a cat&aacute;logo mayorista, novedades semanales y
              atenci&oacute;n personalizada para revendedores y
              comiquer&iacute;as.
            </p>

            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-red-600 px-8 py-5 text-center text-lg font-bold shadow-2xl shadow-red-600/20 transition-all hover:bg-red-700"
              >
                Pedir cat&aacute;logo
              </a>

              <a
                href="#beneficios"
                className="rounded-2xl border border-zinc-700 px-8 py-5 text-center text-lg font-bold transition-all hover:border-red-500"
              >
                Ver beneficios
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-5 sm:gap-10">
              <div>
                <h3 className="text-3xl font-black sm:text-4xl">+300</h3>
                <p className="text-zinc-500">Revendedores</p>
              </div>

              <div>
                <h3 className="text-3xl font-black sm:text-4xl">+1500</h3>
                <p className="text-zinc-500">Productos</p>
              </div>

              <div>
                <h3 className="text-3xl font-black sm:text-4xl">24hs</h3>
                <p className="text-zinc-500">Respuesta</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-red-600/30 blur-[100px]" />

            <img
              src={hero}
              alt="MangaHub"
              className="relative z-10 rounded-[32px] border border-zinc-800 shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="beneficios" className="border-t border-zinc-900 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-black leading-none md:text-7xl">
              Todo lo que necesit&aacute;s para vender m&aacute;s.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-zinc-400">
              Creamos un sistema pensado para tiendas, emprendedores y
              fan&aacute;ticos del mundo manga.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-zinc-800 bg-zinc-950 p-10 transition-all hover:border-red-600"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-red-600/20 bg-red-600/20 text-2xl">
                  *
                </div>

                <h3 className="mt-8 text-3xl font-black">{item.title}</h3>

                <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-[40px] border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black p-14 text-center md:p-20">
            <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 bg-red-600/20 blur-[120px]" />

            <div className="relative z-10">
              <h2 className="text-5xl font-black leading-none md:text-7xl">
                Empez&aacute; hoy con MangaHub.
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-zinc-400">
                Recib&iacute; el cat&aacute;logo completo y empez&aacute; a
                vender mangas al por mayor desde cualquier parte del
                pa&iacute;s.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-12 inline-block rounded-2xl bg-red-600 px-10 py-6 text-xl font-bold shadow-2xl shadow-red-600/20 transition-all hover:bg-red-700"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-900 py-10 text-center text-zinc-500">
        MangaHub &copy; 2026 - Todos los derechos reservados.
      </footer>
    </div>
  );
}
