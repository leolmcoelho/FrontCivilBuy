import { Component } from '@angular/core';
import { formsLabels } from '../form-popup/form-labels';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { ImageUploaderComponent } from 'src/app/general/image-uploader/image-uploader.component';


 
@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrls: ['./form-profile.component.scss']
})
export class FormProfileComponent {


  form: FormGroup;
  formsLabels = formsLabels;

  imageChangedEvent: any = {};
  showImageCropper: boolean = false;
  selectedImageControl: string = '';

  croppedImage: SafeUrl | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog // Injete o MatDialog aqui
  ) {
    this.form = this.formBuilder.group({});
  }

  ngOnInit() {
    this.form = this.formBuilder.group({});

    this.formsLabels.forEach(formData => {
      let validators = [];
      if (formData.formControlName === 'imagem') {
        validators.push(Validators.required);
        validators.push(this.imageValidator);
      } else {
        validators.push(Validators.required);
      }

      this.form.addControl(formData.formControlName, this.formBuilder.control('', validators));
    });
  }

  submitForm(){

  }

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

  openImageCropper(event: Event, formControlName: string) {
    const inputElement = event.target as HTMLInputElement;
    const fileList: FileList | null = inputElement.files;
    if (fileList && fileList.length > 0) {
      const file: File = fileList[0];
      this.imageChangedEvent[formControlName] = event;
      this.selectedImageControl = formControlName;
      this.showImageCropper = true;
    }
  }

  openImageUploader() {
    // Verifica se o componente está sendo utilizado dentro de um popup
    
      const dialogRef = this.dialog.open(ImageUploaderComponent, {
        width: '400px',
        maxHeight: '70vh' // Defina o tamanho desejado para o popup
      });

      // Assine o evento após o fechamento do popup
      dialogRef.componentInstance.imageCropped.subscribe((croppedImage: SafeUrl) => {
        // Verifique se a imagem foi cortada e atualize a propriedade croppedImage
        console.log('Cropped image:', croppedImage);

        if (croppedImage) {
          this.croppedImage = croppedImage;
        }
      });
    
  }

  closeDialog() {
   
      //this.closeDialogEvent.emit();
    
  }
}
