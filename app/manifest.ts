import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Graphics Nepal",
    short_name: "Graphics Nepal",
    description: "Trusted printing & graphics shop in Kathmandu, Nepal since 2000.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a1628",
    icons: [
      {
        src: "/icon.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
