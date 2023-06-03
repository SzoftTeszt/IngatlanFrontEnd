import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/"
  
  get(mit:string){
      return this.http.get(this.url+mit)
  }

  newad(body:any){
    return  this.http.post(this.url+'ingatlan', body)
  }
}
