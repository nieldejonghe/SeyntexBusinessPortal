import { Component, OnInit } from '@angular/core';
import { Brood} from '../brood';
import { BroodService} from '../brood.service';

@Component({
  selector: 'app-broodjes',
  templateUrl: './broodjes.component.html',
  styleUrls: ['./broodjes.component.css']
})
export class BroodjesComponent implements OnInit {
  broodjes: Brood[];



  //Broodservice initialiseren
  constructor(private broodService: BroodService) { }

  ngOnInit() {
  }

  //test changes

  getBroodjes(): void{

    //wat is subscribe?
    //Points naar getBroodjes in broodService class
    this.broodService.getBroodjes().subscribe(broodjes => this.broodjes = broodjes)


  }

  //opties W:wit B:bruin ZG; zonder groenten MG: met groenten

  //broodjes[naam, omschrijving]

}
