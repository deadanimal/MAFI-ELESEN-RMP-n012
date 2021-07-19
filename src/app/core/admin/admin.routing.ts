import { Routes } from '@angular/router';
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

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'e-premis',
                children: [
                    {
                        path: 'main',
                        component: EpremisMainComponent
                    },
                    {
                        path: 'permohonan-lesen',
                        component: EpremisPermohonanLesenComponent
                    }
                ]
            },
            {
                path: 'e-htp',
                children: [
                    {
                        path: 'semakan-kelulusan',
                        component: EhtpSemakanKelulusanComponent
                    },
                    {
                        path: 'semakan-pembelian',
                        component: EhtpSemakanPembelianComponent
                    }
                ]
            },
            {
                path: 'e-pco',
                children: [
                    {
                        path: 'analisa',
                        component: EpcoAnalisaComponent
                    },
                    {
                        path: 'permohonan-lesen',
                        component: EpcoPermohonanLesenComponent
                    },
                    {
                        path: 'pindaan-lesen',
                        component: EpcoPindaanLesenComponent
                    },
                    {
                        path: 'keputusan-peperiksaan',
                        component: EpcoKeputusanPeperiksaanComponent
                    }
                ]
            },
            {
                path: 'i-service',
                children: [
                    {
                        path: 'naziran',
                        component: IserviceNaziranComponent
                    },
                    {
                        path: 'modul-aduan',
                        component: IserviceModelAduanComponent
                    },
                    {
                        path: 'faq',
                        component: IserviceFaqComponent
                    }
                ]
            },
            {
                path: 'report',
                component: ReportComponent
            },
            {
                path: 'audit-trail',
                component: ManagementAuditComponent
            },
            {
                path: 'management',
                children: [
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    }
                ]
            },
        ]
    }
]