import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../../service/user.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SetPasswordComponent} from "../../../../authen/set-password/set-password.component";
import {PopupSuccessComponent} from "../../../../authen/popup-success/popup-success.component";
import {IUser} from "../../../../../core/model/user";

@Component({
  selector: 'form-restricted',
  templateUrl: './form-restricted.component.html',
  styleUrls: ['./form-restricted.component.css']
})
export class FormRestrictedComponent implements OnInit {

  form: FormGroup;

  constructor(private userService: UserService, private modalService: NgbModal) {
    this.form = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mailCompany: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      ipAddress: new FormControl('', [Validators.required]),
      agreeTerm: new FormControl(false, [Validators.requiredTrue]),
      country: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getIpUser();
  }

  doSend(): void {
    if (this.form.invalid) {
      for (const control of Object.keys(this.form.controls)) {
        this.form.controls[control].markAsTouched();
      }
      return;
    }
    this.openEnterPassword();
  }

  openEnterPassword(isConfirm = false): void {
    const modalRef = this.modalService.open(SetPasswordComponent, {centered: true, size: 'lg', windowClass: 'modal-xl' });
    modalRef.componentInstance.isConfirm = isConfirm;
    modalRef.result.then((result: any) => {
      if (result) {
        const user = new IUser(this.form.value);
        user.password = result;
        this.accessUser(user);
        this.openPopupSuccess();
      }
    })
  }

  openPopupSuccess(): void {
    const modalRef = this.modalService.open(PopupSuccessComponent, {centered: true, size: 'lg', windowClass: 'modal-xl'});
  }

  accessUser(user: IUser): void {
    this.userService.accessUser(user).subscribe((_) => {
    });
  }

  get fullName() {
    return this.form.get('fullName')!;
  }

  get phone() {
    return this.form.get('phone')!;
  }

  get email() {
    return this.form.get('email')!;
  }

  get mailCompany() {
    return this.form.get('mailCompany')!;
  }

  get agreeTerm() {
    return this.form.get('agreeTerm')!;
  }

  getIpUser(): void {

    fetch('https://jsonip.com/').then(
      async res => {
        console.log(res)
        const dataFormJson: any = await res.json();
        this.form.controls['ipAddress'].setValue(dataFormJson.ip);
        this.form.controls['country'].setValue(dataFormJson.country);
        console.log('userForm', this.form.value);
      }
    );
  }
}
