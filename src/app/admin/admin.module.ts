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
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

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
  ],
  providers: [
    DataService,
    MatIconRegistry
  ]
})
export class AdminModule { }