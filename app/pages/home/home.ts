import {Component} from '@angular/core';
import {NavController, PopoverController, Popover} from 'ionic-angular';
import {PopoverPage} from '../popover/popover';
@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  pop: Popover;
  constructor(private navCtrl: NavController, private popoverCtrl: PopoverController) {

  }
  popoverShow(ev) {
    this.pop = this.popoverCtrl.create(PopoverPage, {
    }, {
        cssClass: 'tinder-filtres'
      })
    this.pop.present({
      ev
    })
  }
}
