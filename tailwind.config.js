/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1E3A5F',      // Color principal (navbar, botones)
          navyDark: '#16324F',  // Hover
          red: '#C23B22',       // CTA secundario
          light: '#F5F7FA',     // Fondos suaves
          text: '#111827',      // Texto principal
          muted: '#6B7280',     // Texto secundario
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
