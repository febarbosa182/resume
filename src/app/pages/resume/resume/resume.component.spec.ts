import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ResumeComponent } from "./resume.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "../../../shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";

describe("ResumeComponent", () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, NoopAnimationsModule, TranslateModule.forRoot()],
      declarations: [ResumeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
