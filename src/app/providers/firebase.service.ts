import {Injectable} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class FirebaseService {

  public mensajes: FirebaseListObservable<any>;
  public usuarios: FirebaseListObservable<any>;
  public nickname: string;
  public email: string;


  constructor(public _angubaseService: AngularFire) {
    this.mensajes = this._angubaseService.database.list('mensajes');
  }

  /*
   * Login con usuario
   * devuelve {firebase.Promise<FirebaseAuthState>}
   */

  loginConGoogle() {
    return this._angubaseService.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  logout() {
    return this._angubaseService.auth.logout();
  }

  enviarMensaje(contenido) {
    let mensaje = {
      message: contenido,
      displayName: this.nickname,
      email: this.email,
      timestamp: Date.now()
    };
    this.mensajes.push(mensaje);
  }
}
