import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpremisPermohonanLesenComponent } from './epremis-permohonan-lesen.component';

describe('EpremisPermohonanLesenComponent', () => {
  let component: EpremisPermohonanLesenComponent;
  let fixture: ComponentFixture<EpremisPermohonanLesenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpremisPermohonanLesenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpremisPermohonanLesenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
