import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Park } from '../../models/park';


@Component({
  selector: 'app-park-item',
  imports: [RouterLink],
  templateUrl: './park-item.html',
  styleUrl: './park-item.css'
})
export class ParkItem {
  park = input.required<Park>();   
  liked = output<Park>();          
  deleted = output<string>();
}
