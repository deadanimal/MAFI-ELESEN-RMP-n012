import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpcoPermohonanLesenComponent } from './epco-permohonan-lesen.component';

describe('EpcoPermohonanLesenComponent', () => {
  let component: EpcoPermohonanLesenComponent;
  let fixture: ComponentFixture<EpcoPermohonanLesenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpcoPermohonanLesenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpcoPermohonanLesenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
