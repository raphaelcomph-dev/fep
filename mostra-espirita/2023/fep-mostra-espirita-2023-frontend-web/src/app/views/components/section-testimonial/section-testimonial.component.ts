import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit } from "@angular/core";
import Swiper from "swiper";

@Component({
    selector: "app-section-testimonial",
    templateUrl: "./section-testimonial.component.html",
    styleUrls: ["./section-testimonial.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTestimonialComponent implements OnInit {
    slidesPerView = 3;

    constructor(private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        this.slidesPerView = 1;
        if (window.innerWidth > 768) {
            this.slidesPerView = 2;
        }
        if (window.innerWidth > 992) {
            this.slidesPerView = 3;
        }
    }
}
