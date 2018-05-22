import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CricketersService } from '../cricketers.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cricketers',
  templateUrl: './cricketers.component.html',
  styleUrls: ['./cricketers.component.css']
})
export class CricketersComponent implements OnInit {
HeaderSelectionText = 'You haven\'t selected anything.';
BodySelectionText = 'Click on a button to load content.';
isView = false;
ELEMENT_DATA = [];
displayedColumns = ['Player Name', 'Player Country', 'View Player'];
dataSource = null;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  constructor(private service: CricketersService, private router: Router, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ViewPlayers() {
    this.HeaderSelectionText = 'Players';
    this.BodySelectionText = 'Displaying Players';
    this.service.getAllPlayers().subscribe((data: any) => {
      console.log(data.data);
      this.isView = true;
      this.ELEMENT_DATA = data.data;
      this.changeDetector.detectChanges();
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, (err: any) => {
      console.log(err);
    });
  }
  ViewPlayer(element) {
    console.log(element);
    this.router.navigate(['/player', element._id]);
  }
}
