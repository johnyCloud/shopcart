import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/porducts/models/product';
import { Totals } from '../service/totals';

@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.css'],
})
export class TabelComponent implements OnInit {
  @Input() cartList?: any;
  
  
 
  @Output() tminus: EventEmitter<number> = new EventEmitter<number>();
  @Output() tplus: EventEmitter<number> = new EventEmitter<number>();
  @Output() tremove: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
  eventminus(id: number) {
    this.tminus.emit(id);
  }
  eventplus(id: number) {
    this.tplus.emit(id);
  }
  eventremove(item: any){
    this.tremove.emit(item)
  }

}
