import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FacebookComponent} from './modules/facebook/facebook.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";
import {AppConfigService} from './service/app-config.service';
const appRoutes: Routes = []
export function initializeApp(appConfig: AppConfigService): any {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent,
    FacebookComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {relativeLinkResolution: 'legacy', useHash: true}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
