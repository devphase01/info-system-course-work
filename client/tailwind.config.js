/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'gray': '0px 4px 20px 0px rgba(0, 0, 0, 0.15)',
      },
    },
    colors: {
      'stale-blue': '#7777E6',
      'anti-flash': '#F4F4F3FF',
      'dark-liver': '#4F4F4FFF',
      'black': '#000000',
      'white': '#FFFFFF'
    },
    fontFamily: { 
      'roboto-400': ['Roboto Regular', 'sans-serif'],
      'roboto-500': ['Roboto Medium', 'sans-serif'],
      'roboto-600': ['Roboto SemiBold', 'sans-serif']
    },
  },
  plugins: [],
}

