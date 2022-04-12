import { Component , OnInit, ViewChild} from '@angular/core';
import { UserData } from './userdata';
import { UsersService } from './users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public UserData: UsersService) {}
  
  myimage:any;
  username: any;
  projects:any;
  
  spinner: boolean = false;
  loadVar: boolean = false;
  error: any = null;
  userData:any;

  
  
  ngOnInit() {
  }
  

  getUserData(): void {
    this.error=null;
    this.loadVar = true;
    this.UserData.getUserData().subscribe(
      (data: any) => {
        this.userData = data;
        this.myimage=(data.avatar_url);
        this.username=data.name;
        this.getProjectData();
      },
      (error) => {
        console.log(error);
        this.error = error.name;
        this.loadVar = false;
      }
    );
  }

  getProjectData(): void {
    this.spinner=true;
    this.error=null;
    this.UserData.getProjectData().subscribe(
      (data: any) => {
        console.warn('data', data);
        console.warn('data', data);
        this.projects=data;
        this.spinner=false;
      },
      (error) => {
        console.log(error);
        this.error = error.name;
        this.loadVar = false;
      }
    );
  }


}

