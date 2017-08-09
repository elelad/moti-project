import { StoreDataService, Car } from './../shared/store-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  @Input() private list:any[] = [];
  private autoList:any[] = [];
  private searchQuery:string = "";
  private showList:boolean = false;
  private selectedCar:Car;


  constructor() { }

  ngOnInit() {
    
  }

  searchCar(){
    if (this.searchQuery.length > 1){
      console.log('search');
      this.autoList = this.list.filter((v:Car)=>{
        let carName = v.manufacturer.toLowerCase();
        return carName.startsWith(this.searchQuery.toLowerCase());
      });
      console.log(this.autoList);
    }else{
      this.autoList.length = 0;
    }
  }

  toggleList(){
    setTimeout(()=>{
      this.showList = !this.showList;
    }, 500);
  }

  setSelectedCar(car:Car){
    console.log(car);
    this.selectedCar = car;

  }

}
