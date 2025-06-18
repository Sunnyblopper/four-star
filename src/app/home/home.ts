import { Component } from '@angular/core';
import { Slider } from "../slider/slider";
import { About } from "../about/about";
import { Star } from "../star/star";
import { IndexJoin } from "../index-join/index-join";
import { CustomerReviews } from "../customer-reviews/customer-reviews";
import { ProductCarousel } from "../product-carousel/product-carousel";
import { DoubleCarousel } from "../double-carousel/double-carousel";

@Component({
  selector: 'app-home',
  imports: [Slider, About, Star, IndexJoin, CustomerReviews, ProductCarousel, DoubleCarousel],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
