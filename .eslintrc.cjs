module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  ignorePatterns: [
    'dist',
    '*.d.ts',
    '*.js',
    '*.cjs',
    'vite.config.ts',
    'types.ts'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-misused-promises': 0,
    'multiline-ternary': 0,
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false
        }
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
