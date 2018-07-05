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

  //Initiate broodje model
  broodjeOpties: Broodje = {id: -1, name: '', description: '', greens: true, type: true};


  //mapping string to model for two way databinding in html
  greensOptions: {value: boolean, display: string}[] = [{value: true, display:'Groenten'}, {value: false, display: 'Geen groenten'}];
  typeOptions: {value: boolean, display: string}[] = [{value: true, display:'Wit'}, {value: false, display: 'Bruin'}];

  //The chosen sandwich from the list
  gekozenBroodje: Broodje = new Broodje();


  // BroodjesService gebruiken in deze component
  constructor(private broodService: BroodjeService) {
  }

  ngOnInit() {
    this.getBroodjes();
  }

  getBroodjes(): void {
    // wat is subscribe? - Subscriben op eventuele changes. Denk aan YouTube: je subscribet op iemand om te weten wanneer een nieuwe video komt
    this.broodService.getBroodjes().subscribe(broodjes => this.broodjes = broodjes);
  }
  selectBroodje(broodje: Broodje): void{

    //save the chosen object for later use
    this.gekozenBroodje = broodje;
  }
  bestel(): void {

    //catch if no sandwich was ordered
  if (!this.gekozenBroodje.id){
    throw new Error("No Sandwich selected!")
  }

  //copy chosensandwich to new sandwich object
  //let broodjeToOrder = Object.assign({}, this.gekozenBroodje);

  //const optionsToCopy = ['comments', 'greens', 'type'];
   // for (let opt of optionsToCopy) {
    //      broodjeToOrder[opt] = this.broodjeOpties[opt]
    //}

    //-------------------------------------------

    //copy chosen sandwich to new sandwich object the noob way
    //merge 2 objects with each other
    let broodjeToOrder = Object.assign({}, this.gekozenBroodje);

   //map chosen sandwich properties to sandwich
    broodjeToOrder.greens = this.broodjeOpties.greens;
    broodjeToOrder.type = this.broodjeOpties.greens;
    broodjeToOrder.comments = this.broodjeOpties.comments;
    //----------------------------------------------

    //find string value of type and greens boolean
    const typeText = this.typeOptions.find((opt) => opt.value == broodjeToOrder.type).display;
    const greenText = this.greensOptions.find((opt) => opt.value == broodjeToOrder.greens).display;

      //confirming broodjes order
      if(confirm( this.gekozenBroodje.name + ", " + typeText + ", " + greenText + " bestellen?")) {
        //account.addbroodje(broodje object);
      }


  }

}
