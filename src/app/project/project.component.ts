import {
  Component,
} from '@angular/core';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  project_img = "https://drive.google.com/uc?export=download&id=1s89eQf_MbNRSYxoqn6V_j_gaYeG8zmUN";
  
  
  projects: any[] = [];
  right_projects: any[] = [];

  ngOnInit() {
    this.getProjects();
  };

  constructor(private dataService: DashboardService) {};

  getProjects() {
    this.projects = [];
    this.right_projects =[];
    this.dataService.getData().subscribe(
      (getData) => {
        this.projects= getData[0].project;
        this.right_projects = getData[0].rightProject;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );    
  };
};


