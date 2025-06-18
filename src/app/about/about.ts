import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  playVideo() {
    const video: HTMLVideoElement | null = document.getElementById('promoVideo') as HTMLVideoElement;
    if (video) {
      video.play();
      video.setAttribute('controls', 'true');
      const playButton = document.querySelector('.pla') as HTMLElement;
      if (playButton) {
        playButton.style.display = 'none';
      }
    }
  }

}
