import { StoreDataService } from './store-data.service';
import { GetDataService } from './../../service/get-data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule,
  ],
  declarations: [],
  providers: [StoreDataService],
  exports:[]

})
export class SharedModule { }
