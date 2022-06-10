export interface Message{
  consumer: string;
  publisher: string;
  mailDesc: string ;
  status: number;
  mailTitle: string ;
  messageId: string ;
  readed: boolean ;
}
