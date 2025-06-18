import { Routes } from '@angular/router';
import { Home } from './home/home';
import { VideoGallery } from './video-gallery/video-gallery';
import { ContactSupport } from './contact-support/contact-support';
import { Product } from './product/product';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'video-gallery.html', component: VideoGallery },
  { path: 'contact-us.html', component: ContactSupport },
  { path: 'machines/:category', component: Product },
  { path: '**', redirectTo: '/' }
  
];
