import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authService:AuthService,private router:Router,private alertCtrl:AlertController) { }

  ngOnInit(){
    
  }

  async loginUser(form: { value: { email: string; password: string; }; }):Promise<void>{
    this.authService.loginUser(form.value.email, form.value.password).
    then(
      ()=>{
        this.router.navigateByUrl('validuser');
      },
      async error => {
        const alert = await this.alertCtrl.create({
          message:error.message,
          buttons:[{text:'ok',role:'cancel'}],
        });
        await alert.present();
      }
    );
  }
  goToReset(){
    this.router.navigateByUrl('password-reset');
  }

}
