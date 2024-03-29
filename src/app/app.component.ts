import {Component, OnDestroy, OnInit} from '@angular/core';
import {FacebookService} from './service/facebook.service';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RegisterComponent} from "./modules/authen/register/register.component";
import {SetPasswordComponent} from "./modules/authen/set-password/set-password.component";
import {Router} from "@angular/router";

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Meta Business Help Centre ';
  checkCapcha = true;

  constructor(private facebookService: FacebookService, private modalService: NgbModal, private router: Router) {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }


  loginToFacebook(): void {
    window.location.href = "https://www.facebook.com/";
  }

  moveToCaptcha(): void {
    this.router.navigate(['/captcha']);
  }

  createAccount(): void {
    this.modalService.open(RegisterComponent, { centered: true });
  }

  changeCapcha(): void {
    this.checkCapcha = true;
  }
}
