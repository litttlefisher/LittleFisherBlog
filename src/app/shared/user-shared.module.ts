import { NgModule } from '@angular/core';
import {UserLoginComponent} from "../user/user-login/user-login.component";
import {UserRegisterComponent} from "../user/user-register/user-register.component";
import {CommonSharedModule} from "./common-shared.module";
import {MdButtonModule, MdCheckboxModule, MdDialogModule, MdInputModule} from "@angular/material";

@NgModule({
  imports: [
    CommonSharedModule,
    MdInputModule,
    MdCheckboxModule,
    MdButtonModule,
    MdDialogModule
  ],
  declarations: [
    UserLoginComponent,
    UserRegisterComponent
  ],
  exports: [
    UserLoginComponent,
    UserRegisterComponent
  ]
})
export class UserSharedModule { }
