import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private data: DataService) { }

  posts;

  ngOnInit() {
    this.data.getPosts().subscribe(res=> {
      console.log(res);
      this.posts = res.map(post=> {
        return {
          id : post.payload.doc.id,
          ...post.payload.doc.data()
        }
      })
    },error=> {
      console.log(error);
    })
  }

}
