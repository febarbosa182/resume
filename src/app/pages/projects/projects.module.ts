import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";

import { ProjectsComponent } from "./projects/projects.component";
import { ProjectsRoutingModule } from "./projects-routing.module";

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, SharedModule, ProjectsRoutingModule]
})
export class ProjectsModule {}
