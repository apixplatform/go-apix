import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-automate-social-automation-solution',
  templateUrl: './automate-social-automation-solution.component.html',
  styleUrls: ['./automate-social-automation-solution.component.scss']
})
export class AutomateSocialAutomationSolutionComponent implements OnInit {
  bubbles = [
    { text: 'Accesible option', position: { top: 47, left: 1 } },
    { text: 'Inline editing box', position: { top: 69, left: 61 } },
    { text: 'Interaction options', position: { top: 15, left: 85 } },
    { text: 'Easy search box', position: { top: 7, left: 30 } }
  ];
  constructor() {}

  ngOnInit() {}
}
