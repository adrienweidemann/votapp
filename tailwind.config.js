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
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        950: "#450a0a"
      },
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
        100: "#e9ecf5",
        200: "#ced7e9",
        300: "#a2b5d7",
        400: "#708ec0",
        500: "#4e70a9",
        600: "#3b588e",
        700: "#314773",
        800: "#2c3d60",
        900: "#293551",
        950: "#1b2236"
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
