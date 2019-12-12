import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from "../../common/services/blogserviceapi";
import { blogModel } from "../../common/models/blog-model";

@Component({
  selector: 'app-allblogs',
  templateUrl: './allblogs.component.html',
  styleUrls: ['./allblogs.component.scss']
})
export class AllblogsComponent implements OnInit {

  allBlogsData : blogModel;
  constructor(private router: Router, private blogServiceApi: BlogService) { }

  ngOnInit() {
    this.getAllBlogs();
  }

  getBlogDetails(post){
    this.router.navigate(['/blog'],
      {
        queryParams: { id: post.id, userId : post.userId },
        queryParamsHandling: 'merge'
      })
  }
  getAllBlogs() {
    this.blogServiceApi.getAllBlogDetails()
      .subscribe((data: blogModel) => {
        this.allBlogsData = data;
        console.log(this.allBlogsData);
      });
  }
}
