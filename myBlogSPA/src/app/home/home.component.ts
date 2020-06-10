import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Post} from '../shared/models/Post';
import { Resolve, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    '../../assets/scss/clean-blog.min.css'
  ]
})
export class HomeComponent implements OnInit {

  data: any;
  posts: Post[];
  images: any;

  constructor(
    private alertifyService: AlertifyService,
    private route: ActivatedRoute
    ) {
      this.posts = {} as Post[];
    }

  ngOnInit() {
    this.images = [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/NGC_4414_%28NASA-med%29.jpg/1451px-NGC_4414_%28NASA-med%29.jpg',
      'assets/img/one.png'
    ];
    this.data = this.route.snapshot.data;
    this.route.data.subscribe(({postlist})  => {
      this.posts = postlist.result;
    });
    

  }

  runsuccess() {
    this.alertifyService.success('Alertify Success');
  }

}
