import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IserviceNaziranComponent } from './iservice-naziran.component';

describe('IserviceNaziranComponent', () => {
  let component: IserviceNaziranComponent;
  let fixture: ComponentFixture<IserviceNaziranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IserviceNaziranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IserviceNaziranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
