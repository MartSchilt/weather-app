import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { apiKeyInterceptor } from './utils/apikey-interceptor';
import { mockDataInterceptor } from './utils/mockdata-interceptor';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideHttpClient(withInterceptors([apiKeyInterceptor, mockDataInterceptor]))
    ]
};
