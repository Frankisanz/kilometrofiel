import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kilómetro Fiel — Cuida el coche que ya tienes",
    short_name: "Kilómetro Fiel",
    description:
      "Guías y herramientas para mantener coches de más de 10 años con criterio.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#f4efe5",
    theme_color: "#0d2b25",
    lang: "es",
    categories: ["automotive", "education", "utilities"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "El coche no arranca",
        short_name: "No arranca",
        url: "/herramientas/diagnostico-arranque",
      },
      {
        name: "Plan de mantenimiento",
        short_name: "Mantenimiento",
        url: "/herramientas/planificador",
      },
      {
        name: "Elegir batería",
        short_name: "Batería",
        url: "/herramientas/elegir-bateria",
      },
    ],
  };
}
