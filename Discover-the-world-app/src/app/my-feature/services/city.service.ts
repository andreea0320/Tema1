import { Injectable } from '@angular/core';
import { City } from '../models/city-model';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private cities:City[]=[
  {
    name:'Paris',
    image:'assets/images/paris-image.jpg',
    description:'Love City'
  },
  {
    name:'New York',
    image:'assets/images/new-york.jpg',
    description:'The city of possibilities'
  },
  {
    name:'Bali',
    image:'assets/images/Bali.jpg',
    description:'Nature'
  },
  {
    name:'Lauterbrunnen',
    image:'assets/images/Lauterbrunnen.jpg',
    description:'Nature'
  },
  {
    name:'Dubai',
    image:'assets/images/Dubai.jpg',
    description:'Money $$$'
  },
  {
    name:'Venice',
    image:'assets/images/Venice.jpg',
    description:'Feelings'
  },
  {
    name:'Sydney',
    image:'assets/images/Sydney.jpg',
    description:'Feelings'
  },
  {
    name:'Singapore',
    image:'assets/images/Singapore.jpg',
    description:'Feelings'
  },
  {
    name:'San Francisco',
    image:'assets/images/SanFrancisco.jpg',
    description:'Feelings'
  },
  {
    name:'Sedona',
    image:'assets/images/Sedona.jpg',
    description:'Feelings'
  },
  {
    name:'Kyoto',
    image:'assets/images/Kyoto.jpg',
    description:'Feelings'
  },
  ]
  
  getCities():City[]
  {
    return this.cities;
  }
}
