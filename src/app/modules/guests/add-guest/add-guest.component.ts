import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/interfaces/guest';
import { AddGuestService } from 'src/app/services/add-guest.service';
import { GuestsService } from 'src/app/services/guests.service';
import { MaterialModule } from '../../material/material.module';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.scss']
})
export class AddGuestComponent implements OnInit {

  guest?: Guest;

  createForm = this.fb.group({
    id: [this.guestService.maxId],
    name: [' '],
    surname: [' '],
    description: [' ']
  });

  constructor(
    private route: ActivatedRoute,
    private guestAddService: AddGuestService,
    private guestService: GuestsService,
    public dialogRef: MatDialogRef<AddGuestComponent>,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addGuest(): void {
    this.guestAddService.addGuest(this.createForm.value);
    this.dialogRef.close();
  }

}
