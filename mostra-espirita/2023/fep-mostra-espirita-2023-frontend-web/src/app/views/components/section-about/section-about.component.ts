import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";

@Component({
    selector: "app-section-about",
    templateUrl: "./section-about.component.html",
    styleUrls: ["./section-about.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionAboutComponent implements OnInit {
    targetDate = new Date("2023-09-15 19:00:00");
    remainingTime = {
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };

    private readonly ONE_SECOND_IN_MILISEC = 1000;
    private readonly ONE_MINUTE_IN_SECONDS = 60;
    private readonly ONE_HOUR_IN_MINUTES = 60;
    private readonly ONE_DAY_IN_HOURS = 24;
    private readonly ONE_MONTH_IN_DAYS = 30;

    constructor(private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        setInterval(() => {
            const now = new Date();
            const difference = this.targetDate.getTime() - now.getTime();

            this.remainingTime.months = Math.floor(
                difference / (this.ONE_SECOND_IN_MILISEC * this.ONE_MINUTE_IN_SECONDS * this.ONE_HOUR_IN_MINUTES * this.ONE_DAY_IN_HOURS * this.ONE_MONTH_IN_DAYS)
            );
            this.remainingTime.days = Math.floor(
                (difference / (this.ONE_SECOND_IN_MILISEC * this.ONE_MINUTE_IN_SECONDS * this.ONE_HOUR_IN_MINUTES * this.ONE_DAY_IN_HOURS)) % this.ONE_MONTH_IN_DAYS
            );
            this.remainingTime.hours = Math.floor((difference / (this.ONE_SECOND_IN_MILISEC * this.ONE_MINUTE_IN_SECONDS * this.ONE_HOUR_IN_MINUTES)) % this.ONE_DAY_IN_HOURS);
            this.remainingTime.minutes = Math.floor((difference / (this.ONE_SECOND_IN_MILISEC * this.ONE_MINUTE_IN_SECONDS)) % this.ONE_HOUR_IN_MINUTES);
            this.remainingTime.seconds = Math.floor((difference / this.ONE_SECOND_IN_MILISEC) % this.ONE_MINUTE_IN_SECONDS);

            this.cdr.detectChanges();
        }, 1000);
    }
}
