import { afterNextRender, Component, ElementRef, viewChild } from '@angular/core';
import qrcode from "qrcode"

@Component({
  selector: 'app-auth-qr',
  imports: [],
  templateUrl: './auth-qr.html',
  styleUrl: './auth-qr.scss',
})
export class AuthQr {
  qrContainer = viewChild.required<ElementRef<HTMLDivElement>>("qr")

  constructor() {
    afterNextRender(async () => {
      qrcode.toString("link", {
        type: "svg",
        margin: 0,
        color: {
          light: "#0000"
        }
      }, (error, data) => {
        if (error) throw error
        this.qrContainer().nativeElement.innerHTML += data
      })
    })
  }
}
