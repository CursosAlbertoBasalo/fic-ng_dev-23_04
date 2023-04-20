import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  styles: [],
  standalone: true,
  imports: [JsonPipe],
  template: `
    <h3>Activities: {{ activitiesLength() }}</h3>
    <pre>{{ activities() | json }}</pre>
  `,
})
export default class HomePage {
  activities = toSignal(
    inject(HttpClient).get<object[]>('http://localhost:3000/activities'),
    {
      initialValue: [],
    }
  );
  activitiesLength = computed(() => this.activities().length);
  constructor() {
    effect(() => console.log(this.activities()));
  }
}
