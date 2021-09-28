import { Component, OnInit } from '@angular/core';
import { animate, style, group, state, transition, trigger,  } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    
    trigger('randomPos', [
      state('hover', style({ 
        //left: Math.random()*200,
        top: Math.random()*600})),
      // state('not', style({ 
      //   background: 'blue',
      //   left: Math.random()*200,
      //   top: Math.random()*200
      //   })),
      transition('*=>hover',[
        animate('250ms ease-out')
      ]),
      transition('hover=>*',[
        animate('250ms ease-out')
      ]),
      
    ]),
  ]
})


export class MainComponent implements OnInit {
  hover = false;
  constructor() {}

  get stateName() {
    return this.hover ? 'hover' : 'not'
  }

  ngOnInit(): void {}
  onHover(){
    this.hover = !this.hover;
  }
}
