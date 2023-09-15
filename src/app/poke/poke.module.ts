import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    GridComponent,
    NavbarComponent,
    CardComponent
  ],
  imports: [
    CommonModule, MatButtonModule, MatToolbarModule, MatCardModule, MatGridListModule
  ],
  exports: [
    GridComponent,
  ]
})
export class PokeModule { }
