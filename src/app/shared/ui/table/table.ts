import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-table',
  imports: [RouterLink],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  thead = input.required<string[]>()
  tbody = input.required<string[][]>()
  withLinks = input(false)
}
