import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() snavOutput = new EventEmitter<boolean>();
  snavStatus = false;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loggedIn() {
    const status = this.authService.loggedIn();
    return status;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/topics']);
    console.log('logged out');
  }


  snavtoggle(){
    this.snavStatus = !this.snavStatus;
    this.snavOutput.emit(this.snavStatus);
  }



}
