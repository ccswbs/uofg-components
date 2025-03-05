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

## Publishing

To publish the packages in this monorepo, we use [Lerna](https://lerna.js.org/) to manage the versioning and publishing process. 
Lerna allows us to publish all the packages in the monorepo with a single command.

### Prerequisites

1. Ensure you have an NPM account with access to the uoguelph organization and are logged in. You can log in by running:

```sh
npm login
```
### Publishing Steps

1. Run the following command to publish all the packages in the monorepo (Lerna will automatically determine which packages have changed and need to be published):

```sh
lerna publish --pre-dist-tag rc
```

2. Follow the prompts to select the version number for each package. You should read the [Semantic Versioning](https://semver.org/) documentation to understand how to select the correct version number. Remember any pre-release version should be suffixed with `-rc` (e.g. `1.0.0-rc.0`).

3. Thats it! The packages should have been published to the NPM registry. You can verify by checking the NPM website for each package.