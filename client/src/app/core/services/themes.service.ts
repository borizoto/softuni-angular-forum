import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Theme } from "../../models";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private apiUrl = 'http://localhost:3000/api/themes';

    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<Theme[]> {
        return this.httpClient.get<Theme[]>(this.apiUrl)
    }
}