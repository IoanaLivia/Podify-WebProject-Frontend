import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestsComponent } from './guests/guests.component';
import { GuestsRoutingModule } from './guests-routing.module';
import { MaterialModule } from '../material/material.module';
import { EditGuestComponent } from './edit-guest/edit-guest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteGuestComponent } from './delete-guest/delete-guest.component';
import { AddGuestComponent } from './add-guest/add-guest.component';
import { MatDialogModule, MatDialogRef, MatDialog} from '@angular/material/dialog';
import { MyhoverbtnDirective } from 'src/app/myhoverbtn.directive';
import { MypipePipe } from 'src/app/mypipe.pipe';

@NgModule({
  declarations: [
    GuestsComponent, 
    EditGuestComponent, DeleteGuestComponent, AddGuestComponent, MyhoverbtnDirective, MypipePipe
  ],
  imports: [
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    GuestsRoutingModule,
    MaterialModule
  ],
  exports: [MyhoverbtnDirective, MypipePipe], 
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
 ],
})
export class GuestsModule { }
