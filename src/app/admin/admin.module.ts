import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { CardInfoComponent } from './view/card-info/card-info.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { DataService } from '../service/data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { DoughnutComponent } from './view/charts/doughnut/doughnut.component';
import { BarComponent } from './view/charts/bar/bar.component';
import { ProfilePhotoComponent } from '../general/views/profile-photo/profile-photo.component';
import { NgChartsModule } from 'ng2-charts';
import { YellowArrowComponent } from '../general/views/yellow-arrow/yellow-arrow.component';
import { PendingOrdersComponent } from './view/pending-orders/pending-orders.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { FormPopupComponent } from './view/form-popup/form-popup.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ImageCropperModule } from 'ngx-image-cropper';
import { GeneralModule } from '../general/general.module';
import { PopupComponent } from './view/popup/popup.component';
import { FormProfileComponent } from './view/form-profile/form-profile.component';
import { PedidosNoneComponent } from './view/pedidos-none/pedidos-none.component';
import { PedidosTableComponent } from './view/pedidos-table/pedidos-table.component';
import { SearchBarComponent } from './view/search-bar/search-bar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    ProductComponent,
    UsersComponent,
    CardInfoComponent,
    DoughnutComponent,
    BarComponent,
    ProfilePhotoComponent,
    YellowArrowComponent,
    PendingOrdersComponent,
    FormPopupComponent,
    PopupComponent,
    FormProfileComponent,
    PedidosNoneComponent,
    PedidosTableComponent,
    SearchBarComponent,
    
  ],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    SharedModule,
    NgChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    MatSnackBarModule,
    ImageCropperModule,
    GeneralModule,
    MatSnackBarModule,
    FormsModule

  ],
  providers: [
    DataService,
    MatIconRegistry,
    MatCardModule,
    //MatDialog
  ]
})
export class AdminModule { }