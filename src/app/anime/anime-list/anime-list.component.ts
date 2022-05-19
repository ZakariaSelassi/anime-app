import { AnimeService } from './../../services/anime.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/model/anime';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {

  animes:Anime[] = [];
  constructor(private animeService:AnimeService,private router:Router) { }

  ngOnInit(): void {
    this.getAnimes();
  }

  getAnimes(){
    return this.animeService.getAnimeList().subscribe((response) => {
      console.log(response)
      this.animes = response;
    })
  }
  sendToCreateAnime(){
    this.router.navigate(['anime-create'])
  }
  deleteAnime(id:number){
      // animes Service
      return this.animeService.deleteAnime(id).subscribe((resp) => {
          this.animes.filter(anime => anime.idAnimes !== id)
          this.getAnimes();
      },(error) => {
        console.log(error)
      });
  }
  updateAnime(id:number){
      // animes Service
  }
  viewAnime(id:number){
    // animes Service
    this.router.navigate(['anime-details',id])
  }
}
