const config = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano:
      process.env.NODE_ENV === "production" ? { preset: "default" } : false,
  },
};

export default config;
