import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skill_img = "https://drive.google.com/uc?export=download&id=1Ag1AVmcFWpOHcfdlyltP0JMAtI5hT_li";

  @ViewChild('skill') skill!: ElementRef;

  display = false;

  @HostListener('window:scroll', ['$event'])
  Scroll(event: Event) {
    const scrollHeight = window.scrollY;
    
    if (scrollHeight > 1236) {
      this.display = true;
    };
  };
};
