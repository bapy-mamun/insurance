const { resolve } = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended', // eslint recommended rule settings
    'plugin:@typescript-eslint/recommended', // Recommended rule settings for typescript-eslint
    'prettier', // Turn off the conflict rule with Prettier (must be on the last line to override other settings)
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: resolve(__dirname, './tsconfig.json'),
  },
  plugins: [
    'import',
    'simple-import-sort',
    'simple-import-sort', // Automatic alignment of import statements.
    'unused-imports', // Remove unused import statements
  ],
  rules: {
    // ESLint default rules
    complexity: [0, 5],
    'consistent-return': 2,
    'default-case': 2,
    'eol-last': 2,
    'new-parens': 2,
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-console': 2,
    'no-debugger': 0,
    'no-dupe-class-members': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-use-before-define': 2,
    'no-unused-vars': 'off', // disable default eslint unused variable
    // Override our default settings just for this directory
    strict: 'off',
    eqeqeq: ['error', 'always'],
    'react/no-unknown-property': 0,
    'react/jsx-uses-react': 0, // ignore validation must include react scope in jsx/tsx
    'react/react-in-jsx-scope': 0, // ignore validation must include react scope in jsx/tsx
    'simple-import-sort/imports': 'error', // Set sort rules for import
    'simple-import-sort/exports': 'error', // Set sort rules for export
    'import/first': 'error', // Ensure all imports are at the top of the file
    'import/newline-after-import': 'error', // Make sure there is a line break after import
    'import/no-duplicates': 'error', // Merge imports of the same file
    'unused-imports/no-unused-imports': 'error', // Remove unused import statements
    ignoreTranspilerName: 0,
  },
};
