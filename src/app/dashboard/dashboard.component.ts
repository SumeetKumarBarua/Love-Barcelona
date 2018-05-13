import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: Http) { }

  results = [];
  fetchData = function() {
    this.http.get("http://localhost:3000/results").subscribe(
      (res: Response) => {
        this.results = res.json();
      }
    )
  }


  ngOnInit() {
    this.fetchData();
  }

}
