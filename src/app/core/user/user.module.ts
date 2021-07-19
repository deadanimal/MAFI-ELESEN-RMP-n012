import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RatingModule } from 'ngx-bootstrap/rating';

import { CdkStepperModule } from '@angular/cdk/stepper';
import{ MatStepperModule } from '@angular/material/stepper';
import { LivechatWidgetModule } from '@livechat/angular-widget'

import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EpremisMainComponent } from './epremis-main/epremis-main.component';
import { EpremisSenaraiPemohonanComponent } from './epremis-senarai-pemohonan/epremis-senarai-pemohonan.component';
import { EpremisPemeriksaanKilangComponent } from './epremis-pemeriksaan-kilang/epremis-pemeriksaan-kilang.component';
import { EhtpPermohonanPembelianComponent } from './ehtp-permohonan-pembelian/ehtp-permohonan-pembelian.component';
import { EhtpSenaraiKelulusanComponent } from './ehtp-senarai-kelulusan/ehtp-senarai-kelulusan.component';
import { EhtpPembelianComponent } from './ehtp-pembelian/ehtp-pembelian.component';
import { EpcoPermohonanLesenComponent } from './epco-permohonan-lesen/epco-permohonan-lesen.component';
import { EpcoEexamComponent } from './epco-eexam/epco-eexam.component';
import { EpcoSemakanPermohonanComponent } from './epco-semakan-permohonan/epco-semakan-permohonan.component';
import { EpcoPindaanComponent } from './epco-pindaan/epco-pindaan.component';
import { ILatihanComponent } from './i-latihan/i-latihan.component';
import { IserviceNaziranComponent } from './iservice-naziran/iservice-naziran.component';
import { IserviceAduanMaklumatComponent } from './iservice-aduan-maklumat/iservice-aduan-maklumat.component';
import { IserviceFaqComponent } from './iservice-faq/iservice-faq.component';

@NgModule({
  declarations: [DashboardComponent, EpremisMainComponent, EpremisSenaraiPemohonanComponent, EpremisPemeriksaanKilangComponent, EhtpPermohonanPembelianComponent, EhtpSenaraiKelulusanComponent, EhtpPembelianComponent, EpcoPermohonanLesenComponent, EpcoEexamComponent, EpcoSemakanPermohonanComponent, EpcoPindaanComponent, ILatihanComponent, IserviceNaziranComponent, IserviceAduanMaklumatComponent, IserviceFaqComponent],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(UserRoutes),
    CarouselModule.forRoot(),
    MatStepperModule,
    CdkStepperModule,
    RatingModule.forRoot(),
    LivechatWidgetModule
  ]
})
export class UserModule { }
