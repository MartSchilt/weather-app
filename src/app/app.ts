import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { IconResolver, MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DomSanitizer } from '@angular/platform-browser';
import { CurrentForecast } from './current-forecast/current-forecast';
import { HourlyForecast } from './hourly-forecast/hourly-forecast';
import { Location } from './location/location';
import { Forecast } from './models/forecast';
import { TomorrowService } from './services/tomorrow-service';
import { ErrorCard } from './shared/error-card/error-card';
import { SixDayForecast } from './six-day-forecast/six-day-forecast';

@Component({
    selector: 'app-root',
    imports: [
        MatProgressSpinnerModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatMenuModule,
        HourlyForecast,
        SixDayForecast,
        CurrentForecast,
        ErrorCard,
        Location
    ],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App implements OnInit {
    public loading = signal(true);
    public error = signal<unknown>(undefined);
    public location = signal('Zwolle');
    public currentDate = signal(this.getDateLocaleString(''));
    public forecast = signal<Forecast | undefined>(undefined);

    private readonly iconRegistry = inject(MatIconRegistry);
    private readonly sanitizer = inject(DomSanitizer);
    private readonly tomorrowService = inject(TomorrowService);

    ngOnInit() {
        const resolver: IconResolver = name => this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/icons/${name}.svg`);
        this.iconRegistry.addSvgIconResolver(resolver);

        this.getForecast();
    }

    getForecast() {
        this.loading.set(true);

        this.tomorrowService.getForecast(this.location()).subscribe({
            next: forecast => {
                this.location.set(forecast.location.name);
                this.currentDate.set(this.getDateLocaleString(forecast.timelines.minutely[0].time));
                this.forecast.set(forecast);
                this.loading.set(false);
            },
            error: error => {
                this.currentDate.set(this.getDateLocaleString(''));
                this.error.set(error);
                this.loading.set(false);
            }
        });
    }

    locationChange(location: string) {
        this.location.set(location);
        this.getForecast();
    }

    private getDateLocaleString(dateTime: string) {
        let date: Date;

        if (dateTime) date = new Date(dateTime);
        else date = new Date();

        return date.toLocaleString('nl-NL');
    }
}
