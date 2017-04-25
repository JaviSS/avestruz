import {Component} from '@angular/core';
import {FirebaseService} from '../providers/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './pagina-login.componente.html',
  styleUrls: ['./pagina-login.component.css']
})
export class PaginaLoginComponente {

  constructor(public _angubaseService: FirebaseService, private _router: Router) {}

  login() {
    this._angubaseService.loginConGoogle()
      .then(data => this._router.navigate(['']));
  }

}
