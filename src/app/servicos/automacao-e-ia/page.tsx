import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automação e IA para empresas",
  description:
    "Automação de processos, integrações, agentes e IA aplicada para empresas que precisam operar melhor e ganhar eficiência.",
  alternates: {
    canonical: "/servicos/automacao-e-ia",
  },
};

export default function AutomationPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="space-y-5">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Automação e IA
        </p>
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
          Automação e IA para empresas que precisam escalar operações.
        </h1>
        <p className="leading-7 text-muted-foreground">
          A RXMOS implementa automações, integrações, fluxos de atendimento e soluções com IA para reduzir trabalho manual, acelerar processos e melhorar a experiência do cliente.
        </p>
      </div>

      <section className="mt-10 grid gap-4 rounded-[2rem] border border-border p-6">
        <h2 className="text-2xl font-bold">Aplicações comuns</h2>
        <p className="leading-7 text-muted-foreground">
          Integrações entre sistemas, automação comercial, atendimento com agentes, classificação de dados, geração assistida de conteúdo, enriquecimento de processos e redução de gargalos operacionais.
        </p>
      </section>
    </main>
  );
}
