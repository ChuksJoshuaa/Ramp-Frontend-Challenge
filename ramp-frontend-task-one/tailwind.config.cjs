module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        maxWidth: {
          DEFAULT: "600px",
          sm: "400px",
          lg: "650px",
          xl: "750px",
        },
      },
    },
  },
  plugins: [],
};
