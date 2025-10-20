import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of, throwError } from 'rxjs';
import { App } from './app';
import { TomorrowService } from './services/tomorrow-service';
import { MockForecast } from './utils/spec-helper';

describe('App', () => {
    let app: App;
    let fixture: ComponentFixture<App>;
    let tomorrowServiceMock: { getForecast: jest.Mock };
    let snackBarMock: { open: jest.Mock };

    beforeEach(async () => {
        tomorrowServiceMock = { getForecast: jest.fn(() => of(MockForecast)) };
        snackBarMock = { open: jest.fn() };

        await TestBed.configureTestingModule({
            imports: [App],
            providers: [
                provideHttpClient(),
                provideHttpClientTesting(),
                { provide: TomorrowService, useValue: tomorrowServiceMock },
                { provide: MatSnackBar, useValue: snackBarMock }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(App);
        app = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });

    it('should be able to get the Forecasts from the tomorrow service', () => {
        app.loading.set(true);

        app.getForecast();

        expect(tomorrowServiceMock.getForecast).toHaveBeenCalled();
        expect(app.loading()).toBeFalsy();
    });

    it('should be able to handle errors thrown by the tomorrow service', () => {
        const error = new Error('This is a test');
        app.loading.set(true);
        tomorrowServiceMock.getForecast.mockReturnValue(throwError(() => error));

        app.getForecast();

        expect(tomorrowServiceMock.getForecast).toHaveBeenCalled();
        expect(app.loading()).toBeFalsy();
        expect(app.error()).toEqual(error);
    });

    it('should be able to change the location', () => {
        const location = 'Hattem';

        app.locationChange(location);

        expect(tomorrowServiceMock.getForecast).toHaveBeenLastCalledWith(location);
        expect(app.loading()).toBeFalsy();
    });
});
