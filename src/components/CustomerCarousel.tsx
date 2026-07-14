"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export type Customer = {
  name: string;
  logo: string;
  logoType: "svg" | "image";
  descriptionKey: string;
  tagKey: string;
  url: string;
};

type Copy = Record<string, string>;

const INTERVAL_MS = 3000;
const DURATION_S = 0.5;

export default function CustomerCarousel({
  customers,
  copy,
}: {
  customers: Customer[];
  copy: Copy;
}) {
  const [index, setIndex] = useState(0);
  const customer = customers[index];

  useEffect(() => {
    const timer = setInterval(
      () => {
        setIndex((prev) => (prev + 1) % customers.length);
      },
      INTERVAL_MS + DURATION_S * 1000,
    );
    return () => clearInterval(timer);
  }, [customers.length]);

  return (
    <div className="relative h-[76px] w-full max-w-[280px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={customer.name}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: DURATION_S, ease: "easeInOut" }}
          className="absolute inset-0 flex flex-row justify-start gap-10 items-center text-start"
        >
          <div className="flex flex-row items-center gap-4">
            <div className="relative flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-tl-3xl rounded-br-3xl overflow-hidden bg-[#A0A0A0]">
              {customer.logoType === "svg" ? (
                <Image
                  src={customer.logo}
                  alt={`${customer.name} Logo`}
                  fill
                  className="object-contain p-2 saturate-0 invert"
                />
              ) : (
                <Image
                  src={customer.logo}
                  alt={`${customer.name} Logo`}
                  fill
                  className="object-cover saturate-0 invert"
                />
              )}
            </div>
            <div>
              <h1 className="text-md font-bold">{customer.name}</h1>
              <h2 className="text-xs text-muted-foreground w-fit">
                {copy[customer.descriptionKey]}
              </h2>
              <p className="text-xs text-muted-foreground">
                {copy[customer.tagKey]}
              </p>
            </div>
          </div>

          <a
            href={customer.url}
            target="_blank"
            className="text-xs text-muted-foreground cursor-pointer"
          >
            <FaExternalLinkAlt />
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
