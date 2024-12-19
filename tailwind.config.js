module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        'soft-orange': '#ff7e57',
        'light-orange': '#ffb27e',
        'soft-blue': '#5f9bd1',
        'dark-blue': '#003f74',
        'warm-orange': '#ff9966',
        'peachy-orange': '#ffaa80',
        'steel-blue': '#4682b4',
        'deep-ocean-blue': '#004d7a',
        'dark-blue-bg': '#0a1a2b',
      },
      backgroundImage: {
        'secondary-glow': 'conic-gradient(from 10deg at 50% 50%, #ff7e57 0deg, #ffb27e 55deg, #5f9bd1 120deg, #003f74 160deg, transparent 360deg)',
        'third-glow': 'conic-gradient(from 90deg at 50% 50%, #ff9966 0deg, #ffaa80 55deg, #4682b4 120deg, #004d7a 160deg, transparent 360deg)',
      },
      screens: {
        '2xl': '1536px', 
      },
      keyframes: {
        animateBefore: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(200px) scale(0.8)' },
        },
        animateAfter: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-250px) scale(1.2)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        animateBefore: 'animateBefore 7s cubic-bezier(0.47, 0, 0.745, 0.715) infinite',
        animateAfter: 'animateAfter 7s cubic-bezier(0.47, 0, 0.745, 0.715) infinite',
        fadeIn: 'fadeIn 1s ease-in forwards',
      },
    },
  },
  plugins: [],
};
