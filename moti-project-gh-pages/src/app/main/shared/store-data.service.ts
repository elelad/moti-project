import { GetDataService } from './../../service/get-data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class StoreDataService {
  public cars: Car[] = [];

  constructor(private getDataService: GetDataService) {
    setTimeout(() => {
      this.getDataService.getData().subscribe((data: any) => {
        //console.log(data);
        data.forEach(item => {
          console.log(item);
          this.cars.push(new Car(item.manufacturer, item.model, item.price, item.wiki));
        });
      })
    }, 2000);//mock server respons
  }

  getCars() {
    return this.cars;
  }

}

export class Car {
  constructor(public manufacturer: string, private model: string, private price: number, private wiki: string) {

  }
}
