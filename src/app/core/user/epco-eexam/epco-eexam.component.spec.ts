import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpcoEexamComponent } from './epco-eexam.component';

describe('EpcoEexamComponent', () => {
  let component: EpcoEexamComponent;
  let fixture: ComponentFixture<EpcoEexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpcoEexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpcoEexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
