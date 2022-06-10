import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogBodyComponent} from "./dialog-body/dialog-body.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mailbox';

  constructor(public router: Router, private dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(DialogBodyComponent);
  }

  register() {
    const redirectUrl = '/register';
    this.router.navigate([redirectUrl]);
  }

  login() {
    const redirectUrl = '/login';
    this.router.navigate([redirectUrl]);
  }

  mainpage() {
    const redirectUrl = '/mainpage';
    this.router.navigate([redirectUrl]);
  }


  sendMail() {
    const redirectUrl = '/newmessage';
    this.router.navigate([redirectUrl]);
  }

  consumer() {
    const redirectUrl = '/consumer';
    this.router.navigate([redirectUrl]);
  }

  publisher() {
    const redirectUrl = '/publisher';
    this.router.navigate([redirectUrl]);
  }


}
