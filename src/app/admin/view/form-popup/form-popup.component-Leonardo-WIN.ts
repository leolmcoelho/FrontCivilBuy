import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-popup',
  templateUrl: './form-popup.component.html',
  styleUrls: ['./form-popup.component.scss']
})
export class FormPopupComponent {

  constructor(private dialogRef: MatDialogRef<FormPopupComponent>) { }

  submitForm() {
    // Lógica para processar o formulário

    // Fechar o popup após o processamento
    this.closeDialog();
  }

  closeDialog() {
    // Fechar o popup
    this.dialogRef.close();
  }
}
