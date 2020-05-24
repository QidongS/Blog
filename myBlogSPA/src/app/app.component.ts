import { Component, OnInit } from '@angular/core';
import {AuthService} from './services/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';
// import {ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // @ViewChild('sidenav', {static: false}) sidenavRef: ElementRef;

  snavStatus: any;
  jwtHelper = new JwtHelperService();


  constructor(private authService: AuthService) {}

  ngOnInit(){
    this.snavStatus = false;
    const token = localStorage.getItem('token');
    if(token){
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }

  // getSnavMode($event){
  //   this.snavStatus = $event;
  // }

  

}
