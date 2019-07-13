import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    //name:string = 'John Doe'
    name: string;
    age: number;
    email: string;
    //we are using the Address interface
    address: Address;
    //an array of strings
    hobbies: string[]
    //can be any single value, eg a number or a string
    hello: any;
    posts:Post[];
    isEdit:boolean = false;


    //put the non core file in our constructor so we can use it
    constructor(private dataService: DataService) {
        console.log('constructor ran');
    }

    ngOnInit() {
        console.log('ngOnInit ran');

        this.name = 'A Name';
        this.age = 90;
        this.email = 'hotmail@hotomail.com';
        this.address = {
            street: '100 Road Street',
            city: 'Bolton',
            state: 'NA'
        }
        this.hobbies = ['Do this', 'Do that', 'To me', 'To you'];
        this.hello = 'hello';

        this.dataService.getPosts().subscribe((posts) => {
            //console.log(posts);
            this.posts = posts;
        });
    }

    onClick() {
        //We can change the name after clicking the button
        this.name = 'Mark Packham';
        //Keep adding the words New Hobby
        this.hobbies.push('New Hobby');
    }

    addHobby(hobby) {
        console.log(hobby);
        this.hobbies.unshift(hobby);
        return false;
    }

    deleteHobby(hobby) {
        for (let i = 0; i < this.hobbies.length; i++) {
            if (this.hobbies[i] == hobby) {
                this.hobbies.splice(i, 1);
            }
        }
    }

    toggleEdit(){
        //If true then set to false and vice versa
        this.isEdit = !this.isEdit;
    }

}

interface Address {
    street: string,
    city: string,
    state: string
}

interface Post{
    id: number,
    title:string,
    body:string,
    userId:number
}