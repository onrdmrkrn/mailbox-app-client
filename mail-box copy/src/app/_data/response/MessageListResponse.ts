import {BaseResponse} from "./BaseResponse";
import {Message} from "../entities/Message";

export interface MessageListResponse extends BaseResponse{
  messageList: Message[];
}
