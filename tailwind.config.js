/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"JIT",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maincolor:"#5cb4c9",
        darkmain:"#3d777e",
        greenishdark:"#4d6390",
        pitchdark:"#22314d",
      },
    },
  },
  plugins: [require('flowbite/plugin')]
};
