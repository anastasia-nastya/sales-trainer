import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#F0F7FF',
        'custom-blue': '#2563EB',
        'custom-blue-dark': '#1D4ED8',
        'custom-gray': '#6B7280',
        'custom-border': '#E5E7EB',
        'custom-green': '#10B981',
        'custom-amber': '#F59E0B',
        'custom-red': '#EF4444',
        'custom-blue-light': '#EFF6FF',
      },
    },
  },
  plugins: [],
};

export default config;
