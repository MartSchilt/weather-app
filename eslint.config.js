// @ts-nocheck
import { configs } from '@eslint/js';
import { configs as __configs, processInlineTemplates } from 'angular-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { configs as _configs, config } from 'typescript-eslint';

export default config(
    {
        ignores: ['**/dist/**', '**/.angular/**', '**/coverage/**']
    },
    {
        files: ['**/*.ts'],
        extends: [configs.recommended, ..._configs.recommended, ..._configs.stylistic, ...__configs.tsRecommended, eslintPluginPrettierRecommended],
        processor: processInlineTemplates,
        rules: {
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'app',
                    style: 'camelCase'
                }
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'app',
                    style: 'kebab-case'
                }
            ],
            'prettier/prettier': [
                'error',
                {
                    endOfLine: 'auto'
                }
            ]
        },
        ignores: ['**/*.d.ts', '**/*.config.ts', '**/*.setup.ts']
    },
    {
        files: ['**/*.html'],
        extends: [...__configs.templateRecommended, ...__configs.templateAccessibility],
        rules: {}
    }
);
