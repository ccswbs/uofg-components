# University of Guelph Components Monorepo

## Getting Started

To get started with developing in this repository, you will need to have npm installed on your machine. If you don't have npm installed, you can download it from [here](https://www.npmjs.com/get-npm).

Once you have npm installed, follow these steps:

1. Set the nessessary environment variables

NPMRC_FONTAWESOME_PACKAGE_TOKEN - This is the token used to access the FontAwesome Pro package.
You can get this token from the C&M FontAwesome account or from [Netlify](https://app.netlify.com/sites/uofg-components/configuration/env#environment-variables).

```sh
export NPMRC_FONTAWESOME_PACKAGE_TOKEN="TOKEN VALUE HERE"
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

2. Run a build of all the packages in the monorepo to make sure the packages are ready to be published.

```sh
lerna run build
```

If your build fails, you will need to fix the errors before you can publish the packages.

3. Update any documentation regarding the packages in the monorepo. This includes updating the README files and the Storybook.

### Publishing Steps

1. Run the following command to publish all the packages in the monorepo (Lerna will automatically determine which packages have changed and need to be republished):

```sh
lerna publish --pre-dist-tag rc --no-private --preid rc
```

If for some reason a package is not being published, you can force it to be published by running:

```sh
lerna publish --force-publish <package-name> --pre-dist-tag rc --no-private --preid rc
```

2. Follow the prompts to select the version number for each package. Lerna will give you a chance before publishing to see what the new version numbers for each package will be. You should read the [Semantic Versioning](https://semver.org/) documentation to understand how to select the correct version number. Remember any pre-release version should be suffixed with `-rc` (e.g. `1.0.0-rc.0`).


3. Thats it! The packages should have been published to the NPM registry. You can verify by checking the NPM website for each package.

### Pull Requests and Publishing

We require the use of pull requests for any changes made to the codebase.
When creating a pull request, please ensure that you follow the guidelines outlined in the pull request template.
This includes providing a summary of changes, detailing significant modifications, and including a test plan.

For every pull request, you must publish test versions of the packages using the instructions above.

Once your PR has been reviewed, approved,
and is ready to be merged,
you need to update the version numbers of the packages that were changed so they are their no longer the test versions.
You can do this by running:

```sh
lerna version --no-private --preid rc --force-publish <package-name>
```

You can then merge your PR, switch to the main branch,
pull the changes, and publish the packages using the following command:

```sh
lerna publish from-git --no-private --pre-dist-tag rc
```