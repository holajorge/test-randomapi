import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ListUsersComponent } from './components/list-users/list-users.component';
import { PagesRoutingModule } from "./pages/pages.routing";

const routes: Routes = [
  // {path:'', component: ListUsersComponent},
  {path: "",redirectTo: "users",pathMatch: "full"},  

  // {path: '**',redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [
    PagesRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
