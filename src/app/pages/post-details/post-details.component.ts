import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from "@angular/router"
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post = {};
  docId;

  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(res=> {
      console.log(res);
      this.docId = res.get('id');
    },err=> {
      console.log(err);
    })
    this.data.getPostInfoById(this.docId)
    .subscribe(res=> {
      console.log(res);
      this.post = res;
    },err=> {
      console.log(err);
    })
  }

}
