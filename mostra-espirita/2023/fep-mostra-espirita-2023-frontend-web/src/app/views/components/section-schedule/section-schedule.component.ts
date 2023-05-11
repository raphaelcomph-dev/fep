import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
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

    urlCalendarEventsApple =
        "webcal://calendar.google.com/calendar/ical/ec59397d35d6631f2ee99c77f8153d2da6233010eb1e4ca53fed80801c500b95@group.calendar.google.com/public/basic.ics";
    urlCalendarEventsGoogle =
        "https://calendar.google.com/calendar/render?cid=ec59397d35d6631f2ee99c77f8153d2da6233010eb1e4ca53fed80801c500b95@group.calendar.google.com";

    urlCalendarEvents = "";

    SMALL_SCREEN_BREAKPOINT = 576;

    constructor() {
        const userAgent = navigator.userAgent;
        if (userAgent.indexOf("iPhone") !== -1) {
            this.urlCalendarEvents = this.urlCalendarEventsApple;
        } else {
            this.urlCalendarEvents = this.urlCalendarEventsGoogle;
        }
    }
}
