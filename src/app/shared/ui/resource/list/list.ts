import { Component, input } from '@angular/core';
import { Pagination } from '../../pagination/pagination';
import { Table } from "../../table/table";

@Component({
  selector: 'app-list',
  imports: [Pagination, Table],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  thead = input.required<string[]>()
  tbody = input.required<string[][]>()
  page = input.required<number>()
  totalPages = input.required<number>()
}
