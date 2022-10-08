import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  value = '';

  constructor() { }

  ngOnInit(): void {
  }
  OnSearch() {
    console.log("OnSearch", this.value);
  }

  OnSearchNext() {
    console.log("OnSearchNext", this.value);
  }

  OnSearchPrevious() {
    console.log("OnSearchPrevious", this.value);
  }

  OnClear() {
    console.log("OnClear");
    this.value = "";
  }
}
