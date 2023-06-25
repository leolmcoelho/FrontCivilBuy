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
//import { NgxChartsModule } from '@swimlane/ngx-charts';

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
  ],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    SharedModule,
    NgChartsModule,

  ],
  providers: [
    DataService,
    MatIconRegistry
  ]
})
export class AdminModule { }
