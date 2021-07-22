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
  selector: "app-epco-pindaan-lesen",
  templateUrl: "./epco-pindaan-lesen.component.html",
  styleUrls: ["./epco-pindaan-lesen.component.scss"],
})
export class EpcoPindaanLesenComponent implements OnInit, OnDestroy {
  private chart1: any;

  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      rujukan: "1",
      tarikh: "23/1/2021",
      nama: "Syed Hamzah",
      tempoh: "6 bulan",
      syarikat: "SH Hijau Sdn Bhd",
      nsurat: "2345678",
      status: "1",
      ic: "670829105435",
      negeri: "Selangor",
    },
    {
      rujukan: "2",
      tarikh: "16/4/2021",
      tempoh: "6 bulan",
      nama: "Guru Moorthy",
      syarikat: "Moorthy AgroMaju Sdn Bhd",
      nsurat: "2312987",
      status: "2",
      ic: "780229147665",
      negeri: "Selangor",
    },
    {
      rujukan: "3",
      tarikh: "9/2/2021",
      tempoh: "6 bulan",
      nama: "Suzzy Ng",
      syarikat: "Suzzy Nursery Sdn Bhd",
      nsurat: "9827675",
      status: "1",
      ic: "980110101098",
      negeri: "Selangor",
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
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart1();
    });
  }

  getChart1() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("admpin1", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        country: "Lithuania",
        litres: 501.9,
      },
      {
        country: "Czech Republic",
        litres: 301.9,
      },
      {
        country: "Ireland",
        litres: 201.1,
      },
      {
        country: "Germany",
        litres: 165.8,
      },
      {
        country: "Australia",
        litres: 139.9,
      },
      {
        country: "Austria",
        litres: 128.3,
      },
      {
        country: "UK",
        litres: 99,
      },
      {
        country: "Belgium",
        litres: 60,
      },
      {
        country: "The Netherlands",
        litres: 50,
      },
    ];

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    this.chart1 = chart;
  }
}
