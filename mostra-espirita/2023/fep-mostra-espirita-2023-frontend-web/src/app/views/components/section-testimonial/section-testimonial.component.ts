import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit } from "@angular/core";
import Swiper from "swiper";

@Component({
    selector: "app-section-testimonial",
    templateUrl: "./section-testimonial.component.html",
    styleUrls: ["./section-testimonial.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTestimonialComponent implements OnInit {
    swiper: Swiper;
    slidesPerView = 0;

    constructor(private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        this.swiper = new Swiper(".swiper-container", {
            slidesPerView: 1,
            // other options...
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                // when window width is >= 480px
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                // when window width is >= 640px
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
            autoplay: true,
            autoHeight: true,
        });
    }
}
