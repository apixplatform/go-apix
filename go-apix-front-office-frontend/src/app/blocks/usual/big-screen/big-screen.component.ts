import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dc-big-screen',
  templateUrl: './big-screen.component.html',
  styleUrls: ['./big-screen.component.scss']
})
export class BigScreenComponent implements OnInit {
  @Input()
  img: string;

  @Input()
  screenPos: string;

  @Input()
  imgShape: string;

  constructor() {}

  ngOnInit() {}

  isScreenLeft(): boolean {
    return this.screenPos === 'left';
  }
}
