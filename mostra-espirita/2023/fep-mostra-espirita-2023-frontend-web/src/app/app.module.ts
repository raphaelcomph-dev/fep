import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SplitPageComponent } from "./views/pages/split-page/split-page.component";
import { MainPageComponent } from "./views/pages/main-page/main-page.component";
import { SectionHeroComponent } from "./views/components/section-hero/section-hero.component";
import { SectionHeaderComponent } from "./views/components/section-header/section-header.component";
import { SectionAboutComponent } from "./views/components/section-about/section-about.component";
import { SectionScheduleComponent } from "./views/components/section-schedule/section-schedule.component";
import { SectionPricingComponent } from "./views/components/section-pricing/section-pricing.component";
import { SectionTestimonialComponent } from "./views/components/section-testimonial/section-testimonial.component";
import { SectionInfraComponent } from "./views/components/section-infra/section-infra.component";
import { SectionTeamComponent } from "./views/components/section-team/section-team.component";
import { SectionFaqComponent } from "./views/components/section-faq/section-faq.component";
import { SectionMapComponent } from "./views/components/section-map/section-map.component";
import { SectionContactComponent } from "./views/components/section-contact/section-contact.component";
import { SectionFooterComponent } from "./views/components/section-footer/section-footer.component";
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from "ngx-mask";
import { FormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        SplitPageComponent,
        MainPageComponent,
        SectionHeroComponent,
        SectionHeaderComponent,
        SectionAboutComponent,
        SectionScheduleComponent,
        SectionPricingComponent,
        SectionTestimonialComponent,
        SectionInfraComponent,
        SectionTeamComponent,
        SectionFaqComponent,
        SectionMapComponent,
        SectionContactComponent,
        SectionFooterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        NgxMaskDirective,
        NgxMaskPipe,
        ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: "toast-top-center",
            preventDuplicates: true,
            progressBar: true,
        }),
        NgbModule,
    ],
    providers: [provideNgxMask()],
    bootstrap: [AppComponent],
})
export class AppModule {}
