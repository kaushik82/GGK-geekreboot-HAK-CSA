import { Component, OnInit } from '@angular/core';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import * as firebase from 'firebase';

@Component({
  selector: 'app-generate-qrcode',
  templateUrl: './generate-qrcode.page.html',
  styleUrls: ['./generate-qrcode.page.scss'],
})
export class GenerateQRcodePage {
	email = "hyndavi.renikunta@ggktech.com".split(".").join("_");
  empid = '';
  createdCode : any;
  shouldDisable : any;
  created1Code : any;
  maxTime : any;

  dateonly = new Date().toJSON().slice(0,10).replace(/-/g,'-');

  constructor() {
    var ref1 = firebase.database().ref('employees/'+this.email);
    ref1.on('value', function(snapshot) {
      this.empid = snapshot.val().empid;
    }.bind(this));
  }
  
   createCode() {
    this.shouldDisable = false;
    this.createdCode = this.empid+''+ new Date();
    this.maxTime = 30;
    this.StartTimer();
  }

  StartTimer(){
    setTimeout(x => {
      	this.maxTime--;
		if(this.maxTime <= 0) { 
          	this.shouldDisable=true;
        }
		if(this.maxTime>0){
            this.StartTimer();
        }
      }, 1000);
  } 

}
