import { AuthorService } from './../../services/author.service';
import { Author } from './../../model/author';
import { Anime } from 'src/app/model/anime';
import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { Router } from '@angular/router';
import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';



enum Category{
  ACTION,
  HORROR,
  FANTASY,
  COMEDY,
  DRAMA,
  THRILLER,
  MEDIEVAL,
}

@Component({
  selector: 'app-anime-create',
  templateUrl: './anime-create.component.html',
  styleUrls: ['./anime-create.component.scss']
})

export class AnimeCreateComponent implements OnInit {

  categories:typeof Category = Category;
  categoryKeys : string[] = [];
  selectCategory:string = "";

  anime:Anime = new Anime(0,"",new Date(),new Date(),[],[],[]);
  authors:Author[] = [];
  authorId:number = 0;

  constructor(private authorService:AuthorService,private animeService:AnimeService
    ,private router:Router ) {
     }

  ngOnInit(): void {
      this.convertEnumValueToPushToArray()
      this.getOptionsAuthor();
      console.log(this.categoryKeys);
  }


  convertEnumValueToPushToArray(){
    for(let cat in Category){
      // IsNan will return everything, which is not a number
      if(isNaN(Number(cat))){
          this.categoryKeys.push(cat)
      }
    }
  }

  onSubmit(){
    this.addAuthor();
  }

  addAuthor(){
    this.anime.categories.push(this.selectCategory);
    return this.animeService.createAnime(this.authorId,this.anime).subscribe(async data => {
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
