import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Noise } from 'noisejs';
import { BubblesService } from '@app/pages/startup/services/bubbles.service';

const SCROLL_SPEED = 0.3;
const NOISE_SPEED = 0.004;
const NOISE_AMOUNT = 5;
const CANVAS_WIDTH = 2800;

@Component({
  selector: 'dc-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss']
})
export class BubbleComponent implements OnInit {
  @Input()
  index: number;

  @Input()
  spec: any;

  @Output()
  onUpdate = new EventEmitter<any>();

  transformStyle: SafeStyle;

  private noiseSeedX: number;
  private noiseSeedY: number;
  private noise: Noise;

  constructor(
    public sanitizer: DomSanitizer,
    private bubblesService: BubblesService
  ) {
    this.noiseSeedX = Math.floor(Math.random() * 64000);
    this.noiseSeedY = Math.floor(Math.random() * 64000);

    this.noise = this.bubblesService.noise;
  }

  ngOnInit() {
    requestAnimationFrame(this.update.bind(this));
  }

  update() {
    this.animateBubble();
    requestAnimationFrame(this.update.bind(this));
  }

  animateBubble() {
    this.noiseSeedX += NOISE_SPEED;
    this.noiseSeedY += NOISE_SPEED;

    let randomX = this.noise.simplex2(this.noiseSeedX, 0);
    let randomY = this.noise.simplex2(this.noiseSeedY, 0);

    this.spec.x -= SCROLL_SPEED;

    let xWithNoise = this.spec.x + randomX * NOISE_AMOUNT;
    let yWithNoise = this.spec.y + randomY * NOISE_AMOUNT;

    this.transformStyle = this.sanitizer.bypassSecurityTrustStyle(
      'translate(' +
        xWithNoise +
        'px, ' +
        yWithNoise +
        'px) scale(' +
        (this.spec.s || 1) +
        ')'
    );

    if (this.spec.x < -200) {
      this.spec.x = CANVAS_WIDTH;
    }

    this.onUpdate.emit(this.spec);
  }
}
