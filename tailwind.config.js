/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat Alternates', 'sans-serif'],
      },
    },
  },
  safelist: [
    'text-blue-500',
    'text-sky-500',
    'text-pink-500',
    'text-blue-700',
    'text-gray-900',
    'text-indigo-600',
  ],
  plugins: [],
};