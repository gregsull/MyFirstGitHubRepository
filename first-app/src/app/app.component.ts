import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Servername = 'Apollo';
  ServerPID = 11;
  ServerStatus = 'offline';
  statusFlag = false;
  buttonState = true;
  flag = true;

  constructor(){
    setTimeout(() => {
      this.buttonState = false;
    }, 2500)
  }

  toggleServerStatus() {
    this.statusFlag = !this.statusFlag;
    if (this.statusFlag === true) {
      this.ServerStatus = 'online';
    } else
    {
      this.ServerStatus = 'offline'
    }
    return this.ServerStatus;
  }

  toggleFlag(){
    this.flag = !this.flag;
    return this.flag;
  }
}
