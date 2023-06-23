import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.sass"],
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        sessionStorage.setItem("hideMostraWebsite", "true");
    }
    title = "fep-mostra-espirita-2023-frontend-web";
}
