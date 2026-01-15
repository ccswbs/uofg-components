# University of Guelph Components Monorepo

## Getting Started

To get started with developing in this repository, you will need to have npm installed on your machine. If you don't have npm installed, you can download it from [here](https://www.npmjs.com/get-npm).

Once you have npm installed, follow these steps:

1. Set the necessary environment variables

NPMRC_FONTAWESOME_PACKAGE_TOKEN - This is the token used to access the FontAwesome Pro package.
You can get this token from the C&M FontAwesome account or from [Netlify](https://app.netlify.com/sites/uofg-components/configuration/env#environment-variables).

```sh
export NPMRC_FONTAWESOME_PACKAGE_TOKEN="TOKEN VALUE HERE"
```


Install the necessary dependencies by running:
``` sh
npm install
```

You are now ready to start developing!

## Structure of the Monorepo

This monorepo is managed using Turborepo, a high-performance build system, and Changesets for versioning and publishing.

The monorepo contains the following packages:

- packages/react-components: This package is a collection of React components that follow the University of Guelph Brand Guidelines
- packages/web-components: This package is a collection of framework agnostic native web components that follow the University of Guelph Brand Guidelines. These components are developed using Svelte.
- packages/tailwind-theme: This package provides a common tailwind v4 config file, it is used internally in both the web-components and react-components packages but is also accessible as its own npm package.
- packages/storybook: This directory contains the code for our Storybook documentation. It acts as the documentation for all the other packages in the repo.

For more detailed explanation of each package, read their corresponding README and Development Guide files.

## Development Tips

Testing Changes Locally

The only way to test changes without publishing a release candidate first is to run Storybook locally and then observe how the component in question behaves. From your uofg-components directory, run npm run dev. Thanks to Turborepo, only the necessary dependencies will be built and cached.

When it finishes, you should see an info box with the following URLs:
```
Local: http://localhost:6007/                                              │
On your network: http://192.168.40.128:6007/
```

Either one will take you to a locally running version of the Storybook. Navigate to the component you changed, e.g. http://localhost:6007/?path=/story/react-components-card--as-a-link and ensure your changes appear as expected with no error messages or warnings.

### Testing Changes with Docker
If you are running into issues with Storybook not working locally, try using the command npm run dev:docker instead. This will run Storybook inside a Docker container which has been preconfigured to work with this monorepo.

You will need to have Docker/Docker Desktop installed on your machine for this to work.

You can download Docker from here.

On the first run, Docker will download the necessary Docker images and may take a few minutes to complete.

### Testing Changes with an Existing Feature Branch

To test your changes with an existing feature branch from another repo, e.g. ugnext, go to package.json and, in the "dependencies" section, find the line referring to the package you want to test. Edit it to point to your just-published release candidate, e.g. "@uoguelph/react-components": "^1.5.6-rc.1" Then run bun install to ensure your bun.lock file gets updated as well.

Now you can run a local build which uses your release candidate and verify if your changes work as expected. If you want to test remotely, e.g. on a Netlify site, you'll need to commit your changes to package.json and bun.lock and then push. Make sure you revert these changes once testing is complete.

### Testing Changes Using the bun/npm Link command
Another way to test your changes is to use the bun/npm link command.

https://bun.com/docs/pm/cli/link

https://docs.npmjs.com/cli/v11/commands/npm-link

This command allows you to link a package so that the local version on your machine will be used instead of the published version.

For example, if you want to test the changes you made to the react-components package on ugnext, you can run the following command from the packages/react-components directory:
``` bash
bun link
```

Then, in ugnext, you can run the following command to link the react-components package to the local version:
``` bash
bun link @uoguelph/react-components
```

Now, when ever you make changes to the react-components package, you must build the package. You can do this by running the corresponding build command for the package you are working on. For example, to build the react-components package, run: npm run build:react-components

Once you are done testing, you can unlink the package by running:
``` bash
bun unlink @uoguelph/react-components
```

Note that this sometimes causes issues with ugnext's dev server and its recommended you try to test your changes using the other methods mentioned above.

## Publishing

We use Changesets to manage versioning and Turborepo to handle the build-and-publish process.

### Prerequisites

Ensure you have an NPM account with access to the uoguelph organization and are logged in:
``` sh
npm login
```

Run a build to ensure everything is valid:
``` sh
npm run build
```

### Publishing Steps (Standard Release)

Create a Changeset: For every change, run:
``` bash
npm run changeset
```

Follow the prompts to select which packages changed and whether it is a patch, minor, or major version bump. This creates a markdown file in .changeset/.

Version the packages: Once you are ready to release, run:
``` bash
npm run changeset:version
```

This will consume the changeset files and update the package.json files.

Publish to NPM:
``` bash
npm run changeset:release
```

### Publishing Release Candidates (-rc)

If you need to publish a test version (RC) for a Pull Request:

Create a Changeset: For every change, run:
``` bash
npm run changeset
```

Enter Pre-release mode:
``` bash
npm run changeset:enter-prerelease
```

Version and Publish:
``` bash
npm run changeset:version
npm run changeset:release
```

Exit Pre-release mode (Once testing is complete and you are ready for a final release):
``` bash
npm run changeset:exit-prerelease
```