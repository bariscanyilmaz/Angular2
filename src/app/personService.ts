import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PersonService {
    People:PeopleModel[];

    // private _people=[];
    // get People(){
    //     return this._people;
    // }

    // set People(allPeople){
    //     this._people;
    // }
    // doit(http:Http):void{
    //     console.log('start');
    //     http.get('./data/data.json').subscribe(response=>this.People=response,
    //         err=>console.log(err),
    //         ()=>console.log('ok')
    //     );
    // }

    getPeople(){
        return this.People;
    }

    getObservable(){
        return this.http.get('./assets/data.json') 
        .map((response:Response)=><PeopleModel[]>response.json())
    }

    getPromise(){
        return this.http.get('./assets/data.json') 
        .map((response:Response)=><PeopleModel[]>response.json())
        .toPromise();
    }

    constructor(private http:Http){
        //adapter design pattern
        // http.get('./assets/data.json') 
        // .map((response:Response)=><PeopleModel[]>response.json())
        // .subscribe(response=>this.People=response,
        //     err=>console.log(err),
        //     ()=>console.log('ok')
        // );
        // this._people=[
        //     {name:'Barış',surname:'Yılmaz'},
        //     {name:'Zeynep',surname:'Uçar'},
        //     {name:'Banu',surname:'Kaçar'},
        //     {name:'Bill',surname:'Gates'},
        //     {name:'Nill',surname:'Gates'},
        //     {name:'Elon',surname:'Musk'}
        // ];

    }

}

export class PeopleModel{
    constructor(name:string,surname:string){
  
    }
  }