import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: any = ``;
  url2: any = ``;
   name:string | undefined;
   constructor(private http: HttpClient) {}

  getUserData() {
    this.url = `https://api.github.com/users/${this.name}`;
    return this.http.get(this.url);
  }

  getProjectData() {
    this.url2 = `https://api.github.com/users/${this.name}/repos`;
    return this.http.get(this.url2);
  }
  

}
