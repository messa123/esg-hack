import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorLineComponent } from './sector-line.component';

describe('SectorLineComponent', () => {
  let component: SectorLineComponent;
  let fixture: ComponentFixture<SectorLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
