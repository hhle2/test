/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
      
        },

        move: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(30deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'wavinghand': 'wave 1s linear infinite',
        'moving': 'move 1s alternate',
        
        
      },
      fontFamily: {
        body : ["Lobster", "cursive"],
      },
     
     
    },
  },
  plugins: [],
};

