import { Component, OnInit } from '@angular/core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-developers-integration-tools',
  templateUrl: './developers-integration-tools.component.html',
  styleUrls: ['./developers-integration-tools.component.scss']
})
export class DevelopersIntegrationToolsComponent implements OnInit {
  cards = [
    {
      img: '2',
      title: 'jQuery',
      class: 'mt-6 ml-lg-auto',
      bg: 'bg-primary-gradient',
      animation: 'fade-up'
    },
    {
      img: '1',
      title: 'Codebase',
      class: 'mr-lg-auto',
      bg: 'bg-info-gradient',
      animation: 'fade-up'
    },
    {
      img: '3',
      title: 'OpenCart',
      class: 'ml-lg-auto',
      bg: 'bg-danger-gradient',
      animation: 'fade-up'
    },
    {
      img: '4',
      title: 'Morpheus',
      class: 'mt-6n mr-lg-auto',
      bg: 'bg-success-gradient',
      animation: 'fade-up'
    }
  ];
  longAarrowAltRight = faLongArrowAltRight;

  constructor() {}

  ngOnInit() {}
}
