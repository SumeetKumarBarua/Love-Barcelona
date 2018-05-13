import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  data:object = {};
  error:boolean=false;
  constructor(private router:Router) { }

  ngOnInit() {
   
  }

  loginUser(e){

      
      var username=e.target.elements[0].value;
      var password=e.target.elements[1].value;
      console.log(username,password);
      console.log(this.data);
      if(username=='sumeet' && password=='fcb'){
        console.log('true');
        this.router.navigate(['dashboard']);
      }
      else{
        this.error=true;
      }
      return false;
  }
}
