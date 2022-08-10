import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteGuestService } from 'src/app/services/delete-guest.service';

@Component({
  selector: 'app-delete-guest',
  templateUrl: './delete-guest.component.html',
  styleUrls: ['./delete-guest.component.scss']
})
export class DeleteGuestComponent implements OnInit {

  deleteForm = this.fb.group({
    deleteValue: ['no'],
  });

  message = "";

  constructor(
    private route: ActivatedRoute,
    private guestDeleteService: DeleteGuestService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  deleteGuest(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.deleteForm.value);
    if (this.deleteForm.value.deleteValue == 'yes'){
      this.message = "Action completed. Click here to go back.";
      this.guestDeleteService.deleteGuest(id);
    }
    else{
      this.message = "The guest has not been deleted.";
    }
  }

  goBack(): void {
    this.router.navigate([`/guests`]);
  }

}
