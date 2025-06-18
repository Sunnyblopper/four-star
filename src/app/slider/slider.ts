import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper/core';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

Swiper.use([Autoplay, Pagination]);


@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  templateUrl: './slider.html',
  styleUrl: './slider.css'
})
export class Slider implements AfterViewInit{

  ngAfterViewInit(): void {
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }

}
