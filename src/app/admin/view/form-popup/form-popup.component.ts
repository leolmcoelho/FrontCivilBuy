import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ImageCroppedEvent } from 'ngx-image-cropper';

import { ImageUploaderComponent } from 'src/app/general/image-uploader/image-uploader.component';

import { formsLabels } from './form-labels';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form-popup',
  templateUrl: './form-popup.component.html',
  styleUrls: ['./form-popup.component.scss']
})
export class FormPopupComponent implements OnInit {
  @Input() isPopup: boolean = false;

  @Output() submitFormEvent = new EventEmitter<any>();
  @Output() closeDialogEvent = new EventEmitter<void>();

  form: FormGroup;
  formsLabels = formsLabels;

  imageChangedEvent: any = {};
  showImageCropper: boolean = false;
  selectedImageControl: string = '';

  croppedImage: SafeUrl | null = null;

  isScrollActive = true;

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

  submitForm() {
    this.submitFormEvent.emit(this.form.value);
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
    if (this.isPopup) {
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
    } else {
      // Se não estiver em um popup, faça a lógica de abrir o componente de imagem diretamente aqui
      // Exemplo:
      // const imageUploaderDialogRef = this.dialog.open(ImageUploaderComponent, {
      //   width: '400px',
      //   maxHeight: '70vh'
      // });
      // ...
    }
  }

  closeDialog() {
    if (this.isPopup) {
      this.closeDialogEvent.emit();
    }
  }
}
