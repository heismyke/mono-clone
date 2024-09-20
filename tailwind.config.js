/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        suse: ["SUSE", "sans-serif"],
        DMsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
