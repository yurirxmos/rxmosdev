import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criação de sites profissionais com SEO e performance",
  description:
    "Criamos sites institucionais e landing pages para empresas que precisam gerar autoridade, tráfego orgânico e conversão.",
  alternates: {
    canonical: "/servicos/criacao-de-sites",
  },
};

export default function WebsitePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="space-y-5">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Sites e landing pages
        </p>
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
          Criação de sites profissionais para SEO, autoridade e conversão.
        </h1>
        <p className="leading-7 text-muted-foreground">
          Desenvolvemos sites para empresas que querem aparecer melhor no
          Google, comunicar valor com clareza e transformar visitas em
          oportunidades comerciais.
        </p>
      </div>

      <section className="mt-10 grid gap-4 rounded-[2rem] border border-border p-6">
        <h2 className="text-2xl font-bold">Foco de entrega</h2>
        <p className="leading-7 text-muted-foreground">
          SEO on-page, arquitetura de informação, velocidade, design responsivo,
          páginas de serviço, conteúdo comercial e base técnica preparada para
          campanhas e crescimento orgânico.
        </p>
      </section>
    </main>
  );
}
