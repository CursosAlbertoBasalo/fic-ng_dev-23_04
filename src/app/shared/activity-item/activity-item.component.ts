import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span>
      {{ activity.title }}
    </span>
  `,
  styles: [],
})
export class ActivityItemComponent {
  @Input() activity: any;
}
