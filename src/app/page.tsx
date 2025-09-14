"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import vizantu from "../../public/vizantu.jpg";
import brand from "../../public/brand.png";
import { ChevronRight } from "lucide-react";
import { CgAttachment } from "react-icons/cg";
import { FaChevronDown, FaExternalLinkAlt, FaInbox, FaMailBulk, FaMapPin } from "react-icons/fa";
import { TbBrandMailgun, TbMailFast } from "react-icons/tb";
import all4chat from "../../public/favicon.png";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Hook para aplicar/remover a classe dark no documento
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Função para alternar o tema
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <main className="min-h-screen flex flex-col lg:flex-row">
      <section className="w-full lg:w-1/2 min-h-screen flex items-center justify-center bg-sidebar text-foreground">
        <div className="flex flex-col items-center text-center">
          <Image
            src={brand}
            alt="Brand Logo"
            className="filter dark:invert animate-float cursor-pointer hover:scale-105 transition-transform duration-300"
            width={150}
            onClick={toggleTheme}
          />
          <h1 className="text-sm font-bold mb-4">rxmos.dev</h1>
        </div>

        <FaChevronDown className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce" />
      </section>

      <section className="wfull lg:w-1/2 min-h-screen flex items-center justify-center bg-background text-foreground p-5 lg:p-0">
        <div className="flex flex-col items-center text-center gap-5">
          <p className="text-sm max-w-md font-black mb-10 uppercase">You think, We build!</p>

          <div className="flex flex-col gap-10 items-start text-center">
            <div className="flex flex-col items-start text-start gap-4 w-full">
              <p className="tracking-[15px] text-xs">OUR PRODUCTS</p>

              <div className="flex flex-row justify-start gap-10 items-center text-start w-full">
                <div className="flex flex-row items-center gap-4">
                  <div className="relative flex flex-row gap-2 w-15 h-15 rounded-tl-3xl rounded-br-3xl overflow-hidden flex-shrink-0">
                    <Image
                      src={all4chat}
                      alt="All4Chat Logo"
                      fill
                      className="object-cover saturate-0"
                    />
                  </div>
                  <div>
                    <h1 className="text-md font-bold">All4Chat</h1>
                    <h2 className="text-xs text-muted-foreground w-fit">Tool for Streamers</h2>
                    <p className="text-xs text-muted-foreground">Product since 2025</p>
                  </div>
                </div>

                <a
                  href="https://all4chat.rxmos.dev.br"
                  target="_blank"
                  className="text-xs text-muted-foreground"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-start text-start gap-4 w-full">
              <p className="tracking-[15px] text-xs">TRUSTED BY</p>

              <div className="flex flex-row justify-start gap-10 items-center text-start w-full">
                <div className="flex flex-row items-center gap-4">
                  <div className="relative flex flex-row gap-2 w-15 h-15 rounded-tl-3xl rounded-br-3xl overflow-hidden flex-shrink-0">
                    <Image
                      src={vizantu}
                      alt="vizantu Logo"
                      fill
                      className="object-cover saturate-0"
                    />
                  </div>
                  <div>
                    <h1 className="text-md font-bold">Vizantu</h1>
                    <h2 className="text-xs text-muted-foreground w-fit">Social Media</h2>
                    <p className="text-xs text-muted-foreground">Customer since 2021</p>
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
            </div>

            <div className="flex flex-col items-start text-start gap-3 w-full">
              <p className="tracking-[15px] text-xs">CONTACT</p>
              <div className="flex flex-col  items-start text-start gap-2">
                <a
                  href="mailto:yuri@rxmos.dev.br"
                  target="_blank"
                  className="flex flex-row items-center gap-1.5 text-xs text-muted-foreground"
                >
                  <TbBrandMailgun /> yuri@rxmos.dev.br
                </a>

                <a className="flex flex-row items-center gap-1.5 text-xs text-muted-foreground">
                  <FaMapPin /> work from anywhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
