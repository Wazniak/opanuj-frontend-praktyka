import {Component, EventEmitter, Input, Output} from "@angular/core";
import {MatOption} from "@angular/material/autocomplete";
import {MatError, MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatSelect} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
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
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: "app-search-box",
  templateUrl: "./search-box.component.html",
  standalone: true,
  imports: [
    FormsModule, MatFormField, MatLabel,
    MatInput, MatButton, MatIconButton, MatIcon,
    MatCard, MatCardHeader, MatCardImage, MatCardTitle,
    MatSuffix, MatTreeNode, MatChipListbox, MatChipOption, MatChip,
    MatCardSubtitle, MatCardTitleGroup, MatCardContent,
    MatDivider, MatSelect, MatOption, MatProgressSpinner, MatError,
  ],
  styleUrls: ["./search-box.component.css"]
})
export class SearchBoxComponent {
  @Input() searchQuery: string = "";
  @Input() filterType: string = "name";
  @Input() sortType: string = "name";
  @Output() search = new EventEmitter<{
    searchQuery: string, filterType: string, sortType: string
  }>();
  @Output() sortChange = new EventEmitter<{ sortType: string }>();

  onSearch(): void {
    this.search.emit({
      searchQuery: this.searchQuery,
      filterType: this.filterType,
      sortType: this.sortType
    })
  }

  onSortChange(): void {
    this.sortChange.emit({sortType: this.sortType})
  }
}
