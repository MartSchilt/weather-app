import forecastJson from '../../assets/forecast-example.json';
import { Forecast, TimelineValues } from '../models/forecast';

export const MockForecast = forecastJson as unknown as Forecast;

export const MockDailyForecastTimelineValues = {
    time: '2025-10-10T02:00:00Z',
    values: {
        temperatureMax: '20',
        temperatureMin: '10',
        temperatureApparentMax: '22',
        temperatureApparentMin: '11',
        weatherCodeMax: '1000',
        weatherCodeMin: '1000'
    } as Record<string, string>
} as TimelineValues;

export const MockHourlyForecastTimelineValues = {
    time: '2025-10-10T02:00:00Z',
    values: {
        temperature: '15',
        temperatureApparent: '15',
        weatherCode: '1000'
    } as Record<string, string>
} as TimelineValues;
