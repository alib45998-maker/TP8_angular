import { Component, inject, OnInit } from '@angular/core';
import { Park } from '../../models/park';
import { ParkService } from '../../services/park-service';
import { ParkItem } from '../park-item/park-item';

@Component({
  selector: 'app-park-list',
  imports: [ParkItem],
  templateUrl: './park-list.html',
  styleUrl: './park-list.css'
})
export class ParkList implements OnInit {
  private readonly parkService = inject(ParkService);
  
  parks = this.parkService.parks;

  ngOnInit(): void {
    this.parkService.getParks().subscribe(
      
    );
  }

  onLike(park: Park) {
    this.parkService.updatePark({ ...park, nbLikes: park.nbLikes + 1 }).subscribe();
  }

  onDelete(id: string) {
    this.parkService.deletePark(id).subscribe();
  }
}
