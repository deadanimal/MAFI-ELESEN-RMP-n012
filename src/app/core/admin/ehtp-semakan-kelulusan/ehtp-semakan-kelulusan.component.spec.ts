import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhtpSemakanKelulusanComponent } from './ehtp-semakan-kelulusan.component';

describe('EhtpSemakanKelulusanComponent', () => {
  let component: EhtpSemakanKelulusanComponent;
  let fixture: ComponentFixture<EhtpSemakanKelulusanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhtpSemakanKelulusanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhtpSemakanKelulusanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
