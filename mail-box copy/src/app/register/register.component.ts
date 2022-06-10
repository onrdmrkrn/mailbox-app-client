import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {User} from "../_data/entities/User";
import {Authservice} from "../_services/authservice";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  user: User = {
    userId: "",
    mail: "",
    password: "",
    userName: "",
    userLastName: "",
  };
  form!: FormGroup;

  constructor(private authService: Authservice, private formBuilder: FormBuilder,public router: Router, private appComponent: AppComponent) {
  }

  ngOnInit(): void {

  }

  sendReq() {
    console.log('sendReq');
    console.log('veri' + this.user);
    this.authService.register(this.user).subscribe(
      response => {
        console.log(response);
        if (response.meta.errorCode == 200) {
          console.log('Hata Yok ');
          const redirectUrl = '/login';
          this.router.navigate([redirectUrl]);
        } else {
          //TODO call open dialog with error message ornek openDialog(response.meta.errorDesc);
          this.appComponent.openDialog();
          console.log('Hata Var ');
        }
      }, error => {
        console.log('Server down veya baskar bir hata var ' + error);
      }
    );

  }
  openDialog(message:String) {

  }

  ngOnDestroy() {

  }

}
