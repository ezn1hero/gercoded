/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"VCR OSD Mono"', 'monospace'],
        'mono': ['"VCR OSD Mono"', 'monospace'],
      },
      colors: {
        'primary': '#6B21A8', // A purple color similar to wellcoded.eu
        'surface': '#111111',
        'border': '#222222',
        'muted': '#a1a1aa',
      },
    },
  },
  plugins: [],
}
