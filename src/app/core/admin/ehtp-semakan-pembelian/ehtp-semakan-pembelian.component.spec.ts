import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhtpSemakanPembelianComponent } from './ehtp-semakan-pembelian.component';

describe('EhtpSemakanPembelianComponent', () => {
  let component: EhtpSemakanPembelianComponent;
  let fixture: ComponentFixture<EhtpSemakanPembelianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhtpSemakanPembelianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhtpSemakanPembelianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
