import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any [] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;
  constructor( private Spotify: SpotifyService ) {
    this.loading = true;
    this.error = false;
    this.Spotify.getNewReleases()
    .subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    } , ( error => {
      console.log( error );
      this.mensajeError = error.message;
      this.error = true;
      this.loading = false;
    } ) );
  }

  ngOnInit(): void {
  }



}
