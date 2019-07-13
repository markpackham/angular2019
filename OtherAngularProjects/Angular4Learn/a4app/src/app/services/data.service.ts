import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    //services need to be injected into the constructor
    constructor(public http: Http) {
    }

    getPosts() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            //return all our posts from that urls as JSON
            .map(res => res.json());
    }

}
