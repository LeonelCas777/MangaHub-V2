import fs from "fs";

const path = "src/App.jsx";
let s = fs.readFileSync(path, "utf8");

const marker = '              <motion.div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">';
const idx = s.indexOf('              <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">');
if (idx === -1) {
  console.error("marker not found");
  process.exit(1);
}

const endMarker = "\n  </section>\n\n          {/* ── NOVEDADES";
const end = s.indexOf(endMarker, idx);
if (end === -1) {
  console.error("end not found");
  process.exit(1);
}

const replacement = `              <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {ELEGIRNOS.map((item) => (
                  <div
                    key={item.titulo}
                    className="group flex flex-col rounded-[24px] border border-zinc-800 bg-zinc-900/50 p-7 transition hover:border-red-500/25 hover:bg-zinc-900"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-red-400 transition group-hover:bg-red-500/20">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{item.titulo}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>`;

s = s.slice(0, idx) + replacement + s.slice(end);
fs.writeFileSync(path, s);
console.log("patched ok");
