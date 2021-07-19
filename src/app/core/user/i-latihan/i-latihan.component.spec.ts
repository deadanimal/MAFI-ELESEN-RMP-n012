import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ILatihanComponent } from './i-latihan.component';

describe('ILatihanComponent', () => {
  let component: ILatihanComponent;
  let fixture: ComponentFixture<ILatihanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ILatihanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ILatihanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
