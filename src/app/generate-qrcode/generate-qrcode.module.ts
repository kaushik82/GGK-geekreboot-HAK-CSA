import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule} from 'ngx-qrcode2';

import { IonicModule } from '@ionic/angular';

import { GenerateQRcodePageRoutingModule } from './generate-qrcode-routing.module';

import { GenerateQRcodePage } from './generate-qrcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    GenerateQRcodePageRoutingModule
  ],
  declarations: [GenerateQRcodePage]
})
export class GenerateQRcodePageModule {}
