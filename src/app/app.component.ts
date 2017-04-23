import {Component} from '@angular/core';
import {AngubaseService} from './providers/angubase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./css/chat.component.css']
})
export class AppComponent {
  public usuarioEstaLogueado: boolean;

  title = 'Avestruz!';

  constructor(public _abService: AngubaseService, private _router: Router) {

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
          console.log('Usuario logueado');
          this._router.navigate(['']);
        }
      });
  }

  logout(){
    this._abService.logout();
  }

}

