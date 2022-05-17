import { Author } from './../../model/author';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tr[app-autor-item]',
  templateUrl: './autor-item.component.html',
  styleUrls: ['./autor-item.component.scss']
})
export class AutorItemComponent implements OnInit {

  @Output() updateAuthor = new EventEmitter<number>();
  @Output() deleteAuthor = new EventEmitter<number>();
  @Output() viewAuthor = new EventEmitter<number>();
  @Input()   author:Author = {
    idAuthor: 0,
    lastName: '',
    firstName: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteAuthor(id:number){
    return this.deleteAuthor.emit(id);
  }
  handleAuthorById(id:number){
    return this.viewAuthor.emit(id);
  }
  handleUpdateAuthor(id:number){
    return this.updateAuthor.emit(id);
  }

}
