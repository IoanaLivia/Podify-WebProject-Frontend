import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesComponent } from './episodes/episodes.component';
import { EpisodesRoutingModule } from './episodes-routing.module';
import { MaterialModule } from '../material/material.module';
import { MatDialogModule, MatDialogRef, MatDialog} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EpisodesComponent
  ],
  imports: [
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    EpisodesRoutingModule,
    MaterialModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
 ],
})
export class EpisodesModule { }
