import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RXMOS",
    short_name: "RXMOS",
    description:
      "Empresa de desenvolvimento de aplicativos, plataformas web, sites, automação e IA.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111111",
    icons: [
      {
        src: "/brand.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
