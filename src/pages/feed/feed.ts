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
  public objetoFeed = {
    titulo: "Roosevelt M. Villela",
    data: "November 5, 1995",
    descricao: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean? Whoa. This is heavy",
    qntLikes: 12,
    qntComments: 4,
    timeComment: "11h ago"
  }

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
