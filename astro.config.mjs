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
      title: "Happify Wishlist Documentation",
      logo: {
        src: './src/assets/happify-logo.svg',
        replacesTitle: true
      },
      
      social: [
        { 
          icon: "github", 
          label: "GitHub", 
          href: "https://github.com/happify-dev/wishist" 
        },
        {
          icon: "external",
          label: "Website",
          href: "https://happify.dev"
        }
      ],
      
      customCss: [
        './src/styles/global.css',
      ],
      
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Introduction", slug: "guides/introduction" },
            { label: "Getting Started", slug: "guides/started" },
          ],
        },
        {
          label: "Configuration",
          items: [
            { label: "Dashboard Overview", slug: "guides/overview" },
            { label: "Settings Familiarization", slug: "guides/settings" },
            { label: "Enabling App Embed", slug: "guides/embed" },
          ],
        },
        {
          label: "Features",
          items: [
            { label: "Alert Overview", slug: "guides/alert" },
            { label: "Alert Configuration", slug: "guides/alertconfiguration" },
            { label: "Customization", slug: "guides/customization" },
            { label: "Feature Overview", slug: "guides/feature" },
          ],
        },
      ],
      
      components: {
      },
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
