import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() ouputLoginMode = new EventEmitter<boolean>();
  loginMode = false;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loggedIn() {
    const status = this.authService.loggedIn();
    if (status) {
      this.loginMode = false;
      this.ouputLoginMode.emit(this.loginMode);
    }
    return status;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/topics']);
    console.log('logged out');
  }

  loginToggle(){
    this.loginMode = true;
    this.ouputLoginMode.emit(this.loginMode);
  }



}
