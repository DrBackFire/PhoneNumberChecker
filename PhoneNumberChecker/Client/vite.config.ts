import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";
// import Unlighthouse from "@unlighthouse/vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "../wwwroot",
  },
  plugins: [
    react(),
    VitePWA({
      strategies: "injectManifest",
      srcDir: "src",
      filename: "sw.js",
      devOptions: {
        enabled: false,
      },
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        short_name: "Num Valid",
        name: "Number Validator",
        description: "A Number Validator app",
        lang: "en",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        dir: "ltr",
        display: "standalone",
        orientation: "portrait",
        icons: [
          {
            src: "/icons/maskable_icon.png",
            sizes: "196x196",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icons/android-icon-192x192-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "/icons/apple-icon-180x180-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "/icons/apple-icon-152x152-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "152x152",
          },
          {
            src: "/icons/apple-icon-144x144-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "144x144",
          },
          {
            src: "/icons/apple-icon-120x120-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "120x120",
          },
          {
            src: "/icons/apple-icon-114x114-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "114x114",
          },
          {
            src: "/icons/favicon-96x96-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "96x96",
          },
          {
            src: "/icons/apple-icon-76x76-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "76x76",
          },
          {
            src: "/icons/apple-icon-72x72-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "72x72",
          },
          {
            src: "/icons/apple-icon-60x60-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "60x60",
          },
          {
            src: "/icons/apple-icon-57x57-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "57x57",
          },
          {
            src: "/icons/favicon-32x32-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "32x32",
          },
          {
            src: "/icons/favicon-16x16-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "16x16",
          },
        ],
        prefer_related_applications: false,
      },
    }),
  ],
  server: {
    cors: false,
  },
});
