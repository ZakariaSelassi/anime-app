import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  public buttonText ='';
  @Input()
  set text(name:string){
    this.buttonText = name;
  }
  get name():string{
    return this.buttonText;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
