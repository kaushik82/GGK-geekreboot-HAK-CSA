import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'validuser',
    loadChildren: () => import('./validuser/validuser.module').then( m => m.ValiduserPageModule)
  },
  // {
  //   path: 'generate-qrcode',
  //   loadChildren: () => import('./generate-qrcode/generate-qrcode.module').then( m => m.GenerateQRcodePageModule)
  // },
  // {
  //   path: 'qrscanner',
  //   loadChildren: () => import('./qrscanner/qrscanner.module').then( m => m.QRscannerPageModule)
  // },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'admin-tabs',
    loadChildren: () => import('./admin-tabs/admin-tabs.module').then( m => m.AdminTabsPageModule)
  },
  {
    path: 'timelog',
    loadChildren: () => import('./timelog/timelog.module').then( m => m.TimelogPageModule)
  },
  {
    path: 'admintimelog',
    loadChildren: () => import('./admintimelog/admintimelog.module').then( m => m.AdmintimelogPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
