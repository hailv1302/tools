import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;

  days: number[] = [];

  months: number[] = [];

  years: number[] = [];

  dateSelect = new Date();

  constructor() {
    this.userForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mailCompany: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      birthDay: new FormControl('', Validators.required),
      ipAddress: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      dateSelect: new FormControl(this.dateSelect.getDate(), Validators.required),
      monthSelect: new FormControl(this.dateSelect.getMonth() + 1, Validators.required),
      yearSelect: new FormControl(this.dateSelect.getFullYear(), Validators.required),
    });
  }

  ngOnInit(): void {
    this.setDataDays();
    this.setDataMonths();
    this.setDataYears();
    this.getIpUser();
  }

  setDataDays(): void {
    for (let i = 1; i <= 31; i++) {
      this.days.push(i);
    }
  }

  setDataMonths(): void {
    for (let i = 1; i <= 12; i++) {
      this.months.push(i);
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
        this.userForm.controls['ipAddress'].setValue(dataFormJson.ip);
        this.userForm.controls['country'].setValue(dataFormJson.country);
        console.log('userForm', this.userForm.value);
      }
    );
  }
}
