import { Component, computed, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TimelineValues } from '../models/forecast';
import { getWeatherIcon, getWeatherName } from '../utils/weather-code-helper';

@Component({
    selector: 'app-current-forecast',
    imports: [MatIcon],
    templateUrl: './current-forecast.html',
    styleUrl: './current-forecast.scss'
})
export class CurrentForecast {
    public currentDayForecast = input.required<TimelineValues>();
    public currentHourForecast = input.required<TimelineValues>();

    public weatherCode = computed(() => this.currentHourForecast().values['weatherCode']);
    public currentTemperature = computed(() => this.currentHourForecast().values['temperature']);
    public currentTemperatureApparent = computed(() => this.currentHourForecast().values['temperatureApparent']);
    public precipitation = computed(() => this.currentDayForecast().values['precipitationProbabilityMax']);
    public maxTemperature = computed(() => this.currentDayForecast().values['temperatureMax']);
    public minTemperature = computed(() => this.currentDayForecast().values['temperatureMin']);

    public getWeatherIcon = getWeatherIcon;
    public getWeatherName = getWeatherName;
}
