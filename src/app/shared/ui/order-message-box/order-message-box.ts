import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-order-message-box',
  imports: [],
  templateUrl: './order-message-box.html',
  styleUrl: './order-message-box.scss',
})
export class OrderMessageBox {
  messageChange = output<string>()
  message = input.required<string>()
}
