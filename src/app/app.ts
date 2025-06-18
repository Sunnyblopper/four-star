import { Component } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { Home } from "./home/home";
import { RouterOutlet } from '@angular/router';
import { VideoGallery } from "./video-gallery/video-gallery";

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'four-star';
}
