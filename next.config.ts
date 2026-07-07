import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/servicos",
        destination: "/",
        permanent: false,
      },
      {
        source: "/servicos/desenvolvimento-de-aplicativos",
        destination: "/",
        permanent: false,
      },
      {
        source: "/servicos/desenvolvimento-de-plataformas-web",
        destination: "/",
        permanent: false,
      },
      {
        source: "/servicos/criacao-de-sites",
        destination: "/",
        permanent: false,
      },
      {
        source: "/servicos/automacao-e-ia",
        destination: "/",
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
