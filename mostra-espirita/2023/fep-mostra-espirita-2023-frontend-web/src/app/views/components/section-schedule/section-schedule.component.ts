import { ChangeDetectionStrategy, Component } from "@angular/core";
import { fadeInOut } from "../../../../assets/animations/fadeInOut";

@Component({
    selector: "app-section-schedule",
    templateUrl: "./section-schedule.component.html",
    styleUrls: ["./section-schedule.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [fadeInOut],
})
export class SectionScheduleComponent {
    showDay = 1;
}
