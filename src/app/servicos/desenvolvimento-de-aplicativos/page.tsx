import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empresa de desenvolvimento de aplicativos para empresas",
  description:
    "Desenvolvimento de aplicativos sob medida para empresas que precisam lançar apps para iOS e Android com foco em produto, operação e escala.",
  alternates: {
    canonical: "/servicos/desenvolvimento-de-aplicativos",
  },
};

export default function AppDevelopmentPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="space-y-5">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Apps mobile
        </p>
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
          Empresa de desenvolvimento de aplicativos sob medida.
        </h1>
        <p className="leading-7 text-muted-foreground">
          Se você procura uma empresa que faz aplicativos para clientes, equipes internas ou novos produtos digitais, a RXMOS desenvolve soluções mobile com foco em experiência, estabilidade e evolução contínua.
        </p>
      </div>

      <section className="mt-10 grid gap-4 rounded-[2rem] border border-border p-6">
        <h2 className="text-2xl font-bold">O que entregamos</h2>
        <p className="leading-7 text-muted-foreground">
          Aplicativos para iOS e Android, áreas autenticadas, notificações, integrações, painéis administrativos, analytics e toda a base técnica para um produto mobile confiável.
        </p>
        <p className="leading-7 text-muted-foreground">
          Atuamos desde MVPs até aplicativos em crescimento, sempre com arquitetura pensada para manutenção e escala.
        </p>
      </section>
    </main>
  );
}
