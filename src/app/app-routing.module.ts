import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserDetailviewComponent } from './user-detailview/user-detailview.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'user', component: UserComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'user/:id', component: UserDetailviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
