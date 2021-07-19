import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IserviceModelAduanComponent } from './iservice-model-aduan.component';

describe('IserviceModelAduanComponent', () => {
  let component: IserviceModelAduanComponent;
  let fixture: ComponentFixture<IserviceModelAduanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IserviceModelAduanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IserviceModelAduanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
