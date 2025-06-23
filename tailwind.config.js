/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1', // 인디고 계열
        secondary: '#f59e0b', // 앰버 계열
      },
      fontFamily: {
        pretendard: ['Pretendard', 'system-ui', 'sans-serif'],
        kkokkhgae: ['kkokghae', 'cursive'],
      },
    },
  },
  plugins: [],
};
