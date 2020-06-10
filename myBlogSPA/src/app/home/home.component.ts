import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Post} from '../shared/models/Post';
import { Resolve, Router, ActivatedRoute } from '@angular/router';
import { Pagination } from '../shared/models/Pagination';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    '../../assets/scss/clean-blog.min.css'
  ]
})
export class HomeComponent implements OnInit {

  posts: Post[];
  images: any;
  pagination: Pagination;

  constructor(
    private alertifyService: AlertifyService,
    private route: ActivatedRoute,
    private r: Router
    ) {
      this.posts = {} as Post[];
    }

  ngOnInit() {
    this.images = [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/NGC_4414_%28NASA-med%29.jpg/1451px-NGC_4414_%28NASA-med%29.jpg',
      'assets/img/one.png'
    ];
    this.route.data.subscribe(({postlist})  => {
      this.posts = postlist.result;
      this.pagination = postlist.pagination;
    },error=>{
      console.log(error);
    });

    if(this.posts==null || this.pagination==null){
      this.r.navigate(['/home']);
    }

  }

  nextPage(){
    this.r.navigate(['/page/'+this.pagination.currentPage+1]);
    console.log(this.pagination.currentPage+1);
  }

  runsuccess() {
    this.alertifyService.success('Alertify Success');
  }

}
