import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpremisSenaraiPemohonanComponent } from './epremis-senarai-pemohonan.component';

describe('EpremisSenaraiPemohonanComponent', () => {
  let component: EpremisSenaraiPemohonanComponent;
  let fixture: ComponentFixture<EpremisSenaraiPemohonanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpremisSenaraiPemohonanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpremisSenaraiPemohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
