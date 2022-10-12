import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diseases-list',
  templateUrl: './diseases-list.component.html',
  styleUrls: ['./diseases-list.component.scss']
})
export class DiseasesListComponent implements OnInit {
  buttons: TableBtn[] | any;

  dataUsers: any;
  columnsUsers: TableColumn | any;
  totalRides: number = 0;
  footer: string = '';   
  totalVolume: number = 0;   
  fillerNav: string[] | any;
  constructor() { }

  ngOnInit(): void {
    this.buttons = [
      { styleClass: 'btn-success', icon: 'delete', payload: (element: UserData) => `${element.id}`, action: 'add' },
      { styleClass: 'btn-primary', icon: 'edit', payload: (element: UserData) => `${element.id}`, action: 'edit' },
    ];

    this.columnsUsers = [
      { columnDef: 'name', header: 'Name', cell: (element: any) => `${element.name}` },
      { columnDef: 'description', header: 'Description', cell: (element: any) => `${element.description}`},
      { columnDef: 'image', header: 'Image', cell: (element: any) => `${element.image}`},
    ]

    this.dataUsers = [
      { 'name': 'Diseases-1', 'description': 'desc....', 'image':'http://image.jpg'},
      { 'name': 'Diseases-1', 'description': 'desc....', 'image':'http://image.jpg'},
      { 'name': 'Diseases-1', 'description': 'desc....', 'image':'http://image.jpg'},
      { 'name': 'Diseases-1', 'description': 'desc....', 'image':'http://image.jpg'},
      { 'name': 'Diseases-1', 'description': 'desc....', 'image':'http://image.jpg'},
      { 'name': 'Diseases-1', 'description': 'desc....', 'image':'http://image.jpg'},
      
      
    ];
  }
  uploadFile() {
    let theEvent = document.createEvent("MouseEvent");
    theEvent.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    var element: any = document.getElementById('fileUPload');
    element.dispatchEvent(theEvent);
  }
  buttonClick(e:any){}
}
export interface UserData {
  id: string;
  name: string;
  date: Date;
  rides: number;
  volume?: string;
  material: string;
}
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

