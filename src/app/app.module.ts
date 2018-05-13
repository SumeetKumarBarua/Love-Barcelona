import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { UiModule } from './ui/ui.module';
import { LoginFormComponent } from './login-form/login-form.component';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { PlayersComponent } from './players/players.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompetitionComponent } from './competition/competition.component';

const appRoutes:Routes=[
  {
    path:'',
    component:LoginFormComponent
  },  
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'players',
    component:PlayersComponent
  },
  {
    path:'competition',
    component:CompetitionComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    PlayersComponent,
    CompetitionComponent,
    
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    UiModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    BrowserAnimationsModule
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
