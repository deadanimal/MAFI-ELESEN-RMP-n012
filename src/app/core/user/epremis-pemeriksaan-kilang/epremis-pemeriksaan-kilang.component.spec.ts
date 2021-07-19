import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpremisPemeriksaanKilangComponent } from './epremis-pemeriksaan-kilang.component';

describe('EpremisPemeriksaanKilangComponent', () => {
  let component: EpremisPemeriksaanKilangComponent;
  let fixture: ComponentFixture<EpremisPemeriksaanKilangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpremisPemeriksaanKilangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpremisPemeriksaanKilangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
