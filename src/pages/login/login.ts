import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsPage } from '../products/products';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public buttons: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToProducts() {
    console.log("Navigating...");
    this.navCtrl.push(ProductsPage);
  }

  navigateToPage2() {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
