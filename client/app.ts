import 'zone.js/dist/zone';
import 'reflect-metadata';
import {Component, provide} from 'angular2/core';
// import {bootstrap} from 'angular2/platform/browser';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {Parties} from '../collections/parties';
import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import {RequestService} from '../collections/requestService.ts';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {TodoItem} from "../collections/TodoItem.ts";
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';

@Component({
    selector: 'app',
    templateUrl: 'client/app.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [RequestService, HTTP_PROVIDERS]
})

export class App {
    parties: Mongo.Cursor<Party>;
    result: any;
    todoItems: TodoItem[];
    todoJson: string;
    errorMessage: any;

    constructor(private requestService: RequestService) {
        // this.parties = Parties.find();
        Meteor.subscribe('parties', () => {
            this.parties = Parties.find();
        });
        requestService.GetTodoItems().then(res => {
            this.result = JSON.stringify(res.json());
        });
    }

    UpdateTodoItem() {

        this.requestService
            .AddTodoItem(35, "add todo item", true)
            .subscribe(data => {
                this.todoItems = data;
                this.todoJson = JSON.stringify(this.todoItems);
            },
            error => this.errorMessage = <any>error);
    }

}

bootstrap(App, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);