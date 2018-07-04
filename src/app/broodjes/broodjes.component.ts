import { Component, OnInit} from '@angular/core';
import { Broodje } from '../core';
import { BroodjeService} from "../core";


@Component({
  selector: 'app-broodjes',
  templateUrl: './broodjes.component.html',
  styleUrls: ['./broodjes.component.css']
})
export class BroodjesComponent implements OnInit {

  broodjes: Broodje[];
  // Generic item to contain the options chosen in the model
  broodjeOpties: Broodje = {id: -1, name: '', description: '', greens: true, type: true};
  // Options - mapping string to the value on the model
  greensOptions: {value: boolean, display: string}[] = [{value: true, display:'Groenten'}, {value: false, display: 'Geen groenten'}];
  typeOptions: {value: boolean, display: string}[] = [{value: true, display:'Wit'}, {value: false, display: 'Bruin'}];
  // Chosen sandwich from the list
  gekozenBroodje: Broodje = new Broodje();

  // BroodjesService gebruiken in deze component
  constructor(private broodService: BroodjeService) { }

  ngOnInit() {
    this.getBroodjes();
  }

  getBroodjes(): void {
    // wat is subscribe? - Subscriben op eventuele changes. Denk aan YouTube: je subscribet op iemand om te weten wanneer een nieuwe video komt
    this.broodService.getBroodjes()
      .subscribe(broodjes => this.broodjes = broodjes);
  }

  selectBroodje(broodje: Broodje): void{
    //save the chosen object for later use
    this.gekozenBroodje = broodje;
  }
  bestel(): void {
    if (!this.gekozenBroodje.id) {
      // No sandwich was ordered
      throw new Error('Select a sandwich')
    }
    // Copy the selected sandwich to always have a fresh sandwich upon selecting a new one
    let broodjeToOrder = Object.assign({}, this.gekozenBroodje);
    const optionsToCopy = ['comments', 'greens', 'type'];
    for (let opt of optionsToCopy) {
      broodjeToOrder[opt] = this.broodjeOpties[opt]
    }
    console.log(broodjeToOrder);
    const typeText = this.typeOptions.find((opt) => opt.value == broodjeToOrder.type).display;
    const greenText = this.greensOptions.find((opt) => opt.value == broodjeToOrder.greens).display;
      //confirming broodjes order
      if(confirm( broodjeToOrder.name + ", " + typeText + ", " + greenText + " bestellen?")) {
        //account.addbroodje(broodje object);
      }


  }

}
