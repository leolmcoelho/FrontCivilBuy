import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageCropperModule } from 'ngx-image-cropper';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { Expansion } from '@angular/compiler';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ImageProfileComponent } from './image-profile/image-profile.component';


@NgModule({
  declarations: [
  
    ImageUploaderComponent,
       ImageProfileComponent
  ],
  imports: [
    CommonModule,
    ImageCropperModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
  ],
  exports:[
    ImageUploaderComponent,
    ImageProfileComponent
  ]
})
export class GeneralModule { }
