import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { interval, concat, of, from, Observable } from "rxjs";
import {
  map,
  take,
  repeat,
  delay,
  concatMap,
  ignoreElements,
} from "rxjs/operators";
const interests = [
  "Cloud Architect",
  "Software Engineer",
  "Innovation",
  "DevOps",
  "SRE",
];

const type = ({ word, speed, backwards = false }) =>
  interval(speed).pipe(
    map((x) =>
      backwards
        ? String(word).substr(0, word.length - x - 1)
        : String(word).substr(0, x + 1)
    ),
    take(word.length)
  );

const typeEffect = (word) =>
  concat(
    type({ word, speed: 50 }),
    of("").pipe(delay(1200), ignoreElements()), // pause
    type({ word, speed: 50, backwards: true }),
    of("").pipe(delay(300), ignoreElements())
  );

@Component({
  selector: "fbr-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  interest: Observable<string> = from(interests).pipe(
    concatMap(typeEffect),
    repeat()
  );
  defaultElevation = 8;

  constructor() {}

  ngOnInit() {}
}
