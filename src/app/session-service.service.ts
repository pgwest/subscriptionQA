import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  private storageName: string = "Settings";

  constructor() { }

  setSettings(data: any) {
    localStorage.setItem(this.storageName, JSON.stringify(data));
    // console.log(data);
    // console.log("data stored for session");
  }

  getUserSettings() {
    let data = localStorage.getItem(this.storageName);
    // console.log("data retrieved");
    // console.log(data);
    return JSON.parse(data);
  }

  clearUserSettings() {
    localStorage.removeItem(this.storageName);
  }

  cleanAll() {
    console.log("cleanedUserSession");
    localStorage.clear();
    location.reload();
  }


}
