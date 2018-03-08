import { Component, OnInit } from '@angular/core';
import { mapMulti} from '../shared/data/sectorMap';
import { mapEquity} from '../shared/data/sectorMap';
import * as chartsData from '../shared/configs/sectorMap.config';

@Component({
  selector: 'sector-heatmap',
  templateUrl: './sector-heatmap.component.html',
  styleUrls: ['./sector-heatmap.component.sass']
})
export class SectorHeatmapComponent{
  mapMulti = mapMulti;
  mapColorScheme = chartsData.mapColorScheme;
  mapView: any[] = chartsData.mapView;
  lmapGradient = chartsData.mapGradient;

  constructor() {
    Object.assign(this, { mapMulti })
}

onSelect(event) {
  this.mapMulti = mapEquity;
    console.log(event);
}

  

}

