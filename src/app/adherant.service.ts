import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdherantService {
  public host:String="http://127.0.0.1:8081"

  constructor(private http:HttpClient) { }
  public getDirections(){
    return this.http.get(this.host+"/directions");
  }
}
