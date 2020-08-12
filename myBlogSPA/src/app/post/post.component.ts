import { Component, OnInit } from '@angular/core';
// import { AlertifyService } from '../services/alertify.service';
import { Post} from '../shared/models/Post';
import { Resolve, Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: [
    './post.component.css',
    '../../assets/scss/clean-blog.min.css'
  ]
})
export class PostComponent implements OnInit {

  post: Post;
  constructor(
    // private alertifyService: AlertifyService,
    private route: ActivatedRoute,
    private r: Router,
    private alertifyService: AlertifyService
  ) { 
  }

  ngOnInit() {
    this.route.data.subscribe(({post}) => {
      this.post = post;
      console.log(this.post.content);
    }, error => {
      this.alertifyService.error(error);
    });

    
  }

}
