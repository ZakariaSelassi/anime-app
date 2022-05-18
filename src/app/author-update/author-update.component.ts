import { AuthorService } from './../services/author.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../model/author';

@Component({
  selector: 'app-author-update',
  templateUrl: './author-update.component.html',
  styleUrls: ['./author-update.component.scss']
})
export class AuthorUpdateComponent implements OnInit,OnChanges {

  currentAuthor:Author = new Author(0,"","");
  currentAuhtorId!:number;
  constructor(private route:ActivatedRoute,private authorService:AuthorService,
            private router:Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentAuhtorId = params['id'];
      this.authorService.getAuthorById(this.currentAuhtorId).subscribe((data) => {
        this.currentAuthor = data;
      })
    })
  }
  ngOnChanges(): void {
    console.log(this.currentAuthor)
  }
  onSubmit(){
      this.authorService.updateAuthor(this.currentAuhtorId,this.currentAuthor).subscribe(data => {
        console.log("submit", data)
        this.sendToAuthorList();
      })
  }

  sendToAuthorList(){
    this.router.navigate(['/author-list'])
  }
}
