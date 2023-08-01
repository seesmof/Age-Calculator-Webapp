/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f5f5f5",
        text: "#333",
        primaryLight: "#e3f2fd",
        primary: "#90caf9",
        primaryDark: "#42a5f5",
        secondaryLight: "#f3e5f5",
        secondary: "#ce93d8",
        secondaryDark: "#ab47bc",
        errorLight: "#e57373",
        error: "#f44336",
        errorDark: "#d32f2f",
        warningLight: "#ffb74d",
        warning: "#ffa726",
        warningDark: "#f57c00",
        infoLight: "#4fc3f7",
        info: "#29b6f6",
        infoDark: "#0288d1",
        successLight: "#81c784",
        success: "#66bb6a",
        successDark: "#388e3c",
      },
    },
  },
  plugins: [],
};
