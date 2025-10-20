module.exports = {
    preset: './jest-preset.js',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    snapshotSerializers: [
        'jest-preset-angular/build/serializers/no-ng-attributes',
        'jest-preset-angular/build/serializers/ng-snapshot',
        'jest-preset-angular/build/serializers/html-comment'
    ],
    testPathIgnorePatterns: ['<rootDir>/jest.json', '<rootDir>/node_modules/', '<rootDir>/dist/'],
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/src/app/utils/'],
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!.*\\.mjs$)'],
    roots: ['src'],
    moduleDirectories: ['node_modules', 'src'],
    modulePaths: ['<rootDir>/src']
};
