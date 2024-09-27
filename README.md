# Mantine Vite template

## Features

This template comes with the following features:

- [PostCSS](https://postcss.org/)
  with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/) setup
  with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## npm scripts

## Build and dev scripts

- `dev` – start development server
- `build` – build production version of the app
- `preview` – locally preview production build

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `vitest` – runs vitest tests
- `vitest:watch` – starts vitest watch
- `test` – runs `vitest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier

| Command                                                  | Description                                        |
|----------------------------------------------------------|----------------------------------------------------|
| `yarn install`                                           | Install necessary npm libs                         |
| `yarn run storybook`                                     | Start storybook                                    |
| `yarn run test-storybook`                                | Test storybook                                     |
| `yarn test`                                              | Run all unit test                                  |
| `yarn run coverage`                                      | Run all unit test and generate the coverage report |
| `yarn test -- src/<testfile>`                            | Run a single unit test                             |
| `yarn run dev`                                           | Launch app on localhost server                     |
| `yarn run lint`                                          | Lint the project                                   |
| `yarn run lint:fix`                                      | Fix the project's ES Lint                          |
| `npx generate-react-cli component XxxYyyZzz`             | Generate a react component.                        |
| `npx generate-react-cli component --type=util XxxYyyZzz` | Generate a react util.                             |
