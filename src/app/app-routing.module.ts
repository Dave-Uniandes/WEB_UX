import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { LoginPageComponent } from '../app/pages/login-page/login-page.component';
import { AlarmsListPageComponent  } from '../app/pages/alarms-list-page/alarms-list-page.component';
import { AlarmConfigurationPageComponent } from '../app/pages/alarm-configuration-page/alarm-configuration-page.component';
import { UserPasswordPageComponent } from '../app/pages/user-password-page/user-password-page.component'

const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'login-form', component: UserPasswordPageComponent },
    { path: 'alarms-list', component: AlarmsListPageComponent },
    { path: 'alarms-config', component: AlarmConfigurationPageComponent }
  ];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
