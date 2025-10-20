/* eslint-disable */
// Jest setup as recommended by the jest-preset-angular documentation
// See https://thymikee.github.io/jest-preset-angular/docs/guides/angular-13+#using-es-modules
import 'zone.js';
import 'zone.js/testing';

import { ApplicationModule } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';
import { DefaultTitleStrategy, TitleStrategy } from '@angular/router';
import { addEventHandler } from 'jest-circus';
import { MockInstance, MockService, ngMocks } from 'ng-mocks';

// Import the common module after loading everything else
import { CommonModule } from '@angular/common';

// ngMocks setup for Angular component mocking
ngMocks.autoSpy('jest');
ngMocks.defaultMock(TitleStrategy, () => MockService(DefaultTitleStrategy));
ngMocks.globalKeep(ApplicationModule, true);
ngMocks.globalKeep(CommonModule, true);
ngMocks.globalKeep(BrowserModule, true);
addEventHandler((event: { name: string }) => {
    switch (event.name) {
        case 'run_describe_start':
        case 'test_start':
            MockInstance.remember();
            break;
        case 'run_describe_finish':
        case 'run_finish':
            MockInstance.restore();
            break;
        default:
    }
});

getTestBed().initTestEnvironment(BrowserTestingModule, platformBrowserTesting(), {
    teardown: {
        destroyAfterEach: true // Angular recommends this, but it may break existing tests
    }
});

window.open = jest.fn();
window.URL.createObjectURL = jest.fn();
window.URL.revokeObjectURL = jest.fn();
Object.defineProperty(global, 'Promise', { writable: false, value: global.Promise });
Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(document, 'doctype', {
    value: '<!DOCTYPE html>'
});
Object.defineProperty(window, 'getComputedStyle', {
    value: () => {
        return {
            display: 'none',
            appearance: ['-webkit-appearance']
        };
    }
});
/**
 * ISSUE: https://github.com/angular/material2/issues/7101
 * Workaround for JSDOM missing transform property
 */
Object.defineProperty(document.body.style, 'transform', {
    value: () => {
        return {
            enumerable: true,
            configurable: true
        };
    }
});

window.URL.createObjectURL = jest.fn();
const mockResponse = jest.fn();
Object.defineProperty(window, 'location', {
    value: {
        hash: {
            endsWith: mockResponse,
            includes: mockResponse
        },
        assign: mockResponse
    },
    writable: true
});

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
    }))
});

Object.defineProperty(window, 'DragEvent', {
    value: class DragEvent {}
});

global.Blob = Blob;
global.URL.createObjectURL = jest.fn();
