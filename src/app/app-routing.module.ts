import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageListComponent } from './components/page-list/page-list.component';
import { PageAddComponent } from './components/page-add/page-add.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
    {path: "", component: DashboardComponent},
    {path: "login", component: LoginComponent},
    {path: "pages", component: PageListComponent, canActivate: [AuthGuard]},
    {path: "pages/:id", component: PageAddComponent, canActivate: [AuthGuard]},
    {path: "pages/create", component: PageAddComponent, canActivate: [AuthGuard]},
    {path: "**", component: NotFoundComponent, canActivate: [AuthGuard]},
    {path: "404", component: NotFoundComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
//export const routingComponents = [DashboardComponent, PageListComponent];
