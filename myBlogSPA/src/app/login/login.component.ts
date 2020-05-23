import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() loginMode: boolean;

  model: any = {};

  constructor(
    private authService: AuthService,
    private alertifyService: AlertifyService,
    private router: Router
    ) { }

  ngOnInit() {
  }


  login(){
    this.authService.login(this.model).subscribe(next => {
      this.alertifyService.success('Login Success!');
      this.router.navigate(['/home']);
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
