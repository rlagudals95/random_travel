// @ts-check

/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: [
    // "The Next.js plugin was not detected in your ESLint configuration" 에러를
    // 피하기 위해 `eslint-plugin-next`를 `extends`에 추가한다.
    'plugin:@next/next/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts'],
      plugins: [
        '@typescript-eslint',
        'deprecation',
        'prettier',
        'unicorn',
        'unused-imports',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/typescript',
        'plugin:import/recommended',
        'plugin:@next/next/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
      ],
      settings: {
        react: {
          version: 'detect',
        },
        'import/resolver': {
          webpack: {},
          typescript: {},
        },
      },
      rules: {
        // eslint (https://eslint.org/docs/latest/rules/)
        'require-await': 'off', // `@typescript-eslint/require-await`와 중복되므로 비활성화한다.
        'no-prototype-builtins': 'warn',
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'no-duplicate-imports': 'off', // `import/no-duplicates`와 중복되므로 비활성화한다.
        'no-unused-vars': 'off', // `unused-imports/no-unused-vars`와 중복되므로 비활성화한다.
        'no-unsafe-optional-chaining': 'warn',
        'no-empty': ['error', { allowEmptyCatch: true }],

        // eslint-plugin-import (https://github.com/import-js/eslint-plugin-import#rules)
        'import/default': ['error'],
        'import/no-duplicates': [
          'error',
          { 'prefer-inline': true, considerQueryString: true },
        ],
        'import/no-named-as-default-member': ['warn'],
        'import/no-named-as-default': ['warn'],
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              ['parent', 'sibling', 'index'],
              'type',
              'unknown',
            ],
            pathGroups: [
              {
                pattern: '{react,react-dom,next,next/**}',
                group: 'builtin',
                position: 'before',
              },
              {
                pattern: '{**/*.css,**/*.scss}',
                group: 'unknown',
              },
            ],
            pathGroupsExcludedImportTypes: ['react', 'react-dom', 'next'],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
            'newlines-between': 'always',
          },
        ],

        // eslint-plugin-react (https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules)
        // eslint-plugin-react-hooks (https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
        'react/no-unescaped-entities': ['error', { forbid: ['>'] }],
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-curly-brace-presence': [
          'error',
          { props: 'never', children: 'never' },
        ],
        'react/no-unknown-property': ['error', { ignore: ['css'] }], // emotion css props

        // eslint-plugin-jsx-a11y (https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main#supported-rules)
        'jsx-a11y/alt-text': 'warn',
        'jsx-a11y/anchor-is-valid': 'warn',
        'jsx-a11y/anchor-has-content': 'warn',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/label-has-associated-control': 'warn',
        'jsx-a11y/no-autofocus': 'warn',
        'jsx-a11y/no-static-element-interactions': 'warn',
        'jsx-a11y/no-noninteractive-element-interactions': 'warn',

        // eslint-plugin-unicorn (https://github.com/sindresorhus/eslint-plugin-unicorn#rules)
        'unicorn/better-regex': 'error',
        'unicorn/no-useless-fallback-in-spread': 'error',
        'unicorn/no-useless-length-check': 'error',
        'unicorn/no-useless-promise-resolve-reject': 'error',
        'unicorn/no-useless-spread': 'error',

        // eslint-plugin-next (https://nextjs.org/docs/pages/building-your-application/configuring/eslint#eslint-plugin)
        '@next/next/no-img-element': 'off',
        '@next/next/no-html-link-for-pages': 'off',

        // eslint-plugin-unused-imports (https://github.com/sweepline/eslint-plugin-unused-imports)
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          { argsIgnorePattern: '^_', ignoreRestSiblings: true },
        ],

        // eslint-plugin-prettier (https://github.com/prettier/eslint-plugin-prettier)
        'prettier/prettier': 'error',

        // @typescript-eslint/eslint-plugin (https://typescript-eslint.io/rules/)
        '@typescript-eslint/ban-tslint-comment': ['error'],
        '@typescript-eslint/ban-ts-comment': [
          'warn',
          {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': true,
            'ts-nocheck': true,
            'ts-check': false,
          },
        ],
        '@typescript-eslint/no-explicit-any': [
          'warn',
          { ignoreRestArgs: false },
        ],
        '@typescript-eslint/no-empty-function': [
          'warn',
          { allow: ['private-constructors'] },
        ],
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        '@typescript-eslint/no-unsafe-argument': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unused-vars': 'off', // `unused-imports/no-unused-vars`와 중복되므로 비활성화한다.
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-floating-promises': [
          'warn',
          { ignoreVoid: true },
        ],
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/restrict-template-expressions': 'warn',
        '@typescript-eslint/restrict-plus-operands': 'warn',
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface',
        ],
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
        ],
        '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

        // 함수 중첩 깊이 제한
        'max-depth': ['warn', 3],
        // 함수 인자 개수 제한
        'max-params': ['warn', 3],
        // 중첩 콜백 제한
        'max-nested-callbacks': ['warn', 3],
        // 중첩된 삼항 연산자 방지
        'no-nested-ternary': 'warn',
      },
    },
    {
      files: ['*.mjs'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    {
      files: ['*.js', '*.cjs'],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  ],
};

module.exports = config;
  