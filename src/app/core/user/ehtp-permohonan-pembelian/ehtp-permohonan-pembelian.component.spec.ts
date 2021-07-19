import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhtpPermohonanPembelianComponent } from './ehtp-permohonan-pembelian.component';

describe('EhtpPermohonanPembelianComponent', () => {
  let component: EhtpPermohonanPembelianComponent;
  let fixture: ComponentFixture<EhtpPermohonanPembelianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhtpPermohonanPembelianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhtpPermohonanPembelianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
