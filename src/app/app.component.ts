import { Component } from '@angular/core';
import { QuotationEvent } from './list/list.component';
import { QUOTES } from './models/data-base';
import { Quotation } from './models/quotation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotations: Quotation[] = QUOTES;
  quotation: Quotation = {author: '', sentence: '', votes: 0}

  bestQuotations() {
    return this.quotations.sort( (a, b) => { return b.votes - a.votes } ).slice(0, 3)
  }

  worstQuotations() {
    return this.quotations.sort( (a, b) => { return a.votes - b.votes } ).slice(0, 3)
  }

  onNewQuotation(quotation) {
    this.quotations.unshift(quotation)
  }

  onVoteChange(voteChange: QuotationEvent) {
    voteChange.quotation.votes += voteChange.value
  }
}
