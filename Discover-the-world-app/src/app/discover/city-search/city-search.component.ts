import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/my-feature/models/city-model';
import { CityService } from 'src/app/my-feature/services/city.service';


@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent{
  searchItem:string='';
  selectedCities:City[] | undefined;

  constructor(private cityService:CityService){}
  

  search(): void {
    const cities: City[] = this.cityService.getCities().filter(city => {
      return city.name.toLowerCase().startsWith(this.searchItem.toLowerCase());
    });


    if (this.searchItem === '') {
      this.selectedCities = undefined;
    } else if (cities.length > 0) {
      this.selectedCities = cities;
    } else {
      console.log('City not found');
    }
   
  }

  
}

