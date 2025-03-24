import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomeComponent implements OnInit {
  sliders: { title: string; image: string; link: string }[] = [];
  hotPosts: { id: number; title: string; thumbnail: string; briefInfo: string }[] = [];
  featuredServices: { id: number; title: string; thumbnail: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadSliders();
    this.loadHotPosts();
    this.loadFeaturedServices();
  }

  loadSliders(): void {
    this.sliders = [
      { title: 'Welcome to Our Childcare', image: 'assets/images/slider1.jpg', link: '/services' },
      { title: 'Quality Care for Your Child', image: 'assets/images/slider2.jpg', link: '/services' }
    ];
  }

  loadHotPosts(): void {
    this.hotPosts = [
      { id: 1, title: 'Hot Post 1', thumbnail: 'assets/images/blog1.jpg', briefInfo: 'Brief info about hot post 1.' },
      { id: 2, title: 'Hot Post 2', thumbnail: 'assets/images/blog2.jpg', briefInfo: 'Brief info about hot post 2.' },
      { id: 3, title: 'Hot Post 3', thumbnail: 'assets/images/blog3.jpg', briefInfo: 'Brief info about hot post 3.' }
    ];
  }

  loadFeaturedServices(): void {
    this.featuredServices = [
      { id: 1, title: 'Service 1', thumbnail: 'assets/images/service1.jpg' },
      { id: 2, title: 'Service 2', thumbnail: 'assets/images/service2.jpg' },
      { id: 3, title: 'Service 3', thumbnail: 'assets/images/service3.jpg' }
    ];
  }
}