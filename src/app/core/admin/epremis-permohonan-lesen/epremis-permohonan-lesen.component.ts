import { Component, OnInit } from '@angular/core';
export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: 'app-epremis-permohonan-lesen',
  templateUrl: './epremis-permohonan-lesen.component.html',
  styleUrls: ['./epremis-permohonan-lesen.component.scss']
})
export class EpremisPermohonanLesenComponent implements OnInit {

  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      rujukan: "1",
      tarikh:"23/1/2021",
      nama: "Syed Hamzah",
      tempoh:"6 bulan",
      syarikat: "SH Hijau Sdn Bhd",
      nsurat: "2345678",
      status: "1",
      ic:"670829105435",
      negeri:"Selangor",
    },
    {
      rujukan: "2",
      tarikh:"16/4/2021",
      tempoh:"6 bulan",
      nama: "Guru Moorthy",
      syarikat: "Moorthy AgroMaju Sdn Bhd",
      nsurat: "2312987",
      status: "2",
      ic:"780229147665",
      negeri:"Selangor",
    },
    {
      rujukan: "3",
      tarikh:"9/2/2021",
      tempoh:"6 bulan",
      nama: "Suzzy Ng",
      syarikat: "Suzzy Nursery Sdn Bhd",
      nsurat: "9827675",
      status: "1",
      ic:"980110101098",
      negeri:"Selangor",
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
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(selected);
  }
  onActivate(event) {
    this.activeRow = event.row;
  }

  ngOnInit() {
  }

}
