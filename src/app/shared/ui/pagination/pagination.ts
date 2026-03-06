import { Component, input, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
})
export class Pagination {
  totalPages = input.required<number>()
  page = signal<number>(0)

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.route.queryParams.subscribe(data => {
      if (/^\d+$/.test(data["page"])) {
        this.page.set(parseInt(data["page"]))
      } else {
        this.page.set(1)
      }
    })
  }

  setPage(page: number) {
    this.router.navigate([], {
      queryParams: {page}
    })
  }

  getPage(index: number) {
    const currentPage = this.page(),
      totalPages = this.totalPages()

    const factor = 3,
      result = (currentPage + index) - factor

    if (
      result > totalPages
      || result < 1
    ) {
      return null
    }

    return result
  }

  handlePrev() {
    const prev = Math.max(
      1,
      this.page() - 1
    )

    this.setPage(prev)
  }

  handleNext() {
    const next = Math.min(
      this.totalPages(),
      this.page() + 1
    )

    this.setPage(next)
  }
}
