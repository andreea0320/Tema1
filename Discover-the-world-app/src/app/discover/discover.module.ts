import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitySearchComponent } from './city-search/city-search.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyFeatureModule } from "../my-feature/my-feature.module";



@NgModule({
    declarations: [CitySearchComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: CitySearchComponent }
        ]),
        MyFeatureModule
    ]
})
export class DiscoverModule { }
