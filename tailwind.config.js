/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#3abff8",
          
          "secondary": "#828df8",
                   
          "accent": "#f471b5",
                   
          "neutral": "#1d283a",
                   
          "base-100": "#0f1729",
                   
          "info": "#0ca6e9",
                   
          "success": "#2bd4bd",
                   
          "warning": "#f4c152",
                   
          "error": "#fb6f84",
        },
      },
    ],
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',],
  
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
}
