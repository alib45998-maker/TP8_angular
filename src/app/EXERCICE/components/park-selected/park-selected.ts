
import { Component, inject, input, OnInit, signal } from '@angular/core';
import {  ActivatedRoute, RouterLink } from '@angular/router';
import { Park } from '../../models/park';
import { ParkService } from '../../services/park-service';

@Component({
  selector: 'app-park-selected',
  imports: [ RouterLink],
  templateUrl: './park-selected.html',
  styleUrl: './park-selected.css'
})
export class ParkSelected implements OnInit {
  private readonly parkService = inject(ParkService);

  private readonly activatedRoute = inject(ActivatedRoute)      
  park = this.parkService._mypark;

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id') ;
    if(id)
    this.parkService.getParkById(id).subscribe();
  }
}
