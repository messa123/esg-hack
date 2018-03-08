import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorHeatmapComponent } from './sector-heatmap.component';

describe('SectorHeatmapComponent', () => {
  let component: SectorHeatmapComponent;
  let fixture: ComponentFixture<SectorHeatmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorHeatmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
