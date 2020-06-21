import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-validuser',
  templateUrl: './validuser.page.html',
  styleUrls: ['./validuser.page.scss'],
})
export class ValiduserPage implements OnInit {

  constructor(private authService:AuthService,private router:Router,private alertCtrl:AlertController) { }

  async logOut():Promise<void>{
    this.authService.logOutUser().
    then(
      ()=>{
        this.router.navigateByUrl('home');
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

  ngOnInit() {
  }

}
