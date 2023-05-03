import { animate, style, transition, trigger } from "@angular/animations";

export const fadeInOut = trigger("fadeInOut", [
    transition(":enter", [style({ opacity: 0 }), animate("0.5s ease-in-out", style({ opacity: 1 }))]),
]);
