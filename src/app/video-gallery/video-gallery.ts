import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-video-gallery',
  imports: [CommonModule, RouterModule],
  templateUrl: './video-gallery.html',
  styleUrl: './video-gallery.css'
})
export class VideoGallery {

  videos = [
    {
      url: 'https://play.video.alibaba.com/global/play/6000283906987.mp4?spm=a2700.shop_oth.74.1.4e293fe6ReTpDp&dft=hd',
      img: '/assets/video_img/daily_maintenence.avif',
      alt: 'Daily Maintenance'
    },
    {
      url: 'https://play.video.alibaba.com/global/play/6000283912027.mp4?spm=a2700.shop_oth.74.2.4e293fe6ReTpDp&dft=hd',
      img: '/assets/video_img/Tshirt_emb_tut.avif',
      alt: 'Tshirt Embroidery Tutorial'
    },
    {
      url: 'https://play.video.alibaba.com/global/play/6000283912059.mp4?spm=a2700.shop_oth.74.3.4e293fe6ReTpDp&dft=hd',
      img: '/assets/video_img/Threading_1.avif',
      alt: 'Threading 1'
    },
    {
      url: 'https://play.video.alibaba.com/global/play/6000283910651.mp4?spm=a2700.shop_oth.74.4.4e293fe6ReTpDp&dft=hd',
      img: '/assets/video_img/Threading_2.avif',
      alt: 'Threading 2'
    },
    {
      url: 'https://play.video.alibaba.com/global/play/6000283910663.mp4?spm=a2700.shop_oth.74.5.4e293fe6ReTpDp&dft=hd',
      img: '/assets/video_img/Make_machine.avif',
      alt: 'Machine Making'
    },
    {
      url: 'https://play.video.alibaba.com/global/play/6000283908862.mp4?spm=a2700.shop_oth.74.6.4e293fe6ReTpDp&dft=hd',
      img: '/assets/video_img/needle_replace.avif',
      alt: 'Needle Replacement'
    },
    {
      url: 'https://play.video.alibaba.com/global/play/6000283910706.mp4?spm=a2700.shop_oth.74.7.4e293fe6ReTpDp&dft=hd',
      img: '/assets/video_img/assembly.avif',
      alt: 'Assembly'
    },
    {
      url: 'https://play.video.alibaba.com/global/play/6000283912419.mp4?spm=a2700.shop_oth.74.8.4e293fe6ReTpDp&dft=hd',
      img: '/assets/video_img/cap_emb_tut.avif',
      alt: 'Cap Embroidery Tutorial'
    },
    {
      url: 'https://play.video.alibaba.com/global/play/6000283908915.mp4?spm=a2700.shop_oth.74.9.4e293fe6ReTpDp&dft=hd',
      img: '/assets/video_img/flat_emb_tut.avif',
      alt: 'Flat Embroidery Tutorial'
    }
  ];

}
