import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import forecastJson from '../../assets/forecast-example.json';
import { environment } from '../../environments/environment';

/**
 * Checks if in the environment the useMockError or useMockData flag is set
 * Will return mock data or error instead when one or both of the flags are set
 * Otherwise will just pass the request to be handled normally
 */
export function mockDataInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    if (req.url.includes(environment.apiUrl)) {
        if (environment.useMockError) {
            return throwError(() => new HttpErrorResponse({ error: new Error('This is a test!') }));
        } else if (environment.useMockData) {
            return of(new HttpResponse({ body: forecastJson }));
        }
    }

    return next(req);
}
