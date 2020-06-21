import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-timelog',
  templateUrl: './timelog.page.html',
  styleUrls: ['./timelog.page.scss'],
})
export class TimelogPage implements OnInit {
  email = "hyndavi.renikunta@ggktech.com".split(".").join("_");
  dateonly = new Date().toJSON().slice(0,10).replace(/-/g,'-');	
  info = {};

  constructor() { }

  ngOnInit() {
  }

  // fetches the employee in and out times
  getDetails() {
      var ref1 = firebase.database().ref('employees/'+this.email+'/'+this.dateonly);
       ref1.once('value', resp => {
        this.info = snapshotToObject(resp); 
      });

    }
}

export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;

  return item;

}
