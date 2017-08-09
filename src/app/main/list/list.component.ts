import { StoreDataService } from './../shared/store-data.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private cars:any[] = [];
  constructor(private storeDataService:StoreDataService) { }

  ngOnInit() {
    this.cars = this.storeDataService.getCars(); 
  }

}


