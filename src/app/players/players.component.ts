import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {
  id:number;
  idUpdate:number;
  private headers = new Headers({ 'Content-Type': 'application/json'});
  showModal: boolean = false;
  forDelete: boolean = false;
  add: boolean = false;
  update: boolean = false;
  isAdded: boolean = false;
  isUpdated: boolean = false;
  description:String="";
  url:String="";
  name:String="";
  pimageURL:String="";  
  playerObj1:object = {};
  


  constructor(private http: Http) { }

  players = [];
  fetchData = function() {
    this.http.get("http://localhost:3000/players").subscribe(
      (res: Response) => {
        this.players = res.json();
      }
    )
  }


  delete = function(x){
    this.forDelete=true;
    this.fullname=x.fullName;
    this.id=x.id;
  }

  addModal = function(x){
    this.add=true;    
  }

  updateModal = function(x){
    this.update=true;
    this.idUpdate=x.id;
    this.pName=x.fullName;
    this.pNationality=x.nationality;
    this.pPosition=x.position;
    this.pAge=x.age;
    this.pJersey=x.shirtNumber;
    this.pRating=x.rating;  
    this.pimageURL=x.imageURL;    

  }

  deleteplayers = function(id){
    console.log("--->",this.id);    
      const url = `${"http://localhost:3000/players"}/${this.id}`;
      return this.http.delete(url, {headers: this.headers}).toPromise()
        .then(() => {
        this.fetchData();
        this.forDelete=false;
        })
    }


    addNewPlayer = function(players) {
      console.log("==> ",players);
      this.playerObj = {
        "id": Math.random().toString,
        "fullName": players.fullName,
        "nationality": players.nationality,
        "position": players.position,
        "age": players.age,
        "shirtNumber": players.shirtNumber,
        "rating": players.rating,
      }
      this.http.post("http://localhost:3000/players", this.playerObj).subscribe((res:Response) => {
        this.add=false;
        this.isAdded = true;        
      })
    }


    updatePlayer(players1) {     
      this.playerObj1 = {        
        "fullName": players1.fullName,
        "nationality": players1.nationality,
        "position": players1.position,
        "age": players1.age,
        "shirtNumber": players1.shirtNumber,
        "rating": players1.rating,
        "imageURL":this.pimageURL
      };
      const url = `${"http://localhost:3000/players"}/${this.idUpdate}`;
      this.http.put(url, JSON.stringify(this.playerObj1), {headers: this.headers})
        .toPromise()
        .then(() => {   
          this.update=false;
          this.isUpdated = true;       
          this.fetchData();
        })
    }




  openModal($event, p) {
    $event.preventDefault();
    console.log(p.url);
    this.description=p.description;
    this.url=p.imageURL;
    this.name=p.fullName;
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.forDelete=false; 
    this.add=false;
    this.update=false;
    this.isAdded = false;
    this.isUpdated = false;
    this.fetchData();
    
  }

  ngOnInit() {
    this.fetchData();
  }

}
