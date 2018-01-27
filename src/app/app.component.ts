import { Component,OnInit } from '@angular/core';
import { PersonListComponent } from './person-list.component';
import { PersonService, PeopleModel } from './personService';
import {enableProdMode} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';


enableProdMode();
@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`
  <app-person-list *ngFor='let person of this.peoplePromise | async' [personData]='person' (showName)='SayMyName($event)'></app-person-list>
  <br><br><br>
  <span *ngIf="this.PeopleList.length>0">
  Eklenen Toplam Kişi sayısı {{this.PeopleList.length}}
  <input type="button" value="Temizle" (click)="clearList()">
  <ul>
    <li *ngFor='let person of this.PeopleList'>
      <span [ngClass]='person.state'>{{person.name}} {{person.surname}}</span>
    </li>
  </ul>
  </span>
  `,
  styles:[`
    .completed {
      text-decoration:line-through;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'Angular2 Eğitimi';
  people=[];

  peopleObservable:Observable<PeopleModel[]>;
  peoplePromise:Promise<PeopleModel[]>;

  getObservableData(){
    this.peopleObservable=this.personService.getObservable();
  }

  getPromisePeople(){
    this.peoplePromise=this.personService.getPromise();
  }

  constructor(private personService:PersonService){
    this.people=personService.People;
    console.log(this.people);
  }

  PeopleList=[];

  SayMyName($event){
    var people={name:$event.name,surname:$event.surname,state:'completed'}
    if(!this.PeopleList.find(res=>res.name==people.name)){
      this.PeopleList.push(people);
    }
    //console.log(`Say My Name :${$event.name}  Surname:${$event.surname}`)
  }

  clearList(){
    this.PeopleList=[];
  }


  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getObservableData();
    this.getPromisePeople();
  }

}



