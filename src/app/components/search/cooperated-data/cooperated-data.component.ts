import { Component, Input, OnInit } from '@angular/core';
import { Cooperated } from 'src/app/models/cooperated';
import { faUser, faCheckCircle, faExclamationCircle, faCreditCard } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-cooperated-data',
  templateUrl: './cooperated-data.component.html',
  styleUrls: ['./cooperated-data.component.scss']
})
export class CooperatedDataComponent implements OnInit {
  @Input()
  cooperated: Cooperated;

  faUser = faUser;
  faCheck = faCheckCircle;
  faUnchecked = faExclamationCircle;
  faCard = faCreditCard;

  statuses: string[] = ["Regular", "Irregular"]

  constructor() { }

  ngOnInit(): void {
  }

  get getStatus(): string {
    return this.statuses[this.cooperated.Status];
  }

}
