import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

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

}
