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
        enabled: false
      },
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        short_name: "Num Valid",
        name: "Number Validator",
        description: "A Number Validator app",
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
            src: "/icons/android-chrome-512x512.png",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZWJyYWhpbS9Qcm9qZWN0cy9QaG9uZU51bWJlckNoZWNrZXIvQ2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZWJyYWhpbS9Qcm9qZWN0cy9QaG9uZU51bWJlckNoZWNrZXIvQ2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9lYnJhaGltL1Byb2plY3RzL1Bob25lTnVtYmVyQ2hlY2tlci9DbGllbnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIjtcblxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgVml0ZVBXQSh7XG4gICAgICBzdHJhdGVnaWVzOiBcImluamVjdE1hbmlmZXN0XCIsXG4gICAgICBzcmNEaXI6IFwic3JjXCIsXG4gICAgICBmaWxlbmFtZTogXCJzdy5qc1wiLFxuICAgICAgZGV2T3B0aW9uczoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbXCJmYXZpY29uLmljb1wiLCBcImFwcGxlLXRvdWNoLWljb24ucG5nXCIsIFwibWFza2VkLWljb24uc3ZnXCJdLFxuICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgc2hvcnRfbmFtZTogXCJOdW0gVmFsaWRcIixcbiAgICAgICAgbmFtZTogXCJOdW1iZXIgVmFsaWRhdG9yXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgTnVtYmVyIFZhbGlkYXRvciBhcHBcIixcbiAgICAgICAgbGFuZzogXCJlblwiLFxuICAgICAgICBzdGFydF91cmw6IFwiL1wiLFxuICAgICAgICBiYWNrZ3JvdW5kX2NvbG9yOiBcIiMwMGFhZTdcIixcbiAgICAgICAgdGhlbWVfY29sb3I6IFwiIzAwYWFlN1wiLFxuICAgICAgICBkaXI6IFwibHRyXCIsXG4gICAgICAgIGRpc3BsYXk6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiLFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvaWNvbnMvbWFza2FibGVfaWNvbi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjE5NngxOTZcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2ljb25zL2FuZHJvaWQtY2hyb21lLTUxMng1MTIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIi9pY29ucy9hbmRyb2lkLWljb24tMTkyeDE5Mi1zZW9jaGVja2VyLW1hbmlmZXN0LTg4MjUucG5nXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIi9pY29ucy9hcHBsZS1pY29uLTE4MHgxODAtc2VvY2hlY2tlci1tYW5pZmVzdC04ODI1LnBuZ1wiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvaWNvbnMvYXBwbGUtaWNvbi0xNTJ4MTUyLXNlb2NoZWNrZXItbWFuaWZlc3QtODgyNS5wbmdcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIxNTJ4MTUyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2ljb25zL2FwcGxlLWljb24tMTQ0eDE0NC1zZW9jaGVja2VyLW1hbmlmZXN0LTg4MjUucG5nXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTQ0eDE0NFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIi9pY29ucy9hcHBsZS1pY29uLTEyMHgxMjAtc2VvY2hlY2tlci1tYW5pZmVzdC04ODI1LnBuZ1wiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjEyMHgxMjBcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvaWNvbnMvYXBwbGUtaWNvbi0xMTR4MTE0LXNlb2NoZWNrZXItbWFuaWZlc3QtODgyNS5wbmdcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIxMTR4MTE0XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2ljb25zL2Zhdmljb24tOTZ4OTYtc2VvY2hlY2tlci1tYW5pZmVzdC04ODI1LnBuZ1wiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjk2eDk2XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2ljb25zL2FwcGxlLWljb24tNzZ4NzYtc2VvY2hlY2tlci1tYW5pZmVzdC04ODI1LnBuZ1wiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjc2eDc2XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2ljb25zL2FwcGxlLWljb24tNzJ4NzItc2VvY2hlY2tlci1tYW5pZmVzdC04ODI1LnBuZ1wiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjcyeDcyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2ljb25zL2FwcGxlLWljb24tNjB4NjAtc2VvY2hlY2tlci1tYW5pZmVzdC04ODI1LnBuZ1wiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjYweDYwXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2ljb25zL2FwcGxlLWljb24tNTd4NTctc2VvY2hlY2tlci1tYW5pZmVzdC04ODI1LnBuZ1wiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjU3eDU3XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2ljb25zL2Zhdmljb24tMzJ4MzItc2VvY2hlY2tlci1tYW5pZmVzdC04ODI1LnBuZ1wiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjMyeDMyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2ljb25zL2Zhdmljb24tMTZ4MTYtc2VvY2hlY2tlci1tYW5pZmVzdC04ODI1LnBuZ1wiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjE2eDE2XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcHJlZmVyX3JlbGF0ZWRfYXBwbGljYXRpb25zOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHNlcnZlcjoge1xuICAgIGNvcnM6IGZhbHNlLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFVLFNBQVMsb0JBQW9CO0FBQ2xXLFNBQVMsZUFBZTtBQUV4QixPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ04sWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsWUFBWTtBQUFBLFFBQ1YsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLGVBQWUsQ0FBQyxlQUFlLHdCQUF3QixpQkFBaUI7QUFBQSxNQUN4RSxVQUFVO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxrQkFBa0I7QUFBQSxRQUNsQixhQUFhO0FBQUEsUUFDYixLQUFLO0FBQUEsUUFDTCxTQUFTO0FBQUEsUUFDVCxhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBLFFBQ0EsNkJBQTZCO0FBQUEsTUFDL0I7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
