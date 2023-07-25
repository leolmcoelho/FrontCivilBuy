import { Component, Input, Output } from '@angular/core';
//import { formsLabels } from '../form-popup/form-labels';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { ImageUploaderComponent } from 'src/app/general/image-uploader/image-uploader.component';

@Component({
  selector: 'app-image-profile',
  templateUrl: './image-profile.component.html',
  styleUrls: ['./image-profile.component.scss']
})
export class ImageProfileComponent {
  form: FormGroup;
  //formsLabels = formsLabels;

  @Output() croppedImage: SafeUrl | null = null;


  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog // Injete o MatDialog aqui
  ) {
    this.form = this.formBuilder.group({});
  }

  

  submitForm() {}

  imageValidator(control: AbstractControl): ValidationErrors | null {
    const file = control.value;
    if (file) {
      const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
      const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
      if (!allowedExtensions.includes(fileExtension)) {
        return { invalidImage: true };
      }
    }
    return null;
  }

  openImageUploader() {
    const dialogRef = this.dialog.open(ImageUploaderComponent, {
      minWidth: '30vw',
      minHeight: '70vh',
    });
  
    // Assine o evento após o fechamento do popup
    dialogRef.componentInstance.imageCropped.subscribe((croppedImage: SafeUrl) => {
      // Verifique se a imagem foi cortada e atualize a propriedade croppedImage
      if (croppedImage) {
        this.croppedImage = croppedImage; // Atualize a propriedade croppedImage
        this.form.get('imagem')?.setValue(croppedImage);
      }
    });
  }
  
}
