# Contributing

All contributions are welcome. Please, follow the guidelines below to contribute to this project.

## Pre-requisites

### Install pre-commit

This repository uses [pre-commit](https://pre-commit.com/) to run some checks before committing changes. Please, install
it before making any changes.

```bash
pre-commit install
pre-commit install --hook-type commit-msg
```

## Install package dependencies

Install dependencies:

```bash
cd src
npm install
```

## Setup sample project

Install dependencies and local eslint configuration:

```bash
cd sample
npm install
```

To update the local eslint configuration, delete the `@landbot` folder from `node_modules` and run `npm install` again.
