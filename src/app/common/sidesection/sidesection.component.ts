import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidesection',
  templateUrl: './sidesection.component.html',
  styleUrls: ['./sidesection.component.scss']
})
export class SidesectionComponent implements OnInit {

  blogId : number;
  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.blogId = params['id'] !== undefined ? params['id'] : '';
    })
  }

  ngOnInit() {
  }

}
