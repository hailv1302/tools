import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { HelpComponent } from './help/help.component';
import { SideLeftComponent } from './help/components/side-left/side-left.component';
import { FormRestrictedComponent } from './help/components/form-restricted/form-restricted.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: 'help',
    component:HelpComponent
  }
];

@NgModule({
  declarations: [
    HelpComponent,
    SideLeftComponent,
    FormRestrictedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class BusinessModule { }
