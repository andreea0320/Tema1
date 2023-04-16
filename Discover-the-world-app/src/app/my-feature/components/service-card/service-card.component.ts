import { Component, OnInit } from '@angular/core';
import { ServiceCard } from '../../models/service-model';
import { ServiceCardService } from '../../services/service-card.service';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {
 serviceCards!:ServiceCard[];

 constructor(private serviceCard:ServiceCardService){}

 ngOnInit(): void {
   this.serviceCards=this.serviceCard.getServiceCards();
 }


}
