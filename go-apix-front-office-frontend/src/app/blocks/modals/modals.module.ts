import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { ModalVideoComponent } from './modal-video/modal-video.component';

@NgModule({
  declarations: [ModalVideoComponent],
  imports: [CommonModule, NgxSmartModalModule.forChild()],
  exports: [ModalVideoComponent]
})
export class ModalsModule {}
