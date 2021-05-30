import browser from "browser-detect";
import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { environment as env } from "../environments/environment";

import {
  routeAnimations,
  LocalStorageService,
  selectSettingsStickyHeader,
  selectSettingsLanguage,
  selectEffectiveTheme,
} from "./core/core.module";
import {
  actionSettingsChangeAnimationsPageDisabled,
  actionSettingsChangeLanguage,
  actionSettingsChangeTheme,
} from "./core/settings/settings.actions";

@Component({
  selector: "fbr-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [routeAnimations],
})
export class AppComponent implements OnInit {
  isProd = env.production;
  envName = env.envName;
  year = new Date().getFullYear();
  languages = ["en", "es", "pt-br"];
  navigation = [
    { link: "about", label: "fbr.menu.about" },
    { link: "resume", label: "fbr.menu.resume" },
    // { link: "projects", label: "fbr.menu.projects" }
  ];
  navigationSideMenu = [...this.navigation];

  selectTheme = false;
  themes = [{ value: "DEFAULT-THEME" }, { value: "DARK-THEME" }];

  stickyHeader$: Observable<boolean>;
  language$: Observable<string>;
  theme$: Observable<string>;

  constructor(
    private store: Store,
    private storageService: LocalStorageService
  ) {}

  private static isIEorEdgeOrSafari() {
    return ["ie", "edge", "safari"].includes(browser().name);
  }

  ngOnInit(): void {
    this.storageService.testLocalStorage();
    if (AppComponent.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        actionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true,
        })
      );
    }

    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
  }

  onLanguageSelect({ value: language }) {
    this.store.dispatch(actionSettingsChangeLanguage({ language }));
  }

  onThemeSelect({ value: theme }) {
    this.store.dispatch(actionSettingsChangeTheme({ theme }));
  }

  toogleTheme({}) {
    this.selectTheme = !this.selectTheme;
    this.onThemeSelect(this.themes[+this.selectTheme]);
  }
}
