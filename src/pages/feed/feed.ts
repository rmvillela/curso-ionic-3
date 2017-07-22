import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nomeUsuario: string = "Roosevelt";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  public soma(): void{
    //alert("A função funcionou");
  }

  ionViewDidLoad() {
    //this.soma();
  }

}
