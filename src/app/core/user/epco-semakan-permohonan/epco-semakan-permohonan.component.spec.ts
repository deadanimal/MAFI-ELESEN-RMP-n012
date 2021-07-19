import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpcoSemakanPermohonanComponent } from './epco-semakan-permohonan.component';

describe('EpcoSemakanPermohonanComponent', () => {
  let component: EpcoSemakanPermohonanComponent;
  let fixture: ComponentFixture<EpcoSemakanPermohonanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpcoSemakanPermohonanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpcoSemakanPermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
