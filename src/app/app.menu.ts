import { Component } from '@angular/core';

@Component({
    selector: 'menu',
    templateUrl: './app.menu.component.html',
    moduleId:module.id
    
})
export class MenuComponent{

    title:string='Angular2-TypeScript-VisualStudio-Code Eğitimi';

    constructor() { }

    ngOnInit() { }
}