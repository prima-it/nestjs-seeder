module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: "module"
  },
  plugins: [
    '@typescript-eslint',
    'simple-import-sort'
  ],
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.cjs', 'package-lock.json', '*.d.ts', 'tsconfig*'],
  rules: {
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_+$",
        varsIgnorePattern: "^_+$",
        caughtErrorsIgnorePattern: "^_+$"
      }
    ]
  },
  overrides: [
    {
      plugins: [
        'json-files'
      ],
      files: [
        'package.json'
      ],
      parser: 'esprima',
      rules: {
        'json-files/sort-package-json': 'error',
        'json-files/ensure-repository-directory': 'error',
        'json-files/eol-last': 'error',
        'json-files/require-license': 'error',
        'json-files/require-unique-dependency-names': 'error',
        'json-files/restrict-ranges': [
          'error',
          {
            versionHint: 'caret'
          }
        ]
      }
    }
  ]
}