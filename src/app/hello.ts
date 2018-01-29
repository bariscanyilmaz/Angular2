import {Component,OnInit} from '@angular/core'
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { EmployeeModel } from '../Model/EmployeeModel';



@Component({
    moduleId:module.id,
    selector:'hello',
    templateUrl:'./hello.html'
})
export class HelloComponent implements OnInit{
    /**
     *
     */
    hasLanguageError:boolean=true;
    model=new EmployeeModel("barış can","yılmaz",true,"month","default");
    languages=["İngilizce","Türkçe","Almanca","Diğer"];
    constructor() {
        
    }

    submitForm(form:NgForm){
        this.validateLanguage(this.model.language);
        if(this.hasLanguageError){
            return;
        }
    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }
    validateLanguage(lang:string){
        if(lang=="default"){
            this.hasLanguageError=true;
        }else{
            this.hasLanguageError=false;
        }
    }

} 
