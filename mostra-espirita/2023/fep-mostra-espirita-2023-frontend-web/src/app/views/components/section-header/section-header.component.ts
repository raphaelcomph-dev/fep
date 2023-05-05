import { ChangeDetectionStrategy, Component, HostListener } from "@angular/core";

@Component({
    selector: "app-section-header",
    templateUrl: "./section-header.component.html",
    styleUrls: ["./section-header.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent {
    isHeaderFixed = false;

    currentSection: string;

    @HostListener("window:scroll", ["$event"])
    onWindowScroll() {
        if (window.scrollY >= 80) {
            console.log("fixing the header");

            this.isHeaderFixed = true;
        } else {
            console.log("releasing the header");
            this.isHeaderFixed = false;
        }
    }

    scrollToSection(sectionId: string): void {
        // this.offcanvasService.dismiss();
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            element.scrollIntoView({ behavior: "smooth" });
            this.currentSection = sectionId;
        }, 100);
    }
}
