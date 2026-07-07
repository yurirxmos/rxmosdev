import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desenvolvimento de plataformas web e sistemas sob medida",
  description:
    "Criamos plataformas web, SaaS, dashboards e sistemas internos para empresas que precisam digitalizar operações e crescer com software sob medida.",
  alternates: {
    canonical: "/servicos/desenvolvimento-de-plataformas-web",
  },
};

export default function WebPlatformPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="space-y-5">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Plataformas web
        </p>
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
          Desenvolvimento de plataformas web para operação e crescimento.
        </h1>
        <p className="leading-7 text-muted-foreground">
          A RXMOS atua como empresa de software sob medida para negócios que precisam construir plataformas web, sistemas internos, dashboards e produtos SaaS com visão de longo prazo.
        </p>
      </div>

      <section className="mt-10 grid gap-4 rounded-[2rem] border border-border p-6">
        <h2 className="text-2xl font-bold">Onde aplicamos</h2>
        <p className="leading-7 text-muted-foreground">
          Plataformas para educação, operações, atendimento, relatórios, gestão interna, marketplace, áreas de cliente e fluxos de negócio que precisam de segurança, performance e facilidade de evolução.
        </p>
        <p className="leading-7 text-muted-foreground">
          Também estruturamos SEO técnico, áreas públicas e páginas de aquisição quando o produto exige crescimento orgânico.
        </p>
      </section>
    </main>
  );
}
