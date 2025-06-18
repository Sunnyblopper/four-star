import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [CommonModule],
  templateUrl: './star.html',
  styleUrl: './star.css',
})
export class Star implements AfterViewInit{
  stats = [
    {
      icon: 'https://fujacn.usa18.wondercdn.com/public/static/images/home/en-us/index_about_ico1.png',
      alt: 'Factory Area Icon',
      label: 'Factory Area',
      value: 45000,
      prefix: '',
      suffix: ' m² +',
    },
    {
      icon: 'https://fujacn.usa18.wondercdn.com/public/static/images/home/en-us/index_about_ico2.png',
      alt: 'Annual Sales Revenue Icon',
      label: 'Annual Sales Revenue',
      value: 5000000,
      prefix: '$',
      suffix: '',
    },
    {
      icon: 'https://fujacn.usa18.wondercdn.com/public/static/images/home/en-us/index_about_ico3.png',
      alt: 'Sales Country Icon',
      label: 'Sales Country',
      value: 150,
      prefix: '',
      suffix: ' +',
    },
    {
      icon: 'https://fujacn.usa18.wondercdn.com/public/static/images/home/en-us/index_about_ico4.png',
      alt: 'Service Team Icon',
      label: 'Service Team',
      value: 30,
      prefix: '',
      suffix: ' +',
    },
  ];

  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    this.element.nativeElement
      .querySelectorAll('.counter')
      .forEach((element: HTMLElement) => {
        let count = 0;
        const target = +element.innerText;
        const update = () => {
          if (count < target) {
            count += Math.ceil(target / 100);
            element.innerText =
              count > target ? target.toString() : count.toString();
            setTimeout(update, 10);
          }
        };
        element.innerText = '0';
        update();
      });
  }
}
