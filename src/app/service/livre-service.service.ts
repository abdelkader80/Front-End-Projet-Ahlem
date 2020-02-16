import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivreServiceService {
  public host:String="http://127.0.0.1:8080"


  constructor(private http:HttpClient) { }
  public getCategories(){
    return this.http.get(this.host+"/categories");

  }
  public getLivres(c) {
    return this.http.get(c._links.livres.href);
  }


}
