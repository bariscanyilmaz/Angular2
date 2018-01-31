import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { EmployeeModel} from '../Model/EmployeeModel';
import 'rxjs/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class FormPost {

    constructor(private http:Http) {

    }

    extractData(res:Response){
        let body=res.json();
        return JSON.stringify(body.data)||{"No değer":"No değer"};
    }
    extractLanguage(res:Response){
        let body=res.json();
        return body.data || {};
    }

    handleError(error:any){
        console.log("error:"+error);
        return Observable.throw(error.statusText);

    }

    postEmployeeForm(employee:EmployeeModel):Observable<any>{
        let body=JSON.stringify(employee);
        let header=new Headers({"Content-Type":"applicaton/json"});
        let options=new RequestOptions({headers:header});
        return this.http.post("http://localhost:1453/processForm",body,options)
        .map(this.extractData)
        .catch(this.handleError)

    }

    getLanguageList():Observable<any>{
        return this.http.get("http://localhost:1453/getLanguages")
        .map(this.extractLanguage)
        .catch(this.handleError)
    }


}