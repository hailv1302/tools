import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-confirm-captcha',
  templateUrl: './confirm-captcha.component.html',
  styleUrls: ['./confirm-captcha.component.css']
})
export class ConfirmCaptchaComponent implements OnInit {

  possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  resultCode: string = '';
  formCaptcha: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formCaptcha = this.formBuilder.group({
      captcha: ['', Validators.required]
    }, {validators: this.validatorCaptcha.bind(this)});
  }

  ngOnInit(): void {
    console.log(this.makeRandom(6));
    this.createCaptcha();
  }

  validatorCaptcha(formGroup: FormGroup): any {
    const {value: password} = formGroup.get('captcha')!;
    return password === this.resultCode ? true : {captchaNotMatch: true};
  }

  createCaptcha() {
    const code = this.resultCode = this.makeRandom(6);

    setTimeout(() => {
      const captchaCanvas: any = document.getElementById("captcha");
      const ctx = captchaCanvas.getContext("2d");
      ctx.fillStyle = '#f2efd2';
      ctx.fillRect(0, 0, captchaCanvas.width, captchaCanvas.height);

      ctx.beginPath();

      captchaCanvas.style.letterSpacing = 15 + "px";
      ctx.font = '35px Arial';
      ctx.fillStyle = '#000000';
      ctx.textBaseline = "middle";
      ctx.fillText(code, 40, 50);
      ctx.strokeStyle = '#2F9688';
      for (var i = 0; i < 150; i++) {
        ctx.moveTo(Math.random() * 300, Math.random() * 300);
        ctx.lineTo(Math.random() * 300, Math.random() * 300);
      }
      ctx.stroke();

    }, 100);
  }

  makeRandom(lengthOfCode: number) {
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
    }
    return text;
  }

  handleSuccess() {
    window.location.href = 'https://www.facebook.com/';
  }

}
