import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Forecast } from '../models/forecast';

@Injectable({
    providedIn: 'root'
})
export class TomorrowService {
    private readonly httpClient = inject(HttpClient);

    getForecast(location: string) {
        return this.mapToForecast(this.httpClient.get(environment.apiUrl + 'weather/forecast', { params: { location: location }, timeout: 3000, mode: 'cors' }));
    }

    private mapToForecast(observable: Observable<any>) {
        return observable.pipe(
            map(response => {
                if (response.type) throw new Error(response.message);
                return response as Forecast;
            })
        );
    }
}
