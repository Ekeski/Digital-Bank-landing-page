module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "db-primary-dark": "#2D314D",
        "db-primary-light": "#9698A6",
        "db-accent-cyan": "#2AB7CA",
        "db-accent-lime": "#30D5C8",
        "db-gradient-start": "#31D35C",
        "db-gradient-end": "#2BB7DA",
        "db-very-light-gray": "#FAFAFA",
        "db-grayish-blue": "#F4F5F7",
        "db-cta-gradient":  "linear-gradient(to right, var(--tw-color-db-gradient-start), var(--tw-color-db-gradient-end))",
      },
      fontFamily: {
        // Assuming a clean, modern sans-serif, let's use a standard stack
        sans: ["Public Sans", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "hero-desktop": "url('./images/bg-intro-desktop.svg')",
        "hero-mobile": "url('./images/bg-intro-mobile.svg')",
       
         
      },
      spacing: {
        "hero-clip": "50%", // For the specific image alignment
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
