import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Login} from './login';


@Injectable()
export class GuardService {
    isLogin():Observable<Login[]>{
        return this.http.get('./assets/login.json?v=1.00')
        .map((response:Response)=><Login[]>response.json());
    }
    constructor(private http:Http) { }
}