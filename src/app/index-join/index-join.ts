import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-index-join',
  imports: [CommonModule],
  templateUrl: './index-join.html',
  styleUrl: './index-join.css',
})
export class IndexJoin {
  joinItems = [
    {
      icon: 'https://fujacn.usa18.wondercdn.com/public/static/images/home/en-us/index_join_ico1.png',
      title: 'Competitive <br>factory price',
      isHtml: true
    },
    {
      icon: 'https://fujacn.usa18.wondercdn.com/public/static/images/home/en-us/index_join_ico2.png',
      title: 'Double checking<br />quality control',
      isHtml: true
    },
    {
      icon: 'https://fujacn.usa18.wondercdn.com/public/static/images/home/en-us/index_join_ico3.png',
      title: 'Free aftersale and 24-hour online technical support',
      isHtml: false
    },
    {
      icon: 'https://fujacn.usa18.wondercdn.com/public/static/images/home/en-us/index_join_ico4.png',
      title: '3 days ready to ship and door-to-door service',
      isHtml: false
    }
  ];
}
