import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newad',
  templateUrl: './newad.component.html',
  styleUrls: ['./newad.component.css']
})
export class NewadComponent {

  newAd:any={}
  kategoriak:any;
  showError=false;
  errorMessage="";
  constructor(private base:BaseService, private router:Router){
    this.base.get('kategoriak').subscribe(
      (adatok)=>this.kategoriak=adatok
    )
    this.newAd.tehermentes=true;
    this.newAd.hirdetesDatuma = new Date().toLocaleDateString().replaceAll(".","").replaceAll(" ","-");
    // console.log(datum);
  }

  ujIngatlan(body:any){
    this.newAd.hirdetesDatuma=this.newAd.hirdetesDatuma.replaceAll("-",".")
    this.base.newad(body).subscribe({
      next:()=> this.router.navigate(['/offers']),
      error:(e)=> {this.showError=true; this.errorMessage=e.message}
    }
    )
  }
}
