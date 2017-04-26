import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AlertModule} from 'ngx-bootstrap';
import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {PaginaLoginComponente} from './pagina-login/pagina-login.component';
import {FirebaseService} from './providers/firebase.service';
import {RouterModule, Routes} from '@angular/router';
import { ChatComponent } from './chat-app/chat.component';
import {FormsModule} from "@angular/forms";
import { NavbarAppComponent } from './navbar-app/navbar-app.component';
import { PanelUsuarioComponent } from './panel-usuario/panel-usuario.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyCOVCKI69xJ8qf_aw_f_1R7L_4Jfl3-hD8',
  authDomain: 'aves-truz.firebaseapp.com',
  databaseURL: 'https://aves-truz.firebaseio.com',
  projectId: 'aves-truz',
  storageBucket: 'aves-truz.appspot.com',
  messagingSenderId: '29801632317'
};

const routes: Routes = [
  {path: '', component: ChatComponent},
  {path: 'login', component: PaginaLoginComponente}
  ];


@NgModule({
  declarations: [AppComponent, PaginaLoginComponente, ChatComponent, NavbarAppComponent, PanelUsuarioComponent],
  imports: [AlertModule.forRoot(), BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes), FormsModule],
  bootstrap: [AppComponent],
  providers: [FirebaseService]
})
export class AppModule {
}
