import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any [] = [];
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }
  verArtista( item: any ) {

    let idArtista;

    if ( item.type === 'artist' ) {
      idArtista = item.id;
    } else {
      idArtista = item.artists[0].id;
    }

    this.router.navigate( [ 'artista', idArtista ] );
  }

}
