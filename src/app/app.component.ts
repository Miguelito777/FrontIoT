import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Login',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Home',
      url: '/principal',
      icon: 'list'
    },
    {
      title: 'Activar Riego',
      url: '/ActivarRiego',
      icon: 'list'
    },
    {
      title: 'Temperatura Tierra',
      url: '/obtTemTierra',
      icon: 'list'
    },
    {
      title: 'Temperatura Ambiente',
      url: '/obtTemAmbiente',
      icon: 'list'
    },
    {
      title: 'Activar Calefacción',
      url: '/ActivarCalefaccion',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
