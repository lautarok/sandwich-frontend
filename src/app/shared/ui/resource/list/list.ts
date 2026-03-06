import { Component, input } from '@angular/core';
import { Pagination } from '../../pagination/pagination';
import { Table } from "../../table/table";
import { Loader } from '../../loader/loader';

@Component({
  selector: 'app-list',
  imports: [Pagination, Table, Loader],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  thead = input.required<string[]>()
  tbody = input.required<string[][]>()
  totalPages = input.required<number>()
  isLoading = input(false)
}
