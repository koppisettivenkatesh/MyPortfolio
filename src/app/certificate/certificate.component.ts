import { Component , HostListener } from '@angular/core';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent {

  certificate_imag = "https://drive.google.com/uc?export=download&id=1jvr_f7vTKk2-7baNuB5b-_ZoTup6AVPo";

  images: any[] = [];
  
  trigger: boolean = false;
    

  constructor(private dataService: DashboardService) {};

  getCertificate() {
    this.images= [];
    this.dataService.getData().subscribe(
      (getData) => {
        this.images = getData[0].certificate;
        this.images.reverse();
      },  
      (error) => {
        console.error('Error fetching data:', error);
      }
    );    
  };

  @HostListener('window:scroll', ['$event'])
  Scroll(event: Event) {
    const scrollHeight = window.scrollY;
    if (!this.trigger && scrollHeight > 1823) {
      this.trigger = true;
      this.getCertificate();
    } ;
  };
};
