import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from "../../common/services/blogserviceapi";
import { blogModel } from "../../common/models/blog-model";
import { commentsModel } from "../../common/models/comments-model";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogId : number;
  userId : number;
  isdata : boolean = false;
  blogsData : blogModel;
  commentsData : commentsModel;
  userData;
  constructor(private activatedRoute: ActivatedRoute, private blogServiceApi: BlogService) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.blogId = params['id'] !== undefined ? params['id'] : '';
      this.userId = params['userId'] !== undefined ? params['userId'] : '';
    })
  }

  ngOnInit() {
    this.getBlogDetails();
  }

  getBlogDetails() {
    this.blogServiceApi.getBlogDetails(this.blogId)
      .subscribe((data: blogModel) => {
        this.blogsData = data;
        this.getUserDetails()
      });
  }

  getUserDetails() {
    this.blogServiceApi.getUserDetails(this.userId)
      .subscribe((data) => {
        this.userData = data;
        this.getPostComments();
      });
  }

  getPostComments() {
    this.blogServiceApi.getPostComments(this.userId)
      .subscribe((data : commentsModel) => {
        this.commentsData = data;
        this.isdata = true;
        console.log(this.userData);
      });
  }

}
