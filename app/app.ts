import {Component} from '@angular/core';
import {Platform, ionicBootstrap, App, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {Settings} from './providers/settings';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [Settings]
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform, private app: App, private menu: MenuController, private settings: Settings) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      this.openPage(HomePage)
    });
  }
  openPage(page, close = false) {
    // close the menu when clicking a link from the menu
    if (close) {
      this.menu.close();
    }
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let root = this.app.getRootNav()
    root.setRoot(page).then(data => {
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }

}

ionicBootstrap(MyApp);
