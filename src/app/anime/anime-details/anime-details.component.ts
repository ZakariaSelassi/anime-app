import { Router, ActivatedRoute } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';
import { Anime } from 'src/app/model/anime';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.scss']
})
export class AnimeDetailsComponent implements OnInit {

  anime:Anime = {
    idAnimes:0,
    animeName:'',
    categories:[],
    authorName:'',
    dateBegin: new Date(),
    dateEnd: new Date(),
    ratings:[],
    seasons:[]
  };
  constructor(private animeService:AnimeService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.anime.idAnimes = params['id'];

      this.animeService.getAnimeById(this.anime.idAnimes).subscribe((data) =>{
        this.anime = data
        console.log(this.anime)
      })
    })
  }

}
