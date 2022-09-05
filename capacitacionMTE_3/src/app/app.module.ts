import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import {ButtonModule} from 'primeng/button';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponenteDosComponent } from './componente-dos/componente-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    ComponenteDosComponent,
      

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    MultiSelectModule,
    DropdownModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
