import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhtpPembelianComponent } from './ehtp-pembelian.component';

describe('EhtpPembelianComponent', () => {
  let component: EhtpPembelianComponent;
  let fixture: ComponentFixture<EhtpPembelianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhtpPembelianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhtpPembelianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
