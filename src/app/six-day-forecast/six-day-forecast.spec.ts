import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockDailyForecastTimelineValues } from '../utils/spec-helper';
import { SixDayForecast } from './six-day-forecast';

describe('SixDayForecast', () => {
    let component: SixDayForecast;
    let fixture: ComponentFixture<SixDayForecast>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SixDayForecast]
        }).compileComponents();

        fixture = TestBed.createComponent(SixDayForecast);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('dailyForecasts', [MockDailyForecastTimelineValues]);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
