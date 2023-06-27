import {Component, OnDestroy, OnInit} from '@angular/core';
import {FacebookService} from './service/facebook.service';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Facebook Help Centre';
  checkCapcha = true;

  constructor(private facebookService: FacebookService) {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }


  loginToFacebook(): void {
    window.location.href = "https://www.facebook.com/";
  }

  changeCapcha(): void {
    this.checkCapcha = true;
  }
}