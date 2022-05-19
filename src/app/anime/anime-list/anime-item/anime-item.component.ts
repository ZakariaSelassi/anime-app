import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Anime } from 'src/app/model/anime';

@Component({
  selector: 'tr[app-anime-item]',
  templateUrl: './anime-item.component.html',
  styleUrls: ['./anime-item.component.scss']
})
export class AnimeItemComponent implements OnInit {

  @Output() updateAnime = new EventEmitter<number>();
  @Output() deleteAnime = new EventEmitter<number>();
  @Output() viewAnime = new EventEmitter<number>();
  @Input() anime:Anime = {
    idAnimes: 0,
    animeName:'',
    dateBegin:new Date(),
    dateEnd:new Date(),
    categories:[],
    authorName:'',
    ratings:[],
    seasons:[]

  }
  constructor() { }
  ngOnInit(): void {

  }
  handleUpdateAnime(id:number){

  }
  handleDeleteAnime(id:number){
    return this.deleteAnime.emit(id)
  }

  handleViewAnime(id:number){
    return this.viewAnime.emit(id)
  }

}
