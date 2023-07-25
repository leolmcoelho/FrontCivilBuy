import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


import { FormPopupComponent } from '../form-popup/form-popup.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  showPopup: boolean = false;
  constructor(private dialog: MatDialog) {}

  dialogRef: MatDialogRef<FormPopupComponent> | null = null;

  openPopup() {
    this.dialogRef = this.dialog.open(FormPopupComponent, {
      width: '400px',
    });
    //this.dialogRef.componentInstance.isPopup = true;
    //this.dialogRef.componentInstance.dialogRef = this.dialogRef;

    this.dialogRef.afterClosed().subscribe(() => {
      this.dialogRef = null;
    });
  }
}