import { Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from '../../models/city-model';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent {
  @Input() city!: City;
  @Output() visitNow = new EventEmitter<City>();

  onVisitNow() {
    this.visitNow.emit(this.city);
  }
}
