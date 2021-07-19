import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpremisMainComponent } from './epremis-main.component';

describe('EpremisMainComponent', () => {
  let component: EpremisMainComponent;
  let fixture: ComponentFixture<EpremisMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpremisMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpremisMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
