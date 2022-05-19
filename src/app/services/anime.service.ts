import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Anime } from '../model/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private apiUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders(
    {
       'Content-Type': 'application/json',
    })
  }
  getAnimeList():Observable<Anime[]>{
    return this.http.get<Anime[]>(`${this.apiUrl}/animes`)
  }
  getAnimeById(id:number):Observable<Anime>{
    return this.http.get<Anime>(`${this.apiUrl}/animes/${id}`,this.httpOptions)
  }
  createAnime(idAuthor:number,anime:Anime):Observable<any>{

    return this.http.post(`${this.apiUrl}/animes/${idAuthor}`,JSON.stringify(anime),this.httpOptions)
  }

  deleteAnime(id:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/animes/${id}`, {responseType:'text'});
  }
}
