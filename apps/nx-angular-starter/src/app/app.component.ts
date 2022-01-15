import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nx-angular-starter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
