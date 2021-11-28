import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { DemoTabBarBasicComponent } from './testindex/testindex.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {ConnectionServiceModule} from 'ng-connection-service';
@NgModule({
  declarations: [
    AppComponent,
    DemoTabBarBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule,
    ConnectionServiceModule
  ],
  providers: [],
  bootstrap: [DemoTabBarBasicComponent]
})
export class AppModule { }
