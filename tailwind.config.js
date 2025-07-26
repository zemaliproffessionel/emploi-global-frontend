/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#1E3A8A', // Un bleu marine professionnel
        'brand-orange': '#F97316', // Un orange vibrant
        'brand-gray': {
          light: '#F3F4F6', // Gris clair pour les fonds
          DEFAULT: '#6B7280', // Gris moyen pour le texte
          dark: '#1F2937',   // Gris foncé pour les titres
        },
      },
    },
  },
  plugins: [],
}
