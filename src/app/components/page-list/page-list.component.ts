import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

    pages: any;

    constructor(private pageService: PageService, private router: Router) { }

    ngOnInit(): void {
        this.getAllPages();
    }

    getAllPages() {
        this.pageService.getAll().subscribe(
            (response: any) => {
                this.pages = response;
            }, 
            (err: any) => {
                console.log(err);
            }
        )
    }

    deletePage(id) {
        if(confirm("Are u sure ?")) {
            console.log("here");
            this.pageService.delete(id).subscribe(data => {
                this.getAllPages();
            });
        }
    }

}
