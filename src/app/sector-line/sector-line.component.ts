import { Component, OnInit } from '@angular/core';
import { lineChartMulti} from '../shared/data/ngxChart';
import * as chartsData from '../shared/configs/ngxCharts.config';

@Component({
  selector: 'sector-line',
  templateUrl: './sector-line.component.html',
  styleUrls: ['./sector-line.component.sass']
})
export class SectorLineComponent  {

  lineChartMulti = lineChartMulti;
  //Line Charts
  
  lineChartView: any[] = chartsData.lineChartView;

  // options
  lineChartShowXAxis = chartsData.lineChartShowXAxis;
  lineChartShowYAxis = chartsData.lineChartShowYAxis;
  lineChartGradient = chartsData.lineChartGradient;
  lineChartShowLegend = chartsData.lineChartShowLegend;
  lineChartShowXAxisLabel = chartsData.lineChartShowXAxisLabel;
  lineChartXAxisLabel = chartsData.lineChartXAxisLabel;
  lineChartShowYAxisLabel = chartsData.lineChartShowYAxisLabel;
  lineChartYAxisLabel = chartsData.lineChartYAxisLabel;

  lineChartColorScheme = chartsData.lineChartColorScheme;

  // line, area
  lineChartAutoScale = chartsData.lineChartAutoScale;
  lineChartLineInterpolation = chartsData.lineChartLineInterpolation;
  
  constructor() {
      Object.assign(this, { lineChartMulti })
  }

  onSelect(event) {
      console.log(event);
  }


}


