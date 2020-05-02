import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    submitted = false;
    returnUrl: string;
    error = '';
    
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { 
            //redirect to home if already logged in
            if (this.authenticationService.isLoggedIn) { 
                window.location.href = "/";
                //this.router.navigate(['/']);
            }
        }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    get f() { return this.loginForm.controls; }


    onSubmit() {
        this.submitted = true;
        this.error = "Invalid username or password";
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.authenticationService.login(this.f.username.value, this.f.password.value).subscribe(
        (data: any) => {
          localStorage.setItem('token', data['token']);
          this.router.navigate([this.returnUrl]);
        },
        (err: HttpErrorResponse) => {
          this.error = "Invalid username or password";

        });
        
    }


}
