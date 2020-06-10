import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../shared/models/Post';
import { PaginatedResult } from '../shared/models/Pagination';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = environment.apiUrl + 'post';
  constructor(private http: HttpClient) {  }

  getPost(id: number): Observable<Post>{
    return this.http.get<Post>(this.url + '/' + id);
  }

  getPosts(page?, itemsPerPage?): Observable<PaginatedResult<Post[]>>{
    const presult: PaginatedResult<Post[]> = new PaginatedResult<Post[]>();
    let params = new HttpParams();

    if (page != null && itemsPerPage != null){
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    return this.http.get<Post[]>(this.url, {observe: 'response', params}).pipe(
      map(response => {
        presult.result = response.body;
        if(response.headers.get('Pagination') != null) {
          presult.pagination = JSON.parse(response.headers.get('Pagination'));
          
        }
        return presult;
      })
    );

  }
}
