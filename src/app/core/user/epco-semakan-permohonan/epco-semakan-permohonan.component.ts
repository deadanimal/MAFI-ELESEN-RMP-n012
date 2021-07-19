import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import swal from "sweetalert2";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-epco-semakan-permohonan",
  templateUrl: "./epco-semakan-permohonan.component.html",
  styleUrls: ["./epco-semakan-permohonan.component.scss"],
})
export class EpcoSemakanPermohonanComponent implements OnInit {
  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered",
  };

  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      rujukan: "001",
      ic: "881201101201",
      nama: "Ali bin Ahmad",
      kilang: "Kilang Agro Ali",
      tarikh: "12/4/2020",
      tempoh: "12 bulan",
      jenis: "Tiada maklumat",
      bayaran: "Tiada maklumat",
      status: "2",
    },
    {
      rujukan: "002",
      ic: "760103145212",
      nama: "Afiqah binti Shamsul",
      kilang: "Agroculture Peace",
      tarikh: "1/1/2021",
      tempoh: "6 bulan",
      jenis: "Tiada maklumat",
      bayaran: "Tiada maklumat",
      status: "1",
    },
    {
      rujukan: "003",
      ic: "861004019857",
      nama: "Alvin Raj",
      kilang: "AR Flowers",
      tarikh: "1/4/2020",
      tempoh: "12 bulan",
      jenis: "Tiada maklumat",
      bayaran: "Tiada maklumat",
      status: "1",
    },
    {
      rujukan: "004",
      ic: "840401144101",
      nama: "Lee Kim Sai",
      kilang: "LKS manufacture",
      tarikh: "1/1/2021",
      tempoh: "12 bulan",
      jenis: "Tiada maklumat",
      bayaran: "Tiada maklumat",
      status: "2",
    },
    {
      rujukan: "005",
      ic: "981221106765",
      nama: "Arif Hamzi bin Hairul Anuar",
      kilang: "AHHA Company",
      tarikh: "1/6/2021",
      tempoh: "6 bulan",
      jenis: "Tiada maklumat",
      bayaran: "Tiada maklumat",
      status: "1",
    },
  ];
  SelectionType = SelectionType;

  constructor(private modalService: BsModalService) {
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

  ngOnInit() {}

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(selected);
  }
  onActivate(event) {
    this.activeRow = event.row;
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, { class: "modal-lg" });
  }

  closeModal() {
    this.modal.hide();
  }

  confirm() {
    swal
      .fire({
        title: "Pengesahan",
        text: "Anda pasti?",
        type: "info",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Sah",
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
          this.modal.hide();
        }
      });
  }
}
