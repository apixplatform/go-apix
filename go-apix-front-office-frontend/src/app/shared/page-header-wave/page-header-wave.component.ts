import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dc-page-header-wave',
  templateUrl: './page-header-wave.component.html',
  styleUrls: ['./page-header-wave.component.scss']
})
export class PageHeaderWaveComponent implements OnInit {
  @Input() rows: number;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() fill: string;
  @Input() containerClass: string;

  constructor() {}

  ngOnInit() {}

  getShapeFill(): string {
    return this.fill || 'shape-fill-contrast';
  }
}
