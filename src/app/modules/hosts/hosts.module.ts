import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostsComponent } from './hosts/hosts.component';
import { MaterialModule } from '../material/material.module';
import { HostsRoutingModule } from './hosts-routing.module';

@NgModule({
  declarations: [
    HostsComponent
  ],
  imports: [
    CommonModule,
    HostsRoutingModule,
    MaterialModule,
  ],
  exports: []
})
export class HostsModule { }
