import { Routes } from '@angular/router';
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

export const UserRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'e-premis',
                component: EpremisMainComponent
            },
            {
                path: 'e-htp',
                children: [
                    {
                        path: 'permohonan-pembelian',
                        component: EhtpPermohonanPembelianComponent
                    },
                    {
                        path: 'kelulusan',
                        component: EhtpSenaraiKelulusanComponent
                    },
                    {
                        path: 'pembelian',
                        component: EhtpPembelianComponent
                    }
                ]
            },
            {
                path: 'e-pco',
                children: [
                    {
                        path: 'permohonan-lesen',
                        component: EpcoPermohonanLesenComponent
                    },
                    {
                        path: 'e-exam',
                        component: EpcoEexamComponent
                    },
                    {
                        path: 'semakan-permohonan',
                        component: EpcoSemakanPermohonanComponent
                    },
                    {
                        path: 'pindaan',
                        component: EpcoPindaanComponent
                    }
                ]
            },
            {
                path: 'i-latihan',
                component: ILatihanComponent
            },
            {
                path: 'i-service',
                children: [
                    {
                        path: 'naziran',
                        component: IserviceNaziranComponent
                    },
                    {
                        path: 'aduan-maklumat',
                        component: IserviceAduanMaklumatComponent
                    },
                    {
                        path: 'faq',
                        component: IserviceFaqComponent
                    }
                ]
            },
        ]
    },
]