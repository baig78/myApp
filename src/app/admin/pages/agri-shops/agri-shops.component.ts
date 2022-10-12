import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-agri-shops',
  templateUrl: './agri-shops.component.html',
  styleUrls: ['./agri-shops.component.scss']
})
export class AgriShopsComponent implements OnInit {
  buttons: TableBtn[] | any;

  dataUsers: any;
  columnsUsers: TableColumn | any;
  totalRides: number = 0;
  footer: string = '';   
  totalVolume: number = 0;   
  fillerNav: string[] | any;
  products: any[] = [
    {value: 'Seeds', viewValue: 'Seeds'},
    {value: 'Truck', viewValue: 'Truck'},
    {value: 'Urea', viewValue: 'Urea'},
  ];

  constructor() { }

  ngOnInit(): void {
    this.buttons = [
      { styleClass: 'btn-success', icon: 'delete', payload: (element: UserData) => `${element.id}`, action: 'add' },
      { styleClass: 'btn-primary', icon: 'edit', payload: (element: UserData) => `${element.id}`, action: 'edit' },
    ];

    this.columnsUsers = [
      { columnDef: 'name', header: 'Name', cell: (element: any) => `${element.name}` },
      { columnDef: 'user_name', header: 'User Name', cell: (element: any) => `${element.user_name}`},
      { columnDef: 'password', header: 'password', cell: (element: any) => `${element.password}`},
      { columnDef: 'role', header: 'Role', cell: (element: any) => `${element.role}`
     }
    ]

    this.dataUsers = [
      { name: 'Naresh', user_name: 'Naresh123', 'password':'DSF*&*AS898','role':'Staff' },
      { name: 'Nageswararao', user_name: 'Nageswararao123', 'password':'DSF*&*AS898','role':'Admin' },
      { name: 'Vittal', user_name: 'Vittal123', 'password':'VittalDSF*&*AS898','role':'SuperAdmin' },
    ];
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

