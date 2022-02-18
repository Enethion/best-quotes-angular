import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent{
  @Input() quotations: Quotation[]

  @Output() voteChange = new EventEmitter<QuotationEvent>();

  addVote(quotation: Quotation, value: number) {
    this.voteChange.emit({quotation, value})
  }
}

export interface QuotationEvent {
  quotation: Quotation
  value: number
}
