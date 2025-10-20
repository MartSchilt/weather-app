import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

/**
 * Checks if the request is made to the API.
 * If so, it will add the API key to the HttpParams
 */
export function apiKeyInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    let request = req;

    if (req.url.includes(environment.apiUrl)) {
        const apiKey = environment.apiKey;
        request = req.clone({
            setParams: {
                apikey: apiKey
            }
        });
    }

    return next(request);
}
