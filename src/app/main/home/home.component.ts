import { Car, StoreDataService } from './../shared/store-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private cars:Car[] = [];

  constructor(private storeDataService:StoreDataService) { }

  ngOnInit() {
    this.cars = this.storeDataService.getCars(); 
  }

}
