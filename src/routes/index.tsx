import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Shield, Headphones, Zap, UserCheck, Smartphone, Wallet } from "lucide-react";
import { WhatsAppFloatingButton } from "../components/WhatsAppFloatingButton";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "NYVU TECNOLOGIA | Automação para Contas na FOTMarkets" },
      { name: "description", content: "Sua conta copia no automático. Seu dinheiro continua 100% na sua conta. Software de automação licenciado pela NYVU TECNOLOGIA para contas pessoais na FOTMarkets." },
      { property: "og:title", content: "NYVU TECNOLOGIA | Automação para Contas na FOTMarkets" },
      { property: "og:description", content: "Sua conta copia no automático. Seu dinheiro continua 100% na sua conta." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const GOOGLE_FORMS_PLACEHOLDER = "#GOOGLE_FORMS_LINK_PLACEHOLDER";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-nyvu-neon">
        <span className="text-lg font-extrabold text-nyvu-black">N</span>
      </div>
      <span className="text-lg font-bold tracking-tight text-nyvu-white">
        NYVU <span className="font-light text-nyvu-gray">TECNOLOGIA</span>
      </span>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-nyvu-black px-4 pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-nyvu-neon/10 blur-[120px]" />
        <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-nyvu-neon/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-nyvu-card-border bg-nyvu-card px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-nyvu-neon opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-nyvu-neon" />
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-nyvu-neon">
            Tecnologia de Automação
          </span>
        </div>

        <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-nyvu-white sm:text-5xl lg:text-6xl">
          Sua Conta Copia no Automático.{" "}
          <span className="text-nyvu-neon">Seu Dinheiro Continua 100% Na Sua Conta.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-balance text-base leading-relaxed text-nyvu-gray sm:text-lg">
          A NYVU TECNOLOGIA é uma empresa de tecnologia que licencia software de automação para
          contas pessoais na FOTMarkets. Não somos corretora, não tocamos no seu dinheiro.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={GOOGLE_FORMS_PLACEHOLDER}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-nyvu-neon px-8 py-4 text-base font-bold uppercase tracking-wide text-nyvu-black shadow-[0_0_32px_rgba(0,209,255,0.35)] transition-all duration-300 hover:bg-nyvu-neon/90 hover:shadow-[0_0_48px_rgba(0,209,255,0.55)] hover:-translate-y-0.5"
          >
            Quero Copiar a Master Agora
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: Shield, label: "Conta 100% titulada em seu nome" },
            { icon: Wallet, label: "Só você acessa e saca seu capital" },
            { icon: Zap, label: "Cópias automáticas da Master" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 rounded-xl border border-nyvu-card-border bg-nyvu-card/50 px-4 py-3"
            >
              <item.icon className="h-4 w-4 shrink-0 text-nyvu-neon" />
              <span className="text-xs font-medium text-nyvu-gray">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const steps = [
    {
      number: "1",
      title: "Crie sua conta na FOTMarkets",
      description:
        "Crie sua conta pessoal na corretora com e-mail e senha. A conta é 100% titulada em seu nome.",
      icon: UserCheck,
    },
    {
      number: "2",
      title: "Crie sua conta MT5 Social",
      description:
        "Dentro da FOTMarkets, crie sua conta MT5 Social. É ela que vai receber as cópias da conta Master automaticamente.",
      icon: Wallet,
    },
    {
      number: "3",
      title: "Baixe o App FOT Social e Vincule",
      description:
        "Baixe o aplicativo FOT Social no celular, faça login e faça a vinculação para começar a copiar no automático.",
      icon: Smartphone,
    },
  ];

  return (
    <section className="bg-nyvu-black px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-nyvu-neon">
            Passo a Passo
          </span>
          <h2 className="mt-3 text-3xl font-bold text-nyvu-white sm:text-4xl">Como Funciona</h2>
          <p className="mx-auto mt-4 max-w-2xl text-nyvu-gray">
            Três passos simples para começar a copiar a Master no automático.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-nyvu-card-border bg-nyvu-card p-6 transition-all duration-300 hover:border-nyvu-neon/40 hover:bg-nyvu-card/80 hover:shadow-[0_0_30px_rgba(0,209,255,0.1)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-nyvu-neon/10 text-nyvu-neon transition-colors group-hover:bg-nyvu-neon/20">
                <step.icon className="h-6 w-6" />
              </div>
              <div className="absolute right-5 top-5 text-5xl font-extrabold leading-none text-nyvu-neon/10">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-nyvu-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-nyvu-gray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Beneficios() {
  const benefits = [
    {
      title: "Automação 100%",
      description: "Nosso software copia tudo sozinho, você não precisa operar.",
      icon: Zap,
    },
    {
      title: "Controle Total do Capital e Saque",
      description:
        "Sua conta é titulada, seu dinheiro fica na corretora e SÓ VOCÊ pode sacar. A NYVU não tem acesso ao seu saque, à sua senha ou ao seu dinheiro.",
      icon: Shield,
    },
    {
      title: "Suporte Tecnológico NYVU",
      description: "Suporte da nossa equipe para instalação e acompanhamento da tecnologia.",
      icon: Headphones,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-nyvu-black px-4 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-nyvu-neon/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-nyvu-neon">
            Vantagens
          </span>
          <h2 className="mt-3 text-3xl font-bold text-nyvu-white sm:text-4xl">Benefícios</h2>
          <p className="mx-auto mt-4 max-w-2xl text-nyvu-gray">
            Tecnologia pensada para quem quer praticidade sem abrir mão da segurança.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-2xl border border-nyvu-card-border bg-gradient-to-br from-nyvu-card to-nyvu-black p-6 transition-all duration-300 hover:border-nyvu-neon/40 hover:shadow-[0_0_30px_rgba(0,209,255,0.1)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-nyvu-neon text-nyvu-black shadow-[0_0_20px_rgba(0,209,255,0.35)]">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-nyvu-white">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-nyvu-gray">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-nyvu-card-border bg-nyvu-black px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Logo />
          <a
            href={GOOGLE_FORMS_PLACEHOLDER}
            className="inline-flex items-center justify-center rounded-full bg-nyvu-neon px-6 py-3 text-sm font-bold uppercase tracking-wide text-nyvu-black transition-all hover:bg-nyvu-neon/90 hover:shadow-[0_0_24px_rgba(0,209,255,0.35)]"
          >
            Quero Copiar a Master Agora
          </a>
        </div>

        <div className="mt-10 border-t border-nyvu-card-border pt-8">
          <p className="text-center text-xs leading-relaxed text-nyvu-gray/70">
            <strong className="text-nyvu-white">Aviso de Risco:</strong> Mercado financeiro envolve
            risco. Resultados passados não garantem resultados futuros. Bônus pagos pela corretora
            parceira FOTMarkets.
          </p>
          <p className="mt-4 text-center text-xs text-nyvu-gray/50">
            © 2025 NYVU TECNOLOGIA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-nyvu-black font-sans">
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-nyvu-card-border bg-nyvu-black/80 px-4 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Logo />
          <a
            href={GOOGLE_FORMS_PLACEHOLDER}
            className="hidden rounded-full border border-nyvu-neon px-5 py-2 text-sm font-semibold text-nyvu-neon transition-all hover:bg-nyvu-neon hover:text-nyvu-black sm:inline-flex"
          >
            Quero Copiar
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <ComoFunciona />
        <Beneficios />
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
