import { Component, input, output } from '@angular/core';
import { DropdownMenu } from "../../../../shared/ui/dropdown-menu/dropdown-menu";

@Component({
  selector: 'app-order-message-box',
  imports: [DropdownMenu],
  templateUrl: './order-message-box.html',
  styleUrl: './order-message-box.scss',
})
export class OrderMessageBox {
  messageChange = output<string>()
  message = input.required<string>()
  disabled = input<boolean>(false)
}
