import animate from 'tailwindcss-animate'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],

  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}'
  ],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      boxShadow: {
        modalSent: '0px 3px 20px 0px rgba(78, 90, 132, 0.4)'
      },
      colors: {
        border: '#C1CBD7',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        main: '#19191A',
        label: '#323334',
        error: '#B91A1A',
        normal: '#798FB0',
        mainBlue: '#3876C1',
        mainBlueHovered: '#2B5F9E',
        background: '#F8FBFF',
        placeholder: '#96a1bd',
        footer: '#2C3542',
        infos: '#F5FAFF',
        date: '#B0B2B5',
        stateChecked: '#E4EEFC',
        highlighted: '#F6F6F6',
        logo: '#004F25',
        bannerText: '#636569',
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' }
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out'
      },
      backgroundImage: {
        bg: `url('@/assets/images/bg.png')`
      }
    },
    fontFamily: {
      sans: ['Arial', 'sans-serif']
    },
    screens: {
      ...defaultTheme.screens,
      screen320: { min: '320px' },
      screen390: { min: '390px' },
      screen430: { min: '430px' },
      screen1024: { min: '1024px' },
      screen1200: { min: '1200px' },
      screen1440: { min: '1440px' },
      screen1920: { min: '1920px' },
      screen2048: { min: '2048px' }
    }
  },
  plugins: [animate]
}
