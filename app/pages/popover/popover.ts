import {Component, ViewChild} from '@angular/core'

import {NavParams} from 'ionic-angular';
import {Settings} from '../../providers/settings'

@Component({
  templateUrl: 'build/pages/popover/popover.html',

})
export class PopoverPage {

  constructor(private navParams: NavParams, private settings: Settings) {

  }

  ngOnInit() {
    if (this.navParams.data) {

    }
  }

}
