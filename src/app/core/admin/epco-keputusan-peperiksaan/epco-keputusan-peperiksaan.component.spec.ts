import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpcoKeputusanPeperiksaanComponent } from './epco-keputusan-peperiksaan.component';

describe('EpcoKeputusanPeperiksaanComponent', () => {
  let component: EpcoKeputusanPeperiksaanComponent;
  let fixture: ComponentFixture<EpcoKeputusanPeperiksaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpcoKeputusanPeperiksaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpcoKeputusanPeperiksaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
