/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "var(--primary-1)",
          2: "var(--primary-2)",
        },
        text: {
          1: "var(--text-1)",
          2: "var(--text-2)",
          3: "var(--text-3)",
          buttonCard: "var(--button-card-text)",
        },
        secondary: {
          1: "var(--secondary-1)",
          2: "var(--secondary-2)",
          3: "var(--secondary-3)",
        },
        background: {
          1: "var(--background-1)",
          2: "var(--background-2)",
        },
        button: {
          1: "var(--button-1)",
          2: "var(--button-2)",
        },
        hoverButton: {
          1: "var(--hover-button-1)",
          2: "var(--hover-button-2)",
        },
        logo: "var(--logo-color)",
      },
    },
    fontFamily: {
      'inter': ["Inter", 'sans-serif'],
      'poppins':["Poppins", 'sans-serif'],
    }
  },
  plugins: [],
};
