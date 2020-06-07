import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProjectsComponent } from "./projects/projects.component";

const routes: Routes = [
  {
    path: "",
    component: ProjectsComponent,
    data: { title: "fbr.menu.projects" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
