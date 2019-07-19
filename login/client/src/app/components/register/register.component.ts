import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { user } from '../../models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private data:user
  constructor(private userSvc:UserService) { }

  ngOnInit() {
  }

  public save(name,password,role){
    
    var obj={
      username:name,
      password:password,
      role:role,
      
    }
    this.userSvc.addUser(obj)
    .subscribe(data=>this.data=data)
    
  }

}
