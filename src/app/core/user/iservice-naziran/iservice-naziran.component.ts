import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import swal from 'sweetalert2';
import { FormGroup, FormBuilder, } from '@angular/forms';
import {Rating} from "ngx-rating";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: 'app-iservice-naziran',
  templateUrl: './iservice-naziran.component.html',
  styleUrls: ['./iservice-naziran.component.scss'],
  providers: [Rating]
})
export class IserviceNaziranComponent implements OnInit {

  y = 0;

  // Form
  registerForm: FormGroup

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

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
    },
  ];
  SelectionType = SelectionType;

  constructor( private modalService: BsModalService, private formBuilder: FormBuilder,) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
    });
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, { class: 'modal-lg' });
  }

  closeModal() {
    this.modal.hide()
    this.registerForm.reset()
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

  ngOnInit() {}

}
