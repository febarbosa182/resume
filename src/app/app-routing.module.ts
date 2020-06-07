import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "about",
    pathMatch: "full"
  },
  {
    path: "about",
    loadChildren: () =>
      import("./pages/about/about.module").then(m => m.AboutModule)
  },
  {
    path: "resume",
    loadChildren: () =>
      import("./pages/resume/resume.module").then(m => m.ResumeModule)
  },
  {
    path: "projects",
    loadChildren: () =>
      import("./pages/projects/projects.module").then(m => m.ProjectsModule)
  },
  {
    path: "**",
    redirectTo: "about"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
