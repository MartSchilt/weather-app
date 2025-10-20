import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TimelineValues } from '../models/forecast';
import { ForecastTile } from '../shared/forecast-tile/forecast-tile';

@Component({
    selector: 'app-six-day-forecast',
    imports: [MatCardModule, MatIconModule, ForecastTile],
    templateUrl: './six-day-forecast.html',
    styleUrl: './six-day-forecast.scss'
})
export class SixDayForecast {
    dailyForecasts = input.required<TimelineValues[]>();
}
