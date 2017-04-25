import {Component} from '@angular/core';
import {FirebaseService} from './providers/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public usuarioEstaLogueado: boolean;


  constructor(public _abService: FirebaseService, private _router: Router) {

    // Con esto se comprueba asíncronamente si el usuario está logeado
    // y es redirigido a la página de logueo si la stuación cambia
    // Gracias firebase <3 fixme ._abService._angubaseService.

    this._abService._angubaseService.auth.subscribe(
      (auth) => {
        if (auth == null) {
          this.usuarioEstaLogueado = false;
          console.log('Usuario no logueado, redirigiendo...');
          this._router.navigate(['login']);

        } else {
          this.usuarioEstaLogueado = true;
          this._abService.nickname = auth.google.displayName;
          this._abService.email = auth.google.email;
          console.log('Usuario logueado');
          this._router.navigate(['']);
        }
      });
  }

  logout(){
    this._abService.logout();
  }

}

