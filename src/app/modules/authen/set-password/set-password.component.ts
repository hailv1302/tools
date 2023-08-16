import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbToast} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {
  @Input() isConfirm: boolean = false;
  formGroup: FormGroup;

  countSave = 0;

  constructor(public modal: NgbActiveModal, public formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  get password() {
    return this.formGroup!.get('password')!;
  }

  onSave(): void {
    if (this.formGroup.valid) {
      if (this.countSave > 0) {
        this.modal.close(this.password.value);
      } else {
        this.countSave++;
        this.password.setErrors({'wrongPassword': true});
        this.password.setValue('')
      }
    }
  }

}
