/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      gray: {
        50: "#f4f6f7",
        100: "#e2e6eb",
        200: "#c8cfd9",
        300: "#a2adbe",
        400: "#8492a6",
        500: "#5a6a80",
        600: "#4d586d",
        700: "#434b5b",
        800: "#3c424e",
        900: "#353944",
        950: "#20232c"
      },
      white: "#ffffff",
      primary: {
        50: "#f4f6fb",
        100: "#e7edf7",
        200: "#cbd9ec",
        300: "#9db9dc",
        400: "#6894c8",
        500: "#4170a9",
        600: "#335c96",
        700: "#2a4b7a",
        800: "#264166",
        900: "#243856",
        950: "#182439"
      },
      secondary: {
        50: "#fff9eb",
        100: "#ffeec6",
        200: "#ffdb88",
        300: "#ffbc39",
        400: "#ffaa20",
        500: "#f98607",
        600: "#dd6002",
        700: "#b74106",
        800: "#94310c",
        900: "#7a2a0d",
        950: "#461302"
      }
    },
    fontFamily: {
      sans: ["OpenSans", "Arial", "sans-serif"]
    }
  },
  plugins: []
};
