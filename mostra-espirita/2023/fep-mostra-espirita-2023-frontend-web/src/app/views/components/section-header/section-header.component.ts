import { AfterViewInit, ChangeDetectionStrategy, Component, HostListener, TemplateRef } from "@angular/core";
import { NgbOffcanvas } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-section-header",
    templateUrl: "./section-header.component.html",
    styleUrls: ["./section-header.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent implements AfterViewInit {
    isHeaderFixed = false;
    currentSection: string;

    constructor(private offcanvasService: NgbOffcanvas) {}

    @HostListener("window:scroll", ["$event"])
    onWindowScroll() {
        this.isHeaderFixed = window.scrollY >= 80;
    }

    scrollToSection(sectionId: string): void {
        this.offcanvasService.dismiss();
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            element.scrollIntoView({ behavior: "smooth" });
            this.currentSection = sectionId;
        }, 100);
    }

    ngAfterViewInit(): void {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.currentSection = entry.target.id;
                    }
                });
            },
            { rootMargin: "0px", threshold: 0.5 }
        );

        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
            observer.observe(section);
        });
    }

    openNavbar(content: TemplateRef<any>): void {
        this.offcanvasService.open(content, { position: "end" });
    }
}
