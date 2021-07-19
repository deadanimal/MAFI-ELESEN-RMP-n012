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

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { EpremisMainComponent } from './epremis-main/epremis-main.component';
import { EpremisPermohonanLesenComponent } from './epremis-permohonan-lesen/epremis-permohonan-lesen.component';
import { EhtpSemakanKelulusanComponent } from './ehtp-semakan-kelulusan/ehtp-semakan-kelulusan.component';
import { EhtpSemakanPembelianComponent } from './ehtp-semakan-pembelian/ehtp-semakan-pembelian.component';
import { EpcoAnalisaComponent } from './epco-analisa/epco-analisa.component';
import { EpcoPermohonanLesenComponent } from './epco-permohonan-lesen/epco-permohonan-lesen.component';
import { EpcoPindaanLesenComponent } from './epco-pindaan-lesen/epco-pindaan-lesen.component';
import { EpcoKeputusanPeperiksaanComponent } from './epco-keputusan-peperiksaan/epco-keputusan-peperiksaan.component';
import { IserviceNaziranComponent } from './iservice-naziran/iservice-naziran.component';
import { IserviceModelAduanComponent } from './iservice-model-aduan/iservice-model-aduan.component';
import { IserviceFaqComponent } from './iservice-faq/iservice-faq.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    EpremisMainComponent,
    EpremisPermohonanLesenComponent,
    EhtpSemakanKelulusanComponent,
    EhtpSemakanPembelianComponent,
    EpcoAnalisaComponent,
    EpcoPermohonanLesenComponent,
    EpcoPindaanLesenComponent,
    EpcoKeputusanPeperiksaanComponent,
    IserviceNaziranComponent,
    IserviceModelAduanComponent,
    IserviceFaqComponent
  ],
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
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
