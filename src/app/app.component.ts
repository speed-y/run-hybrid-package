import { Component } from '@angular/core';
import { CommonService } from './common-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'src';
  constructor(){
    const commonService = new CommonService();
  }
}
