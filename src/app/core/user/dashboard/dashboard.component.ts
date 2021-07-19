import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  NgZone,
  OnDestroy,
} from "@angular/core";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import * as moment from "moment";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { MapService } from "src/app/shared/services/map/map.service";

import { Map } from "mapbox-gl";
import * as mapboxgl from "mapbox-gl";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  private chart1: any;
  private chart2: any;

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.getCharts();

    var calendarEl = document.getElementById("widget-calendar");

    var calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      defaultView: "dayGridMonth",
      selectable: true,
      contentHeight: "auto",

      buttonIcons: {
        prev: " ni ni-bold-left",
        next: " ni ni-bold-right",
      },
      header: {
        right: "next",
        center: "title, ",
        left: "prev",
      },
      defaultDate: "2018-12-01",
      editable: true,
      events: [
        {
          title: "Call with Dave",
          start: "2018-11-18",
          end: "2018-11-18",
          className: "bg-red",
        },

        {
          title: "Lunch meeting",
          start: "2018-11-21",
          end: "2018-11-22",
          className: "bg-orange",
        },

        {
          title: "All day conference",
          start: "2018-11-29",
          end: "2018-11-29",
          className: "bg-green",
        },

        {
          title: "Meeting with Mary",
          start: "2018-12-01",
          end: "2018-12-01",
          className: "bg-blue",
        },

        {
          title: "Winter Hackaton",
          start: "2018-12-03",
          end: "2018-12-03",
          className: "bg-red",
        },

        {
          title: "Digital event",
          start: "2018-12-07",
          end: "2018-12-09",
          className: "bg-warning",
        },

        {
          title: "Marketing event",
          start: "2018-12-10",
          end: "2018-12-10",
          className: "bg-purple",
        },

        {
          title: "Dinner with Family",
          start: "2018-12-19",
          end: "2018-12-19",
          className: "bg-red",
        },

        {
          title: "Black Friday",
          start: "2018-12-23",
          end: "2018-12-23",
          className: "bg-blue",
        },

        {
          title: "Cyber Week",
          start: "2018-12-02",
          end: "2018-12-02",
          className: "bg-yellow",
        },
      ],
    });

    calendar.render();

    //Display Current Date as Calendar widget header
    var mYear = moment().format("YYYY");
    var mDay = moment().format("dddd, MMM D");
    document.getElementsByClassName("widget-calendar-year")[0].innerHTML =
      mYear;
    document.getElementsByClassName("widget-calendar-day")[0].innerHTML = mDay;
  }

  ngAfterViewInit() {
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

    // Create chart instance
    let chart = am4core.create("dash1", am4charts.XYChart);
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
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;

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

    // Cursor
    chart.cursor = new am4charts.XYCursor();
    this.chart1 = chart;
  }

  getChart2() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("dash2", am4charts.PieChart);

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
    this.chart2 = chart;
  }
}
