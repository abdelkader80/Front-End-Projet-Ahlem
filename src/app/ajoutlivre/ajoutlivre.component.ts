import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LivreServiceService } from '../service/livre-service.service';

@Component({
  selector: 'app-ajoutlivre',
  templateUrl: './ajoutlivre.component.html',
  styleUrls: ['./ajoutlivre.component.css']
})
export class AjoutlivreComponent implements OnInit {
  public host:String="http://127.0.0.1:8080"
  public cat:any={
    nom_cat: ''

  }

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  public postcat(){
    return this.http.post(this.host+"/categories", this.cat)
    .subscribe(data => {
      this.cat = data;
    } , err=>{
      console.log(err);
    })

  }

}
