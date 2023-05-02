import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-section-hero',
  templateUrl: './section-hero.component.html',
  styleUrls: ['./section-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionHeroComponent {

}
