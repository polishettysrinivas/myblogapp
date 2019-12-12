import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class BlogService {

    constructor(private httpClient: HttpClient) { }

    getAllBlogDetails() {
        let url = `${environment.apiBase}/posts/`;
        return this.httpClient.get(url);
    }

    getBlogDetails(id: number) {
        let url = `${environment.apiBase}/posts/${id}`;
        return this.httpClient.get(url);
    }

    getUserDetails(id: number) {
        let url = `${environment.apiBase}/users/${id}`;
        return this.httpClient.get(url);
    }

    getPostComments(id: number) {
        let url = `${environment.apiBase}/comments?postId=${id}`;
        return this.httpClient.get(url);
    }
}
