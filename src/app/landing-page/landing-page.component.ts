import { Component, ElementRef, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  note = "Don’t Judge Book By it’s Cover";


  data: any[] = [];
  rowElement!: HTMLElement;
  imageWidth!: HTMLImageElement;
  @ViewChild('imageRow') imageRow!: ElementRef;

  ngOnInit() {
    this.getBanners();
  };

  constructor(private dataService: DashboardService,) { };

  getBanners() {
    this.data = [];
    this.dataService.getData().subscribe(
      (getData) => {
        this.data = getData[0].banner;
        this.data.reverse();
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  };

  initializeImageWidth() {
    this.imageWidth = document.getElementById('image') as HTMLImageElement;
    this.rowElement = this.imageRow.nativeElement;
  }

  scrollLeft() {
    this.initializeImageWidth();
    this.rowElement.scrollLeft += this.imageWidth.scrollWidth;
  };
  scrollRight() {
    this.initializeImageWidth();
    this.rowElement.scrollLeft -= this.imageWidth.scrollWidth;
  };
};

