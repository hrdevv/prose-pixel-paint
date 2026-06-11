import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// Dedicated test config. We intentionally do NOT reuse the app's
// @lovable.dev/vite-tanstack-config (which pulls in the Cloudflare/SSR
// plugins) so unit and e2e-style loader tests run in a lightweight
// jsdom environment.
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    globals: true,
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
});
