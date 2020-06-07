import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";

import { skills, Skill } from "../skiils.data";
import { experiences, Experience } from "../experiences.data";

@Component({
  selector: "fbr-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumeComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  skills: Skill[] = skills;
  experiences: Experience[] = experiences;

  constructor() {}

  ngOnInit(): void {}
}
