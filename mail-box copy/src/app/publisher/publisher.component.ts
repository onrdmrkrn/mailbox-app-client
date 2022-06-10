import { Component, OnInit } from '@angular/core';
import {Message} from "../_data/entities/Message";
import {LocalStorageService} from "../LocalStorageService";
import {Messageservice} from "../_services/messageservice";
import {AppComponent} from "../app.component";
import {Item} from "../_data/entities/Item";

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {


  messageList: Message[] | undefined;

  item: Item = {
    mail: ""
  };

  constructor(private localStorageService: LocalStorageService,private messagesService: Messageservice) { }

  ngOnInit(): void {
    var mail = this.localStorageService.getUserId("mail");
    this.callMailList(mail);
  }
  callMailList(mail: any) {
    this.item.mail=mail
    this.messagesService.publishers(this.item).subscribe(
      response => {
        console.log(response);
        if (response.meta.errorCode == 200) {
          this.messageList=response.messageList;
        } else {
          console.log('Hata Var ');
        }
      }, error => {
        console.log('Server down veya baskar bir hata var ' + error);

      }
    );
  }

}
