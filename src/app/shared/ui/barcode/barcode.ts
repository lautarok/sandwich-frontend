import { afterNextRender, Component, ElementRef, input, viewChild } from '@angular/core';
import JsBarcode from 'jsbarcode';

@Component({
	selector: 'app-barcode',
	imports: [],
	templateUrl: './barcode.html',
	styleUrl: './barcode.scss',
})
export class Barcode {
	value = input.required<string>()
	barcode = viewChild.required<ElementRef<SVGElement>>("barcode")

	constructor() {
		afterNextRender(() => {
			JsBarcode(this.barcode().nativeElement, this.value(), {
				width: 1.5,
				height: 40,
				displayValue: false,
				margin: 0, 
				background: "#00000000",
				lineColor: "currentColor"
			})
		})
	}
}
