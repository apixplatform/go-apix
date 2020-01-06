import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-smart-business-why-dashcore',
  templateUrl: './smart-business-why-dashcore.component.html',
  styleUrls: ['./smart-business-why-dashcore.component.scss']
})
export class SmartBusinessWhyDashcoreComponent implements OnInit {
  bars = [
    { label: 'Implementation', value: 73, style: { progress: 'progress-xs' } },
    { label: 'Design', value: 91, style: { progress: 'progress-xs' } },
    { label: 'Beauty', value: 97, style: { progress: 'progress-xs' } },
    { label: 'Branding', value: 61, style: { progress: 'progress-xs' } },
    { label: 'Responsiveness', value: 100, style: { progress: 'progress-xs' } }
  ];

  constructor() {}

  ngOnInit() {}
}
