module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "light-primary": "#ffe7a5",
      },
    },
  },

  daisyui: {
    themes: [
      {
        azo: {
          "primary": "#FFBA00",
          "secondary": "#1d233a",
          "accent": "#1d233a",
          "neutral": "#c5f617",
          "base-100": "#FFFFFF",
          "info": "#4a4f61",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  
  plugins: [
    require('daisyui'),
  ],
} 
