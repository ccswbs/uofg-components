# @uoguelph/tailwind-theme

A theme for Tailwind CSS which follows University of Guelph brand guidelines.

## Getting Started

### Setup Tailwind in your project

First, your project must be using Tailwind CSS. To get started with Tailwind CSS, you can visit the [official Tailwind CSS documentation](https://tailwindcss.com/docs). It provides comprehensive guides on installation, configuration, and usage.

**IMPORTANT** Our theme is only compatible with version 4+ of Tailwind CSS.

### Install the package

Install the package using the package manager of your choice.

```bash
# Using npm
npm install --save-dev @uoguelph/tailwind-theme

# Using Yarn
yarn add -D @uoguelph/tailwind-theme

# Using pnpm
pnpm add -D @uoguelph/tailwind-theme

# Using bun
bun add -D @uoguelph/tailwind-theme
```

Once you've set up Tailwind CSS in your project, ensure your main CSS file looks like this

```CSS
@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

@import "tailwindcss";
@import "@uoguelph/tailwind-theme";

/* Whatever else you want here */
```
