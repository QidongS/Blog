import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { TopicsComponent } from './topics/topics.component';

export const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'messages', component: MessagesComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'topics', component: TopicsComponent},
    { path: '**',  pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
