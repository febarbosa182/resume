import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";

import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatChipsModule } from "@angular/material/chips";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatDividerModule } from "@angular/material/divider";
import { MatSliderModule } from "@angular/material/slider";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";

import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";
import {
  faEnvelope,
  faCalendarDay,
  faMapMarkerAlt,
  faUserCircle,
  faDharmachakra,
  faCode
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faAws,
  faMicrosoft,
  faNodeJs,
  faJava,
  faAngular,
  faGoogle,
  faDocker
} from "@fortawesome/free-brands-svg-icons";
import { SafePipe } from "./safe/safe.pipe";
import { MaterialElevationDirective } from "./elevation/elevation.directive";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    TranslateModule,

    MatButtonModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDividerModule,

    FontAwesomeModule
  ],
  declarations: [SafePipe, MaterialElevationDirective],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    TranslateModule,

    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatChipsModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,

    FontAwesomeModule,
    SafePipe,
    MaterialElevationDirective
  ]
})
export class SharedModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(
      faGithub,
      faAws,
      faMicrosoft,
      faNodeJs,
      faJava,
      faAngular,
      faGoogle,
      faDocker,
      faEnvelope,
      faCalendarDay,
      faMapMarkerAlt,
      faUserCircle,
      faDharmachakra,
      faCode
    );
  }
}
