/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#cde2c1',
          'primary-focus': '#48604f',
          'primary-content': '#272525',

          secondary: '#48604f',
          'secondary-focus': '#f9e1e1',
          'secondary-content': '#cde2c1',

          accent: '#e9e7e7',
          'accent-focus': '#d1cccc',
          'accent-content': '#2a2e37',

          neutral: '#2a2e37',
          'neutral-focus': '#16181d',
          'neutral-content': '#ffffff',

          'base-100': '#23351e',
          'base-200': '#243b1d',
          'base-300': '#1d2c19',
          'base-content': '#cde2c1',

          info: '#66c7ff',
          success: '#87cf3a',
          warning: '#e1d460',
          error: '#ff6b6b',

          '--rounded-box': '1rem',
          '--rounded-btn': '.5rem',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '.25s',
          '--animation-input': '.2s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '.5rem',
          '--border-btn': '1px'
        },
        light: {
          primary: '#5a7c65',
          'primary-focus': '#48604f',
          'primary-content': '#ffffff',

          secondary: '#c3d6b8',
          'secondary-focus': '#cde2c1',
          'secondary-content': '#24321a',

          accent: '#f9e1e1',
          'accent-focus': '#f4bebe',
          'accent-content': '#322020',

          neutral: '#5c5757',
          'neutral-focus': '#272525',
          'neutral-content': '#e9e7e7',

          'base-100': '#e9e7e7',
          'base-200': '#d1cccc',
          'base-300': '#b9b1b1',
          'base-content': '#100f0f',

          info: '#1c92f2',
          success: '#009485',
          warning: '#ff9900',
          error: '#ff5724',

          '--rounded-box': '1rem',
          '--rounded-btn': '.5rem',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '.25s',
          '--animation-input': '.2s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '.5rem',
          '--border-btn': '1px'
        }
      }
    ]
  }
}
