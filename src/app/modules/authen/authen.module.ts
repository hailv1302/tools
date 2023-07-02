import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SetPasswordComponent } from './set-password/set-password.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    RegisterComponent,
    SetPasswordComponent
  ],
  exports: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class AuthenModule { }
