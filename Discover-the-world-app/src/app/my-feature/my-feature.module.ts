import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityCardComponent } from './components/city-card/city-card.component';
import { FormsModule } from '@angular/forms';
import { ServiceCardComponent } from './components/service-card/service-card.component';



@NgModule({
  declarations: [
    CityCardComponent,
    ServiceCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[CityCardComponent,ServiceCardComponent]
})
export class MyFeatureModule { }
