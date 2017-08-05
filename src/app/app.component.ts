import { RefreshService } from './service/refresh-service';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RefreshService]
})
export class AppComponent {
  title = 'app';
}
