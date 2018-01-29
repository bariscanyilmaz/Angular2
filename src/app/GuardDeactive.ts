import { CanDeactivate } from '@angular/router';
import { AppComponent } from './app.component';


export class GuardDeactiveComponent implements CanDeactivate<AppComponent> {
    canDeactivate(target:AppComponent){
        if(target.hasChange){
           return window.confirm('Bir değişiklik yaptınız! Çıkmak istediğinize emin misiniz ?');

        }
        return true;
    }
    
}