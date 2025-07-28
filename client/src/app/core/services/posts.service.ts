import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../../models";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    private apiUrl = 'http://localhost:3000/api/posts';

    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<Post[]> {
        return this.httpClient.get<Post[]>(this.apiUrl)
    }
}