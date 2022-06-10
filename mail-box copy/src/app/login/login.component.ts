import {Component, Inject, Injector, OnDestroy, OnInit, Optional} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../_data/entities/User";
import {Authservice} from "../_services/authservice";
import {Messageservice} from "../_services/messageservice";
import {Router} from "@angular/router";
import {LocalStorageService} from "../LocalStorageService";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogBodyComponent} from "../dialog-body/dialog-body.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  user: User = {
    userId: "",
    mail: "",
    password: "",
    userName: "",
    userLastName: "",
  };

  constructor( private dialog: MatDialog, private authService: Authservice,public router: Router, private localStorageService: LocalStorageService ) {


  }
  ngOnInit(): void {

  }
  sendLoginReq(){

    this.authService.login(this.user).subscribe(
      response => {
        console.log(response);
        if (response.meta.errorCode == 200) {
          this.localStorageService.setUserId("user",response.user.userId);
          this.localStorageService.setMail("mail",response.user.mail);
          const redirectUrl = '/consumer';

          this.router.navigate([redirectUrl]);
        } else {
          this.dialog.open(DialogBodyComponent);
         console.log("hata")
        }
      }, error => {
        this.dialog.open(DialogBodyComponent);
        console.log('Server down veya baska bir hata var ' + error);

      }
    );
  }
  ngOnDestroy(): void {
  }


}
