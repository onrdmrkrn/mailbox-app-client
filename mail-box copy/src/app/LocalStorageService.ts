import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class LocalStorageService {
  constructor() {
  }
  public setUserId(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getUserId(key: string) {
    return localStorage.getItem(key)
  }

  public setMail(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getMail(key: string) {
    if (localStorage.getItem(key) == null){
      return "";
    }else {
      return localStorage.getItem(key)
    }
  }

  public setPassword(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getPassword(key: string) {
    return localStorage.getItem(key)
  }



  public clear() {
    localStorage.clear();
  }

}
