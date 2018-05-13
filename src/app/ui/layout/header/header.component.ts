import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import 'rxjs'

@Component({
  selector: 'app-header',
  template: `
  <header class="header-6">
    <div class="branding">
      <a class="nav-link">
        <clr-icon shape="shield"></clr-icon>        
        <span class="title">FC Barcelona</span>
        
      </a>
    </div>
    <div class="header-nav">
      <a class="active nav-link nav-icon">
        <clr-icon shape="home"></clr-icon>
      </a>
      
    </div>
    <form class="search">
      <label for="search_input">
        <input id="search_input" type="text" placeholder="Search for keywords...">
      </label>
    </form>
    <div class="header-actions">
      <clr-dropdown class="dropdown bottom-right">
        <button class="nav-icon" clrDropdownToggle>
          <clr-icon shape="user"></clr-icon>
          <clr-icon shape="caret down"></clr-icon>
        </button>
        <div class="dropdown-menu">
          <a clrDropdownItem href="https://sumeetkumarbarua.github.io/" target="_blank">About</a>          
          <a clrDropdownItem routerLinkActive="active" [routerLink]="['/']">Log out</a>
        </div>
      </clr-dropdown>
    </div>
  </header>
  <nav class="subnav">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" routerLinkActive="active" [routerLink]="['/dashboard']">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLinkActive="active" [routerLink]="['/competition']">Competition</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLinkActive="active" [routerLink]="['/players']">Players</a>
      </li>      
    </ul>
  </nav>
  `,
  styles: []
})


export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  
}
