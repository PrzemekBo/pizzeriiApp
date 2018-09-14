import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AccessService} from '../access/access.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private readonly accessService: AccessService,
              private readonly route: Router) {

  }

  canActivate(): boolean {
    const isLogged = this.accessService.isLogged;
    if (!isLogged) {
      this.route.navigate(['/login']);
      alert('Tylko admin ma tu dostep');
    }

    return isLogged;

  }
}
