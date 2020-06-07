import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import {
  selectSettingsLanguage,
  selectEffectiveTheme
} from "./core/core.module";
import { TranslateModule } from "@ngx-translate/core";

describe("AppComponent", () => {
  let store: MockStore;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule, TranslateModule.forRoot()],
      declarations: [AppComponent],
      providers: [provideMockStore()]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    store.overrideSelector(selectSettingsLanguage, "en");
    store.overrideSelector(selectEffectiveTheme, "default");
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
