import { Component, NgZone, OnDestroy, OnInit } from "@angular/core";
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
  selector: "app-i-latihan",
  templateUrl: "./i-latihan.component.html",
  styleUrls: ["./i-latihan.component.scss"],
})
export class ILatihanComponent implements OnInit, OnDestroy {
  private chart1: any;

  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      jenis: "Latihan A",
      tarikh: "1/1/2021",
      masa: "9.00 AM",
      kelayakan: "-",
      kategori: "E",
    },
    {
      jenis: "Latihan B",
      tarikh: "1/2/2021",
      masa: "9.00 AM",
      kelayakan: "-",
      kategori: "D",
    },
    {
      jenis: "Latihan C",
      tarikh: "1/3/2021",
      masa: "8.30 AM",
      kelayakan: "-",
      kategori: "C",
    },
    {
      jenis: "Latihan D",
      tarikh: "1/4/2021",
      masa: "9.00 AM",
      kelayakan: "-",
      kategori: "B",
    },
    {
      jenis: "Latihan E",
      tarikh: "1/5/2021",
      masa: "11.00 AM",
      kelayakan: "-",
      kategori: "A",
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

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart1();
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart1) {
        console.log("Chart disposed");
        this.chart1.dispose();
      }
    });
  }

  getChart1() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("il1", am4charts.XYChart3D);

    // Add data
    chart.data = [
      {
        country: "USA",
        visits: 4025,
      },
      {
        country: "China",
        visits: 1882,
      },
      {
        country: "Japan",
        visits: 1809,
      },
      {
        country: "Germany",
        visits: 1322,
      },
      {
        country: "UK",
        visits: 1122,
      },
      {
        country: "France",
        visits: 1114,
      },
      {
        country: "India",
        visits: 984,
      },
      {
        country: "Spain",
        visits: 711,
      },
      {
        country: "Netherlands",
        visits: 665,
      },
      {
        country: "Russia",
        visits: 580,
      },
      {
        country: "South Korea",
        visits: 443,
      },
      {
        country: "Canada",
        visits: 441,
      },
      {
        country: "Brazil",
        visits: 395,
      },
      {
        country: "Italy",
        visits: 386,
      },
      {
        country: "Australia",
        visits: 384,
      },
      {
        country: "Taiwan",
        visits: 338,
      },
      {
        country: "Poland",
        visits: 328,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.renderer.labels.template.hideOversized = false;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.tooltip.label.rotation = 270;
    categoryAxis.tooltip.label.horizontalCenter = "right";
    categoryAxis.tooltip.label.verticalCenter = "middle";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Countries";
    valueAxis.title.fontWeight = "bold";

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.name = "Visits";
    series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
    columnTemplate.stroke = am4core.color("#FFFFFF");

    columnTemplate.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    columnTemplate.adapter.add("stroke", function (stroke, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.strokeOpacity = 0;
    chart.cursor.lineY.strokeOpacity = 0;
    //
    this.chart1 = chart;
  }
}
