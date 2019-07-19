import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from "./components/home/home.component";
import { EventListComponent } from "./components/event-list/event-list.component";
import { EventSearchComponent } from "./components/event-search/event-search.component";
import { NgModule } from "@angular/core";
import { AddEventComponent } from "./components/add-event/add-event.component";
import { EditEventComponent } from "./components/edit-event/edit-event.component";

const appRoutes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'events',
        component:EventListComponent
    },
    {
        path:'search',
        component:EventSearchComponent
    },
    {

        path:'add/',
        component:AddEventComponent
    },
    {
        
                path:'edit/:id',
                component:EditEventComponent
            },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    }
]

@NgModule({

    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class EventRouteModule{  
}