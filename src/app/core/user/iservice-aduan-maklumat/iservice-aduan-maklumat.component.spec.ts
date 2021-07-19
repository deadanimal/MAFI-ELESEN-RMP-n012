import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IserviceAduanMaklumatComponent } from './iservice-aduan-maklumat.component';

describe('IserviceAduanMaklumatComponent', () => {
  let component: IserviceAduanMaklumatComponent;
  let fixture: ComponentFixture<IserviceAduanMaklumatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IserviceAduanMaklumatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IserviceAduanMaklumatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
