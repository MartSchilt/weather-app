import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-change-location-dialog',
    imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose],
    templateUrl: './change-location-dialog.html',
    styleUrl: './change-location-dialog.scss'
})
export class ChangeLocationDialog {
    readonly dialogRef = inject(MatDialogRef<ChangeLocationDialog>);
    readonly data = inject(MAT_DIALOG_DATA);
    readonly location = model(this.data.location);
}
