import { CanActivate } from '@angular/router';
import { GuardService } from './GuardService';
import { Injectable } from '@angular/core';
import {Login} from './login';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class GuardActiveComponent implements CanActivate {
    resultList:Observable<Login[]>;
    result:Promise<boolean> | boolean;
    canActivate(){
        this.resultList=this.service.isLogin();
        this.result=this.resultList
        .toPromise()
        .then(data=>data.filter(fill=>fill.name=='barış can yılmaz')[0].login);
        this.result.then(function (result) {
            if(result==false){
                alert('Lütfe login olunuz !!');
            }    
        })
        return this.result;

        
    }
    constructor(private service:GuardService) {

    }


}

