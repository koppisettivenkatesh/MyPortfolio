import {
  Component,
  ElementRef,
  ViewChild, HostListener
} from '@angular/core';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent {
  
  work_img = "https://drive.google.com/uc?export=download&id=1YflvYFaVXwVDQyPcPUZRAocZTjXoidzU"

    
  videos: any[] = [];

  trigger : boolean = false

  @HostListener('window:scroll', ['$event'])
  Scroll(event: Event) {
    const scrollHeight = window.scrollY;
    if (!this.trigger && scrollHeight > 4000) {
      this.trigger = true
      this.getVideos();
    } 
  }

  constructor(private dataService: DashboardService) {}

  getVideos() {
    this.videos = [];
    this.dataService.getData().subscribe(
      (getData) => {
        this.videos = getData[0].design
      
      },  
      (error) => {
        console.error('Error fetching data:', error);
      }
    );    
  }
  rowElement!: HTMLElement;
  videoWidth! : HTMLVideoElement

  @ViewChild('videoRow') videoRow!: ElementRef;

  initializeImageWidth() {
    this.videoWidth = document.getElementById('video') as HTMLVideoElement;
    this.rowElement = this.videoRow.nativeElement;
  }

  scrollLeft() {
    this.initializeImageWidth()
    this.rowElement.scrollLeft += this.videoWidth.scrollWidth;
  }
  scrollRight() {
    this.initializeImageWidth()
    this.rowElement.scrollLeft -= this.videoWidth.scrollWidth;
  }

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  isVideoPlaying: boolean[] = [];

  ngAfterViewInit(): void {
    this.isVideoPlaying = new Array(this.videos.length).fill(false);
  }

  togglePlayPause(videoPlayer: HTMLVideoElement, index: number) {
    const video: HTMLVideoElement = videoPlayer;
    if (video.paused || video.ended) {
      video.play();
      this.isVideoPlaying[index] = true;
    } else {
      video.pause();
      this.isVideoPlaying[index] = false;
    }
  }
}
