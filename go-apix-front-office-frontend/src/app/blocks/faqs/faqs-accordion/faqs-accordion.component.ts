import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FaqsService } from '../services/faqs.service';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'dc-faqs-accordion',
  templateUrl: './faqs-accordion.component.html',
  styleUrls: ['./faqs-accordion.component.scss'],
  providers: [NgbAccordionConfig] // add the NgbAccordionConfig to the component providers
})
export class FaqsAccordionComponent implements OnInit {
  chevronDown = faChevronDown;
  faqs = [];

  constructor(config: NgbAccordionConfig, private faqService: FaqsService) {
    config.closeOthers = true;
  }

  ngOnInit() {
    this.faqService.getFaqs().subscribe(faqs => (this.faqs = faqs));
  }
}
