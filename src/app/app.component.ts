import { Component } from '@angular/core';
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

  addVote(quotation: Quotation, value: number) {
    quotation.votes += value
  }

  bestQuotations() {
    return this.quotations.sort( (a, b) => { return b.votes - a.votes } ).slice(0, 3)
  }

  worstQuotations() {
    return this.quotations.sort( (a, b) => { return a.votes - b.votes } ).slice(0, 3)
  }

  onNewQuotation(quotation) {
    this.quotations.unshift(quotation)
  }
}
