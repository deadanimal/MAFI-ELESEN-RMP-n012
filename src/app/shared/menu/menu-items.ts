export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/admin/e-premis',
    title: 'E-premis/Kilang',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-pink',
    collapse: 'e-premis',
    isCollapsed: true,
    children: [
      { path: 'main', title: 'Dashboard', type: 'link' },
      { path: 'permohonan-lesen', title: 'Senarai Permohonan Lesen', type: 'link' }
    ]
  },
  {
    path: '/admin/e-htp',
    title: 'E-HTP',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-pink',
    collapse: 'e-htp',
    isCollapsed: true,
    children: [
      { path: 'semakan-kelulusan', title: 'Semakan Kelulusan', type: 'link' },
      { path: 'semakan-pembelian', title: 'Semakan Pembelian', type: 'link' }
    ]
  },
  {
    path: '/admin/e-pco',
    title: 'E-PCO',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-pink',
    collapse: 'e-pco',
    isCollapsed: true,
    children: [
      { path: 'analisa', title: 'Analisa', type: 'link' },
      { path: 'permohonan-lesen', title: 'Senarai Permohonan Lesen', type: 'link' },
      { path: 'pindaan-lesen', title: 'Senarai Pindaan Lesen', type: 'link' },
      { path: 'keputusan-peperiksaan', title: 'Senarai Keputusan Peperiksaan', type: 'link' }
    ]
  },
  {
    path: '/admin/i-service',
    title: 'i-Service',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-pink',
    collapse: 'i-service',
    isCollapsed: true,
    children: [
      { path: 'naziran', title: 'Naziran (self assessment)', type: 'link' },
      { path: 'modul-aduan', title: 'Modul Aduan', type: 'link' },
      { path: 'faq', title: 'FAQ', type: 'link' }
    ]
  },
  {
    path: '/admin/report',
    title: 'Reporting',
    type: 'link',
    icontype: 'fas fa-chart-bar text-red'
  },
  {
    path: '/admin/audit-trail',
    title: 'Audit Trails',
    type: 'link',
    icontype: 'fas fa-chart-bar text-red'
  },
  {
    path: '/admin/management',
    title: 'Management',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-pink',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'user', title: 'User Control', type: 'link' }
    ]
  },
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/user/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/user/e-premis',
    title: 'e-Premis/Kilang',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-pink',
    collapse: 'e-premis',
    isCollapsed: true,
    children: [
      { path: 'main', title: 'Dashboard', type: 'link' },
      { path: 'permohonan', title: 'Senarai Permohonan', type: 'link' },
      { path: 'pemeriksaan-kilang', title: 'Pemeriksaan Kilang', type: 'link' }
    ]
  },
  {
    path: '/user/e-htp',
    title: 'e-HTP',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-pink',
    collapse: 'e-htp',
    isCollapsed: true,
    children: [
      { path: 'permohonan-pembelian', title: 'Permohonan Pembelian', type: 'link' },
      { path: 'kelulusan', title: 'Senarai Kelulusan', type: 'link' },
      { path: 'pembelian', title: 'Pembelian', type: 'link' }
    ]
  },
  {
    path: '/user/e-pco',
    title: 'e-PCO',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-pink',
    collapse: 'e-pco',
    isCollapsed: true,
    children: [
      { path: 'permohonan-lesen', title: 'Permohonan Lesen', type: 'link' },
      { path: 'e-exam', title: 'e-Exam', type: 'link' },
      { path: 'semakan-permohonan', title: 'Semakan Permohonan', type: 'link' },
      { path: 'pindaan', title: 'Pindaan', type: 'link' }
    ]
  },
  {
    path: '/user/i-latihan',
    title: 'i-Latihan',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/user/i-service',
    title: 'i-Service',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-pink',
    collapse: 'i-service',
    isCollapsed: true,
    children: [
      { path: 'naziran', title: 'Naziran (self assessment)', type: 'link' },
      { path: 'aduan-maklumat', title: 'Aduan/Maklmat', type: 'link' },
      { path: 'faq', title: 'FAQ', type: 'link' }
    ]
  },
];