import { defineConfig } from "vite";
import dns from "dns";
import { viteSingleFile } from "vite-plugin-singlefile";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  plugins: [viteSingleFile()],
  server: {
    port: 3000,
  },
});
