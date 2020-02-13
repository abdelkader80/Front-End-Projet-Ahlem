import { Component, OnInit } from '@angular/core';
import { LivreServiceService } from '../service/livre-service.service';
import { AdherantService } from '../adherant.service';

@Component({
  selector: 'app-adherants',
  templateUrl: './adherants.component.html',
  styleUrls: ['./adherants.component.css']
})
export class AdherantsComponent implements OnInit {
  public directions;

  constructor(private adherantserv:AdherantService) { }

  ngOnInit() {
    this.adherantserv.getDirections()
    .subscribe(data => {
      this.directions = data;
    } , err=>{
      console.log(err);
    })
  }

}
