import {
  Component,
  NgZone,
  OnDestroy,
  OnInit,
  TemplateRef,
} from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-iservice-model-aduan",
  templateUrl: "./iservice-model-aduan.component.html",
  styleUrls: ["./iservice-model-aduan.component.scss"],
})
export class IserviceModelAduanComponent implements OnInit, OnDestroy {
  private chart1: any;
  private chart2: any;

  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      idpermohonan: "235453",
      nombor: "0127365564",
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "61",
      start: "2011/04/25",
      salary: "$320,800",
      status:"1",
    },
    {
      idpermohonan: "326754",
      nombor: "01126352635",
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      start: "2011/07/25",
      salary: "$170,750",
      status:"3",
    },
    {
      idpermohonan: "879976",
      nombor: "0197687656",
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "66",
      start: "2009/01/12",
      salary: "$86,000",
      status:"2",
    },
    {
      idpermohonan: "345432",
      nombor: "0176546576",
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: "22",
      start: "2012/03/29",
      salary: "$433,060",
      status:"1",
    },
    {
      idpermohonan: "343423",
      nombor: "0127656876",
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: "33",
      start: "2008/11/28",
      salary: "$162,700",
      status:"2",
    },
  ];
  SelectionType = SelectionType;

  constructor(private zone: NgZone) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
    });
  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(selected);
  }
  onActivate(event) {
    this.activeRow = event.row;
  }

  ngOnInit() {
    this.getCharts();
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart1) {
        console.log("Chart disposed");
        this.chart1.dispose();
      }
      if (this.chart2) {
        console.log("Chart disposed");
        this.chart2.dispose();
      }
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart1();
      this.getChart2();
    });
  }

  getChart1() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("mod1", am4charts.XYChart);
    chart.colors.step = 2;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    chart.legend.paddingBottom = 20;
    chart.legend.labels.template.maxWidth = 95;

    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    xAxis.dataFields.category = "category";
    xAxis.renderer.cellStartLocation = 0.1;
    xAxis.renderer.cellEndLocation = 0.9;
    xAxis.renderer.grid.template.location = 0;

    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;

    function createSeries(value, name) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = value;
      series.dataFields.categoryX = "category";
      series.name = name;

      series.events.on("hidden", arrangeColumns);
      series.events.on("shown", arrangeColumns);

      let bullet = series.bullets.push(new am4charts.LabelBullet());
      bullet.interactionsEnabled = false;
      bullet.dy = 30;
      bullet.label.text = "{valueY}";
      bullet.label.fill = am4core.color("#ffffff");

      return series;
    }

    chart.data = [
      {
        category: "Place #1",
        first: 40,
        second: 55,
        third: 60,
      },
      {
        category: "Place #2",
        first: 30,
        second: 78,
        third: 69,
      },
      {
        category: "Place #3",
        first: 27,
        second: 40,
        third: 45,
      },
      {
        category: "Place #4",
        first: 50,
        second: 33,
        third: 22,
      },
    ];

    createSeries("first", "The First");
    createSeries("second", "The Second");
    createSeries("third", "The Third");

    function arrangeColumns() {
      let series = chart.series.getIndex(0);

      let w =
        1 -
        xAxis.renderer.cellStartLocation -
        (1 - xAxis.renderer.cellEndLocation);
      if (series.dataItems.length > 1) {
        let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
        let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
        let delta = ((x1 - x0) / chart.series.length) * w;
        if (am4core.isNumber(delta)) {
          let middle = chart.series.length / 2;

          let newIndex = 0;
          chart.series.each(function (series) {
            if (!series.isHidden && !series.isHiding) {
              series.dummyData = newIndex;
              newIndex++;
            } else {
              series.dummyData = chart.series.indexOf(series);
            }
          });
          let visibleCount = newIndex;
          let newMiddle = visibleCount / 2;

          chart.series.each(function (series) {
            let trueIndex = chart.series.indexOf(series);
            let newIndex = series.dummyData;

            let dx = (newIndex - trueIndex + middle - newMiddle) * delta;

            series.animate(
              { property: "dx", to: dx },
              series.interpolationDuration,
              series.interpolationEasing
            );
            series.bulletsContainer.animate(
              { property: "dx", to: dx },
              series.interpolationDuration,
              series.interpolationEasing
            );
          });
        }
      }
    }
    this.chart1 = chart;
  }
  getChart2() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("mod2", am4charts.XYChart);

    // Add data
    chart.data = [
      {
        date: new Date(2019, 5, 12),
        value1: 50,
        value2: 48,
        previousDate: new Date(2019, 5, 5),
      },
      {
        date: new Date(2019, 5, 13),
        value1: 53,
        value2: 51,
        previousDate: new Date(2019, 5, 6),
      },
      {
        date: new Date(2019, 5, 14),
        value1: 56,
        value2: 58,
        previousDate: new Date(2019, 5, 7),
      },
      {
        date: new Date(2019, 5, 15),
        value1: 52,
        value2: 53,
        previousDate: new Date(2019, 5, 8),
      },
      {
        date: new Date(2019, 5, 16),
        value1: 48,
        value2: 44,
        previousDate: new Date(2019, 5, 9),
      },
      {
        date: new Date(2019, 5, 17),
        value1: 47,
        value2: 42,
        previousDate: new Date(2019, 5, 10),
      },
      {
        date: new Date(2019, 5, 18),
        value1: 59,
        value2: 55,
        previousDate: new Date(2019, 5, 11),
      },
    ];

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value1";
    series.dataFields.dateX = "date";
    series.strokeWidth = 2;
    series.minBulletDistance = 10;
    series.tooltipText =
      "[bold]{date.formatDate()}:[/] {value1}\n[bold]{previousDate.formatDate()}:[/] {value2}";
    series.tooltip.pointerOrientation = "vertical";

    // Create series
    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "value2";
    series2.dataFields.dateX = "date";
    series2.strokeWidth = 2;
    series2.strokeDasharray = "3,4";
    series2.stroke = series.stroke;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    this.chart2 = chart;
  }
}
