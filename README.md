# University of Guelph Components Monorepo

## Getting Started

To get started with developing in this repository, you will need to have npm installed on your machine. If you don't have npm installed, you can download it from [here](https://www.npmjs.com/get-npm).

Once you have npm installed, follow these steps:

1. Initialize the project by running the following command:

```sh
npm run init
```

2. Install the necessary dependencies by running:

```sh
npm install
```

You are now ready to start developing!

## Structure of the Monorepo

This monorepo is managed using [Lerna](https://lerna.js.org/), a tool that optimizes the workflow around managing multi-package repositories with git and npm.

### Packages

The monorepo contains the following packages:

1. **packages/react-components**: This package is a collection of React components that follow the University of Guelph Brand Guidelines

1. **packages/web-components**: This package is a collection of framework agnostic native web components that follow the University of Guelph Brand Guidelines. These components are developed using Svelte.

1. **packages/tailwind-theme**: This package provides a common tailwind v4 config file, it is used internally in both the web-components and react-components packages but is also accessible as its own npm package.

1. **packages/storybook**: This directory contains the code for our Storybook documentation. It acts as the documentation for all the other packages in the repo.

For more detailed explanation of each package, read their corresponding README and Development Guide files.
