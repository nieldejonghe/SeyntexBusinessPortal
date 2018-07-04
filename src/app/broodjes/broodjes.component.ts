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
  //two way data binding label
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

    try {

      this.gekozenBroodje.greens = greens;
      console.log(greens)
    }
    catch {
      console.log("selecteer broodje")
    }
  }

  selectedType(type: boolean): void{

    try {
      this.gekozenBroodje.type = type;
      console.log(type)
    }
    catch {
      console.log("selecteer broodje")
    }
  }

  selectBroodje(broodje: Broodje): void{

    //save the chosen object for later use
    this.gekozenBroodje = broodje;

    //change text in label with name propery of chosen object
    this.gekozenBroodjename  = broodje.name

  }
  bestel(comments: string): void {

    //adding chosen properties to chosen object broodje
    //console.log(comments)

    let typetext = "";
    let greenstext= "";




    this.comments = comments;
    this.gekozenBroodje.comments = this.comments;


    if(this.gekozenBroodje.type){
      typetext = "Wit"
      console.log(typetext)
    }
    else{
      typetext = "Bruin"
      console.log(typetext)
    }

    if(this.gekozenBroodje.greens){
      greenstext = "Met Groentjes"
      console.log(greenstext)
    }
    else{
      greenstext = "Zonder Groentjes"
      console.log(greenstext)
    }


      //confirming broodjes order
      if(confirm( this.gekozenBroodje.name + ", " + typetext + ", " + greenstext + " bestellen?")) {
        //account.addbroodje(broodje object);
      }


  }

}
