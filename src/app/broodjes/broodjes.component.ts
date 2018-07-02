import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

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

  // Table
  displayedColumns: string[] = ['id', 'name', 'description'];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  dataSource: MatTableDataSource<Broodje>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // BroodjesService gebruiken in deze component
  constructor(private broodService: BroodjeService) {
    this.greens = true;
    this.type = true;
    this.comments = "";
  }

  ngOnInit() {
    // this.getBroodjes();
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.dataSource = new MatTableDataSource();
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith([]),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.broodService.getBroodjes(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.length;
          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => {
        this.dataSource.data = data
      });
    // Wire up paginator to the sort
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
