import { JsonPipe, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivityItemComponent } from 'src/app/shared/activity-item/activity-item.component';
@Component({
  styles: [],
  standalone: true,
  imports: [JsonPipe, NgFor, ActivityItemComponent],
  template: `
    <h3>Activities: {{ activitiesLength() }}</h3>
    <ul>
      <li *ngFor="let activity of activities()">
        <app-activity-item [activity]="activity"/>
      </li>
    </ul>
  `,
})
export default class HomePage {
  activities = toSignal(
    inject(HttpClient).get<any[]>('http://localhost:3000/activities'),
    {
      initialValue: [],
    }
  );
  activitiesLength = computed(() => this.activities().length);
  constructor() {
    effect(() => console.log(this.activities()));
  }
}
