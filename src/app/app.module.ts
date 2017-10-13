import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './core/components/app/app.component';
import {AuthModule} from './auth/auth.module';
import {StoreModule} from "@ngrx/store";
import {reducers} from "./reducers/index";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {HttpModule} from "@angular/http";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    HttpModule,
    EffectsModule.forRoot([]),
    AuthModule.forRoot(),
    CoreModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
