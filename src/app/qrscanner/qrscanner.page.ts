import { Component, OnInit, OnDestroy } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { BackButtonEvent } from '@ionic/core';
import * as firebase from 'firebase';
 import { ToastController } from '@ionic/angular';
import { LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { exit } from 'process';
import { ReturnStatement } from '@angular/compiler';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.page.html',
  styleUrls: ['./qrscanner.page.scss'],
})
export class QRscannerPage {
  scannedCode: any;
  email = 'hyndavi.renikunta@ggktech.com'.split('.').join('_');
  dateonly = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
  barcode: any;
  result: any;
  isbackbuttonpressed: any;
  scannerInterval: any;
  reLoad:any;
  private timer;

  observableVar: Subscription;

  constructor(
    private barcodeScanner: BarcodeScanner,
    public loadingController: LoadingController,
    private toastcontroller: ToastController,
    private platform: Platform,
    private router: Router
  ) {
    this.isbackbuttonpressed = false;

    
  }
  scanCode() {
    return this.barcodeScanner
      .scan({ showFlipCameraButton: true, resultDisplayDuration: 0 })
      .then((barcodeData) => {
        let scannedEmpid = barcodeData.text.substring(0, 4);
        let scannedDateTime = barcodeData.text.substring(4);
        let scannedTime = new Date(scannedDateTime).getTime();
        let timeDifference = (new Date().getTime() - scannedTime) / 1000;
        this.barcode = barcodeData.text;

        if (timeDifference > 30) {
          this.scannedCode =
            scannedEmpid + ' Your QR code is invalid, please try again!';
            this.presentToast2();
        } else {
          this.scannedCode = scannedEmpid + ' Your attendance was marked';
          this.result = true;
          this.presentToast();
          
        }
      });
  }
  storeDetails() {
    // this.isbackbuttonpressed = false;
    // document.addEventListener("ionBackButton", (ev: BackButtonEvent) => {
    //   this.isbackbuttonpressed = true;
    // });
    // if (this.isbackbuttonpressed === true) {
    //   return this.router.navigateByUrl("admin-tabs");
    // }
    this.scanCode().then((res) => {
      let code = this.barcode;
      if (this.result) {
        let ref1 = firebase
          .database()
          .ref('employees/' + this.email + '/' + this.dateonly);
        ref1.once('value', function(snapshot) {
          if (snapshot.hasChild('intime')) {
            ref1.update({ outtime: code.substring(4) });
          } else {
            ref1.update({ intime: code.substring(4) });
          }
        });
      }
      // this.platform.backButton.subscribeWithPriority(0, () => {
      //   this.router.navigateByUrl('admin-tabs');
      //   });
      //   document.addEventListener('ionBackButton', (ev: BackButtonEvent) => {
      //     this.isbackbuttonpressed = true;
      //   });
      //   if (this.isbackbuttonpressed === false) {
      //     this.storeDetails();
      //   }
      // //   this.platform. {
      //     // get current active page
      //     let view = this.nav.getActive();
      //     if (view.component.name == "HomePage") {
      //       //Double check to exit app
      //       if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
      //         platform.exitApp(); //Exit from app
      //       } else {
      //         let toast = this.toastCtrl.create({
      //           message: 'Press back again to exit App',
      //           duration: 3000,
      //           position: 'bottom'
      //         });
      //         toast.present();
      //         lastTimeBackPress = new Date().getTime();
      //       }
      //     } else {
      //       // go to previous page
      //       this.nav.pop({});
      //     }
      //   });
      
    })
    
    
  }

   async presentToast() {
     const toastcontroller = await this.toastcontroller.create({
       message: 'Your attendance is marked',
       duration: 2000,
       color: 'success'
     });
     toastcontroller.present();
   }
   async presentToast2() {
    const toastcontroller = await this.toastcontroller.create({
      message: 'Your QR code is invalid',
      duration: 2000,
      color: 'danger'
    });
    toastcontroller.present();
  }
  //  async presentLoading() {
  //   const loading =  await this.loadingController.create({
  //     message: 'Your attendance has been marked',
  //     duration: 2000,
  //     animated: false
  //   });
  //    await loading.present();
  // }

  // async backbuttonlistener(){
  //     this.platform.backButton.subscribeWithPriority(0, () => {
  //     this.router.navigateByUrl('admin-tabs');
  //   });
    
  // }
  
  

   

}

