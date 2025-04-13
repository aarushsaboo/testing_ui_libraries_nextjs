npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react

npm install -D @shadcn/ui

npx shadcn-ui@latest init

npm install -D daisyui


# now to configure tailwind to use both the libraries

npx shadcn-ui@latest add button

# then modify tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "valentine"],
  },
}

