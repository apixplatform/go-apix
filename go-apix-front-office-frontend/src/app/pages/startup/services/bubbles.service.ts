import { Injectable } from '@angular/core';
import { Noise } from 'noisejs';

@Injectable({
  providedIn: 'root'
})
export class BubblesService {
  private _noise: Noise;

  get noise(): Noise {
    return this._noise;
  }

  constructor() {
    this._noise = new Noise(Math.floor(Math.random() * 64000));
  }
}
