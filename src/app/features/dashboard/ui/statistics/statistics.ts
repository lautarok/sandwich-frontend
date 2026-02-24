import { Component } from '@angular/core';
import { DropdownMenu } from "../../../../shared/ui/dropdown-menu/dropdown-menu";
import { StatisticCard } from "../statistic-card/statistic-card";

@Component({
  selector: 'app-statistics',
  imports: [DropdownMenu, StatisticCard],
  templateUrl: './statistics.html',
  styleUrl: './statistics.scss',
})
export class Statistics {

}
