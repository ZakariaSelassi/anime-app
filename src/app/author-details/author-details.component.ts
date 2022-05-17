import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Author } from '../model/author';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss']
})
export class AuthorDetailsComponent implements OnInit {

  currentAuthor!: Author;
  currentAuthorId!:number;
  constructor(private authorService: AuthorService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

      this.route.params.subscribe( params => {
        this.currentAuthorId = params['id'];
        this.authorService.getAuthorById(this.currentAuthorId).subscribe((data) => {
          this.currentAuthor = data;
          console.log(this.currentAuthor);
      })
      })


  }

}
