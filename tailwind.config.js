/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Staatliches', 'cursive'],
        body: ['Sora', 'sans-serif'],
      },
      colors: {
        transit: {
          '950': '#060a14',
          '900': '#0d1321',
          '800': '#182035',
          '700': '#243050',
          'cyan': '#22d3ee',
          'amber': '#f59e0b',
          'magenta': '#d946ef',
        }
      },
      spacing: {
        '104': '33rem',
      },
      animation: {
        'route-draw': 'routeDraw 2.5s ease forwards',
        'node-pulse': 'nodePulse 2s ease-in-out infinite',
        'glow-cyan': 'glowCyan 3s ease-in-out infinite alternate',
        'glow-amber': 'glowAmber 3s ease-in-out infinite alternate',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'grid-scroll': 'gridScroll 20s linear infinite',
      },
      keyframes: {
        routeDraw: {
          '0%': { strokeDashoffset: '2000' },
          '100%': { strokeDashoffset: '0' },
        },
        nodePulse: {
          '0%, 100%': { r: '5', opacity: '1' },
          '50%': { r: '9', opacity: '0.6' },
        },
        glowCyan: {
          '0%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.2), 0 0 40px rgba(34, 211, 238, 0.1)' },
          '100%': { boxShadow: '0 0 30px rgba(34, 211, 238, 0.4), 0 0 60px rgba(34, 211, 238, 0.2)' },
        },
        glowAmber: {
          '0%': { boxShadow: '0 0 15px rgba(245, 158, 11, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(245, 158, 11, 0.4)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        gridScroll: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' },
        },
      },
    },
  },
  plugins: [],
}
