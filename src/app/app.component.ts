import {Component} from '@angular/core';
import {AccessService} from './access/access.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pizzeriiApp';

  constructor(readonly accessService: AccessService) {
  }
}
