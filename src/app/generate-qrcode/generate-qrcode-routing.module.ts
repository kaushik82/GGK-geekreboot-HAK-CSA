import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerateQRcodePage } from './generate-qrcode.page';

const routes: Routes = [
  {
    path: '',
    component: GenerateQRcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerateQRcodePageRoutingModule {}
