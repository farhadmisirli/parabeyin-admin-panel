import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import {Router, ActivatedRoute, ParamMap} from "@angular/router"

@Component({
    selector: 'app-page-add',
    templateUrl: './page-add.component.html',
    styleUrls: ['./page-add.component.css']
})
export class PageAddComponent implements OnInit {

    page = {
        id:0,
        title: '',
        content: 'sd',
        slug: '',
        active: false
    };

    constructor(
        private pageService: PageService,
        private router: Router,
        private route: ActivatedRoute,
        ) { 
            
        }

    ngOnInit(): void {
        let id = this.route.snapshot.paramMap.get('id');
        if(id != 'create') {
            this.pageService.get(id).subscribe(
                data => {
                    this.page.id = data['id'];
                    this.page.title = data['title'];
                    this.page.slug = data['slug'];
                    this.page.content = data['content'];
                    this.page.active = data['active'];
                },
                error => {
                    //  404 page
                    this.router.navigate(['404']);
                }
            )

        }
    }



    savePage() {
        
        const data = {
            title: this.page.title,
            content: this.page.content,
            slug: this.page.slug,
            active: this.page.active
        };


        if(this.page.id > 0) {
            // update 
            this.pageService.update(this.page.id, data).subscribe(
                response => {
                    alert("Updated successfully");
                    this.router.navigate(['pages']);
                },
                err => {
                    alert("Error occured");
                }
            );    
        } else {
            this.pageService.save(data).subscribe(
                response => {
                    alert("Added successfully");
                    this.router.navigate(['pages']);
                },
                err => {
                    alert("Error occured");
                }
            );    
        }

        



          
    }

}
