import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LivroPage } from '../livro/livro';
import { FilmesPage } from '../filmes/filmes';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  irParaLivros(){
    this.navCtrl.push(LivroPage)
  }

  irParaFilmes(){
    this.navCtrl.push(FilmesPage)
  }
}
