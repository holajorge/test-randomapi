import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';

import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    UsersComponent, 
    
  ],
  imports: [
    BrowserModule,HttpClientModule,NgSelectModule,
    ReactiveFormsModule,BrowserAnimationsModule,
    CommonModule, ToastrModule.forRoot(), 
  ],
  exports:[
   
    UsersComponent
  ]
})
export class PagesModule { }
