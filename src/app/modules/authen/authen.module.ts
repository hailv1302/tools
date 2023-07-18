import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SetPasswordComponent} from './set-password/set-password.component';
import {ConfirmCaptchaComponent} from './confirm-captcha/confirm-captcha.component';
import { PopupSuccessComponent } from './popup-success/popup-success.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { CustomCheckboxComponent } from './confirm-captcha/custom-checkbox/custom-checkbox.component';
import {NgxCaptchaModule} from "ngx-captcha";

const routes: Routes = [
  {
    path: '',
    component: ConfirmCaptchaComponent
  }
];

@NgModule({
  declarations: [
    RegisterComponent,
    SetPasswordComponent,
    ConfirmCaptchaComponent,
    PopupSuccessComponent,
    RequestPasswordComponent,
    CustomCheckboxComponent,
  ],
  exports: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgxCaptchaModule,
  ]
})
export class AuthenModule {
}
