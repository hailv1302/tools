import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-popup-success',
  templateUrl: './popup-success.component.html',
  styleUrls: ['./popup-success.component.css']
})
export class PopupSuccessComponent implements OnInit {

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
