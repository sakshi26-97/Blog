import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';


const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'posts',
    component : DashboardComponent
  },
  {
    path : 'posts/:id',
    component : PostDetailsComponent
  },
  {
    path : '**',
    redirectTo : '',
    pathMatch : 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
