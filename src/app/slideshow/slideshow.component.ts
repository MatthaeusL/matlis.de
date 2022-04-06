import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['pexels1.jpg','pexels2.jpg','pexels3.jpg'];
  headlines = [
    'Bring engeneering to the next level',
    'Born to code',
    'Look for future',
  ]
  currentImage=0;
  showImage = true; 

  ngOnInit(){
    this.updateImage();

  }

  updateImage() {
    setInterval(()=>{
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
        
      }, 1);

    },7000)

    
  }

}
