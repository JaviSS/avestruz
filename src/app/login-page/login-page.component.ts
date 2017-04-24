import {Component} from '@angular/core';
import {AngubaseService} from '../providers/angubase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(public _angubaseService: AngubaseService, private _router: Router) {}

  login() {
    this._angubaseService.loginConGoogle()
      .then(data => this._router.navigate(['']));
  }

}
