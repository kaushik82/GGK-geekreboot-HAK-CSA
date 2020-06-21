import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmintimelogPageRoutingModule } from './admintimelog-routing.module';

import { AdmintimelogPage } from './admintimelog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmintimelogPageRoutingModule
  ],
  declarations: [AdmintimelogPage]
})
export class AdmintimelogPageModule {}
