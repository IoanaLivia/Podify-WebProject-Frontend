import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuestsService } from 'src/app/services/guests.service';
import { Guest } from 'src/app/interfaces/guest';
import { MatDialog } from '@angular/material/dialog';
import { AddGuestComponent } from '../add-guest/add-guest.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})

export class GuestsComponent implements OnInit {

  guests: Guest[] = [];
  public displayedColumns: string[] = ['id', 'name', 'surname', 'description', 'edit', 'delete'];

  constructor(
    private guestsService: GuestsService, private router: Router, private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getGuests();
  }

  getGuests(): void {
    this.guestsService.getGuests()
        .subscribe(guests => this.guests = guests);
  }

  public GoEditGuest(id: string): void{
    this.router.navigate([`/edit-guest/${id}`]);
  }

  
  public GoDeleteGuest(id: string): void{
    this.router.navigate([`/delete-guest/${id}`]);
  }

  //public GoAddGuest(): void {
  //  this.router.navigate([`/add-guest`]);
  //}

  public addGuest(): void{
    const maxId = String(Math.max.apply(Math, this.guests.map(function(o) { return Number(o.id); })) + 1);
    this.guestsService.maxId = maxId;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    const dialogRef = this.dialog.open(AddGuestComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {this.getGuests();})
  }

}
