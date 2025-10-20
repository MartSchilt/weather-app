import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-error-card',
    imports: [MatCardModule, MatIconModule],
    templateUrl: './error-card.html',
    styleUrl: './error-card.scss'
})
export class ErrorCard {
    public error = input<unknown>(undefined);
    public errorMessage = computed(() => {
        const error = this.error();

        if (error instanceof Error || error instanceof HttpErrorResponse) {
            return error.message;
        } else {
            return 'An error occurred';
        }
    });
}
