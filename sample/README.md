# Sample frontend project

This is a sample project that uses Landbot best practices

## Setup

```shell
npm install
```

## Best practices

### ESLint and Prettier configuration

This project uses Landbot ESLint and Prettier configuration in the `src` directory to enforce code style and best
practices.

### Folder structure

The key is to maintain a clear and organised structure that makes it easy to locate and manage your files.

```plaintext
src/
├── components/                         // Reusable / shared UI components
├── containers/                         // Coordinators of components and other abstractions
├── pages/                              // Entry points of routes
└── ...
```

### Testing

This project uses Jest and React Testing Library for testing. Tests are located in the `src` directory, next to the
component or feature they are testing. All tests are using the AAA pattern (Arrange, Act, Assert).
