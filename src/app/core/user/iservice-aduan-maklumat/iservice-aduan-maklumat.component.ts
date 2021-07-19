import { Component, OnInit } from '@angular/core';
import {Rating} from "ngx-rating";

@Component({
  selector: 'app-iservice-aduan-maklumat',
  templateUrl: './iservice-aduan-maklumat.component.html',
  styleUrls: ['./iservice-aduan-maklumat.component.scss'],
  providers: [Rating]
})
export class IserviceAduanMaklumatComponent implements OnInit {

  y = 0;

  constructor() { }

  ngOnInit() {
  }

}
