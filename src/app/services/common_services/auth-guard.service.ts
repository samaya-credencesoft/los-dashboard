import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(localStorage.getItem('isLoggedIn'));
        if (localStorage.getItem('isLoggedIn') === 'true') {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}