import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AlertifyService } from '../services/alertify.service';
import { User } from '../shared/models/User';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  showInfo = false;

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

  infoToggle() {
    this.showInfo = !this.showInfo;
  }
}
