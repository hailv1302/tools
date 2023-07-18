import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.css'],
})
export class CustomCheckboxComponent implements OnInit {
  handleCaptchaResponse(response: string) {
    console.log('Captcha response:', response);
    // Gửi token reCAPTCHA lên máy chủ để xác minh
  }

  constructor() { }

  ngOnInit(): void {
  }

}
