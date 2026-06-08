import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('username') username!: ElementRef;
  @ViewChild('password') password!: ElementRef; 

  authService: AuthService = inject(AuthService);

  router: Router = inject(Router);

  activteRoute: ActivatedRoute = inject(ActivatedRoute);


  ngOnInit(){
  
    this.activteRoute.queryParams.subscribe(params => {
      const logout = params['logout'];
      if(logout){
        this.authService.logout();
        alert("You have been logged out IsLoged = " + this.authService.isLogged);
      }
    });
  }
  OnLoginClick(){
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    const user = this.authService.login(username, password);

    if(user === undefined){
      alert("Invalid username or password");
    }
    else{
      alert("Welcome " + user.name);
      this.router.navigate(['/courses']);
    }
    console.log(username);
    console.log(password);
  }
}
 