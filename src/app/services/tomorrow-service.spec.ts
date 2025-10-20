import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import errorJson from '../../assets/error-example.json';
import forecastJson from '../../assets/forecast-example.json';
import { environment } from '../../environments/environment';
import { TomorrowService } from './tomorrow-service';

describe('TomorrowService', () => {
    const location = 'Zwolle';
    let service: TomorrowService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
        service = TestBed.inject(TomorrowService);

        httpTestingController = TestBed.inject(HttpTestingController);

        environment.useMockData = false;
        environment.useMockError = false;
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should call the API when retrieving the forecast', async () => {
        const observable = service.getForecast(location);
        const forecastPromise = firstValueFrom(observable);
        const request = httpTestingController.expectOne(req => {
            return req.url === environment.apiUrl + 'weather/forecast' && req.params.has('location');
        });
        request.flush('');

        const forecast = await forecastPromise;

        expect(forecast).toBeFalsy();
    });

    it('should be able to map to Forecast', async () => {
        const observable = service.getForecast(location);
        const forecastPromise = firstValueFrom(observable);
        const request = httpTestingController.expectOne(req => {
            return req.url === environment.apiUrl + 'weather/forecast' && req.params.has('location');
        });
        request.flush(forecastJson);

        const forecast = await forecastPromise;

        expect(forecast).toEqual(forecastJson);
    });

    it('should throw an error if not able to map to Forecast', async () => {
        let exception: unknown;
        const observable = service.getForecast(location);
        const forecastPromise = firstValueFrom(observable);
        const request = httpTestingController.expectOne(req => {
            return req.url === environment.apiUrl + 'weather/forecast' && req.params.has('location');
        });
        try {
            request.flush(errorJson);
            await forecastPromise;
        } catch (e) {
            exception = e;
        }

        expect(exception).toBeInstanceOf(Error);
        expect((exception as Error).message).toEqual(errorJson.message);
    });
});
