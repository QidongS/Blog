import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Post } from '../shared/models/Post';
import { AlertifyService } from '../services/alertify.service';
import { PostService } from '../services/post.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PostListResolver implements Resolve<Post[]> {
    pageNumber = 1;
    pageSize = 5;

    constructor(
        private postService: PostService,
        private router: Router,
        private alertify: AlertifyService
        ){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Post[]> {
        if(route.params.id!=null){
            this.pageNumber = route.params.id;
        }

        return this.postService.getPosts(this.pageNumber, this.pageSize).pipe(
            catchError(error => {
                console.log("failing");
                this.alertify.error('Failed fetching posts');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
