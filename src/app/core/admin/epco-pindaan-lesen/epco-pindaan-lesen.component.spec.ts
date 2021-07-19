import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpcoPindaanLesenComponent } from './epco-pindaan-lesen.component';

describe('EpcoPindaanLesenComponent', () => {
  let component: EpcoPindaanLesenComponent;
  let fixture: ComponentFixture<EpcoPindaanLesenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpcoPindaanLesenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpcoPindaanLesenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
