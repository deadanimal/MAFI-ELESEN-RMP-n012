import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  NgZone,
  OnDestroy,
} from "@angular/core";
import { environment } from "src/environments/environment";
import * as mapboxgl from "mapbox-gl";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import swal from "sweetalert2";
import { FormBuilder } from "@angular/forms";
import { TemplateRef } from "@angular/core";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-epremis-main",
  templateUrl: "./epremis-main.component.html",
  styleUrls: ["./epremis-main.component.scss"],
})
export class EpremisMainComponent implements OnInit, OnDestroy {
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      iddaftar: "1",
      nama: "Syed Hamzah",
      syarikat: "SH Hijau Sdn Bhd",
      tel: "012-2345678",
      status: "1",
    },
    {
      iddaftar: "2",
      nama: "Guru Moorthy",
      syarikat: "Moorthy AgroMaju Sdn Bhd",
      tel: "019-2312987",
      status: "2",
    },
    {
      iddaftar: "3",
      nama: "Suzzy Ng",
      syarikat: "Suzzy Nursery Sdn Bhd",
      tel: "012-9827675",
      status: "1",
    },
  ];
  SelectionType = SelectionType;

  // Modal
  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered",
  };

  private chart1: any;
  private chart2: any;
  private chart3: any;
  private chart4: any;

  constructor(
    private _formBuilder: FormBuilder,
    private zone: NgZone,
    private modalService: BsModalService
  ) {
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: "modal-lg" });
  }
  openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, { class: "modal-xl" });

    this.getChart4();
  }

  closeModal() {
    this.modalRef.hide();
  }
  closeModal2() {
    this.modalRef2.hide();
  }

  ngOnInit() {
    this.getCharts();

    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
    const INITIAL_VIEW_STATE = {
      latitude: 3.139,
      longitude: 101.6869,
      zoom: 4,
      maxZoom: 16,
      bearing: 0,
      pitch: 0,
    };

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      // Note: deck.gl will be in charge of interaction and event handling
      interactive: true,
      center: [INITIAL_VIEW_STATE.longitude, INITIAL_VIEW_STATE.latitude],
      zoom: INITIAL_VIEW_STATE.zoom,
      bearing: INITIAL_VIEW_STATE.bearing,
      pitch: INITIAL_VIEW_STATE.pitch,
    });
  }

  confirm() {
    swal
      .fire({
        title: "Pengesahan",
        text: "Pasti untuk menambah maklumat?",
        type: "info",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-info",
        confirmButtonText: "Pasti",
        showCancelButton: true,
        cancelButtonClass: "btn btn-danger",
        cancelButtonText: "Batal",
      })
      .then((result) => {
        if (result.value) {
          this.register();
        }
      });
  }

  register() {
    swal
      .fire({
        title: "Berjaya",
        text: "Maklumat telah disimpan",
        type: "success",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Tutup",
      })
      .then((result) => {
        if (result.value) {
          this.modalRef.hide();
        }
      });
  }

  ngAfterViewInit() {
    
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart2) {
        console.log("Chart disposed");
        this.chart2.dispose();
      }
      if (this.chart1) {
        console.log("Chart disposed");
        this.chart1.dispose();
      }
      if (this.chart3) {
        console.log("Chart disposed");
        this.chart3.dispose();
      }
      if (this.chart4) {
        console.log("Chart disposed");
        this.chart4.dispose();
      }
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart1();
      this.getChart2();
      this.getChart3();
    });
  }

  getChart1() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("epd1", am4charts.XYChart3D);
    chart.paddingBottom = 30;
    chart.angle = 35;

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
        country: "Taiwan",
        visits: 338,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.inside = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let labelTemplate = categoryAxis.renderer.labels.template;
    labelTemplate.rotation = -90;
    labelTemplate.horizontalCenter = "left";
    labelTemplate.verticalCenter = "middle";
    labelTemplate.dy = 10; // moves it a bit down;
    labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.disabled = true;

    // Create series
    let series = chart.series.push(new am4charts.ConeSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";

    let columnTemplate = series.columns.template;
    columnTemplate.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    columnTemplate.adapter.add("stroke", function (stroke, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });
    this.chart1 = chart;
  }

  getChart2() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    /**
     * Define data for each year
     */
    let chartData = {
      "2019": [
        { sector: "Agriculture", size: 6.6 },
        { sector: "Mining and Quarrying", size: 0.6 },
        { sector: "Manufacturing", size: 23.2 },
        { sector: "Electricity and Water", size: 2.2 },
        { sector: "Construction", size: 4.5 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 14.6 },
        { sector: "Transport and Communication", size: 9.3 },
        { sector: "Finance, real estate and business services", size: 22.5 },
      ],
      "2020": [
        { sector: "Agriculture", size: 3.7 },
        { sector: "Mining and Quarrying", size: 0.2 },
        { sector: "Manufacturing", size: 14.9 },
        { sector: "Electricity and Water", size: 2.7 },
        { sector: "Construction", size: 5.7 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 16.5 },
        { sector: "Transport and Communication", size: 10.5 },
        { sector: "Finance, real estate and business services", size: 26.6 },
      ],
      "2021": [
        { sector: "Agriculture", size: 3.9 },
        { sector: "Mining and Quarrying", size: 0.2 },
        { sector: "Manufacturing", size: 14.5 },
        { sector: "Electricity and Water", size: 2.7 },
        { sector: "Construction", size: 5.6 },
        { sector: "Trade (Wholesale, Retail, Motor)", size: 16.6 },
        { sector: "Transport and Communication", size: 10.5 },
        { sector: "Finance, real estate and business services", size: 26.5 },
      ],
    };

    // Create chart instance
    let chart = am4core.create("epd2", am4charts.PieChart);

    // Add data
    chart.data = [
      { sector: "Agriculture", size: 6.6 },
      { sector: "Mining and Quarrying", size: 0.6 },
      { sector: "Manufacturing", size: 23.2 },
      { sector: "Electricity and Water", size: 2.2 },
      { sector: "Construction", size: 4.5 },
      { sector: "Trade (Wholesale, Retail, Motor)", size: 14.6 },
      { sector: "Transport and Communication", size: 9.3 },
      { sector: "Finance, real estate and business services", size: 22.5 },
    ];

    // Add label
    chart.innerRadius = 100;
    let label = chart.seriesContainer.createChild(am4core.Label);
    label.text = "2019";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 50;

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "size";
    pieSeries.dataFields.category = "sector";

    // Animate chart data
    let currentYear = 2019;
    function getCurrentData() {
      let asd = label as any;
      asd.text = currentYear;
      let data = chartData[currentYear];
      currentYear++;
      if (currentYear > 2021) currentYear = 2019;
      return data;
    }

    function loop() {
      //chart.allLabels[0].text = currentYear;
      let data = getCurrentData();
      for (var i = 0; i < data.length; i++) {
        chart.data[i].size = data[i].size;
      }
      chart.invalidateRawData();
      chart.setTimeout(loop, 4000);
    }

    loop();
    this.chart2 = chart;
  }

  getChart3() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("epd3", am4charts.PieChart);

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(30);

    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    // change the cursor on hover to make it apparent the object can be interacted with
    pieSeries.slices.template.cursorOverStyle = [
      {
        property: "cursor",
        value: "pointer",
      },
    ];

    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0, 0, 0, 0);

    pieSeries.ticks.template.disabled = true;

    // Create a base filter effect (as if it's not there) for the hover to return to
    let shadow = pieSeries.slices.template.filters.push(
      new am4core.DropShadowFilter()
    );
    shadow.opacity = 0;

    // Create hover state
    let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

    // Slightly shift the shadow and make it more prominent on hover
    let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter());
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

    // Add a legend
    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        country: "Lithuania",
        litres: 501.9,
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
    ];
    this.chart3 = chart;
  }

  getChart4() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("prem11", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [
      {
        country: "USA",
        visits: 3025,
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
    ];

    prepareParetoData();

    function prepareParetoData() {
      let total = 0;

      for (var i = 0; i < chart.data.length; i++) {
        let value = chart.data[i].visits;
        total += value;
      }

      let sum = 0;
      for (var i = 0; i < chart.data.length; i++) {
        let value = chart.data[i].visits;
        sum += value;
        chart.data[i].pareto = (sum / total) * 100;
      }
    }

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.tooltip.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;
    valueAxis.min = 0;
    valueAxis.cursorTooltipEnabled = false;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    let paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    paretoValueAxis.renderer.opposite = true;
    paretoValueAxis.min = 0;
    paretoValueAxis.max = 100;
    paretoValueAxis.strictMinMax = true;
    paretoValueAxis.renderer.grid.template.disabled = true;
    paretoValueAxis.numberFormatter = new am4core.NumberFormatter();
    paretoValueAxis.numberFormatter.numberFormat = "#'%'";
    paretoValueAxis.cursorTooltipEnabled = false;

    let paretoSeries = chart.series.push(new am4charts.LineSeries());
    paretoSeries.dataFields.valueY = "pareto";
    paretoSeries.dataFields.categoryX = "country";
    paretoSeries.yAxis = paretoValueAxis;
    paretoSeries.tooltipText = "pareto: {valueY.formatNumber('#.0')}%[/]";
    paretoSeries.bullets.push(new am4charts.CircleBullet());
    paretoSeries.strokeWidth = 2;
    paretoSeries.stroke = new am4core.InterfaceColorSet().getFor(
      "alternativeBackground"
    );
    paretoSeries.strokeOpacity = 0.5;

    // Cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panX";
    this.chart4 = chart;
  }
}
