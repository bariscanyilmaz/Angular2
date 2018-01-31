import {Component,OnInit} from '@angular/core'
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { EmployeeModel } from '../Model/EmployeeModel';
import { FormPost } from '../Server/form-post.server';



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
    model=new EmployeeModel("barış can","yılmaz",true,"month","default",new Date(1999,2,24),4,"example@example.com");
    //languages=["İngilizce","Türkçe","Almanca","Diğer"];
    languages=[];
    constructor(private service:FormPost) {
        service.getLanguageList().subscribe(data=>this.languages=data.languages,error=>console.log(error));
    }

    submitForm(form:NgForm){
        this.validateLanguage(this.model.language);
        if(this.hasLanguageError){
            return;
        }else{
            this.service.postEmployeeForm(this.model)
            .subscribe(
            (data)=>console.log("Gönderilen Data:"+ data),
            (err)=>console.log("Error:"+err)
            );
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



    pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_ {|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$";
    UpperCaseName(name:string,type:string){
        if(name.length>0){
            if(type=="firstName"){
                this.model.firstName=name.charAt(0).toUpperCase()+name.slice(1);
            }
            else if(type=="lastName"){
                this.model.lastName=name.toUpperCase();
            }
        }else{
            if(type=="firstName"){
                this.model.firstName=name;
            }
            else if(type=="lastName"){
                this.model.lastName=name;
            }
        }
    }

    checkVale(e){
        if(e.which>=48 && e.which<=57){
            return true;
        }else{
            return false;
        }
    }



} 
