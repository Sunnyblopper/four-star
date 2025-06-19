import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import * as Papa from 'papaparse';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

Swiper.use([Navigation]);
@Component({
  selector: 'app-double-carousel',
  imports: [CommonModule],
  templateUrl: './double-carousel.html',
  styleUrl: './double-carousel.css',
})
export class DoubleCarousel implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.loadCSV();
  }

  loadCSV(): void {
    this.http
      .get('assets/machines/multifunctional.csv', { responseType: 'text' })
      .subscribe((data) => {
        Papa.parse(data, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            this.products = result.data as any[];
            setTimeout(() => {
              this.ngZone.runOutsideAngular(() => {
                this.initSwiper();
              });
            }, 100);
          },
        });
      });
  }

  initSwiper(): void {
    new Swiper('.index_product_list_content_right_sw1', {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: false, // ✅ Optional: set to true if you want it to wrap around
      navigation: {
        nextEl: '.index_product_list_content_right_sw_right1',
        prevEl: '.index_product_list_content_right_sw_left1',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
      },
    });
  }
}
