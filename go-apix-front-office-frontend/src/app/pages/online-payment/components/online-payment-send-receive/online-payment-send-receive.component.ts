import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-online-payment-send-receive',
  templateUrl: './online-payment-send-receive.component.html',
  styleUrls: ['./online-payment-send-receive.component.scss']
})
export class OnlinePaymentSendReceiveComponent implements OnInit {
  cards = [
    { img: 'send', title: 'Send Payments', animation: 'fade-up' },
    { img: 'receive', title: 'Receive Payment', animation: 'fade-up' }
  ];

  constructor() {}

  ngOnInit() {}
}
