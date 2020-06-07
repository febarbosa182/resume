import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";

import { ResumeComponent } from "./resume/resume.component";
import { ResumeRoutingModule } from "./resume-routing.module";

@NgModule({
  declarations: [ResumeComponent],
  imports: [CommonModule, SharedModule, ResumeRoutingModule]
})
export class ResumeModule {}
