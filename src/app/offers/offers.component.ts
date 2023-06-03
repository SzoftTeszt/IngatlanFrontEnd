import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { zip } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
  ingatlanok:any;
  kategoriak:any;
  private oszlop=["leiras", "hirdetesDatuma"," tehermentes", "kepUrl"]
  constructor(private base:BaseService){
    // this.base.get('ingatlan').subscribe(
    //   (ingatlanok)=> {  this.ingatlanok=ingatlanok; 
    //                     console.log(this.ingatlanok) }
    // )
    // this.base.get('kategoriak').subscribe(
    //   (kategoriak)=> {  this.kategoriak=kategoriak; 
    //                     console.log(this.kategoriak) }
    // )

        zip(this.base.get('ingatlan'),this.base.get('kategoriak') )
        .subscribe(
          values => {
            this.ingatlanok=values[0];
            this.kategoriak=values[1];
            console.log(this.ingatlanok);
            console.log(this.kategoriak);
          }
        )

  }
}
