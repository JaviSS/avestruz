import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AlertModule} from 'ngx-bootstrap';
import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {LoginPageComponent} from './login-page/login-page.component';
import {AngubaseService} from './providers/angubase.service';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule, Routes} from '@angular/router';


export const firebaseConfig = {
  apiKey: 'AIzaSyCOVCKI69xJ8qf_aw_f_1R7L_4Jfl3-hD8',
  authDomain: 'aves-truz.firebaseapp.com',
  databaseURL: 'https://aves-truz.firebaseio.com',
  projectId: 'aves-truz',
  storageBucket: 'aves-truz.appspot.com',
  messagingSenderId: '29801632317'
};

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent}
  ];


@NgModule({
  declarations: [AppComponent, LoginPageComponent, HomePageComponent],
  imports: [AlertModule.forRoot(), BrowserModule, AngularFireModule.initializeApp(firebaseConfig),RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
  providers: [AngubaseService]
})
export class AppModule {
}
