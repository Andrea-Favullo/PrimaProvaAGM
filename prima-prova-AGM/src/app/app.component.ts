import { Component } from '@angular/core';
import { Point } from 'src/models/point.model';

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
    coloreRettangolo = 'red';

    coloraR(colore: string): boolean{

        this.coloreRettangolo = colore;

        return false;
    }

    colora(colore: string): boolean {

        this.coloreCerchi = colore;

        return false;
    }

    triangle: Array<Point> =
        [
            { lng: 9.1, lat: 45.5 },
            { lng: 9.0, lat: 45.6 },
            { lng: 9.0, lat: 45.4 }
        ]

    rectangle: Array<Point> =
        [
            { lng: 9.5, lat: 45.5 },
            { lng: 9.5, lat: 45.4 },
            { lng: 9.6, lat: 45.4 },
            { lng: 9.6, lat: 45.5 }
        ]

    icon = {

        url: './assets/img/gatto.ico',
        scaledSize: {
            width: 60,
            height: 60
        }
    };
    icon1 = {

        url: './assets/img/rana.ico',
        scaledSize: {
            width: 60,
            height: 60
        }
    };
    icon2 = {

        url: './assets/img/uccello.ico',
        scaledSize: {
            width: 60,
            height: 60
        }
    };
    icon3 = {

        url: './assets/img/cane.ico',
        scaledSize: {
            width: 60,
            height: 60
        }
    };

}