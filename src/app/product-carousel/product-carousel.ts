import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import * as Papa from 'papaparse';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
Swiper.use([Navigation]);


@Component({
  selector: 'app-product-carousel',
  imports: [CommonModule],
  templateUrl: './product-carousel.html',
  styleUrl: './product-carousel.css'
})
export class ProductCarousel implements OnInit{
  products: any[] = [];

  constructor(private http: HttpClient, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.loadCSV();
  }

  loadCSV() {
    this.http.get('assets/machines/single_head.csv', { responseType: 'text' }).subscribe(data => {
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
        }
      });
    });
  }

  initSwiper() {
    new Swiper('.index_product_list_content_right_sw1', {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: '.index_product_list_content_right_sw_right1',
        prevEl: '.index_product_list_content_right_sw_left1',
      },
    });
  }
}
