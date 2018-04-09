import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from './auth.service'
import { UserService } from './user.service'
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
