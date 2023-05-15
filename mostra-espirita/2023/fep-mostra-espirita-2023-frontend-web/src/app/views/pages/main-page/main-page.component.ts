import { Component } from "@angular/core";

@Component({
    templateUrl: "./main-page.component.html",
    styleUrls: ["./main-page.component.scss"],
})
export class MainPageComponent {
    scrollToSection(sectionId: string): void {
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            element.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }
}
