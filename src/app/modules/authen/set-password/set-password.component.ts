import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbToast} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IUser} from "../../../core/model/user";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {
  formGroup: FormGroup;

  isSave = false;

  constructor(public modal: NgbActiveModal, public formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    }, {validators: this.validatorPassword.bind(this)});
  }

  ngOnInit(): void {
  }

  get password() {
    return this.formGroup!.get('password')!;
  }

  get confirmPassword() {
    return this.formGroup!.get('confirmPassword')!;
  }

  validatorPassword(formGroup: FormGroup): any {
    const {value: password} = formGroup.get('password')!;
    const {value: confirmPassword} = formGroup.get('confirmPassword')!;
    return password === confirmPassword ? null : {passwordNotMatch: true};
  }

  onSave(): void {
    this.isSave = true;
    if (this.formGroup.valid) {
      this.modal.close(true);
    }
  }

}
