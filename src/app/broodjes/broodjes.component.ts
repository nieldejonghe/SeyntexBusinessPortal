import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { Broodje } from '../core';
import { BroodjeService} from "../core";


interface SandwichOrder extends Broodje {
  ordered: boolean,
}

@Component({
  selector: 'app-broodjes',
  templateUrl: './broodjes.component.html',
  styleUrls: ['./broodjes.component.css']
})
export class BroodjesComponent implements OnInit {
  greens: boolean;
  type: boolean;
  comments: string;
  //label

  // Table
  displayedColumns: string[] = ['id', 'name', 'description', 'ordered', 'vegetable'];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  dataSource: MatTableDataSource<SandwichOrder>;

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
          return data.map((broodje: Broodje) => this.makeOrderSandwich(broodje));
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

  makeOrderSandwich(broodje: Broodje):SandwichOrder {
    return Object.assign({}, broodje, {ordered: false});
  }
  isAnySelectedOrder() {
    return this.dataSource.data.some((order: SandwichOrder) => {return order.ordered})
  }
  isAllSelectedOrder() {
    return this.dataSource.data.every((order: SandwichOrder) => {return order.ordered})
  }
  masterToggleOrder() {
    let select_value = true;
    if (this.isAllSelectedOrder())
      select_value = false;
    return this.dataSource.data.forEach((order:SandwichOrder) => {
      order.ordered = select_value
    });
  }
  isAnySelectedVegatable() {
    return this.dataSource.data.some((order: SandwichOrder) => {return order.greens})
  }
  isAllSelectedVegatable() {
    return this.dataSource.data.every((order: SandwichOrder) => {return order.greens})
  }
  masterToggleVegatable() {
    let select_value = true;
    if (this.isAllSelectedVegatable())
      select_value = false;
    return this.dataSource.data.forEach((order:SandwichOrder) => {
      order.greens = select_value
    });
  }
}
