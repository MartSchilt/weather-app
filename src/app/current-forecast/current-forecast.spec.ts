import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockDailyForecastTimelineValues, MockHourlyForecastTimelineValues } from '../utils/spec-helper';
import { CurrentForecast } from './current-forecast';

describe('CurrentForecast', () => {
    let component: CurrentForecast;
    let fixture: ComponentFixture<CurrentForecast>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CurrentForecast]
        }).compileComponents();

        fixture = TestBed.createComponent(CurrentForecast);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('currentDayForecast', MockDailyForecastTimelineValues);
        fixture.componentRef.setInput('currentHourForecast', MockHourlyForecastTimelineValues);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should retrieve the weather code', () => {
        expect(component.weatherCode()).toStrictEqual(MockHourlyForecastTimelineValues.values['weatherCode']);
    });

    it('should retrieve the current temperature', () => {
        expect(component.currentTemperature()).toStrictEqual(MockHourlyForecastTimelineValues.values['temperature']);
    });

    it('should retrieve the current apparent temperature', () => {
        expect(component.currentTemperatureApparent()).toStrictEqual(MockHourlyForecastTimelineValues.values['temperatureApparent']);
    });

    it("should retrieve today's max temperature", () => {
        expect(component.maxTemperature()).toStrictEqual(MockDailyForecastTimelineValues.values['temperatureMax']);
    });

    it("should retrieve today's min temperature", () => {
        expect(component.minTemperature()).toStrictEqual(MockDailyForecastTimelineValues.values['temperatureMin']);
    });
});
