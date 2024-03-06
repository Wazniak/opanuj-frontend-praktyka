import {Component, Input} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {MatError, MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {
  MatCard, MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {MatTreeNode} from "@angular/material/tree";
import {MatChip, MatChipListbox, MatChipOption} from "@angular/material/chips";
import {MatDivider} from "@angular/material/divider";
import {MatSelect} from "@angular/material/select";
import {MatOption} from "@angular/material/autocomplete";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {Country} from "../../country";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: "app-results-container",
  templateUrl: "./country-card.component.html",
  standalone: true,
  imports: [
    FormsModule, MatFormField, MatLabel,
    MatInput, MatButton, MatIconButton, MatIcon,
    MatCard, MatCardHeader, MatCardImage, MatCardTitle,
    MatSuffix, MatTreeNode, MatChipListbox, MatChipOption, MatChip,
    MatCardSubtitle, MatCardTitleGroup, MatCardContent,
    MatDivider, MatSelect, MatOption, MatProgressSpinner, MatError, NgIf, NgForOf
  ],
  styleUrls: ['./country-card.component.css']
})

export class CountryCardComponent {
  protected readonly Object = Object;
  @Input() countries!: Country[];
}
