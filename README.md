# WeatherApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.4.

## Development server

To start a local development server, run:

```bash
npm install --legacy-peer-deps
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Environment

The environment files are excluded from git in order to safeguard the API key.
They should be placed under `src/environments/` and have the following structure:

```typescript
export const environment = {
    production: false,
    useMockData: true,
    useMockError: false,
    apiUrl: 'https://api.tomorrow.io/v4/',
    apiKey: '<API-KEY>'
};
```

If `useMockData` is set to true it is not necessary to set the apiKey as the client will not make any API calls.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
npm run build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Jest](https://jestjs.io/) test runner, use the following command:

```bash
npm run test
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
