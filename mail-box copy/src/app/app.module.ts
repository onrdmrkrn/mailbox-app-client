import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { PublisherComponent } from './publisher/publisher.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailComponent } from './detail/detail.component';
import {MatDialogModule} from "@angular/material/dialog";
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import {MatButtonModule} from "@angular/material/button";
import { NewmessageComponent } from './newmessage/newmessage.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PublisherComponent,
    ConsumerComponent,
    DetailComponent,
    DialogBodyComponent,
    NewmessageComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DialogBodyComponent]
})
export class AppModule { }
