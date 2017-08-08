import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { ServiceModule } from './../service/service.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ServiceModule,
    SharedModule
    
  ],
  declarations: [ListComponent, AutocompleteComponent, HomeComponent],
  exports: [
    ServiceModule,
    SharedModule,
    HomeComponent,
    ListComponent,
    AutocompleteComponent
  ]
})
export class MainModule { }
