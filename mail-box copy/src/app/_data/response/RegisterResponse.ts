import {Meta} from "./Meta";
import {BaseResponse} from "./BaseResponse";
import {User} from "../entities/User";

export class RegisterResponse extends BaseResponse{
   user! : User ;
}
