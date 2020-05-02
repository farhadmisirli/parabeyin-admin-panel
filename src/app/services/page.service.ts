import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

const pageUrl = "http://localhost:8080/app/v1/pages";

@Injectable({
  providedIn: 'root'
})

export class PageService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(pageUrl);
    }

    get(id) {
        return this.http.get(`${pageUrl}/${id}`)
    }

    save(data) {
        return this.http.post(pageUrl,data);
    }

    update(id: any, data) {
        return this.http.put(pageUrl+"/"+id, data);
    }

    delete(id) {
        return this.http.delete(pageUrl+"/"+id);
    }

}
