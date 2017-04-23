import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyCOVCKI69xJ8qf_aw_f_1R7L_4Jfl3-hD8',
  authDomain: 'aves-truz.firebaseapp.com',
  databaseURL: 'https://aves-truz.firebaseio.com',
  projectId: 'aves-truz',
  storageBucket: 'aves-truz.appspot.com',
  messagingSenderId: '29801632317'
};


@NgModule({
  declarations: [AppComponent],
  imports: [AlertModule.forRoot(), BrowserModule, AngularFireModule.initializeApp(firebaseConfig)],
  bootstrap: [AppComponent]
})
export class AppModule { }
