/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A85F6',
        secondary: '#3252DF',
        dark: '#152C5B',
        lightBlue: '#EAF1FF',

        gray: {
          100: '#F5F5F5',
          200: '#EFF4FA',
          300: '#C2C2C2',
          400: '#8F9BB3',
          500: '#757575',
          600: '#404040',
          700: '#222B45',
          800: '#0A0A0A',
          light: '#757575',
          medium: '#464E5F',
          border: '#DDDFE1',
          bg: '#F5F5F5',
        },

        blue: {
          500: '#0095FF',
        },

        accent: '#1ABC9C',
        "gray-text": '#B0B0B0',
        "light-gray": '#E5E5E5',
        "footer-text": '#F5F6F8',
        "button-blue": '#003DFC',
        "border-gray": '#D2D2D2',
        "text-gray": '#D2D2D2',
        "red-btn": '#E74C3C',
        "green-btn": '#1ABC9C',
        "step-gray": '#898989',
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },

      fontSize: {
        36: "36px",
        26: "26px",
        20: "20px",
        18: "18px",
        15: "15px",
        14: "14px",
      },

      lineHeight: {
        54: "54px",
        39: "39px",
        30: "30px",
        27: "27px",
        24: "24px",
        "22.5": "22.5px",
        21: "21px",
      },

      spacing: {
        150: "150px",
      },
    },
  },
  plugins: [],
};
