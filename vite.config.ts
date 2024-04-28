import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_APP_CN_KEY": JSON.stringify(env.REACT_APP_CN_KEY),
      "process.env.REACT_APP_RAPID_KEY": JSON.stringify(
        env.REACT_APP_RAPID_KEY
      ),
    },
    plugins: [react()],
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
  };
});
