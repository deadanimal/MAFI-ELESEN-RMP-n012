import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpcoPindaanComponent } from './epco-pindaan.component';

describe('EpcoPindaanComponent', () => {
  let component: EpcoPindaanComponent;
  let fixture: ComponentFixture<EpcoPindaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpcoPindaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpcoPindaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
