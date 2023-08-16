import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-confirm-captcha',
  templateUrl: './confirm-captcha.component.html',
  styleUrls: ['./confirm-captcha.component.css']
})
export class ConfirmCaptchaComponent implements OnInit {

  resultCode: string = '';
  formCaptcha: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formCaptcha = this.formBuilder.group({
      captcha: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  handleSuccess(response: string) {
    this.formCaptcha.controls['captcha'].setValue(response);
  }

}
