import { Component } from '@angular/core';
import { StatisticCard } from '../../ui/statistic-card/statistic-card';
import { DropdownMenu } from "../../../../shared/ui/dropdown-menu/dropdown-menu";

@Component({
  selector: 'app-dashboard',
  imports: [StatisticCard, DropdownMenu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
