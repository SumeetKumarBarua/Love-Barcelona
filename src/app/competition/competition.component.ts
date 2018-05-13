import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  empty:boolean=false;

  constructor(private http: Http) { }

  results = [];
  fetchLaliga = function() {
    this.empty=false;   
    this.results = [];
    this.http.get("http://localhost:3000/la-liga").subscribe(
      (res: Response) => {
        if(res.json().length!=0){

          this.results = res.json();
        }
        else{
          this.empty=true;
        }
      }
    )
  }


  fetchUefa = function() {
    this.empty=false;
    this.results = [];
    this.http.get("http://localhost:3000/uefa").subscribe(
      (res: Response) => {   
        if(res.json().length!=0){     
        this.results = res.json();
      }
      else{
        this.empty=true;
      }
      }
    )
  }

  
  fetchCopa = function() {
    this.empty=false;
    this.results = [];
    this.http.get("http://localhost:3000/copa").subscribe(
      (res: Response) => {
        if(res.json().length!=0){   
        this.results = res.json();
      }
      else{
        this.empty=true;
      }
      }
    )
  }


  ngOnInit() {
    
  }

}
