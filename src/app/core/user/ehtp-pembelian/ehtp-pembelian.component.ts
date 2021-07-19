import { Component, OnInit,} from "@angular/core";
import swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators,} from '@angular/forms';

@Component({
  selector: 'app-ehtp-pembelian',
  templateUrl: './ehtp-pembelian.component.html',
  styleUrls: ['./ehtp-pembelian.component.scss']
})
export class EhtpPembelianComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  confirm() {
    swal.fire({
      title: "Pengesahan",
      text: "Pasti untuk membayar?",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-info",
      confirmButtonText: "Pasti",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      cancelButtonText: "Batal"
    }).then((result) => {
      if (result.value) {
        this.register()
      }
    })
  }

  register() {
    swal.fire({
      title: "Berjaya",
      text: "Pembayaran sudah berjaya",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Tutup"
    })
  }

}
