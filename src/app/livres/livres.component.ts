import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LivreServiceService } from '../service/livre-service.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  public categories;
  public livres;
  public currentCat;

  constructor(private livreService:LivreServiceService) { }

  ngOnInit() {
    this.livreService.getCategories()
    .subscribe(data => {
      this.categories = data;
    } , err=>{
      console.log(err);
    })

  }
  onGetLivres(c){
    this.currentCat=c;
    this.livreService.getLivres(c)
    .subscribe(data => {
      this.livres = data;
    } , err=>{
      console.log(err);
    })

  }
  onGetdetailsLivres(l){
    this.livreService.getLivres(l)
    .subscribe(data => {
      this.livres = data;
    } , err=>{
      console.log(err);
    })

}}
