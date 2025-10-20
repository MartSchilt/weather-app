import { Component, computed, input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';
import { TimelineValues } from '../../models/forecast';
import { getWeatherIcon } from '../../utils/weather-code-helper';

@Component({
    selector: 'app-forecast-tile',
    imports: [MatGridListModule, MatIcon],
    templateUrl: './forecast-tile.html',
    styleUrl: './forecast-tile.scss'
})
export class ForecastTile {
    public forecast = input.required<TimelineValues>();
    public dailyInterval = input<boolean>(true);

    public temperature = computed(() => this.forecast().values['temperature'] || this.forecast().values['temperatureMax']);
    public weatherCode = computed(() => this.forecast().values['weatherCode'] || this.forecast().values['weatherCodeMax']);
    public precipitation = computed(() => this.forecast().values['precipitationProbability'] || this.forecast().values['precipitationProbabilityMax']);
    public dateTime = computed(() => {
        const time = this.forecast().time;
        const date = new Date(time);
        const now = new Date();

        if (this.dailyInterval()) {
            if (date.getDate() === now.getDate()) return 'Today';

            return date.toLocaleDateString('en-UK', { weekday: 'long' });
        }

        if (date.getHours() === now.getHours()) return 'Now';
        return date.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit', hour12: false });
    });

    public getWeatherIcon = getWeatherIcon;
}
