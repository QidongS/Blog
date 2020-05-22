import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() loginMode: boolean;

  model: any = {};

  constructor(
    private authService: AuthService,
    private alertifyService : AlertifyService
    ) { }

  ngOnInit() {
  }


  login(){
    this.authService.login(this.model).subscribe(next => {
      this.alertifyService.success('Login Success!');
    }, error => {
      this.alertifyService.error('Login Error');
    });
  }

  loggedIn(){
    var status = this.authService.loggedIn();
    return this.authService.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    console.log('logged out');
  }

  // toggledLogin(){
  //   const token = localStorage.getItem('token');
  //   return this.loginMode && !(!!token);
  // }
}
