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

```text
src/
├── features/       // Grouping features of the application
│   └── ...         // Other feature folders
├── shared/         // Shared elements used across multiple features
│   ├── components/ // Reusable components
│   ├── services/   // Shared services or API calls
│   ├── hooks/      // Custom hooks
│   ├── hoc/        // Higher-order components
│   ├── slices/     // Redux slices for state management
│   └── utils/      // Utility functions
├── assets/         // Storing static assets
│   ├── images/     // Storing image files
│   ├── fonts/      // Storing font files
│   └── ...
├── styles/         // Global styles
│   └── ...
├── App.jsx         // Entry point of the application
└── ...             // Other necessary files and folders
```

### Testing

This project uses Jest and React Testing Library for testing. Tests are located in the `src` directory, next to the
component or feature they are testing. All tests are using the AAA pattern (Arrange, Act, Assert).
