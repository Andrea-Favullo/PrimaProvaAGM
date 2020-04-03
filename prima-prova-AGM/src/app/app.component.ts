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

    coloreCerchi = 'green';

    colora(colore: string): boolean{
        
        this.coloreCerchi = colore;
        
        return false;
    }

    icon = {

        url:'./assets/img/gatto.ico',
        scaledSize: {
            width: 60,
            height: 60
        }
    };
    icon1 = {

        url:'./assets/img/rana.ico',
        scaledSize: {
            width: 60,
            height: 60
        }
    };
    icon2 = {

        url:'./assets/img/uccello.ico',
        scaledSize: {
            width: 60,
            height: 60
        }
    };
    icon3 = {

        url:'./assets/img/cane.ico',
        scaledSize: {
            width: 60,
            height: 60
        }
    };

}