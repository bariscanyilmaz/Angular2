import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalLetter'})
export class capitalLetter implements PipeTransform {
    transform(value: any,args:any[]): any {
        var result ='';
        if(value.length>0){
            var words=value.split(" ");
            words.forEach(word => {
                result+=word.charAt(0).toUpperCase()+word.slice(1)+" ";
            });
        }
        return result;
    }
}