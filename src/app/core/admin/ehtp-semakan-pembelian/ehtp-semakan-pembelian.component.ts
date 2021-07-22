import { Component, OnInit } from "@angular/core";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-ehtp-semakan-pembelian",
  templateUrl: "./ehtp-semakan-pembelian.component.html",
  styleUrls: ["./ehtp-semakan-pembelian.component.scss"],
})
export class EhtpSemakanPembelianComponent implements OnInit {
  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      jenis: "Laporan",
      rujukan: "1211",
      syarikat: "AZ Agro",
      tarikh: "3/5/2021",
    },
    {
      jenis: "Bajet",
      rujukan: "8783",
      syarikat: "Leia Nursery",
      tarikh: "1/1/2021",
    },
    {
      jenis: "Audit",
      rujukan: "3356",
      syarikat: "World Tree",
      tarikh: "8/2/2021",
    },
  ];

  SelectionType = SelectionType;
  constructor() {
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
  onActivate(event) {
    this.activeRow = event.row;
  }

  ngOnInit() {}
}
