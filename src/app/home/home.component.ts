import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  isLogin: boolean;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.isLogin = this.authService.loggedIn;
  }

  onLoadServers() {
    this.router.navigate(["/servers"]);
  }

  onLogin() {
    this.authService.login();
    this.isLogin = true;
  }

  onLogout() {
    this.authService.logout();
    this.isLogin = false;
  }
}
