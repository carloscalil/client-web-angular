import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginAdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
