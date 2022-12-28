// vite.config.ts
import { defineConfig } from "file:///Users/ebrahim/Projects/PhoneNumberChecker/Client/node_modules/vite/dist/node/index.js";
import { VitePWA } from "file:///Users/ebrahim/Projects/PhoneNumberChecker/Client/node_modules/vite-plugin-pwa/dist/index.mjs";
import react from "file:///Users/ebrahim/Projects/PhoneNumberChecker/Client/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      strategies: "injectManifest",
      srcDir: "src",
      filename: "sw.js",
      devOptions: {
        enabled: true
      },
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        short_name: "Num Valid",
        name: "Number Validator",
        lang: "en",
        start_url: "/",
        background_color: "#00aae7",
        theme_color: "#00aae7",
        dir: "ltr",
        display: "standalone",
        orientation: "portrait",
        icons: [
          {
            src: "/icons/maskable_icon.png",
            sizes: "196x196",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "/icons/android-chrome-512x512",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/icons/android-icon-192x192-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "192x192"
          },
          {
            src: "/icons/apple-icon-180x180-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "192x192"
          },
          {
            src: "/icons/apple-icon-152x152-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "152x152"
          },
          {
            src: "/icons/apple-icon-144x144-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "144x144"
          },
          {
            src: "/icons/apple-icon-120x120-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "120x120"
          },
          {
            src: "/icons/apple-icon-114x114-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "114x114"
          },
          {
            src: "/icons/favicon-96x96-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "96x96"
          },
          {
            src: "/icons/apple-icon-76x76-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "76x76"
          },
          {
            src: "/icons/apple-icon-72x72-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "72x72"
          },
          {
            src: "/icons/apple-icon-60x60-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "60x60"
          },
          {
            src: "/icons/apple-icon-57x57-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "57x57"
          },
          {
            src: "/icons/favicon-32x32-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "32x32"
          },
          {
            src: "/icons/favicon-16x16-seochecker-manifest-8825.png",
            type: "image/png",
            sizes: "16x16"
          }
        ],
        prefer_related_applications: false
      }
    })
  ],
  server: {
    cors: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZWJyYWhpbS9Qcm9qZWN0cy9QaG9uZU51bWJlckNoZWNrZXIvQ2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZWJyYWhpbS9Qcm9qZWN0cy9QaG9uZU51bWJlckNoZWNrZXIvQ2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9lYnJhaGltL1Byb2plY3RzL1Bob25lTnVtYmVyQ2hlY2tlci9DbGllbnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIjtcblxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgVml0ZVBXQSh7XG4gICAgICBzdHJhdGVnaWVzOiBcImluamVjdE1hbmlmZXN0XCIsXG4gICAgICBzcmNEaXI6IFwic3JjXCIsXG4gICAgICBmaWxlbmFtZTogXCJzdy5qc1wiLFxuICAgICAgZGV2T3B0aW9uczoge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGVBc3NldHM6IFtcImZhdmljb24uaWNvXCIsIFwiYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiwgXCJtYXNrZWQtaWNvbi5zdmdcIl0sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBzaG9ydF9uYW1lOiBcIk51bSBWYWxpZFwiLFxuICAgICAgICBuYW1lOiBcIk51bWJlciBWYWxpZGF0b3JcIixcbiAgICAgICAgbGFuZzogXCJlblwiLFxuICAgICAgICBzdGFydF91cmw6IFwiL1wiLFxuICAgICAgICBiYWNrZ3JvdW5kX2NvbG9yOiBcIiMwMGFhZTdcIixcbiAgICAgICAgdGhlbWVfY29sb3I6IFwiIzAwYWFlN1wiLFxuICAgICAgICBkaXI6IFwibHRyXCIsXG4gICAgICAgIGRpc3BsYXk6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiLFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvaWNvbnMvbWFza2FibGVfaWNvbi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjE5NngxOTZcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2ljb25zL2FuZHJvaWQtY2hyb21lLTUxMng1MTJcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2ljb25zL2FuZHJvaWQtaWNvbi0xOTJ4MTkyLXNlb2NoZWNrZXItbWFuaWZlc3QtODgyNS5wbmdcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2ljb25zL2FwcGxlLWljb24tMTgweDE4MC1zZW9jaGVja2VyLW1hbmlmZXN0LTg4MjUucG5nXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIi9pY29ucy9hcHBsZS1pY29uLTE1MngxNTItc2VvY2hlY2tlci1tYW5pZmVzdC04ODI1LnBuZ1wiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjE1MngxNTJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvaWNvbnMvYXBwbGUtaWNvbi0xNDR4MTQ0LXNlb2NoZWNrZXItbWFuaWZlc3QtODgyNS5wbmdcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIxNDR4MTQ0XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2ljb25zL2FwcGxlLWljb24tMTIweDEyMC1zZW9jaGVja2VyLW1hbmlmZXN0LTg4MjUucG5nXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTIweDEyMFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIi9pY29ucy9hcHBsZS1pY29uLTExNHgxMTQtc2VvY2hlY2tlci1tYW5pZmVzdC04ODI1LnBuZ1wiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjExNHgxMTRcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvaWNvbnMvZmF2aWNvbi05Nng5Ni1zZW9jaGVja2VyLW1hbmlmZXN0LTg4MjUucG5nXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiOTZ4OTZcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvaWNvbnMvYXBwbGUtaWNvbi03Nng3Ni1zZW9jaGVja2VyLW1hbmlmZXN0LTg4MjUucG5nXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNzZ4NzZcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvaWNvbnMvYXBwbGUtaWNvbi03Mng3Mi1zZW9jaGVja2VyLW1hbmlmZXN0LTg4MjUucG5nXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNzJ4NzJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvaWNvbnMvYXBwbGUtaWNvbi02MHg2MC1zZW9jaGVja2VyLW1hbmlmZXN0LTg4MjUucG5nXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNjB4NjBcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvaWNvbnMvYXBwbGUtaWNvbi01N3g1Ny1zZW9jaGVja2VyLW1hbmlmZXN0LTg4MjUucG5nXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNTd4NTdcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvaWNvbnMvZmF2aWNvbi0zMngzMi1zZW9jaGVja2VyLW1hbmlmZXN0LTg4MjUucG5nXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMzJ4MzJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvaWNvbnMvZmF2aWNvbi0xNngxNi1zZW9jaGVja2VyLW1hbmlmZXN0LTg4MjUucG5nXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTZ4MTZcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBwcmVmZXJfcmVsYXRlZF9hcHBsaWNhdGlvbnM6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgc2VydmVyOiB7XG4gICAgY29yczogZmFsc2UsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVUsU0FBUyxvQkFBb0I7QUFDbFcsU0FBUyxlQUFlO0FBRXhCLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixZQUFZO0FBQUEsUUFDVixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsZUFBZSxDQUFDLGVBQWUsd0JBQXdCLGlCQUFpQjtBQUFBLE1BQ3hFLFVBQVU7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLGtCQUFrQjtBQUFBLFFBQ2xCLGFBQWE7QUFBQSxRQUNiLEtBQUs7QUFBQSxRQUNMLFNBQVM7QUFBQSxRQUNULGFBQWE7QUFBQSxRQUNiLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBQUEsUUFDQSw2QkFBNkI7QUFBQSxNQUMvQjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
