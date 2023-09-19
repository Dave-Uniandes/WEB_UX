import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { LoginPageComponent } from '../app/pages/login-page/login-page.component';
import { AlarmsListPageComponent  } from '../app/pages/alarms-list-page/alarms-list-page.component';

const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'alarms-list', component: AlarmsListPageComponent },
  ];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }