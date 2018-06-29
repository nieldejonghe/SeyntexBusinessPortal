import { Component, OnInit } from '@angular/core';
import { Broodje } from '../core';
import { BroodjeService} from "../core";

@Component({
  selector: 'app-broodjes',
  templateUrl: './broodjes.component.html',
  styleUrls: ['./broodjes.component.css']
})
export class BroodjesComponent implements OnInit {
  broodjes: Broodje[];

  // BroodjesService gebruiken in deze component
  constructor(private broodService: BroodjeService) { }

  ngOnInit() {
    this.getBroodjes();
  }

  getBroodjes(): void {
    // wat is subscribe? - Subscriben op eventuele changes. Denk aan YouTube: je subscribet op iemand om te weten wanneer een nieuwe video komt
    this.broodService.getBroodjes().subscribe(broodjes => this.broodjes = broodjes);
  }

}
