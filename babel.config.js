module.exports = (api) => {
  // This caches the Babel config
  api.cache.using(() => process.env.NODE_ENV);

  const isDevelopment = !(api.env("production") || api.env("test"));

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: ["last 2 versions", "not dead", "not < 2%"],
          useBuiltIns: "entry",
          corejs: 3,
        },
      ],
      // Enable development transform of React with new automatic runtime
      [
        "@babel/preset-react",
        { development: isDevelopment, runtime: "automatic" },
      ],
    ],
    // Applies the react-refresh Babel plugin on non-production modes only
    ...(isDevelopment && { plugins: ["react-refresh/babel"] }),
  };
};
