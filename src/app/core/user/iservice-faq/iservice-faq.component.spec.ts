import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IserviceFaqComponent } from './iservice-faq.component';

describe('IserviceFaqComponent', () => {
  let component: IserviceFaqComponent;
  let fixture: ComponentFixture<IserviceFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IserviceFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IserviceFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
