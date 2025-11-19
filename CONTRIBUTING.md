# Contributing

Thank you for your interest in contributing to this project! We welcome all contributions. Please follow the
guidelines below to ensure a smooth contribution process.

## Getting Started

### Prerequisites

#### Install pre-commit

This repository uses [pre-commit](https://pre-commit.com/) to enforce code quality checks before committing changes.
Install the pre-commit hooks by running:

```bash
pre-commit install
pre-commit install --hook-type commit-msg
```

This will automatically run linters and formatters on your code before each commit.

### Install Package Dependencies

Navigate to the source directory and install dependencies:

```bash
cd src
npm install
```

### Set Up the Sample Project

The `sample` directory contains a test project to validate the ESLint and Prettier configuration. To set it up:

```bash
cd sample
npm install
```

**Note:** To update the local ESLint configuration during development, delete the `@landbot` folder from `node_modules`
and run `npm install` again.

Thank you for contributing!
