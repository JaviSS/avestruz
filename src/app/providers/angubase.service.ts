import {Injectable} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Injectable()
export class AngubaseService {
  constructor(public _angubaseService: AngularFire) {
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

}
