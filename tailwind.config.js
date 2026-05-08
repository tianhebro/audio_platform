/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#071528',
        ink: '#102033',
        brand: {
          50: '#eef7ff',
          100: '#d9edff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        violet: '#7c3aed',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(59, 130, 246, 0.24)',
        card: '0 18px 60px rgba(15, 23, 42, 0.10)',
      },
      backgroundImage: {
        'aurora': 'radial-gradient(circle at 20% 20%, rgba(59,130,246,.28), transparent 32%), radial-gradient(circle at 78% 12%, rgba(124,58,237,.22), transparent 30%), linear-gradient(135deg, #071528 0%, #0f2745 48%, #14213d 100%)',
      },
    },
  },
  plugins: [],
};
