import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
   MatSidenavModule,
   MatIconModule,
   MatToolbarModule,
   MatListModule,
   MatMenuModule,
   MatButtonModule
 } from '@angular/material';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { AlertifyService } from './services/alertify.service';
import { LoginComponent} from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './routes';
import { TopicsComponent } from './topics/topics.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      LoginComponent,
      MessagesComponent,
      ProfileComponent,
      TopicsComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      CarouselModule.forRoot(),
      BrowserAnimationsModule,
      AppRoutingModule,
      MatSidenavModule,
      MatIconModule,
      MatToolbarModule,
      MatListModule,
      MatButtonModule,
      MatMenuModule
   ],
   providers: [
      AuthService,
      NavComponent,
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
