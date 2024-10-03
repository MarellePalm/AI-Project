/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        containerBlue: "#DBEAFE",
        onContainerBlue: "#2F5AD9",
        containerGreen: "#DCFCE7",
        onContainerGreen: "#3B9284",
        containerYellow: "#FEF9C3",
        onContainerYellow: "#b1af76",
        containerPurple: "#F3E8FF",
        onContainerPurple: "#BB5AD6"
      }
    },
  },
  plugins: [],
}

