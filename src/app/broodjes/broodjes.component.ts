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
  gekozenBroodje: Broodje;
  greens: boolean;
  type: boolean;
  comments: string;
  //label
  gekozenBroodjename: string;


  // BroodjesService gebruiken in deze component
  constructor(private broodService: BroodjeService) {
    this.greens = true;
    this.type = true;
    this.comments = "";
  }



  ngOnInit() {
    this.getBroodjes();
  }

  getBroodjes(): void {
    // wat is subscribe? - Subscriben op eventuele changes. Denk aan YouTube: je subscribet op iemand om te weten wanneer een nieuwe video komt
    this.broodService.getBroodjes().subscribe(broodjes => this.broodjes = broodjes);
  }

  selectedGreens(greens: boolean): void{
    //this.gekozenBroodje.greens = greens;
    console.log(greens)
    this.gekozenBroodje.greens = greens;
  }

  selectedType(type: boolean): void{
    this.gekozenBroodje.type = type;
    console.log(type)
  }


  selectBroodje(broodje: Broodje): void{

    //save the chosen object for later use
    this.gekozenBroodje = broodje;

    //change text in label with name propery of chosen object
    this.gekozenBroodjename  = broodje.name

  }
  bestel(comments: string): void {


    //catch not selecting sandwich



    //adding chosen properties to chosen object broodje
    //console.log(comments)

    this.comments = comments;
    this.gekozenBroodje.comments = this.comments;


    if(this.gekozenBroodje.type == true){}
    else{}

    if(this.gekozenBroodje.greens == true){}
    else{}


      //confirming broodjes order

      if(confirm( this.gekozenBroodje.name + " " + this.gekozenBroodje.type + " " + this.gekozenBroodje.greens + " bestellen?")) {
        //account.addbroodje(broodje object);
      }


  }

}
