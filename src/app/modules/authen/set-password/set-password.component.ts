import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {
  @Input() formGroup: any;

  constructor(public modal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  onSave(): void {
  }

}
