import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';


@Component({
	selector: "app-create-user",
	templateUrl: "./create-user.component.html"
})
export class CreateUserComponent implements OnInit {
	user: any = {};

	constructor(private _User: UserService) {}

	ngOnInit() {}

	create(event) {
		this._User.create( this.user )
		event.preventDefault();
	}
}
