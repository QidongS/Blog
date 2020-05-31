import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AlertifyService } from '../services/alertify.service';
import { User } from '../shared/models/User';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  user: User;
  email: string;
  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.user = {} as User;
   }


  ngOnInit() {
    const id = this.authService.decodedToken.nameid;
    this.loadUserInfo(id);
  }

  loadUserInfo(id: number) {
    this.userService.getUser(id).subscribe((user: User) => {
      this.user = user;
      console.log('loaded user success:' + user.userName);
    }, error => {
      this.alertify.error(error);
    });
  }

  submit(){
    console.log("email got:"+this.email);
  }
  

}