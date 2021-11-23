import { defineConfig } from "vite";
import { pythonPlugin } from "./vite/plugin"

if (import.meta.hot) {
    // HMR code
    console.log("HMR code");
}


export default defineConfig({
    plugins: [pythonPlugin()]
})