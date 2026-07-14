import type { Metadata } from "next";
import Link from "next/link";

import { services } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Serviços de desenvolvimento de aplicativos, plataformas, sites e IA",
  description:
    "Conheça os serviços da RXMOS em desenvolvimento de aplicativos, plataformas web, sites, automação e IA para empresas.",
  alternates: {
    canonical: "/servicos",
  },
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Serviços RXMOS
        </p>
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
          Desenvolvimento de aplicativos, plataformas web, sites e automação.
        </h1>
        <p className="leading-7 text-muted-foreground">
          A RXMOS atua como empresa de software sob medida para negócios que
          precisam construir produtos digitais com velocidade, qualidade técnica
          e visão de crescimento.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.slug}
            className="rounded-[2rem] border border-border p-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {service.shortTitle}
            </p>
            <h2 className="mt-3 text-2xl font-bold">{service.title}</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              {service.description}
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
              {service.keywords.map((keyword) => (
                <li key={keyword}>{keyword}</li>
              ))}
            </ul>
            <Link
              href={`/servicos/${service.slug}`}
              className="mt-6 inline-flex font-semibold"
            >
              Ver detalhes
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
