# Nx Angular Starter

Nx workspace with Angular application template with extra features.

## Nx Version

15.0.8

## Angular Version

14.2.0

## ✨ Features

✅ Nx

✅ SCSS Support

✅ PWA (progressive web app)

✅ Angular Universal (SSR)

✅ Jest (unit testing)

✅ Cypress (E2E testing)

✅ ESLint

✅ Prettier (format code style)

✅ Husky (git hooks)

✅ Commitizen

## 🎯 Prerequisites

- Node.js (>= 16 required)
- npm package manager (>= 8 required)

## 🎢 Getting Started

- Replace all `nx-angular-starter` and `nxAngularStarter` keyword from this project with your new project name, for example: `my-website` and `myWebsite`
- Replace `apps/nx-angular-starter/src/favicon.ico` with your website favicon
- Replace `apps/nx-angular-starter/src/assets/icons` with your website icons
- Update this `README.md` file according to your project changes
- If you are using monorepo multi-package repository consider removing `husky` (git hooks) npm package to prevent conflicts between repos, I recommended deleting `.husky` directory, remove npm `prepare` script and run: `npm uninstall husky` and then maybe to add `husky` in the root of the project

## 🕹 Commands

Serve project in development mode.

```bash
npm start
```

Serve project in SSR mode.

```bash
npm start:ssr
```

Build project for production.

```bash
npm run build
```

Build project for production with Angular Universal (SSR).

```bash
npm run build:ssr
```

Build project for production with Prerender.

```bash
npm run prerender
```

Test project.

```bash
npm test
```

Lint project.

```bash
npm run lint
```

Run e2e tests.

```shell
npm run e2e
```

Run commitizen.

```bash
npm run cz
```
