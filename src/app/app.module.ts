import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";
import {AppConfigService} from './service/app-config.service';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AuthenModule} from "./modules/authen/authen.module";
import {NgxPaginationModule} from "ngx-pagination";
import {NgxCaptchaModule} from "ngx-captcha";

export function initializeApp(appConfig: AppConfigService): any {
  return () => appConfig.load();
}

const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/authen/authen.module').then((m) => m.AuthenModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'business',
    loadChildren: () =>
      import('./modules/business/business.module').then((m) => m.BusinessModule),
  },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {relativeLinkResolution: 'legacy', useHash: true}),
    AuthenModule,
    NgxPaginationModule,
    NgxCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
