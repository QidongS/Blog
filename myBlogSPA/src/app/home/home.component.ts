import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/NGC_4414_%28NASA-med%29.jpg/1451px-NGC_4414_%28NASA-med%29.jpg'
  ];
  constructor(private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  runsuccess(){
    this.alertifyService.success('Alertify Success');
  }

}
