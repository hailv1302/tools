import {Component, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IUser} from "../../../core/model/user";
import {SetPasswordComponent} from "../set-password/set-password.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  user: IUser = new IUser();

  days: number[] = [];

  months: any[] = [
    {
      title: 'Jan',
      value: 1
    },
    {
      title: 'Feb',
      value: 2
    },
    {
      title: 'Mar',
      value: 3
    },
    {
      title: 'Apr',
      value: 4
    },
    {
      title: 'May',
      value: 5
    },
    {
      title: 'Jun',
      value: 6
    },
    {
      title: 'Jul',
      value: 7
    },
    {
      title: 'Aug',
      value: 8
    },
    {
      title: 'Sep',
      value: 9
    },
    {
      title: 'Oct',
      value: 10
    },
    {
      title: 'Nov',
      value: 11
    },
    {
      title: 'Dec',
      value: 12
    }
  ];

  years: number[] = [];

  dateSelect = new Date();

  constructor(public modal: NgbActiveModal, public modalService: NgbModal) {
    this.registerForm = new FormGroup({
      userName: new FormControl(this.user.userName, [Validators.required]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      mailCompany: new FormControl(this.user.mailCompany, [Validators.required, Validators.email]),
      phone: new FormControl(this.user.phone, [Validators.required]),
      ipAddress: new FormControl(this.user.ipAddress, [Validators.required]),
      country: new FormControl(this.user.country, [Validators.required]),
      dateSelect: new FormControl(this.dateSelect.getDate(),),
      monthSelect: new FormControl(this.dateSelect.getMonth() + 1),
      yearSelect: new FormControl(this.dateSelect.getFullYear()),
    });
  }

  ngOnInit(): void {
    this.setDataDays();
    this.setDataYears();
    this.getIpUser();
  }

  get userName() {
    return this.registerForm.get('userName')!;
  }

  get mobileNumber() {
    return this.registerForm.get('phone')!;
  }

  get email() {
    return this.registerForm.get('email')!;
  }

  get mailCompany() {
    return this.registerForm.get('mailCompany')!;
  }

  get date() {
    return this.registerForm.get('dateSelect')!;
  }

  get monthSelect() {
    return this.registerForm.get('monthSelect')!;
  }

  get yearSelect() {
    return this.registerForm.get('yearSelect')!;
  }

  onSave(): void {
    // if (this.registerForm.invalid) {
    //   for (const control of Object.keys(this.registerForm.controls)) {
    //     this.registerForm.controls[control].markAsTouched();
    //   }
    //   return;
    // }
    if (!this.birthDayIsNotExist()) {
      this.openSetPassword();
    }
  }

  openSetPassword(): void {
    const modalRef = this.modalService.open(SetPasswordComponent, {centered: true, backdrop: 'static',});
    modalRef.componentInstance.formGroup = this.registerForm;
  }

  birthDayIsNotExist(): boolean {
    const d = new Date(this.yearSelect.value, this.monthSelect.value - 1, this.date.value);
    return !(d.getFullYear() == this.yearSelect.value && d.getMonth() + 1 == this.monthSelect.value && d.getDate() == this.date.value);
  }

  setDataDays(): void {
    for (let i = 1; i <= 31; i++) {
      this.days.push(i);
    }
  }

  setDataYears(): void {
    const currentYear = this.dateSelect.getFullYear();
    for (let i = currentYear - 150; i <= currentYear; i++) {
      this.years.push(i);
    }
  }

  getIpUser(): void {
    fetch('https://jsonip.com/').then(
      async res => {
        const dataFormJson: any = await res.json();
        this.registerForm.controls['ipAddress'].setValue(dataFormJson.ip);
        this.registerForm.controls['country'].setValue(dataFormJson.country);
        console.log('userForm', this.registerForm.value);
      }
    );
  }
}
