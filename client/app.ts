import 'zone.js/dist/zone';
import 'reflect-metadata';
import {Component} from 'angular2/core';
// import {bootstrap} from 'angular2/platform/browser';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {Parties} from '../collections/parties';
import {Mongo} from 'meteor/mongo';
import {RequestService} from '../collections/requestService';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {TodoItem} from "../collections/TodoItem";

@Component({
    selector: 'app',
    templateUrl: 'client/app.html',
    providers: [RequestService, HTTP_PROVIDERS]
})
export class App {
    parties: Mongo.Cursor<Object>;
    result: any;
    todoItems: TodoItem[];
    todoJson: string;
    errorMessage: any;

    constructor(private requestService: RequestService) {
        this.parties = Parties.find();
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
bootstrap(App);