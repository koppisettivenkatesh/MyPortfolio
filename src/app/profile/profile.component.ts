import {
  Component,
} from '@angular/core';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
  linkedin_img = "https://drive.google.com/uc?export=download&id=1-bqFS46Z-qiNRNGRTEHEWs7rGHPbaktT";

  profile_link = "https://www.linkedin.com/in/venkatesh-koppisetti/";

  email = "mailto:koppisettivenkatesh98@gmail.com";

  great = "hello";
  name = "I’am venkatesh koppsetti";
  role = "Frontend developer";
  
  profile_img: string = '';
  profile_resume: string = '';

  ngOnInit() {
    this.getProfile();
  };

  constructor(private dataService: DashboardService) {};

  getProfile() {
    this.profile_img = "";
    this.profile_resume = "";
    this.dataService.getData().subscribe(
      (getData) => {
        this.profile_img = getData[0].profileImage[0].image;
        this.profile_resume = getData[0].profileResume[0].image;
      },  
      (error) => {
        console.error('Error fetching data:', error);
      }
    );    
  };
};
