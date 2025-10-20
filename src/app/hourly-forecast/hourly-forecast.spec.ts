import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockHourlyForecastTimelineValues } from '../utils/spec-helper';
import { HourlyForecast } from './hourly-forecast';

describe('HourlyForecast', () => {
    let component: HourlyForecast;
    let fixture: ComponentFixture<HourlyForecast>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HourlyForecast]
        }).compileComponents();

        fixture = TestBed.createComponent(HourlyForecast);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('hourlyForecasts', [MockHourlyForecastTimelineValues]);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should only return the first 24 forecasts', () => {
        const timelineValues = [];
        for (let i = 0; i < 48; i++) {
            timelineValues.push(MockHourlyForecastTimelineValues);
        }
        fixture.componentRef.setInput('hourlyForecasts', timelineValues);

        expect(component.hourlyForecastsThisDay().length).toStrictEqual(24);
    });
});
