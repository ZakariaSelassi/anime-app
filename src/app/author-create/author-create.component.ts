import { Author } from './../model/author';
import { Router } from '@angular/router';
import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.scss']
})
export class AuthorCreateComponent implements OnInit{


  author:Author = new Author(0,"","");
  constructor(private router:Router,private authorService:AuthorService) { }

  ngOnInit(): void {
    console.log(this.author)
  }
  onSubmit(){
   this.createAuthor()
  }

  createAuthor(){
    console.log(this.author)
    this.authorService.createAuthor(this.author).subscribe(async data => {
      console.log(data,"data");
      this.sentToAuthorList();
    })
  }
  sentToAuthorList(){
    this.router.navigate(['author-list'])
  }


}
