import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dc-home-demo',
  templateUrl: './home-demo.component.html',
  styleUrls: ['./home-demo.component.scss']
})
export class HomeDemoComponent implements OnInit {
  @Input()
  demo: any;

  constructor() {}

  ngOnInit() {}
}
