import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(private router:Router){};
  goToLogin(){
    this.router.navigate(['login']);
  }

}
