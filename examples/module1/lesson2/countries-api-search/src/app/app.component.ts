import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {Country} from "./country";
import {CountriesService} from "./countries.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {MatError, MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {MatTreeNode} from "@angular/material/tree";
import {MatChip, MatChipListbox, MatChipOption} from "@angular/material/chips";
import {MatDivider} from "@angular/material/divider";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {SearchBoxComponent} from "./components/search-box/search-box.component";
import {CountryCardComponent} from "./components/country-card/country-card.component";

@Component({
  imports: [
    RouterOutlet, FormsModule, HttpClientModule,
    CommonModule, MatFormField, MatLabel,
    MatInput, MatButton, MatIconButton, MatIcon,
    MatCard, MatCardHeader, MatCardImage, MatCardTitle,
    MatSuffix, MatTreeNode, MatChipListbox, MatChipOption, MatChip,
    MatCardSubtitle, MatCardTitleGroup, MatCardContent,
    MatDivider, MatSelect, MatOption, MatProgressSpinner, MatError,
    SearchBoxComponent, CountryCardComponent
  ],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html'
})
export class AppComponent {
  protected readonly JSON = JSON;
  protected readonly Object = Object;
  // Constants
  title = 'countries-api-search';
  // ngModel properties
  searchQuery: string = "";
  filterType: string = "name";
  sortType: string = "name";
  // used to store data from service
  countries: Country[] = [];
  // UX
  isLoading: boolean = false;
  error: string | null = null;

  constructor(private countryService: CountriesService) {
  }

  ngAfterViewInit(): void {
    this.countryService.getAllCountries().subscribe((countries: Country[]) => {
      this.countries = countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
    })
  }

  processSearch(searchPhrase: string, filterType: string): void {
    // clear countries list to have clean view while performing search
    this.countries = [];
    this.isLoading = true;
    this.error = null;
    this.countryService.searchFilteredCountries(searchPhrase, filterType).subscribe({
      next: (countries: Country[]) => {
        this.countries = countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        if (error.status === 404) {
          this.error = `Country not found for current criteria.
          Search phrase: ${searchPhrase},
          filter: ${filterType}`;
        } else {
          this.error = "An error occurred while providing results";
        }
      }
    })
    this.sortType = "name";
  }

  sortCountries(): void {
    if (this.countries.length > 0) {
      if (this.sortType === "name") {
        this.countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
      } else {
        this.countries.sort((a, b) => b.population - a.population);
      }
    }
  }

  updateSortType(newSortType: string): void {
    this.sortType = newSortType;
    this.sortCountries();
  }
}
