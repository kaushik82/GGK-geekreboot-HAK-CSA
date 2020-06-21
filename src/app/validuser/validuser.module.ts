import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValiduserPageRoutingModule } from './validuser-routing.module';

import { ValiduserPage } from './validuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValiduserPageRoutingModule
  ],
  declarations: [ValiduserPage]
})
export class ValiduserPageModule {}
