import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'server mappe';
    //Aggiungiamo latitudine e longitudine di un luogo
    latScuola: number = 45.506738;
    lngScuola: number = 9.190766;

    latCasa: number = 45.155322;
    lngCasa: number = 8.946391;

}