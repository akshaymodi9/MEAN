import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public save(username,password){
    console.log(username,password)

    var key = CryptoJS.enc.Base64.parse("HackersSeeIT2");
    var iv  = CryptoJS.enc.Base64.parse("#base64IV#");

    var encrypted = CryptoJS.AES.encrypt(password, key, {iv: iv});
    var hashed=CryptoJS.SHA1(password,'heelo')
    console.log(encrypted.toString(),hashed.toString())
  }


}
