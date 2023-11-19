import type { Config } from "tailwindcss"
import { shadcnPreset } from "./src/lib/shadcn-preset"

const config = {
  presets: [shadcnPreset],
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ]
} satisfies Config

export default config
