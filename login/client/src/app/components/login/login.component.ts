import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userSvc:UserService) { }

  ngOnInit() {
  }

  public save(username,password){
    console.log(username,password)
    var obj={
      username:username,
      password:password
    }
    this.userSvc.getUser(obj)
    .subscribe(data=>console.log(data))
  }

}
