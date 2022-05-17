import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Author } from '../model/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private apiUrl= environment.apiUrl;
  constructor(private http:HttpClient) { }
  /* private httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json',

    // token for auth here
    })
}; */

  getAuthorList():Observable<Author[]>{
    return this.http.get<Author[]>(`${this.apiUrl}/authors`)
  }

  getAuthorById(id:number):Observable<Author>{
    return this.http.get<Author>(`${this.apiUrl}/authors/${id}`)
  }

  updateAuthor(id:number,author:Author){
    return this.http.put(`${this.apiUrl}/authors/${id}`, author);
  }
  deleteAuthorById(id:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/authors/${id}`,{responseType:'text'});
  }
}
