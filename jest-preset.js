module.exports = {
    testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
    moduleFileExtensions: ['ts', 'js', 'html', 'json', 'mjs'],
    coverageReporters: ['html'],
    testEnvironment: '@happy-dom/jest-environment',
    testEnvironmentOptions: {
        browsers: ['chrome']
    },
    transform: {
        '^.+\\.(ts|js|mjs|html|svg)$': [
            'jest-preset-angular',
            {
                useESM: true,
                stringifyContentPathRegex: '\\.(html|svg)$',
                tsconfig: '<rootDir>/tsconfig.spec.json'
            }
        ]
    }
};
