import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhtpSenaraiKelulusanComponent } from './ehtp-senarai-kelulusan.component';

describe('EhtpSenaraiKelulusanComponent', () => {
  let component: EhtpSenaraiKelulusanComponent;
  let fixture: ComponentFixture<EhtpSenaraiKelulusanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhtpSenaraiKelulusanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhtpSenaraiKelulusanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
