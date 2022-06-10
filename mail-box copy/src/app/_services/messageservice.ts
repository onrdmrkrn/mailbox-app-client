import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";


import {Observable} from "rxjs";
import {MessageResponse} from "../_data/response/MessageResponse";
import {Message} from "../_data/entities/Message";
import {MessageListResponse} from "../_data/response/MessageListResponse";
import {RegisterResponse} from "../_data/response/RegisterResponse";
import {Item} from "../_data/entities/Item";


const MAILBOX_API = 'http://localhost:5050/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'},
  )
};


@Injectable({
  providedIn: 'root'
})
export class Messageservice {
  constructor(private http: HttpClient) {
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:4200');
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
  }

  consumers(item : Item): Observable<MessageListResponse> {
    return this.http.post<MessageListResponse>(MAILBOX_API + 'mailbox/message/consumer', item
      , httpOptions);
  }

  publishers(item: Item): Observable<MessageListResponse> {
    return this.http.post <MessageListResponse>(MAILBOX_API + 'mailbox/message/publisher' ,item
      , httpOptions);
  }
  callDetail(messageId: any): Observable<MessageResponse> {
    return this.http.get<MessageResponse>(MAILBOX_API + 'mailbox/message/find/' + messageId
      , httpOptions);
  }
  sendMessage(message: Message,userId: any): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(MAILBOX_API + 'mailbox/message/send/'+userId ,message
      , httpOptions);
  }


}
