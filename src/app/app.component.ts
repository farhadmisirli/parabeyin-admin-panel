import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'parabeyin';
    otherPages = false;
    
    constructor(private router: Router,private route: ActivatedRoute){
    }

    ngOnInit() {
        let url = window.location.href;
        if(url == 'http://localhost:4200/login' || url == 'http://localhost:4200/404') {
            this.otherPages = true;
        }
    }
}
