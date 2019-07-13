/*This is like the meeting place for everything */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DataService} from "./services/data.service";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";


import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {Data} from "@angular/router";
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
    //the blank path is our homepage
    {path:'', component:UserComponent},
    {path:'about', component:AboutComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
