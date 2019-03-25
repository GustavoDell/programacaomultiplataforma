import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livro } from '../../model/livros'
import { AutorPage } from '../autor/autor';
import { EditoraPage } from '../editora/editora';
/**
 * Generated class for the LivroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livro',
  templateUrl: 'livro.html',
})
export class LivroPage {
  public livros: Livro[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var l1 = {titulo:'1984',subtitulo:'George Ornell',editora:'Saraiva',isbn:'Não sei', publicacao:'15/11/1998',paginas:'100'};
    var l2 = {titulo:'1984',subtitulo:'George Ornell',editora:'Saraiva',isbn:'Não sei', publicacao:'15/11/1998',paginas:'100'};
    this.livros=[l1, l2];
  }

  irParaAutor(){
    this.navCtrl.push(AutorPage)
  }
  irParaEditora(){
    this.navCtrl.push(EditoraPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivroPage');
  }

}
