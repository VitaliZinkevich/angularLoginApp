import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from './auth.service'
import { UserService } from './user.service'
import { GameService } from './game.service'
import { AuthGuard } from './auth.guard';
import { PinGuard } from './pin.guard'
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PinComponent } from './pin/pin.component'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    PinComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
        {
        path:'login',
        component:LoginComponent
        },
        {
        path:'admin',
        component:AdminComponent,
        canActivate: [AuthGuard]
        },
        {
          path:'register',
          component:RegisterComponent
        },
        {
          path:'pin',
          component:PinComponent,
          canActivate: [PinGuard]
        },
        {
          path:'dashboard',
          component:DashboardComponent

        },
        {
        path:'',
        component:HomeComponent
        }
    ])
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuard,
    GameService,
    PinGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
