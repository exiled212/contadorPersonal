import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
	private user: UserInterface;

	constructor(private http: Http) {}

	get(): UserInterface {
		return this.user;
	}

	create(newUser: CreateUserInterface): any {
		const url = 'http://localhost:3000/security/user';
		return this.http.post(url, newUser).toPromise()
		.then(res=>{
			console.log(res);
		})
		.catch(err=>{
			console.log(err);
		})
	}
}

export interface UserInterface {
	name?: string;
	email?: string;
	money?: number;
}

export interface CreateUserInterface {
	name: string;
	email: string;
	password: string;
	passwordR: string;
	groupId: number;
}

