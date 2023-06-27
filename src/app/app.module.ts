import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FacebookComponent} from './modules/facebook/facebook.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";
import {AppConfigService} from './service/app-config.service';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AuthenModule} from "./modules/authen/authen.module";
export function initializeApp(appConfig: AppConfigService): any {
  return () => appConfig.load();
}

const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/authen/authen.module').then((m) => m.AuthenModule),
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FacebookComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {relativeLinkResolution: 'legacy', useHash: true}),
    AuthenModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
