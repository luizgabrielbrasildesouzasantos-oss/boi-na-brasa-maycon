import { createFileRoute } from "@tanstack/react-router";
import {
  Clock,
  Flame,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Music,
  Truck,
  X,
} from "lucide-react";
import { useState } from "react";

const TITLE = "Boi na Brasa | Espetaria em Eldorado, MS";
const DESC =
  "Espetaria Boi na Brasa em Eldorado (MS): espetinhos de carne, kafta e medalhão, farofa e bebidas. Delivery de terça a domingo, das 18h às 00h.";
const WHATS = "5567999672817";
const FONE = "(67) 99967-2817";
const INSTA = "https://www.instagram.com/boi_na_brasa_espetaria/";
const ENDERECO = "Av. Brasil, 1001, Centro, Eldorado - MS";
const MAPA = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ENDERECO + ", 79970-000")}`;
const zap = (msg: string) => `https://wa.me/${WHATS}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Boi na Brasa",
          description: DESC,
          telephone: "+" + WHATS,
          sameAs: [INSTA],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Brasil, 1001, Centro",
            addressLocality: "Eldorado",
            addressRegion: "MS",
            postalCode: "79970-000",
            addressCountry: "BR",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "18:00",
              closes: "00:00",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const links = [
  ["Cardápio", "#cardapio"],
  ["Diferenciais", "#diferenciais"],
  ["Sobre", "#sobre"],
  ["Contato", "#contato"],
];

const cardapio = [
  {
    titulo: "Espetinhos",
    nota: "Preparados na brasa",
    itens: ["Espetinho de carne", "Espetinho de kafta", "Espetinho de medalhão"],
    extra: "Há outras opções. Pergunte os sabores do dia.",
  },
  {
    titulo: "Acompanhamento",
    nota: "Para completar o espeto",
    itens: ["Farofa"],
    extra: "Pergunte por outros acompanhamentos.",
  },
  {
    titulo: "Bebidas",
    nota: "Para acompanhar",
    itens: ["Caipirinha"],
    extra: "Pergunte as bebidas disponíveis.",
  },
];

const diferenciais = [
  {
    Icone: Flame,
    t: "Feito na brasa",
    d: "Espetinhos de carne, kafta e medalhão preparados na brasa.",
  },
  { Icone: Truck, t: "Delivery", d: "Peça de casa pelo WhatsApp, de terça a domingo." },
  {
    Icone: Music,
    t: "Música ao vivo",
    d: "A programação com música ao vivo é divulgada no Instagram.",
  },
  { Icone: MapPin, t: "Novo endereço", d: "Agora na Avenida Brasil, 1001, no Centro de Eldorado." },
];

const btn =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-6 py-3 font-semibold transition duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brasa";
const pedido = zap("Olá! Gostaria de fazer um pedido.");

function Marca({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-extrabold tracking-wide ${className}`}>
      BOI NA <span className="text-brasa">BRASA</span>
    </span>
  );
}

function Index() {
  const [aberto, setAberto] = useState(false);
  return (
    <div className="bg-creme font-sans text-carvao">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-carvao text-creme">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Boi na Brasa, início">
            <img src="/logo.png" alt="" width={40} height={40} className="size-10 rounded-full" />
            <Marca className="text-2xl" />
          </a>
          <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
            {links.map(([n, h]) => (
              <a
                key={h}
                href={h}
                className="text-sm font-medium text-bege transition-colors hover:text-brasa"
              >
                {n}
              </a>
            ))}
            <a
              href={pedido}
              className={`${btn} min-h-0 bg-brasa px-4 py-2 text-sm text-carvao hover:bg-brasa-escura`}
            >
              Pedir agora
            </a>
          </nav>
          <button
            type="button"
            className="flex size-11 items-center justify-center md:hidden"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={aberto}
            onClick={() => setAberto(!aberto)}
          >
            {aberto ? <X /> : <Menu />}
          </button>
        </div>
        {aberto && (
          <nav
            aria-label="Principal"
            className="subir border-t border-white/10 px-5 pb-4 md:hidden"
          >
            {links.map(([n, h]) => (
              <a key={h} href={h} onClick={() => setAberto(false)} className="block py-3 text-bege">
                {n}
              </a>
            ))}
            <a href={pedido} className={`${btn} mt-2 w-full bg-brasa text-carvao`}>
              Pedir pelo WhatsApp
            </a>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden bg-carvao text-creme">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 80% 120%, oklch(0.6 0.17 45 / 0.4), transparent 55%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-32">
            <div className="subir max-w-2xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brasa/60 px-4 py-1 text-sm text-bege">
                <MapPin size={14} aria-hidden /> Novo endereço · Av. Brasil, 1001
              </p>
              <h1 className="font-display text-6xl font-extrabold leading-none tracking-wide sm:text-8xl">
                BOI NA <span className="text-brasa">BRASA</span>
              </h1>
              <div aria-hidden className="mt-6 flex items-center gap-2">
                <span className="h-0.5 w-20 rounded bg-brasa" />
                <span className="size-2 rounded-full bg-brasa" />
                <span className="size-1.5 rounded-full bg-queimado" />
              </div>
              <p className="mt-6 text-lg text-bege md:text-xl">
                Espetaria em Eldorado, MS. Espetinhos na brasa, farofa e bebidas, com delivery de
                terça a domingo.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={pedido} className={`${btn} bg-brasa text-carvao hover:bg-brasa-escura`}>
                  <MessageCircle size={20} aria-hidden /> Pedir pelo WhatsApp
                </a>
                <a
                  href="#cardapio"
                  className={`${btn} border border-bege/50 text-creme hover:border-brasa hover:text-brasa`}
                >
                  Ver cardápio
                </a>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Resumo" className="border-b border-bege bg-bege/50">
          <ul className="mx-auto grid max-w-6xl gap-3 px-5 py-5 text-sm font-medium text-madeira sm:grid-cols-3">
            <li className="flex items-center gap-2">
              <Clock size={18} aria-hidden /> Terça a domingo, 18h às 00h
            </li>
            <li className="flex items-center gap-2">
              <Truck size={18} aria-hidden /> Delivery pelo WhatsApp
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} aria-hidden /> Av. Brasil, 1001, Centro
            </li>
          </ul>
        </section>

        <section id="cardapio" className="mx-auto max-w-6xl px-5 py-20">
          <div className="rev">
            <h2 className="font-display text-4xl font-bold text-madeira md:text-5xl">Cardápio</h2>
            <p className="mt-3 max-w-xl text-madeira/80">
              Toque em um item para perguntar pelo WhatsApp. Valores e disponibilidade, consulte com
              a casa.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {cardapio.map((c) => (
              <article
                key={c.titulo}
                className="rev rounded-lg border border-bege bg-white/70 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-brasa/60"
              >
                <h3 className="font-display text-2xl font-bold text-queimado">{c.titulo}</h3>
                <p className="text-sm text-madeira/70">{c.nota}</p>
                <ul className="mt-5 divide-y divide-dashed divide-bege">
                  {c.itens.map((i) => (
                    <li key={i}>
                      <a
                        href={zap(`Olá! Gostaria de pedir: ${i}.`)}
                        className="flex min-h-11 items-center justify-between gap-3 py-2 font-medium transition-colors hover:text-brasa-escura focus-visible:outline-2 focus-visible:outline-brasa"
                      >
                        {i}
                        <span className="text-sm font-semibold text-brasa-escura">Pedir →</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-madeira/70">{c.extra}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="diferenciais" className="bg-madeira py-20 text-creme">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="rev font-display text-4xl font-bold md:text-5xl">
              Por que conhecer o Boi na Brasa
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {diferenciais.map(({ Icone, t, d }) => (
                <div key={t} className="rev border-t border-brasa/50 pt-5">
                  <Icone className="text-brasa" size={28} aria-hidden />
                  <h3 className="mt-3 font-display text-2xl font-bold">{t}</h3>
                  <p className="mt-1 text-bege">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="rev mx-auto max-w-3xl px-5 py-20">
          <h2 className="font-display text-4xl font-bold text-madeira md:text-5xl">
            Sobre a espetaria
          </h2>
          <p className="mt-5 text-lg leading-relaxed">
            O Boi na Brasa é uma espetaria de Eldorado, no Mato Grosso do Sul. A proposta é simples:
            espetinhos preparados na brasa, com farofa e bebida, para comer em boa companhia. A casa
            agora funciona em novo endereço, na Avenida Brasil, 1001, e atende também por delivery.
          </p>
        </section>

        <section id="contato" className="bg-bege py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="rev font-display text-4xl font-bold text-madeira md:text-5xl">
              Onde estamos
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div className="rev flex gap-3">
                <MapPin className="mt-1 shrink-0 text-queimado" aria-hidden />
                <div>
                  <h3 className="font-bold">Endereço</h3>
                  <p>Av. Brasil, 1001, Centro</p>
                  <p>Eldorado, MS</p>
                  <a
                    href={MAPA}
                    className="mt-2 inline-flex min-h-11 items-center font-semibold text-queimado underline"
                  >
                    Abrir no mapa
                  </a>
                </div>
              </div>
              <div className="rev flex gap-3">
                <Clock className="mt-1 shrink-0 text-queimado" aria-hidden />
                <div>
                  <h3 className="font-bold">Horário</h3>
                  <p>Terça a domingo</p>
                  <p>18h às 00h</p>
                  <p className="text-sm text-madeira/70">Delivery disponível</p>
                </div>
              </div>
              <div className="rev flex gap-3">
                <MessageCircle className="mt-1 shrink-0 text-queimado" aria-hidden />
                <div>
                  <h3 className="font-bold">WhatsApp</h3>
                  <p>{FONE}</p>
                  <a
                    href={zap("Olá! Gostaria de saber mais sobre a espetaria.")}
                    className={`${btn} mt-2 min-h-0 bg-carvao px-4 py-2 text-sm text-creme hover:bg-madeira`}
                  >
                    Chamar agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-carvao pb-24 pt-12 text-bege md:pb-10">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt=""
                width={40}
                height={40}
                loading="lazy"
                className="size-10 rounded-full"
              />
              <Marca className="text-2xl text-creme" />
            </div>
            <p className="mt-3 text-sm">
              Espetaria em Eldorado, MS, com delivery de terça a domingo.
            </p>
          </div>
          <nav aria-label="Rodapé">
            <h3 className="font-bold text-creme">Navegue</h3>
            <ul className="mt-2 space-y-1 text-sm">
              {links.map(([n, h]) => (
                <li key={h}>
                  <a href={h} className="hover:text-brasa">
                    {n}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-sm">
            <h3 className="font-bold text-creme">Contato</h3>
            <p className="mt-2">Av. Brasil, 1001, Centro, Eldorado, MS</p>
            <p>Terça a domingo, 18h às 00h</p>
            <p>WhatsApp: {FONE}</p>
            <a
              href={INSTA}
              className="mt-2 inline-flex items-center gap-2 hover:text-brasa"
              aria-label="Instagram do Boi na Brasa"
            >
              <Instagram size={18} aria-hidden /> @boi_na_brasa_espetaria
            </a>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-6xl px-5 text-xs text-bege/70">
          © {new Date().getFullYear()} Boi na Brasa. Todos os direitos reservados.
        </p>
      </footer>

      <a
        href={pedido}
        aria-label="Pedir pelo WhatsApp"
        className="fixed bottom-5 right-5 z-20 flex size-14 items-center justify-center rounded-full bg-brasa text-carvao shadow-lg transition hover:bg-brasa-escura focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-creme"
      >
        <MessageCircle aria-hidden />
      </a>
    </div>
  );
}
