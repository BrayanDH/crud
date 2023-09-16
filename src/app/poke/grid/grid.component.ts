import { Component } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  dataList: Array<any> = [];

  page: number = 0;

  setData(){
    this.pokeService.getData(this.page).subscribe((result: any) => {
    this.dataList = result.results;
    });
  }

  constructor(private pokeService: PokeService) {
    this.setData();
   }

  nextPage() {
    this.page += 8;
    this.setData();
  }

  previousPage() {
      this.page -= 8;
      this.setData();
  }

}
