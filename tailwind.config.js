// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Add your source files!
    "./node_modules/@heroui/theme/dist/components/navbar.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b2f75",
        secondary: "#00adef",
        tertiary: "#6a7b8a",
        dark: "#0c2c3d",
      },
    },
  },
  darkMode: "class",
};
