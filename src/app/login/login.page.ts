import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
// import { format } from 'path';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  scanfingerprintmsg = null;
  constructor(private authService: AuthService,
              private router: Router,
              private alertCtrl: AlertController,
              private faio: FingerprintAIO) { }

  ngOnInit() {
  }
  
  async ShowFingerprintDialog(id, password){
    this.faio.show({
      title: 'Biometric Authentication', // (Android Only) | optional | Default: "<APP_NAME> Biometric Sign On"
      subtitle: 'Coolest Plugin ever', // (Android Only) | optional | Default: null
      description: 'Please authenticate', // optional | Default: null
      fallbackButtonTitle: 'Use Backup', // optional | When disableBackup is false defaults to "Use Pin".
                                         // When disableBackup is true defaults to "Cancel"
      disableBackup:true  // optional | default: false
  })
  .then((result: any) => {
    this.scanfingerprintmsg = null;
    if(id === 'amulya.dornala@ggktech.com'){
      this.router.navigateByUrl('admin-tabs');
    } else {
      this.router.navigateByUrl('tabs');
    }})
  .catch((error: any) => this.scanfingerprintmsg = 'Fingerprint Scanning failed. Try again');
 }
  async loginUser(form): Promise<void>{
    this.authService.loginUser(form.value.email, form.value.password).
    then(
      () => {
        // this.router.navigateByUrl('home');
        this.scanfingerprintmsg = 'Please scan your fingerprint';
        this.ShowFingerprintDialog(form.value.email, form.value.password);
      },
      async error => {
        const alert = await this.alertCtrl.create({
          message: error.message,
          buttons: [{text: 'ok', role: 'cancel'}],
        });
        await alert.present();
      }
    );
  }
  goToReset(){
    this.router.navigateByUrl('password-reset');
  }

}
