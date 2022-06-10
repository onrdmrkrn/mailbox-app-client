import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Messageservice} from "../_services/messageservice";
import {Message} from "../_data/entities/Message";
import {MessageResponse} from "../_data/response/MessageResponse";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  messageId : string = "0";
  messageResponse!: MessageResponse;
  constructor(private route: ActivatedRoute,private router: Router,private messagesService: Messageservice) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      this.messageId = params.get("messageId");
      this.retriveDetail(this.messageId);
    })
  }

  private retriveDetail(catalogId: any) {
    console.log("id",catalogId);
    this.messagesService.callDetail(catalogId).subscribe(
      response => {
        console.log(response);
        if (response.meta.errorCode == 200) {
          this.messageResponse=response;
        } else {
          console.log('Hata Var ');
        }
      }, error => {
        console.log('Server down veya baskar bir hata var ' + error);

      }
    );
  }
}
