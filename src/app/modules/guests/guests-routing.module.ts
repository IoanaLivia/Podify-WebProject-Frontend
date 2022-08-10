import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestsComponent } from './guests/guests.component';
import { EditGuestComponent } from './edit-guest/edit-guest.component';
import { DeleteGuestComponent } from './delete-guest/delete-guest.component';
import { AddGuestComponent } from './add-guest/add-guest.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
  {
    path: 'guests',
    canActivate:[AuthGuard],
    component: GuestsComponent
  },
  {
    path: 'edit-guest/:id',
    canActivate:[AuthGuard],
    component: EditGuestComponent
  },
  {
    path: 'delete-guest/:id',
    canActivate:[AuthGuard],
    component: DeleteGuestComponent
  },
  {
    path: 'add-guest',
    canActivate:[AuthGuard],
    component: AddGuestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestsRoutingModule { }