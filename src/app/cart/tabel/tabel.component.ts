import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/porducts/models/product';
import { Totals } from '../service/totals';

@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.css']
})
export class TabelComponent implements OnInit {

  @Input() cartList?: Product[];
  @Input() totals?: Totals[];
  @Output() tminus:EventEmitter<number>= new EventEmitter<number>();
  @Output() tplus: EventEmitter<number>= new EventEmitter<number>();
  @Input() getTotal!: (args: any) => any;
  constructor() { }

  ngOnInit(): void {
  }
  eventminus(id: number){
    this.tminus.emit(id);
  }
  eventplus(id: number){
    this.tplus.emit(id);
  }
}