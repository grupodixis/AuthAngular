import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { Auth } from "../interfaces/auth.interface";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  user: Auth;
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(["/login"]);
      return false;
    } else {
      const userRole = this.userInfo().user.role.name;
      console.log('Roles admitidos');
      console.log(route.data.role);
      console.log("existe el rol?");
      console.log(route.data.role.indexOf(userRole));
      console.log('Rol del usuario:');
      console.log(userRole);
      if (route.data.role && route.data.role.indexOf(userRole) === -1) {
        this.router.navigate(["/home"]);
        return false;
      }
      return true;
    }
  }

  userInfo() {
    return JSON.parse(localStorage.getItem("user"));
  }

  isUserLogged() {
    if (localStorage.getItem("user") === null) {
      return false;
    }
    this.user = this.userInfo();
    let data = JSON.parse(atob(this.user.jwt.split(".")[1]));
    return !!(data.exp > Date.now() / 1000);
  }
}
