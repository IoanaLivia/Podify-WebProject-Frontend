import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Guest } from 'src/app/interfaces/guest';
import { EditGuestService } from 'src/app/services/edit-guest.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-guest',
  templateUrl: './edit-guest.component.html',
  styleUrls: ['./edit-guest.component.scss']
})
export class EditGuestComponent implements OnInit {

  guest?: Guest;

  editGuestForm = this.fb.group({
    id: [''] ,
    name: [''],
    surname: [''],
    description: ['']
  });

  constructor(private route: ActivatedRoute,
    private editGuestService: EditGuestService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getGuest();
  }

  public getGuest(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.editGuestService.getGuest(id)
      .subscribe(guest => {this.guest = guest; this.editGuestForm.patchValue(this.guest)});
  }

  public editGuest(): void {
    this.editGuestService.editGuest(this.editGuestForm.value);
  }

}
