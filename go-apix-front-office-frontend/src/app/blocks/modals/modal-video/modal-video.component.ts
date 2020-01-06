import { Component, OnInit, AfterViewInit, Input, Output } from '@angular/core';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'dc-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.scss']
})
export class ModalVideoComponent implements OnInit, AfterViewInit {
  @Input() identifier: string;
  @Input() videoId: string;
  @Input() size: string = 'md';
  @Input() classes: string = '';

  videoUrl: SafeResourceUrl;
  dialogSize: { width: number; height: number };

  constructor(
    public sanitizer: DomSanitizer,
    public ngxSmartModalService: NgxSmartModalService
  ) {}

  ngOnInit() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.videoId}?rel=0&autoplay=1&controls=0&showinfo=0&ecver=1&enablejsapi=1`
    );
  }

  ngAfterViewInit() {
    this.ngxSmartModalService
      .getModal(this.identifier)
      .onOpen.subscribe((modal: NgxSmartModalComponent) => {
        console.log('Rickroll modal opened!', modal);
      });
  }

  getCustomClass() {
    return `dialog-${this.size} ${this.classes}`;
  }
}
