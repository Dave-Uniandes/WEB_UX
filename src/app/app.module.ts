import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AlarmsListPageComponent } from './pages/alarms-list-page/alarms-list-page.component';
import { AlarmConfigurationPageComponent } from './pages/alarm-configuration-page/alarm-configuration-page.component';
import { UserPasswordPageComponent } from './pages/user-password-page/user-password-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AlarmsListPageComponent,
    AlarmConfigurationPageComponent,
    UserPasswordPageComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
