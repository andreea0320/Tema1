import { Injectable } from '@angular/core';
import { ServiceCard } from '../models/service-model';

@Injectable({
  providedIn: 'root'
})
export class ServiceCardService {

  private serviceCards: ServiceCard[] = [
    {
      title: 'Service Card 1',
      name: 'Service Card 1',
      description: 'Description of Service Card 1'
    },
    {
      title: 'Service Card 2',
      name: 'Service Card 2',
      description: 'Description of Service Card 2'
    },
    {
      title: 'Service Card 3',
      name: 'Service Card 3',
      description: 'Description of Service Card 3'
    },
    {
      title: 'Service Card 4',
      name: 'Service Card 4',
      description: 'Description of Service Card 4'
    }
  ];

  constructor() { }

  getServiceCards(): ServiceCard[] {
    return this.serviceCards;
  }
}
