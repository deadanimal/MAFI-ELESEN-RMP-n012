import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpcoAnalisaComponent } from './epco-analisa.component';

describe('EpcoAnalisaComponent', () => {
  let component: EpcoAnalisaComponent;
  let fixture: ComponentFixture<EpcoAnalisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpcoAnalisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpcoAnalisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
