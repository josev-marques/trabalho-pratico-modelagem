import { City } from '../entities/city';
import { CityNotFoundError } from '../errors/city-not-found.error';
import { CityRepository } from './protocols/city-repository';
import * as haversine from 'haversine-distance';

interface havObject {
  latitude: number,
  longitude: number
}

export class SearchCityService {
  constructor(private readonly cityRepo: CityRepository) {}

  async search(query: string): Promise<City[]> {
    if (!query || query.trim().length < 3) {
      return [];
    }

    const cities = await this.cityRepo.getAll();

    const filteredCities = cities.filter(
      (item) => item.name.toLowerCase().indexOf(query.toLowerCase()) > -1
    );

    if (filteredCities.length == 0) {
      throw new CityNotFoundError();
    }

    return filteredCities;
  }

  handleHaversine( a:havObject, b:havObject) {
    return haversine(a, b);
  }

}
