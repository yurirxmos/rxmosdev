"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import vizantu from "../../public/vizantu.jpg";
import brand from "../../public/brand.png";
import {
  FaChevronDown,
  FaExternalLinkAlt,
  FaMapPin,
  FaVideo,
} from "react-icons/fa";
import { TbBrandMailgun } from "react-icons/tb";

const copy = {
  "en-US": {
    hero: "You think, We build!",
    trustedBy: "TRUSTED BY",
    educationalPlatform: "Educational Platform",
    partnerSince2024: "Partner since 2024",
    socialMedia: "Social Media",
    customerSince2021: "Customer since 2021",
    partnersSummary:
      "And 25+ more partners across education, media, digital products, payments, and e-commerce.",
    contact: "CONTACT",
    bookMeeting: "Book a meeting",
    workFromAnywhere: "work from anywhere",
  },
  "pt-BR": {
    hero: "Voce imagina, nos construimos!",
    trustedBy: "CONFIAM NA RXMOS",
    educationalPlatform: "Plataforma educacional",
    partnerSince2024: "Parceiro desde 2024",
    socialMedia: "Midia social",
    customerSince2021: "Cliente desde 2021",
    partnersSummary:
      "E mais de 25 parceiros em educacao, midia, produtos digitais, pagamentos e e-commerce.",
    contact: "CONTATO",
    bookMeeting: "Agende uma reuniao",
    workFromAnywhere: "trabalho de qualquer lugar",
  },
} as const;

type Locale = keyof typeof copy;

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [locale, setLocale] = useState<Locale>("en-US");
  const [typedHeroText, setTypedHeroText] = useState("");
  const [typedPartnersText, setTypedPartnersText] = useState("");
  const text = copy[locale];

  // Hook para aplicar/remover a classe dark no documento
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    setLocale(navigator.language.toLowerCase().startsWith("pt") ? "pt-BR" : "en-US");
  }, []);

  useEffect(() => {
    let index = 0;
    let timeout: number | undefined;

    const typeNext = () => {
      index += 1;
      const nextText = text.hero.slice(0, index);
      setTypedHeroText(nextText);

      if (index < text.hero.length) {
        timeout = window.setTimeout(typeNext, nextText.endsWith(",") ? 320 : 60);
      }
    };

    setTypedHeroText("");
    timeout = window.setTimeout(typeNext, 60);

    return () => {
      if (timeout) {
        window.clearTimeout(timeout);
      }
    };
  }, [text.hero]);

  useEffect(() => {
    if (typedHeroText !== text.hero) {
      setTypedPartnersText("");
      return;
    }

    let startTimeout: number | undefined;
    let index = 0;

    let interval: number | undefined;

    startTimeout = window.setTimeout(() => {
      interval = window.setInterval(() => {
        index += 1;
        setTypedPartnersText(text.partnersSummary.slice(0, index));

        if (index >= text.partnersSummary.length && interval) {
          window.clearInterval(interval);
        }
      }, 42);
    }, 450);

    return () => {
      if (startTimeout) {
        window.clearTimeout(startTimeout);
      }

      if (interval) {
        window.clearInterval(interval);
      }
    };
  }, [text.hero, text.partnersSummary, typedHeroText]);

  return (
    <main className="min-h-screen flex flex-col lg:flex-row">
      <section className="w-full lg:w-1/2 min-h-screen flex items-center justify-center bg-sidebar text-foreground">
        <div className="flex flex-col items-center text-center">
          <Image
            src={brand}
            alt="Brand Logo"
            className="filter dark:invert animate-float cursor-pointer hover:scale-105 transition-transform duration-300"
            width={150}
            onClick={() => setIsDarkMode(!isDarkMode)}
          />
          <h1 className="text-sm font-bold mb-4">rxmos.dev</h1>
        </div>

        <FaChevronDown className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce lg:hidden" />
      </section>

      <section className="wfull lg:w-1/2 min-h-screen flex items-center justify-center bg-background text-foreground p-5 lg:p-0">
        <div className="flex flex-col items-center text-center gap-5">
          <div className="relative mb-10 min-h-[20px] max-w-md text-sm font-black uppercase">
            <p className="invisible">{text.hero}</p>
            <p className="absolute inset-0">{typedHeroText}</p>
          </div>

          <div className="flex flex-col gap-10 items-start text-center">
            <div className="flex flex-col items-start text-start gap-4 w-full">
              <p className="tracking-[15px] text-xs">{text.trustedBy}</p>

              <div className="flex flex-row justify-start gap-10 items-center text-start w-full">
                <div className="flex flex-row items-center gap-4">
                  <div className="relative flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-tl-3xl rounded-br-3xl overflow-hidden bg-[#A0A0A0] p-2.5">
                    <Image
                      src="/twe.svg"
                      alt="TWE Educacao Logo"
                      fill
                      className="object-contain p-2.5 saturate-0 invert"
                    />
                  </div>
                  <div>
                    <h1 className="text-md font-bold">TWE Educação</h1>
                    <h2 className="text-xs text-muted-foreground w-fit">
                      {text.educationalPlatform}
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      {text.partnerSince2024}
                    </p>
                  </div>
                </div>

                <a
                  href="https://tweducacao.com/"
                  target="_blank"
                  className="text-xs text-muted-foreground"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>

              <div className="flex flex-row justify-start gap-10 items-center text-start w-full">
                <div className="flex flex-row items-center gap-4">
                  <div className="relative flex flex-row gap-2 w-15 h-15 rounded-tl-3xl rounded-br-3xl overflow-hidden flex-shrink-0">
                    <Image
                      src={vizantu}
                      alt="Vizantu Logo"
                      fill
                      className="object-cover saturate-0 invert"
                    />
                  </div>
                  <div>
                    <h1 className="text-md font-bold">Vizantu</h1>
                    <h2 className="text-xs text-muted-foreground w-fit">
                      {text.socialMedia}
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      {text.customerSince2021}
                    </p>
                  </div>
                </div>

                <a
                  href="https://vizantu.com.br"
                  target="_blank"
                  className="text-xs text-muted-foreground"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>

              <div className="relative min-h-[48px] max-w-[260px] text-xs text-muted-foreground">
                <p className="invisible">{text.partnersSummary}</p>
                <p className="absolute inset-0">{typedPartnersText}</p>
              </div>
            </div>

            <div className="flex flex-col items-start text-start gap-3 w-full">
              <p className="tracking-[15px] text-xs">{text.contact}</p>
              <div className="flex flex-col  items-start text-start gap-2">
                <a
                  href="mailto:yuri@rxmos.dev.br"
                  target="_blank"
                  className="flex flex-row items-center gap-1.5 text-xs text-muted-foreground"
                >
                  <TbBrandMailgun /> yuri@rxmos.dev.br
                </a>

                <a
                  href="https://calendly.com/yurirxmos/meeting-with-rxmos-dev-team"
                  target="_blank"
                  className="flex flex-row items-center gap-1.5 text-xs text-muted-foreground"
                >
                  <FaVideo /> {text.bookMeeting}
                </a>

                <a className="flex flex-row items-center gap-1.5 text-xs text-muted-foreground">
                  <FaMapPin /> {text.workFromAnywhere}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
