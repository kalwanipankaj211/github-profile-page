import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service';
@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  constructor(private profileService : ProfileService) { }
  userData:any;
  ngOnInit() {
     this.profileService.getGithubUserData().subscribe((data: any) => {
      if (data) {
        this.userData = data;
      } else {
        console.log("data Not Found");
      }
    }, error => {
      // this.loaderService.hide();
      console.log('error in Profile Service',error);
    });
  }

}
