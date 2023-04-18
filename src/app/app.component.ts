import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

export const SwitchDeps = [NgSwitch, NgSwitchDefault, NgSwitchCase] as const;

@Component({
  standalone: true,
  imports: [SwitchDeps, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fic-ng_dev-23_04';
}
