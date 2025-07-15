// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkYoutubeEmbed from "./src/plugins/remarkYoutubeEmbed.js";
import remarkVimeoEmbed from "./src/plugins/remarkVimeoEmbed.js";
import remarkWistiaEmbed from "./src/plugins/remarkWistiaEmbed.js";
import remarkGoogleMapsEmbed from "./src/plugins/remarkGoogleMapsEmbed.js";
import remarkIframeEmbed from "./src/plugins/remarkIframeEmbed.js";
import remarkPdfEmbed from "./src/plugins/remarkPdfEmbed.js";
import remarkGistEmbed from "./src/plugins/remarkGistEmbed.js";
import remarkAscinemaEmbed from "./src/plugins/remarkAscinemaEmbed.js";
import remarkSoundcloudEmbed from "./src/plugins/remarkSoundcloudEmbed.js";

import tailwindcss from "@tailwindcss/vite";
import { file } from "astro/loaders";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: " ",
      logo: {
        src: './src/assets/happify-logo.svg',
      },
      
      // social: [{ icon: "github", label: "GitHub", href: "#" }],
      customCss: [
        // Path to your Tailwind base styles:
        './src/styles/global.css',
      ],
      sidebar: [
        {
          label: "Documentation",
          items: [
            { label: "Introduction", slug: "guides/introduction" },
            { label: "Getting Started", slug: "guides/started" },
            { label: "Dashboard Overview", slug: "guides/overview" },
            { label: "Enabling App Embed", slug: "guides/embed" },
            { label: "Settings Familiarization", slug: "guides/settings" },
            { label: "Alert Overview", slug: "guides/alert" },
            { label: "Alert Configuration", slug: "guides/alertconfiguration" },
            { label: "Customization", slug: "guides/customization" },
            { label: "Feature Overview", slug: "guides/feature" },
          ],
        },
        // {
        // 	label: 'Reference',
        // 	autogenerate: { directory: 'reference' },
        // },
      ],
    }),
  ],

  markdown: {
    remarkPlugins: [
      remarkYoutubeEmbed,
      remarkVimeoEmbed,
      remarkWistiaEmbed,
      remarkGoogleMapsEmbed,
      remarkIframeEmbed,
      remarkPdfEmbed,
      remarkGistEmbed,
      remarkAscinemaEmbed,
      remarkSoundcloudEmbed,
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});