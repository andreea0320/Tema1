import { Component, OnInit } from '@angular/core';
import { City } from './my-feature/models/city-model';
import { CityService } from './my-feature/services/city.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Discover-the-world-app';

  imageUrl:string='assets/images/home.jpg'
  cardTitle:string='NEW ADVENTURE'


onVisit(city: City) {
  this.cardTitle = city.name;
  console.log(this.cardTitle)
}

  cities!:City[];
  constructor(private cityService:CityService,private router:Router){};
  
  ngOnInit(): void {
    this.cities=this.cityService.getCities();
  }
  navigateToDiscover() {
    this.router.navigate(['/discover']);
  }

 
}
