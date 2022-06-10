import {BaseResponse} from "./BaseResponse";
import {Message} from "../entities/Message";

export class MessageResponse extends BaseResponse{
  message! : Message ;
}
