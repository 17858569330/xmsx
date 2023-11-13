module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: '> 0.25%, not dead',
        modules: false,
        loose: true,
      },
    ],
    '@babel/typescript',
  ],
};
