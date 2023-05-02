import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SplitPageComponent } from "./views/pages/split-page/split-page.component";
import { MainPageComponent } from "./views/pages/main-page/main-page.component";

const routes: Routes = [
    { path: "", component: SplitPageComponent },
    { path: "mostra", component: MainPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
