import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimelineValues } from 'src/app/models/forecast';
import { MockDailyForecastTimelineValues, MockHourlyForecastTimelineValues } from '../../utils/spec-helper';
import { ForecastTile } from './forecast-tile';

describe('ForecastTile', () => {
    let component: ForecastTile;
    let fixture: ComponentFixture<ForecastTile>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ForecastTile]
        }).compileComponents();

        fixture = TestBed.createComponent(ForecastTile);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('forecast', MockDailyForecastTimelineValues);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it.each([
        [MockDailyForecastTimelineValues, MockDailyForecastTimelineValues.values['temperatureMax']],
        [MockHourlyForecastTimelineValues, MockHourlyForecastTimelineValues.values['temperature']]
    ])('should retrieve the temperature', (forecast, temperature) => {
        fixture.componentRef.setInput('forecast', forecast);

        expect(component.temperature()).toStrictEqual(temperature);
    });

    it.each([
        [MockDailyForecastTimelineValues, MockDailyForecastTimelineValues.values['weatherCodeMax']],
        [MockHourlyForecastTimelineValues, MockHourlyForecastTimelineValues.values['weatherCode']]
    ])('should retrieve the weatherCode', (forecast, weatherCode) => {
        fixture.componentRef.setInput('forecast', forecast);

        expect(component.weatherCode()).toStrictEqual(weatherCode);
    });

    it.each([
        [MockDailyForecastTimelineValues, MockDailyForecastTimelineValues.values['precipitationMax']],
        [MockHourlyForecastTimelineValues, MockHourlyForecastTimelineValues.values['precipitation']]
    ])('should retrieve the precipitation chance', (forecast, precipitation) => {
        fixture.componentRef.setInput('forecast', forecast);

        expect(component.precipitation()).toStrictEqual(precipitation);
    });

    it.each([
        [true, MockDailyForecastTimelineValues, 'Friday'],
        [true, { time: new Date().toString() } as TimelineValues, 'Today'],
        [false, MockHourlyForecastTimelineValues, '04:00'],
        [false, { time: new Date().toString() } as TimelineValues, 'Now']
    ])('should retrieve the datetime in a readable text', (dailyInterval, forecast, expected) => {
        fixture.componentRef.setInput('dailyInterval', dailyInterval);
        fixture.componentRef.setInput('forecast', forecast);

        expect(component.dateTime()).toStrictEqual(expected);
    });
});
