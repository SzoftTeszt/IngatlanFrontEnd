import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IngatlanFrontEnd';

  constructor(private ngm:NgbModal)
  {}

  public open(modal:any){
    this.ngm.open(modal)
  }
}
