/* eslint-disable import/no-anonymous-default-export */
export default function (plop) {
  plop.setGenerator('react-module', {
    description: 'Create a new React module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the module?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../packages/ui/{{dashCase name}}/react/package.json',
        templateFile: './templates/react-module-package.json.hbs',
      },
      {
        type: 'add',
        path: '../packages/ui/{{dashCase name}}/react/tsconfig.json',
        templateFile: './templates/react-module-tsconfig.json.hbs',
      },
      {
        type: 'add',
        path: '../packages/ui/{{dashCase name}}/react/tsconfig.node.json',
        templateFile: './templates/react-module-tsconfig.node.json.hbs',
      },
      {
        type: 'add',
        path: '../packages/ui/{{dashCase name}}/react/vite.config.ts',
        templateFile: './templates/react-module-vite.config.ts.hbs',
      },
      {
        type: 'add',
        path: '../packages/ui/{{dashCase name}}/react/vitest.setup.ts',
        templateFile: './templates/react-module-vitest.setup.ts.hbs',
      },
      {
        type: 'add',
        path: '../packages/ui/{{dashCase name}}/react/postcss.config.mjs',
        templateFile: './templates/react-module-postcss.config.mjs.hbs',
      },
      {
        type: 'add',
        path: '../packages/ui/{{dashCase name}}/react/LICENSE',
        templateFile: './templates/UNLICENSE.hbs',
      },
      {
        type: 'add',
        path: '../packages/ui/{{dashCase name}}/react/.gitignore',
        templateFile: './templates/react-module-gitignore.hbs',
      },
      {
        type: 'add',
        path: '../packages/ui/{{dashCase name}}/react/.eslintrc',
        templateFile: './templates/react-module-eslintrc.hbs',
      },
      {
        type: 'add',
        path: '../packages/ui/{{dashCase name}}/react/src/styles.d.ts',
        templateFile: './templates/react-module-styles.d.ts.hbs',
      },
      {
        type: 'add',
        path: '../packages/ui/{{dashCase name}}/react/src/index.ts',
        templateFile: './templates/react-module-index.ts.hbs',
      },
      {
        type: 'add',
        path: '../packages/ui/{{dashCase name}}/react/src/components/{{dashCase name}}/{{pascalCase name}}.tsx',
        templateFile: './templates/react-functional-component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../packages/ui/{{dashCase name}}/react/src/components/{{dashCase name}}/styles.module.css',
        templateFile: './templates/styles.module.css.hbs',
      },
      {
        type: 'add',
        path: '../packages/ui/{{dashCase name}}/react/src/components/{{dashCase name}}/index.ts',
        templateFile: './templates/react-functional-component-barrel.ts.hbs',
      },
      {
        type: 'add',
        path: '../packages/ui/{{dashCase name}}/react/src/components/{{dashCase name}}/{{dashCase name}}.test.tsx',
        templateFile: './templates/react-functional-component.test.tsx.hbs',
      },
      {
        type: 'add',
        path: '../workshop/src/stories/{{dashCase name}}.stories.tsx',
        templateFile: './templates/react-functional-component.stories.tsx.hbs',
      },
      {
        // append the generated package as dependecy to apps/workshop/package.json
        type: 'append',
        path: '../workshop/package.json',
        pattern: '"dependencies": {',
        template: '"@{{name}}": "*",',
      },
    ],
  })
}
