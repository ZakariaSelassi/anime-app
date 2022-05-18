import { AuthorService } from './../services/author.service';
import { Component, OnInit } from '@angular/core';
import { Author } from '../model/author';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  public authors:Author[] = [];
  constructor(private authorService:AuthorService, private router:Router) { }

  ngOnInit(): void {
   this.getAuthors();
  }

  getAuthors(){
    return this.authorService.getAuthorList().subscribe((data) => {
      this.authors = data;
    })
  }

  viewCurrent(idAuthor:number){
    this.router.navigate(['/author-details',idAuthor]);
  }

  deleteAuthor(idAuthor:number){
    return this.authorService.deleteAuthorById(idAuthor).subscribe(() => {
        this.authors.filter(item => item.idAuthor != idAuthor)
        this.getAuthors();
    }, (error) => {
      console.log(error);
    })
  }

  updateCurrent(idAuthor:number){
    return this.router.navigate(['/author-update',idAuthor])
  }

  sendToCreateAuthor(){
    return this.router.navigate(['author-create']);
  }


}
