import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, NgZone} from 'angular2/core';
// import {bootstrap} from 'angular2/platform/browser';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {Parties} from '../collections/parties';
//import {Mongo} from 'meteor/mongo'
@Component({
    selector: 'app',
    templateUrl: 'client/app.html'
})
export class App {
    parties:Array<Object>;
    //parties: Mongo.Cursor<Object>;
    constructor() {
       // this.parties =  Parties.find();
        this.parties = [
            {
                'name': 'Dubstep-Free Zone',
                'description': 'Can we please just for an evening not listen to dubstep.',
                'location': 'Palo Alto'
            },
            {
                'name': 'All dubstep all the time',
                'description': 'Get it on!',
                'location': 'Palo Alto'
            },
            {
                'name': 'Savage lounging',
                'description': 'Leisure suit required. And only fiercest manners.',
                'location': 'San Francisco'
            }
        ];
        
    }
}

bootstrap(App);