module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['prettier', '@typescript-eslint'],
  extends: ['standard-with-typescript', 'plugin:prettier/recommended', 'eslint:recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/eslint-recommended',
      ],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: true,
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
};
