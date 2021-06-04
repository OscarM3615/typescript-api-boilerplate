# Typescript API boilerplate

Typescript API boilerplate is a back-end template for building REST APIs using
Typescript and Nodejs.

## Quickstart

- Clone the git repo — `git clone
https://github.com/OscarM3615/typescript-api-boilerplate`.

- (Optional) Reset git commit history by creating a new repository:

```shell
rm -rf .git
git init
```

- Install dependencies with `npm` or `yarn`:

```shell
yarn install
```

- Run a development server using Typescript with live reload:

```shell
yarn run dev
```

- Build and run a production version:

```shell
yarn run build
yarn run start
```

## Features

- A finely-tuned starter template with a simple directory structure.
- An example code, including route, model and controller.
- A basic Typescript configuration with strict type checking.
- Includes:
  - `bcrypt` ready to use for password encryption in authentication.
  - `cors` to allow the REST API being used from external domains.
  - `dotenv` to read environment variables from `.env` file.
  - `express` as the rest framework.
  - `mongoose` as the ODM library.
  - `morgan` to display requests in the terminal.
