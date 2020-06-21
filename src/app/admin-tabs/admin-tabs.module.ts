import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {QRscannerPageModule} from '../qrscanner/qrscanner.module';
import { AdminTabsPageRoutingModule } from './admin-tabs-routing.module';
import { AdmintimelogPageModule} from '../admintimelog/admintimelog.module';

import { AdminTabsPage } from './admin-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminTabsPageRoutingModule,
    QRscannerPageModule,
    AdmintimelogPageModule
  ],
  declarations: [AdminTabsPage]
})
export class AdminTabsPageModule {}
