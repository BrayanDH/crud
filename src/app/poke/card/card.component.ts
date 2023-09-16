import { Component, Input } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() 
  data: any = {};

  url: string = ""

  constructor(private pokeService: PokeService) {
   }

  ngOnInit(): void { 
    this.pokeService.getDetails(this.data.name).subscribe((result: any) => {
      this.url = result.sprites.front_default;
    });
  }

}


