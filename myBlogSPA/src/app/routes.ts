import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { TopicsComponent } from './topics/topics.component';
import { PostComponent } from './post/post.component';
import { AuthGuard } from './guards/auth.guard';
import { UserResolver } from './resolver/user.resolver';
import { PostListResolver } from './resolver/postlist.resolver';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { PreventUnsavedGuard  } from "./guards/prevent-unsaved.guard";
export const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent, resolve: {postlist: PostListResolver}},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]},
    { path: 'register', component: RegisterComponent},
    { path: 'myaccount', component: MyaccountComponent, canActivate: [AuthGuard], canDeactivate:[PreventUnsavedGuard]},
    { path: 'profile/:id', component: ProfileComponent, resolve: { user: UserResolver}},
    { path: 'topics', component: TopicsComponent},
    { path: 'page/1', pathMatch: 'full', redirectTo: 'home'},
    { path: 'page/:id', component: HomeComponent, resolve: {post: PostListResolver}},
    { path: 'post/:id', component: PostComponent},
    { path: '**',  pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
