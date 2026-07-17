import js from '@eslint/js';

export default [
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  // recommended config from @eslint/js for correctness and quality rules
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      // explicit ECMAScript target: latest stable (2026)
      ecmaVersion: 2026,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        Buffer: 'readonly',
        process: 'readonly',
      },
    },
    // Keep formatting to Prettier (do not enable formatting rules here).
    rules: {},
  },
];
