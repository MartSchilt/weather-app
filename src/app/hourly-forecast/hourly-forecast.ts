import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TimelineValues } from '../models/forecast';
import { ForecastTile } from '../shared/forecast-tile/forecast-tile';

@Component({
    selector: 'app-hourly-forecast',
    imports: [MatCardModule, MatIconModule, ForecastTile],
    templateUrl: './hourly-forecast.html',
    styleUrl: './hourly-forecast.scss'
})
export class HourlyForecast {
    hourlyForecasts = input.required<TimelineValues[]>();
    hourlyForecastsThisDay = computed(() => this.hourlyForecasts().slice(0, 24));
}
