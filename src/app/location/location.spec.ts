import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Location } from './location';

describe('Location', () => {
    let component: Location;
    let fixture: ComponentFixture<Location>;
    let dialogRefMock: { afterClosed: jest.Mock };
    let matDialogMock: { open: jest.Mock };

    beforeEach(async () => {
        dialogRefMock = { afterClosed: jest.fn(() => of(null)) };
        matDialogMock = { open: jest.fn(() => dialogRefMock) };

        await TestBed.configureTestingModule({
            imports: [Location],
            providers: [
                {
                    provide: MatDialog,
                    useValue: matDialogMock
                }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(Location);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('location', 'Zwolle');
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should open the dialog on edit click', () => {
        component.editLocationClick();

        expect(matDialogMock.open).toHaveBeenCalled();
    });

    it('should emit the location on dialog close', () => {
        jest.spyOn(component.locationChange, 'emit');
        const location = 'Hattem';
        dialogRefMock.afterClosed.mockReturnValue(of(location));

        component.editLocationClick();

        expect(component.locationChange.emit).toHaveBeenCalledWith(location);
    });
});
