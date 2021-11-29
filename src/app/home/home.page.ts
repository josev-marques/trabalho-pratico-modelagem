import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/domain/entities/city';
import { SearchCityService } from 'src/domain/services/search-city.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { cities } from "../../data/data-source/br-cities";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cities: City[];
  hasError: boolean = false;
  errorMessage: string;

  constructor(
    private readonly searchService: SearchCityService,
    private readonly router: Router,
    private geolocation: Geolocation
  ) {}

  async onSearch(query: string) {
    try {
      this.hasError = false;
      this.cities = await this.searchService.search(query);
    } catch (error) {
      this.hasError = true;
      this.errorMessage = error.message;
    }
  }

  onSelectCity(cityId: string) {
    this.router.navigateByUrl(`/weather/${cityId}`);
  }

  getNearCity(){
    const ourLocale = {
      latitude: 0,
      longitude: 0
    };

    var maxInt = Number.MAX_SAFE_INTEGER;
    var nearCity = 0

    this.geolocation.getCurrentPosition().then((resp) => {
      ourLocale.latitude = resp.coords.latitude;
      ourLocale.longitude = resp.coords.longitude

      cities.map((city, index) => {

        let distance = this.searchService.handleHaversine(ourLocale, {
          latitude: city.latitude,
          longitude: city.longitude
        })

        if (distance < maxInt) {
          maxInt = distance;
          nearCity = city.id;
        }
      })
      this.onSelectCity(String(nearCity))
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
}
