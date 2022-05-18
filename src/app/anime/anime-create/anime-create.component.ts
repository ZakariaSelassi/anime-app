import { AuthorService } from './../../services/author.service';
import { Author } from './../../model/author';
import { Anime } from 'src/app/model/anime';
import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime-create',
  templateUrl: './anime-create.component.html',
  styleUrls: ['./anime-create.component.scss']
})
export class AnimeCreateComponent implements OnInit {

  anime:Anime = new Anime(0,"",new Date(),new Date(),[],[],[]);
  authors:Author[] = [];
  authorId:number = 0;
  constructor(private authorService:AuthorService,private animeService:AnimeService
    ,private router:Router ) { }

  ngOnInit(): void {
      this.getOptionsAuthor();
  }

  onSubmit(){
    this.addAuthor();
  }

  addAuthor(){
    console.log(this.anime)
    console.log(this.authorId)
    return this.animeService.createAnime(this.authorId,this.anime).subscribe(async data => {
      this.anime.categories.push("ACTION","HORROR");
      this.sendToAnimeList();
    })
  }
  setAuthorId(id:number){
    console.log(id)
    this.authorId = id;
  }
  getOptionsAuthor(){
    return this.authorService.getAuthorList().subscribe((response) => {
      console.log(response);
      this.authors = response;
    })
  }
  sendToAnimeList(){
    this.router.navigate(['anime-list'])
  }
}
