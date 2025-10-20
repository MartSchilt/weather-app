import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpErrorResponse } from '@angular/common/http';
import { ErrorCard } from './error-card';

describe('ErrorCard', () => {
    let component: ErrorCard;
    let fixture: ComponentFixture<ErrorCard>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ErrorCard]
        }).compileComponents();

        fixture = TestBed.createComponent(ErrorCard);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it.each([new Error('This is a test!'), new HttpErrorResponse({ error: new Error('This is a test!') })])('should be able to retrieve the message from an error', error => {
        fixture.componentRef.setInput('error', error);

        const message = component.errorMessage();

        expect(message).toBeTruthy();
        expect(message).toEqual(error.message);
        expect(message).not.toEqual('An error occurred');
    });
});
