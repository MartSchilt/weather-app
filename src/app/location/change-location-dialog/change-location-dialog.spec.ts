import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ChangeLocationDialog } from './change-location-dialog';

describe('ChangeLocationDialog', () => {
    let component: ChangeLocationDialog;
    let fixture: ComponentFixture<ChangeLocationDialog>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ChangeLocationDialog],
            providers: [
                {
                    provide: MatDialogRef,
                    useValue: {}
                },
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {}
                }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(ChangeLocationDialog);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
