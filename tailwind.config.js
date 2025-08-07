/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sidebar-desktop": "url('./images/bg-sidebar-desktop.svg')",
        "sidebar-mobile": "url('./images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
