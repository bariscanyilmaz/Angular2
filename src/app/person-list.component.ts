import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl:'./person-list.html',
  styles: [`
    Input:focus{
      font-weight:bold;
      color:red;
      outline:none;
    }

    .mousedown{
      border:2px solid green;
    }

  `]
})
export class PersonListComponent implements OnInit {

  @Input('personData') personData; 
  @Output('showName') showName=new EventEmitter();

  strName:string;
  strSurname:string;
  constructor() { 
    //console.log(this.personData);
    //this.strName="Barış Can";
    //this.strSurname="Yılmaz";
   
  }

  public WriteFullName(){
    this.showName.next(this.personData);
  }

  /*
    OnlyNumbers($event)  */
  public OnlyNumbers($event) {
    //console.log($event);
    // if($event.charCode<49 || $event.charCode>57){
    //   return false;
    // }

    if($event.charCode>=49&&$event.charCode<=57){
      return false;
    }
  }

  public CheckMail(email){
    console.log(email);
  }

  ngOnInit() {
    this.strName=this.personData.name;
    this.strSurname=this.personData.surname;
  }

}
