import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react_test_rentalcars/",
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});
