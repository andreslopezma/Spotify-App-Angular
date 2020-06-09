import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artistas: any = {};
  topTracks: any [] = [];
  loading: boolean;
  constructor( private activatedRouter: ActivatedRoute, private Spotify: SpotifyService ) {
    this.activatedRouter.params.subscribe( (data: any) => {
      console.log(data.id);
      this.getArtista( data.id );
      this.getTopTracks( data.id );
    });

   }

  ngOnInit(): void {
  }

  getArtista( id: string ) {
    this.loading = true;
    this.Spotify.getArtista( id ).subscribe( data => {
      this.artistas = data;
      this.loading = false;
    });

  }
  getTopTracks( id: string ) {
    this.Spotify.gettopTracks( id ).subscribe( ( data: any ) => {
      console.log( data );
      this.topTracks = data;
    });
  }
}
