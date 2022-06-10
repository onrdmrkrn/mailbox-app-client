import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "../LocalStorageService";
import {Messageservice} from "../_services/messageservice";
import {Message} from "../_data/entities/Message";
import {Item} from "../_data/entities/Item";
import {DialogBodyComponent} from "../dialog-body/dialog-body.component";


@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {
  messageList: Message[] | undefined;

  item: Item = {
    mail: ""
  };

  constructor(private localStorageService: LocalStorageService, private messagesService: Messageservice) {
  }

  ngOnInit(): void {
    var mail = this.localStorageService.getUserId("mail");
    this.callMailList(mail);
  }

  callMailList(mail: any) {
    this.item.mail = mail
    this.messagesService.consumers(this.item).subscribe(
      response => {
        console.log(response);
        if (response.meta.errorCode == 200) {
          this.messageList = response.messageList;
        } else {

          console.log('Hata Var ');
        }
      }, error => {
        console.log('Server down veya baskar bir hata var ' + error);

      }
    );
  }
}
