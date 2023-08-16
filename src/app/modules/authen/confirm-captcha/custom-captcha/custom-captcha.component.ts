import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Constant} from "../../../../core/config/constant";

@Component({
  selector: 'app-custom-captcha',
  templateUrl: './custom-captcha.component.html',
  styleUrls: ['./custom-captcha.component.css']
})
export class CustomCaptchaComponent implements OnInit {
  keyCaptcha = Constant.KEY_CAPTCHA;
  @Output() response = new EventEmitter<string>();

  handleCaptchaResponse(response: string) {
    console.log('Captcha response:', response);
    this.response.emit(response);
    // Gửi token reCAPTCHA lên máy chủ để xác minh
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
