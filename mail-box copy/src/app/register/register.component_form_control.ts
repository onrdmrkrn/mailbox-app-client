import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {User} from "../_data/entities/User";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
 /* form!: FormGroup;*/
  email: any
  password: any


  user!:User;

  constructor(/*private formBuilder: FormBuilder,*/ private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    /*this.form = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      userName: ["", Validators.required],
      userLastName: ["", Validators.required],
    })*/
  }

  sendReq() {

    /*
    this.httpClient.post<any[]>('http://localhost:8080/gateway/auth/register', this.form.value).subscribe({
      next: data => {
        console.log("Apiden gelen sonuc ", data);
        console.log("Parse edilen json ",);
        //this.totalAngularPackages = data.total;
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })*/
  }

  ngOnDestroy() {

  }

}
