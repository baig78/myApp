import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-crops',
  templateUrl: './crops.component.html',
  styleUrls: ['./crops.component.scss']
})
export class CropsComponent implements OnInit {
  buttons: TableBtn[] | any;

  dataCrops: any;
  columnsCrops: TableColumn | any;
  totalRides: number = 0;
  footer: string = '';   
  totalVolume: number = 0;   
  fillerNav: string[] | any;

  toppings = new FormControl('');
  toppingList: string[] = ['Seeding Stage', 'Vegetative Stage', 'Flowering Stage', 'Fruiting Stage', 'Harvesting Stage'];
  toppingList1: string[] = ['Plant Selection', 'Monitoring', 'Site Selection', 'Harvesting','Post Harvesting'];
  fertilizers: string[] = ['DAP/MOP/Urea', 'MOP/SSP/Urea', '10-26-26/DAP/Urea'];
  constructor() { }

  ngOnInit(): void {
    this.buttons = [
      { styleClass: 'btn-success', icon: 'delete', payload: (element: UserData) => `${element.id}`, action: 'add' },
      { styleClass: 'btn-primary', icon: 'edit', payload: (element: UserData) => `${element.id}`, action: 'edit' },
    ];

    this.columnsCrops = [
      { columnDef: 'crop_name', header: 'Crop Name', cell: (element: any) => `${element.crop_name}` },
      { columnDef: 'nutrient_quantities', header: 'Nutrient Quantities', cell: (element: any) => `${element.nutrient_quantities}`},
      { columnDef: 'prefered_fertilizers', header: 'Prefered Fertilizers', cell: (element: any) => `${element.prefered_fertilizers}`},
      { columnDef: 'pests_diseases', header: 'Pests Diseases', cell: (element: any) => `${element.pests_diseases}`},
      { columnDef: 'cultivation_tip', header: 'Cultivation Tip', cell: (element: any) => `${element.cultivation_tip}`}
    ]

    this.dataCrops = [
      { 'crop_name': 'Banana', 'nutrient_quantities': 'N10,P10,K10', 'prefered_fertilizers':'DAP/MOP/Urea','pests_diseases':'Seeding Stage', 'cultivation_tip':'Tip1' },
      { 'crop_name': 'Brinjal', 'nutrient_quantities': 'N10,P10,K10', 'prefered_fertilizers':'DAP/MOP/Urea','pests_diseases':'Seeding Stage', 'cultivation_tip':'Tip1' },
      { 'crop_name': 'Tamato', 'nutrient_quantities': 'N10,P10,K10', 'prefered_fertilizers':'DAP/MOP/Urea','pests_diseases':'Seeding Stage', 'cultivation_tip':'Tip1' },
      { 'crop_name': 'Potato', 'nutrient_quantities': 'N10,P10,K10', 'prefered_fertilizers':'DAP/MOP/Urea','pests_diseases':'Seeding Stage', 'cultivation_tip':'Tip1' },
      { 'crop_name': 'Mango', 'nutrient_quantities': 'N10,P10,K10', 'prefered_fertilizers':'DAP/MOP/Urea','pests_diseases':'Seeding Stage', 'cultivation_tip':'Tip1' },
      { 'crop_name': 'Grap', 'nutrient_quantities': 'N10,P10,K10', 'prefered_fertilizers':'DAP/MOP/Urea','pests_diseases':'Seeding Stage', 'cultivation_tip':'Tip1' },
      
    ];
  }
  buttonClick(e:any){}
  uploadFile(){}
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
