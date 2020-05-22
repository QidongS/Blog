import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  runsuccess(){
    this.alertifyService.success('Alertify Success');
  }

}
