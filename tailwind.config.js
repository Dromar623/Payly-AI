/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#38a9f7',
          500: '#0e8ce9',
          600: '#026fc7',
          700: '#0358a1',
          800: '#074c84',
          900: '#0c406e',
          950: '#082849',
        },
        electric: {
          blue: '#00e5ff',
          indigo: '#6366f1',
          violet: '#8b5cf6',
          purple: '#a855f7',
          emerald: '#10b981',
          rose: '#f43f5e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { opacity: 0.4, transform: 'scale(1)' },
          '100%': { opacity: 0.8, transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
