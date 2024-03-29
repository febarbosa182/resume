import { CommonModule } from "@angular/common";
import { NgModule, Optional, SkipSelf, ErrorHandler } from "@angular/core";
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from "@ngrx/router-store";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import {
  FaIconLibrary,
  FontAwesomeModule,
} from "@fortawesome/angular-fontawesome";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatProgressBarModule } from "@angular/material/progress-bar";

import { environment } from "../../environments/environment";

import {
  AppState,
  reducers,
  metaReducers,
  selectRouterState,
} from "./core.state";
import { TitleService } from "./title/title.service";
import {
  ROUTE_ANIMATIONS_ELEMENTS,
  routeAnimations,
} from "./animations/route.animations";
import { AnimationsService } from "./animations/animations.service";
import { AppErrorHandler } from "./error-handler/app-error-handler.service";
import { CustomSerializer } from "./router/custom-serializer";
import { LocalStorageService } from "./local-storage/local-storage.service";
import { HttpErrorInterceptor } from "./http-interceptors/http-error.interceptor";
import { GoogleAnalyticsEffects } from "./google-analytics/google-analytics.effects";
import { NotificationService } from "./notifications/notification.service";
import { SettingsEffects } from "./settings/settings.effects";
import {
  selectSettingsLanguage,
  selectEffectiveTheme,
  selectSettingsStickyHeader,
} from "./settings/settings.selectors";
import { MatButtonModule } from "@angular/material/button";
import {
  faBars,
  faUserCircle,
  faAdjust,
  faTimes,
  faInfoCircle,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faMediumM,
  faInstagram,
  faFacebook,
  faAws,
  faMicrosoft,
  faNodeJs,
  faJava,
  faAngular,
  faGoogle,
  faDocker,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export {
  TitleService,
  routeAnimations,
  AppState,
  LocalStorageService,
  ROUTE_ANIMATIONS_ELEMENTS,
  AnimationsService,
  selectRouterState,
  NotificationService,
  selectEffectiveTheme,
  selectSettingsLanguage,
  selectSettingsStickyHeader,
};

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `/assets/i18n/`, ".json");
}

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,
    FormsModule,

    // material
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatButtonModule,
    MatProgressBarModule,

    // ngrx
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([SettingsEffects, GoogleAnalyticsEffects]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          name: "Resume",
        }),

    // 3rd party
    FontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: RouterStateSerializer, useClass: CustomSerializer },
  ],
  exports: [
    // angular
    FormsModule,

    // material
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatButtonModule,
    MatProgressBarModule,

    // 3rd party
    FontAwesomeModule,
    TranslateModule,
  ],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
    faIconLibrary: FaIconLibrary
  ) {
    if (parentModule) {
      throw new Error("CoreModule is already loaded. Import only in AppModule");
    }
    faIconLibrary.addIcons(
      faBars,
      faUserCircle,
      faGithub,
      faMediumM,
      faInstagram,
      faFacebook,
      faAws,
      faMicrosoft,
      faNodeJs,
      faJava,
      faAngular,
      faGoogle,
      faDocker,
      faAdjust,
      faLinkedin,
      faTimes,
      faInfoCircle,
      faPlane
    );
  }
}
