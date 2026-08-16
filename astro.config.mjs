// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Unifont",
      cssVariable: "--font-unifont",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Unifont.otf"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.fontsource(),
      name: "Special Elite",
      cssVariable: "--font-special-elite",
    },
  ],
});
