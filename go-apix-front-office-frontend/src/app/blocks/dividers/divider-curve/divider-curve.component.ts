import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dc-divider-curve',
  templateUrl: './divider-curve.component.html',
  styleUrls: ['./divider-curve.component.scss']
})
export class DividerCurveComponent implements OnInit {
  @Input()
  cssClass: string;

  @Input()
  shapeCssText: string;

  constructor() {}

  ngOnInit() {}
}
