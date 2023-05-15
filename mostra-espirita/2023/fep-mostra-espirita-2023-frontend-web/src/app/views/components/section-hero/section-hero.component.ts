import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-section-hero",
    templateUrl: "./section-hero.component.html",
    styleUrls: ["./section-hero.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeroComponent {
    @Output() scrollToSectionEvent = new EventEmitter<string>();

    scrollToSection(sectionId: string): void {
        this.scrollToSectionEvent.emit(sectionId);
    }
}
