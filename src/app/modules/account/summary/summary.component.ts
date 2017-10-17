import { Component, OnInit } from '@angular/core';
import { UserService, UserInterface } from '../../security/services/user.service';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {

  user: UserInterface;
  money: number;

  constructor(private _User: UserService) { }

  ngOnInit() {
    this.user = this._User.get();
    this.money = this.user.money;
  }

  selectPay(value: number) {
    this.money = this.user.money / value;
  }

  test(value: number) {
    this.money = value;
  }

}
