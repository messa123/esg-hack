import * as shape from 'd3-shape';

//Line Charts

export var lineChartView: any[] = [750, 600];

// options
export var lineChartShowXAxis = true;
export var lineChartShowYAxis = true;
export var lineChartGradient = false;
export var lineChartShowLegend = false;
export var lineChartShowXAxisLabel = true;
export var lineChartXAxisLabel = 'Country';
export var lineChartShowYAxisLabel = true;
export var lineChartYAxisLabel = 'Volume';

export var lineChartColorScheme = {
    domain: ['#1CBCD8', '#FF8D60', '#FF586B', '#AAAAAA']
};

// line, area
export var lineChartAutoScale = true;
export var lineChartLineInterpolation = shape.curveBasis;