import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent {

  //imageChangedEvent: any = null;
  //showImageCropper = false;
  //croppedImage: any = ''; // Utilize o tipo SafeUrl para a propriedade croppedImage
  //cropImagePreview: any = '';
  imageChangedEvent: any = '';
  croppedImage: any = '';

  @Output() imageCropped = new EventEmitter<SafeUrl>();

  constructor(
    public dialogRef: MatDialogRef<ImageUploaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sanitizer: DomSanitizer
  ) { }

  onImageCropped(event: any) {
    console.log(event);

    // Obtenha a imagem cortada como base64 e atualize a propriedade croppedImage
    this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl);
    console.log(this.croppedImage);
    //this.croppedImage = event.objectUrl;
  }

  closePopup() {
    // Feche o popup
    this.imageCropped.emit(this.croppedImage);
    this.dialogRef.close();
    this.imageCropped.emit(this.croppedImage);
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    //this.showImageCropper = true;
  }

  imageLoaded(image: LoadedImage) {
    console.log(image);
    // show cropper
  }

  cropperReady() {
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }

  confirmCropping() {
    if (this.croppedImage) {
      // Emita o evento com a imagem cortada como SafeUrl
      this.imageCropped.emit(this.croppedImage);
      this.closePopup();
    }
  }
  
  

}
