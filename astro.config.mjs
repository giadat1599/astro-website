import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import compress from "astro-compress";


export default defineConfig({
  integrations: [
    tailwind(), 
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }), 
    compress({
      img: false
    })]
});