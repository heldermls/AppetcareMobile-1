import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Config } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CardsPage } from '../pages/cards/cards';
import { ContentPage } from '../pages/content/content';
import { FirstRunPage } from '../pages/pages';
import { PetListaPage } from '../pages/pet-lista/pet-lista';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { MenuPage } from '../pages/menu/menu';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';
import { PerfilPage } from '../pages/perfil/perfil';
import { TestePage } from '../pages/teste/teste';
import { LocalizarClinicaPage } from '../pages/localizar-clinica/localizar-clinica';
import { ListaClinicasPage } from '../pages/lista-clinicas/lista-clinicas';

import { Settings } from '../providers/providers';

import { TranslateService } from '@ngx-translate/core'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = FirstRunPage;

  pages: any[] = [
        { title: 'Appetcare', component: PetListaPage, icon: 'home'},
        { title: 'Perfil', component: TestePage, icon: 'person'},
        { title: 'Serviços', component: TestePage, icon: 'ionic'},
        { title: "Pet's", component: PetListaPage, icon: 'paw'},
        { title: 'Consultas', component: TestePage, icon: 'medical'},
        { title: 'Localizar Petshop', component: LocalizarClinicaPage, icon: 'pin'},
        { title: 'Sobre', component: TestePage, icon: 'information-circle'},
        { title: 'Localizar ONGs', component: TestePage, icon: 'locate'},
        { title: 'Vacinas', component: TestePage, icon: 'thermometer'},
        { title: 'Vermifugo', component: TestePage, icon: 'flask'},
        { title: 'Medicamentos', component: TestePage, icon: 'medkit'},
        { title: 'Sair', component: LoginPage, icon: 'exit'},
        // { title: 'Tutorial', component: TutorialPage },
        // { title: 'Welcome', component: WelcomePage },
        // { title: 'Tabs', component: TabsPage },
        // { title: 'Cards', component: CardsPage },
        // { title: 'Content', component: ContentPage },
        // { title: 'Login', component: LoginPage },
        // { title: 'Signup', component: SignupPage },
        // { title: 'Map', component: MapPage },
        // { title: 'Menu', component: MenuPage },
        // { title: 'Settings', component: SettingsPage },
        // { title: 'Search', component: SearchPage }
  ]

  constructor(private translate: TranslateService, private platform: Platform, settings: Settings, private config: Config
  , private statusBar: StatusBar, private splashScreen: SplashScreen) {
    
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }



  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
