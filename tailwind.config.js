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

      screens: {
        '2xl': '1536px',
      },
      spacing: {
        'content-padding': '16px', 
      },
      maxWidth: {
        screen: '100vw', 
      },
    },
  },
  plugins: [],
};
