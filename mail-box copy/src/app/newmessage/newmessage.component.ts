import { Component, OnInit } from '@angular/core';
import {DialogBodyComponent} from "../dialog-body/dialog-body.component";
import {User} from "../_data/entities/User";
import {Message} from "../_data/entities/Message";
import {Messageservice} from "../_services/messageservice";
import {Router} from "@angular/router";
import {LocalStorageService} from "../LocalStorageService";

@Component({
  selector: 'app-newmessage',
  templateUrl: './newmessage.component.html',
  styleUrls: ['./newmessage.component.css']
})
export class NewmessageComponent implements OnInit {

  message: Message = {
    consumer: "",
    publisher: "",
    mailDesc: "" ,
    status: 0,
    mailTitle: "" ,
    messageId: "" ,
    readed: false ,
  };

  constructor(private localStorageService: LocalStorageService,private messageervice: Messageservice,public router: Router) { }

  ngOnInit(): void {
  }

  sendNewMessage(){
    // @ts-ignore
    this.message.publisher=this.localStorageService.getUserId("mail").toString();

    this.messageervice.sendMessage(this.message,this.localStorageService.getUserId("user")).subscribe(
      response => {
        console.log(response);
        if (response.meta.errorCode == 200) {
          const redirectUrl = '/consumer';
          this.router.navigate([redirectUrl]);
        } else {
          console.log("hata")
        }
      }, error => {

        console.log('Server down veya baska bir hata var ' + error);

      }
    );
  }
}
