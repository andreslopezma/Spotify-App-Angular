import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

// el HttpClient nos deja hacer peticiones por htpp
// HttpHeaders nos permite modificar los Headres de la peticion
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Servicio listo para usar');
   }

  getQuery( query: string ) {
    // aca podemos modificar y agregar los headers que necesita la api de spotify
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQCsO6p-ALi08QNBIr7ihH4b5o85F9dfBFZF0M5UB08GMbiatgMpkWK-wLyKSglwVzu6Fs0q1xcLtXkRApE'
    });

    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
      .pipe( map ( ( data: any ) => {
        return data.albums.items;
      } ) );
  }

  getArtistas(termino: string) {
    // la funcion map sire para poder modelar los datos y que en el componente se puede leer los datos de una forma mucho mas limpia
    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
      .pipe ( map ( ( data: any ) => {
        return data.artists.items;
      } ) );
  }
  getArtista(id: string) {
    // la funcion map sire para poder modelar los datos y que en el componente se puede leer los datos de una forma mucho mas limpia
    return this.getQuery(`artists/${ id }`)
      .pipe ( map ( ( data: any ) => {
        return data;
      } ) );
  }
  gettopTracks(id: string) {
    // la funcion map sire para poder modelar los datos y que en el componente se puede leer los datos de una forma mucho mas limpia
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
      .pipe ( map ( ( data: any ) => {
        return data.tracks;
      } ) );
  }
}
