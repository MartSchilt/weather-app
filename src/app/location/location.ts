import { Component, inject, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ChangeLocationDialog } from './change-location-dialog/change-location-dialog';

@Component({
    selector: 'app-location',
    imports: [MatIconModule, MatButtonModule, MatMenuModule],
    templateUrl: './location.html',
    styleUrl: './location.scss'
})
export class Location {
    public location = input.required<string>();
    public refreshClick = output();
    public locationChange = output<string>();

    private readonly dialog = inject(MatDialog);

    editLocationClick() {
        const dialogRef = this.dialog.open(ChangeLocationDialog, {
            data: { location: this.location() }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.locationChange.emit(result);
            }
        });
    }
}
