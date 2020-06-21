import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { GenerateQRcodePageModule } from '../generate-qrcode/generate-qrcode.module';
import { LoginPageModule } from '../login/login.module';
import { TimelogPageModule} from '../timelog/timelog.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    GenerateQRcodePageModule,
    LoginPageModule,
    TimelogPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
