import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "./country";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl: string = "https://restcountries.com/v3.1"
  private queryStringFields: string = "fields=name,flags,capital,region,currencies,languages,subregion,population,continents,area";

  constructor(private http: HttpClient) {
  }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/all?${this.queryStringFields}`);
  }

  searchFilteredCountries(searchPhrase: string, filterType: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/${filterType.toLowerCase()}/${searchPhrase.toLowerCase()}?${this.queryStringFields}`);
  }
}
