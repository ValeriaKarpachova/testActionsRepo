const eslint = require('@eslint/js');

module.exports = [
  {
    files: ['**/*.js'],
    ignores: ['node_modules/**'],
    ...eslint.configs.recommended,
    languageOptions: {
      globals: {
        test: 'readonly',
        expect: 'readonly'
      }
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': 'warn'
    }
  }
];