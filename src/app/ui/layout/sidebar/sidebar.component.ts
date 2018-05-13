import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
  <nav>
  <section class="sidenav-content">
    <a class="nav-link active">Overview</a>
    <section class="nav-group collapsible">
      <input id="tabexample1" type="checkbox">
      <label for="tabexample1">Content</label>
      <ul class="nav-list">
        <li><a class="nav-link" routerLinkActive="active" [routerLink]="['/competition']">Competition</a></li>
        <li><a class="nav-link" routerLinkActive="active" [routerLink]="['/players']">Players</a></li>
      </ul>
    </section>
    
  </section>
</nav>
  `,
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
