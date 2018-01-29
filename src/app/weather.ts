import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'weather',
    moduleId:module.id,
    template: `<h1>Hava Durumu </h1><br><br><br>
        Bugün İstanbul çok sopuk "-2" derece.
    `    
})
export class WeatherComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}