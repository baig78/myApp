import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnInit {
  
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @Input() data: any[] = [];
  // @Input() columns: string[] = [];
  @Input() columns: TableColumn[] = [];
  @Input() buttons: TableBtn[] = [];
  @Output() buttonClick = new EventEmitter<string[]>();

  @Input() pagination: number[] = [];
  @Input() pageSize: number | any;
  @Input() tableMinWidth: number = 500;


  dataSource = new MatTableDataSource<any>();
  
  displayedColumns: string[] = [];

  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator:any= MatPaginator;
  ngOnInit(): void {
    this.dataSource =  new MatTableDataSource(this.data);
    this.displayedColumns = [...this.columns.map(c => c.columnDef)];
    if (this.buttons.length > 0 ) this.displayedColumns = [...this.displayedColumns, 'actions'];
    console.log('----------',this.displayedColumns)
    // this.displayedColumns = this.columns;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];
export interface TableColumn {
  columnDef: string;
  header: string;
  cell: (arg0: any) => string;
}

export interface TableBtn {
  styleClass: string;
  icon: string;
  payload: (arg0: any) => string;
  action: string;
}