import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    public isLoggedIn = false;

    constructor(private http: HttpClient) {
        let token = localStorage.getItem('token');
        if(token && token != null) {
            this.isLoggedIn = true;
        }
    }

    login(username: string, password: string) {
        return this.http.post('http://localhost:8080/api/auth/login', {
            "username": username,
            "password": password
        });
    }

    logout() {
        localStorage.removeItem('token');
    }

}
